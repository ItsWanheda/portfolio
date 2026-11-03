import { createHash, randomBytes, randomUUID } from "node:crypto";
import type { CookieOptions, Response, Request } from "express";
import { SignJWT } from "jose";
import { env, cookieSecure } from "./config.js";
import { redis, redisKey } from "./db.js";
import { User, type UserDocument } from "./models/User.js";

export const SESSION_TTL_SECONDS = 60 * 60 * 24 * 30;
const ACCESS_TTL_SECONDS = 60 * 15;
const jwtKey = new TextEncoder().encode(env.JWT_SECRET);

export interface SessionPayload {
  userId: string;
  csrfToken: string;
}

export function readCookie(request: Request, name: string): string | null {
  const header = request.headers.cookie;
  if (!header) return null;
  const item = header.split(";").map((part) => part.trim()).find((part) => part.startsWith(name + "="));
  if (!item) return null;
  try {
    return decodeURIComponent(item.slice(name.length + 1));
  } catch {
    return null;
  }
}

function cookieOptions(maxAge: number): CookieOptions {
  return {
    httpOnly: true,
    secure: cookieSecure,
    sameSite: env.COOKIE_SAME_SITE,
    path: "/",
    maxAge,
  };
}

export function clearAuthCookies(response: Response): void {
  response.clearCookie("access_token", cookieOptions(0));
  response.clearCookie("refresh_token", cookieOptions(0));
}

function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

async function createAccessToken(user: UserDocument, sessionId: string): Promise<string> {
  return new SignJWT({ role: user.role, sid: sessionId })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(String(user._id))
    .setIssuer("itswanheda-api")
    .setAudience("itswanheda-web")
    .setIssuedAt()
    .setExpirationTime(ACCESS_TTL_SECONDS)
    .sign(jwtKey);
}

function setAuthCookies(response: Response, accessToken: string, refreshToken: string): void {
  response.cookie("access_token", accessToken, cookieOptions(ACCESS_TTL_SECONDS * 1000));
  response.cookie("refresh_token", refreshToken, cookieOptions(SESSION_TTL_SECONDS * 1000));
}

export async function issueSession(user: UserDocument, response: Response): Promise<string> {
  const sessionId = randomUUID();
  const csrfToken = randomBytes(32).toString("hex");
  const refreshToken = randomBytes(48).toString("base64url");
  await redis.set(redisKey("session:" + sessionId), JSON.stringify({ userId: String(user._id), csrfToken }), {
    EX: SESSION_TTL_SECONDS,
  });
  await redis.set(redisKey("refresh:" + hashToken(refreshToken)), sessionId, { EX: SESSION_TTL_SECONDS });
  const accessToken = await createAccessToken(user, sessionId);
  setAuthCookies(response, accessToken, refreshToken);
  return csrfToken;
}

export async function rotateSession(
  refreshToken: string,
  response: Response,
): Promise<{ user: UserDocument; csrfToken: string } | null> {
  // GETDEL ensures a refresh token can be consumed only once, even on concurrent requests.
  const sessionId = await redis.getDel(redisKey("refresh:" + hashToken(refreshToken)));
  if (!sessionId) return null;

  const rawSession = await redis.get(redisKey("session:" + sessionId));
  if (!rawSession) return null;

  const session = JSON.parse(rawSession) as SessionPayload;
  const user = await User.findById(session.userId);
  if (!user || !user.isActive) {
    await redis.del(redisKey("session:" + sessionId));
    return null;
  }

  const nextRefreshToken = randomBytes(48).toString("base64url");
  await Promise.all([
    redis.set(redisKey("session:" + sessionId), rawSession, { EX: SESSION_TTL_SECONDS }),
    redis.set(redisKey("refresh:" + hashToken(nextRefreshToken)), sessionId, { EX: SESSION_TTL_SECONDS }),
  ]);
  const accessToken = await createAccessToken(user, sessionId);
  setAuthCookies(response, accessToken, nextRefreshToken);
  return { user, csrfToken: session.csrfToken };
}

export async function revokeSession(request: Request, response: Response): Promise<void> {
  const refreshToken = readCookie(request, "refresh_token");
  if (refreshToken) {
    const sessionId = await redis.getDel(redisKey("refresh:" + hashToken(refreshToken)));
    if (sessionId) await redis.del(redisKey("session:" + sessionId));
  }
  clearAuthCookies(response);
}

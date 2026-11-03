import { timingSafeEqual } from "node:crypto";
import type { NextFunction, Request, Response } from "express";
import { jwtVerify } from "jose";
import { env } from "./config.js";
import { redis } from "./db.js";
import { User, type UserDocument, type UserRole } from "./models/User.js";
import { clearAuthCookies, readCookie, type SessionPayload } from "./security.js";

export interface AuthContext {
  userId: string;
  sessionId: string;
  role: UserRole;
  csrfToken: string;
}

declare global {
  namespace Express {
    interface Request {
      auth?: AuthContext;
      currentUser?: UserDocument;
    }
  }
}

const jwtKey = new TextEncoder().encode(env.JWT_SECRET);

export async function requireAuth(request: Request, response: Response, next: NextFunction): Promise<void> {
  try {
    const token = readCookie(request, "access_token");
    if (!token) {
      response.status(401).json({ error: "Authentication required." });
      return;
    }

    const verified = await jwtVerify(token, jwtKey, {
      issuer: "itswanheda-api",
      audience: "itswanheda-web",
    });
    const userId = verified.payload.sub;
    const sessionId = verified.payload.sid;
    if (typeof userId !== "string" || typeof sessionId !== "string") {
      response.status(401).json({ error: "Invalid session." });
      return;
    }

    const rawSession = await redis.get("session:" + sessionId);
    if (!rawSession) {
      clearAuthCookies(response);
      response.status(401).json({ error: "Session expired. Please sign in again." });
      return;
    }

    const session = JSON.parse(rawSession) as SessionPayload;
    const user = await User.findById(userId);
    if (!user || !user.isActive || session.userId !== userId) {
      await redis.del("session:" + sessionId);
      clearAuthCookies(response);
      response.status(401).json({ error: "This account is not available." });
      return;
    }

    request.currentUser = user;
    request.auth = { userId, sessionId, role: user.role, csrfToken: session.csrfToken };
    next();
  } catch {
    clearAuthCookies(response);
    response.status(401).json({ error: "Your session is invalid or has expired." });
  }
}

export function requireCsrf(request: Request, response: Response, next: NextFunction): void {
  const suppliedBuffer = Buffer.from(request.get("x-csrf-token") || "");
  const expectedBuffer = Buffer.from(request.auth?.csrfToken || "");
  const valid =
    suppliedBuffer.length === expectedBuffer.length &&
    expectedBuffer.length > 0 &&
    timingSafeEqual(suppliedBuffer, expectedBuffer);

  if (!valid) {
    response.status(403).json({ error: "Request verification failed. Refresh the page and try again." });
    return;
  }
  next();
}

export function requireAdmin(request: Request, response: Response, next: NextFunction): void {
  if (request.currentUser?.role !== "admin") {
    response.status(403).json({ error: "Administrator access is required." });
    return;
  }
  next();
}

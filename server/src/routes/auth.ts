import { Router } from "express";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { User } from "../models/User.js";
import { issueSession, readCookie, revokeSession, rotateSession, clearAuthCookies } from "../security.js";
import { requireAuth } from "../middleware.js";
import { redisRateLimit } from "../rate-limit.js";

const router = Router();
const authLimiter = redisRateLimit("auth", 12, 15 * 60);

const registerSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(254),
  password: z.string().min(12).max(72),
});
const loginSchema = z.object({
  email: z.string().trim().email().max(254),
  password: z.string().min(1).max(72),
});

function safeUser(user: InstanceType<typeof User>) {
  return {
    id: String(user._id),
    name: user.name,
    email: user.email,
    role: user.role,
    bio: user.bio,
    avatarUrl: user.avatarUrl,
    createdAt: user.createdAt,
  };
}

router.post("/register", authLimiter, async (request, response) => {
  const parsed = registerSchema.safeParse(request.body);
  if (!parsed.success) {
    response.status(400).json({ error: "Please provide a valid name, email, and password of at least 12 characters." });
    return;
  }

  const email = parsed.data.email.toLowerCase();
  if (await User.exists({ email })) {
    response.status(409).json({ error: "An account with this email already exists." });
    return;
  }

  try {
    const passwordHash = await bcrypt.hash(parsed.data.password, 12);
    const user = await User.create({ name: parsed.data.name, email, passwordHash, role: "member" });
    const csrfToken = await issueSession(user, response);
    response.status(201).json({ user: safeUser(user), csrfToken });
  } catch (error) {
    if (typeof error === "object" && error !== null && "code" in error && error.code === 11000) {
      response.status(409).json({ error: "An account with this email already exists." });
      return;
    }
    throw error;
  }
});

router.post("/login", authLimiter, async (request, response) => {
  const parsed = loginSchema.safeParse(request.body);
  if (!parsed.success) {
    response.status(400).json({ error: "Please provide a valid email and password." });
    return;
  }

  const user = await User.findOne({ email: parsed.data.email.toLowerCase() }).select("+passwordHash");
  const passwordMatches = user ? await bcrypt.compare(parsed.data.password, user.passwordHash) : false;
  if (!user || !passwordMatches || !user.isActive) {
    response.status(401).json({ error: "The email or password is incorrect." });
    return;
  }

  const csrfToken = await issueSession(user, response);
  response.status(200).json({ user: safeUser(user), csrfToken });
});

router.post("/refresh", async (request, response) => {
  const refreshToken = readCookie(request, "refresh_token");
  if (!refreshToken) {
    clearAuthCookies(response);
    response.status(401).json({ error: "A valid session is required." });
    return;
  }

  const rotated = await rotateSession(refreshToken, response);
  if (!rotated) {
    await revokeSession(request, response);
    response.status(401).json({ error: "Session expired. Please sign in again." });
    return;
  }

  response.status(200).json({ user: safeUser(rotated.user), csrfToken: rotated.csrfToken });
});

router.post("/logout", async (request, response) => {
  await revokeSession(request, response);
  response.status(200).json({ success: true });
});

router.get("/me", requireAuth, (request, response) => {
  response.status(200).json({
    user: safeUser(request.currentUser!),
    csrfToken: request.auth!.csrfToken,
  });
});

export default router;

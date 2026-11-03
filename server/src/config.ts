import "dotenv/config";
import { z } from "zod";

const schema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().int().min(1).max(65535).default(4000),
  MONGODB_URI: z.string().min(1),
  REDIS_URL: z.string().min(1),
  WEB_ORIGIN: z.string().url().default("http://localhost:3000"),
  JWT_SECRET: z.string().min(32),
  COOKIE_SECURE: z.enum(["true", "false"]).optional(),
  COOKIE_SAME_SITE: z.enum(["lax", "strict", "none"]).default("lax"),
});

export const env = schema.parse(process.env);
export const isProduction = env.NODE_ENV === "production";
export const cookieSecure = env.COOKIE_SECURE
  ? env.COOKIE_SECURE === "true"
  : isProduction;

if (env.COOKIE_SAME_SITE === "none" && !cookieSecure) {
  throw new Error("COOKIE_SAME_SITE=none requires COOKIE_SECURE=true.");
}

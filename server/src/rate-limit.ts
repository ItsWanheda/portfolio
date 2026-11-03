import type { RequestHandler } from "express";
import { redis, redisKey } from "./db.js";

export function redisRateLimit(
  namespace: string,
  limit: number,
  windowSeconds: number,
): RequestHandler {
  return (request, response, next) => {
    void (async () => {
      const now = Date.now();
      const windowSizeMs = windowSeconds * 1000;
      const windowId = Math.floor(now / windowSizeMs);
      const resetInSeconds = Math.max(1, Math.ceil(((windowId + 1) * windowSizeMs - now) / 1000));
      const clientKey = request.ip || request.socket.remoteAddress || "unknown";
      const key = redisKey([
        "rate",
        namespace,
        windowId,
        Buffer.from(clientKey).toString("base64url"),
      ].join(":"));

      try {
        const count = await redis.incr(key);
        if (count === 1) {
          await redis.expire(key, windowSeconds * 2);
        }

        response.setHeader("RateLimit-Limit", String(limit));
        response.setHeader("RateLimit-Remaining", String(Math.max(0, limit - count)));
        response.setHeader("RateLimit-Reset", String(resetInSeconds));

        if (count > limit) {
          response.setHeader("Retry-After", String(resetInSeconds));
          response.status(429).json({
            error: "Too many requests. Please try again later.",
          });
          return;
        }

        next();
      } catch (error) {
        // Redis is a required dependency for distributed abuse controls.
        console.error("[rate-limit] Redis check failed", error);
        response.status(503).json({
          error: "This service is temporarily unavailable. Please try again shortly.",
        });
      }
    })();
  };
}

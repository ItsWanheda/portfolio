import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import { env } from "./config.js";
import { redis, ensureDependencies } from "./db.js";
import { redisRateLimit } from "./rate-limit.js";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import adminRoutes from "./routes/admin.js";
import userRoutes from "./routes/users.js";

export const app = express();
app.disable("x-powered-by");
app.set("trust proxy", 1);
const helmetMiddleware = helmet as unknown as () => express.RequestHandler;
app.use(helmetMiddleware());
app.use(cors({
  origin: env.WEB_ORIGIN,
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "X-CSRF-Token"],
}));
app.use(express.json({ limit: "1mb", strict: true }));

app.use((request, response, next) => {
  const isMutation = ["POST", "PUT", "PATCH", "DELETE"].includes(request.method);
  const origin = request.get("origin");
  if (isMutation && origin !== env.WEB_ORIGIN) {
    response.status(403).json({ error: "This origin is not allowed to modify account data." });
    return;
  }
  next();
});

app.use("/api/v1", async (_request, response, next) => {
  try {
    await ensureDependencies();
    next();
  } catch (error) {
    console.error("[api] required dependencies are unavailable", error);
    response.status(503).json({
      error: "This service is temporarily unavailable. Please try again shortly.",
    });
  }
});
app.use("/api/v1", redisRateLimit("api", 120, 60));

app.get("/health/live", (_request, response) => {
  response.status(200).json({ status: "ok" });
});

app.get("/health/ready", async (_request, response) => {
  try {
    await ensureDependencies();
  } catch {
    // Report dependency state below without leaking provider details.
  }
  const databaseReady = mongoose.connection.readyState === 1;
  const redisReady = redis.isReady;
  const ready = databaseReady && redisReady;
  response.status(ready ? 200 : 503).json({
    status: ready ? "ready" : "not_ready",
    database: databaseReady ? "connected" : "disconnected",
    redis: redisReady ? "connected" : "disconnected",
  });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/users", userRoutes);

app.use((_request, response) => {
  response.status(404).json({ error: "Route not found." });
});

app.use((error: unknown, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  console.error("[api] unhandled request error", error);
  response.status(500).json({ error: "An unexpected server error occurred." });
});


export default app;

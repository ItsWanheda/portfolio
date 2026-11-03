import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoose from "mongoose";
import { env } from "./config.js";
import { redis } from "./db.js";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import adminRoutes from "./routes/admin.js";
import userRoutes from "./routes/users.js";

export const app = express();
app.disable("x-powered-by");
app.set("trust proxy", 1);
app.use(helmet());
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
  // Browser-origin mutations must come from the configured frontend. The CSRF token
  // adds a second independent check for every authenticated write operation.
  if (isMutation && origin !== env.WEB_ORIGIN) {
    response.status(403).json({ error: "This origin is not allowed to modify account data." });
    return;
  }
  next();
});

const apiLimiter = rateLimit({
  windowMs: 60_000,
  limit: 120,
  standardHeaders: "draft-8",
  legacyHeaders: false,
});
app.use("/api/v1", apiLimiter);

app.get("/health/live", (_request, response) => {
  response.status(200).json({ status: "ok" });
});

app.get("/health/ready", (_request, response) => {
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

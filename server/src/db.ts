import mongoose from "mongoose";
import { createClient } from "redis";
import { env } from "./config.js";

export const redis = createClient({ url: env.REDIS_URL });

redis.on("error", (error) => {
  console.error("[redis] connection error", error);
});

export async function connectDependencies(): Promise<void> {
  await mongoose.connect(env.MONGODB_URI, {
    serverSelectionTimeoutMS: 10_000,
    maxPoolSize: 10,
  });
  await redis.connect();
  console.info("[startup] MongoDB and Redis are connected.");
}

export async function closeDependencies(): Promise<void> {
  await Promise.allSettled([mongoose.disconnect(), redis.quit()]);
}

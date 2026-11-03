import mongoose from "mongoose";
import { createClient } from "redis";
import { env } from "./config.js";

export const redis = createClient({ url: env.REDIS_URL });

redis.on("error", (error) => {
  console.error("[redis] connection error", error);
});

export async function connectDependencies(): Promise<void> {
  const state = mongoose.connection.readyState;
  if (state === 0 || state === 3) {
    await mongoose.connect(env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10_000,
      maxPoolSize: 10,
    });
  } else if (state === 2) {
    await mongoose.connection.asPromise();
  }

  if (!redis.isOpen) {
    await redis.connect();
  }
  if (!redis.isReady) {
    throw new Error("Redis connection is not ready yet.");
  }
}

export async function closeDependencies(): Promise<void> {
  await Promise.allSettled([
    mongoose.disconnect(),
    redis.isOpen ? redis.quit() : Promise.resolve(),
  ]);
}

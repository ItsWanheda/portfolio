import mongoose from "mongoose";
import { createClient } from "redis";
import { env } from "./config.js";

export const redis = createClient(env.REDIS_URL ? { url: env.REDIS_URL } : {});

export function redisKey(key: string): string {
  return env.REDIS_KEY_PREFIX + key;
}

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

  if (!env.REDIS_URL) {
    throw new Error("REDIS_URL is not configured.");
  }

  if (!redis.isOpen) {
    await redis.connect();
  }
  if (!redis.isReady) {
    throw new Error("Redis connection is not ready yet.");
  }
}

let dependencyConnection: Promise<void> | undefined;

export async function ensureDependencies(): Promise<void> {
  if (mongoose.connection.readyState === 1 && redis.isReady) return;
  if (!dependencyConnection) {
    dependencyConnection = connectDependencies().catch((error: unknown) => {
      dependencyConnection = undefined;
      throw error;
    });
  }
  await dependencyConnection;
}

export async function closeDependencies(): Promise<void> {
  await Promise.allSettled([
    mongoose.disconnect(),
    redis.isOpen ? redis.quit() : Promise.resolve(),
  ]);
}

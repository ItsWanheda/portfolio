import { app } from "./app.js";
import { env } from "./config.js";
import mongoose from "mongoose";
import { closeDependencies, connectDependencies, redis } from "./db.js";

let server: ReturnType<typeof app.listen> | undefined;

function sleep(milliseconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function connectWithRetry(): Promise<void> {
  let retryDelay = 1_000;

  while (server) {
    try {
      await connectDependencies();
      if (mongoose.connection.readyState === 1 && redis.isReady) {
        console.info("[startup] MongoDB and Redis are connected.");
        return;
      }
    } catch (error) {
      console.error("[startup] Required dependencies are not ready; retrying.", error);
    }

    await sleep(retryDelay);
    retryDelay = Math.min(retryDelay * 2, 30_000);
  }
}

async function start(): Promise<void> {
  // Start HTTP first so liveness/readiness checks remain reachable during outages.
  server = app.listen(env.PORT, "0.0.0.0", () => {
    console.info("[startup] API listening on port " + env.PORT);
  });
  void connectWithRetry();
}

async function shutdown(signal: string): Promise<void> {
  console.info("[shutdown] " + signal + " received.");
  const activeServer = server;
  server = undefined;

  if (activeServer) {
    await new Promise<void>((resolve) => activeServer.close(() => resolve()));
  }
  await closeDependencies();
  process.exit(0);
}

process.on("SIGTERM", () => void shutdown("SIGTERM"));
process.on("SIGINT", () => void shutdown("SIGINT"));

start().catch(async (error: unknown) => {
  console.error("[startup] API could not start.", error);
  await closeDependencies();
  process.exit(1);
});

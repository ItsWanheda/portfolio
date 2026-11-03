import { app } from "./app.js";
import { env } from "./config.js";
import { closeDependencies, connectDependencies } from "./db.js";

let server: ReturnType<typeof app.listen> | undefined;

async function start(): Promise<void> {
  await connectDependencies();
  server = app.listen(env.PORT, "0.0.0.0", () => {
    console.info("[startup] API listening on port " + env.PORT);
  });
}

async function shutdown(signal: string): Promise<void> {
  console.info("[shutdown] " + signal + " received.");
  if (server) {
    await new Promise<void>((resolve) => server!.close(() => resolve()));
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

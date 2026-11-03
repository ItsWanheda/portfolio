import bcrypt from "bcryptjs";
import { connectDependencies, closeDependencies } from "../db.js";
import { User } from "../models/User.js";

async function main(): Promise<void> {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;
  const name = process.env.ADMIN_NAME?.trim() || "Site Administrator";

  if (!email || !password || password.length < 16 || password.length > 72) {
    throw new Error("Set ADMIN_EMAIL and a unique ADMIN_PASSWORD between 16 and 72 characters before running this command.");
  }

  await connectDependencies();
  if (await User.exists({ role: "admin" })) {
    throw new Error("An administrator already exists. Use the authenticated admin panel to manage accounts.");
  }
  if (await User.exists({ email })) {
    throw new Error("That email is already registered as a member. Use another administrator email.");
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const user = await User.create({ name, email, passwordHash, role: "admin" });
  console.info("Administrator created: " + user.email);
}

main()
  .catch((error: unknown) => {
    console.error("[admin:create]", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await closeDependencies();
  });

import type { Metadata } from "next";
import { AuthForm } from "../auth/AuthForm";

export const metadata: Metadata = { title: "Member sign in" };

export default function LoginPage() {
  return <AuthForm mode="login" />;
}

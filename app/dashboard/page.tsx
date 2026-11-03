import type { Metadata } from "next";
import { DashboardClient } from "./DashboardClient";

export const metadata: Metadata = { title: "Member space" };

export default function DashboardPage() {
  return <DashboardClient />;
}

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="auth-wrap">
      <section className="auth-card text-center">
        <div className="page-eyebrow">404 / SIGNAL LOST</div>
        <h1 className="display-1 fw-bold">404</h1>
        <p>This route does not exist in the current map.</p>
        <Link href="/" className="button-primary"><ArrowLeft size={15} /> Return to the platform</Link>
      </section>
    </main>
  );
}

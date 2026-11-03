"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand-lockup" aria-label="ItsWanheda home" onClick={closeMenu}>
          <span className="brand-mark">W<span>.</span></span>
          <span className="brand-name">ITS<span>WANHEDA</span></span>
        </Link>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={open ? "primary-nav is-open" : "primary-nav"} aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href || pathname.startsWith(link.href + "/") ? "nav-link active" : "nav-link"}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
          <Link href="/login" className="nav-account" onClick={closeMenu}>
            <span>Member access</span>
            <ArrowUpRight size={15} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

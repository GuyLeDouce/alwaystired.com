"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
  { href: "/mission", label: "Mission" },
  { href: "/donate", label: "Donate" },
  { href: "/community", label: "Community" },
  { href: "/plans", label: "Plans" },
  { href: "/links", label: "Links" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <Link className="brand" href="/">
          <span className="brand-mark">AT</span>
          <span className="brand-copy">
            Always Tired
            <br />
            NFTs
          </span>
        </Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              className={pathname === item.href ? "active" : undefined}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link className="nav-cta" href="/discord">
          Discord
        </Link>
      </nav>
    </header>
  );
}

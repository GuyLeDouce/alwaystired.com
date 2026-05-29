import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
  external?: boolean;
};

export function ButtonLink({
  children,
  className = "",
  href,
  external,
}: ButtonLinkProps) {
  if (external) {
    return (
      <a
        className={`button ${className}`}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={`button ${className}`} href={href}>
      {children}
    </Link>
  );
}

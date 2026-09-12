"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="site-container flex items-center justify-between py-6">
      <Link href="/" className="font-crimson text-lg font-medium">
        Anamika Aggarwal
      </Link>
      <ThemeToggle />
    </header>
  );
}

"use client";

import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <div className="site-container flex items-center justify-end py-6">
      <a href="/llms.txt" className="sr-only">
        Machine-readable profile
      </a>
      <ThemeToggle />
    </div>
  );
}

"use client";

import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="site-container flex items-center justify-end py-6">
      <ThemeToggle />
    </header>
  );
}

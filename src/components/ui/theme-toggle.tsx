"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function SunIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <path
        d="M12 4V2m0 20v-2m8-8h2M2 12h2m11.314 5.314 1.414 1.414M5.272 5.272l1.414 1.414m0 10.628-1.414 1.414m10.628-10.628 1.414-1.414M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <path
        d="M21 12.8A9 9 0 1 1 11.2 3c-.1.5-.2 1-.2 1.6 0 4.6 3.8 8.4 8.4 8.4.6 0 1.1-.1 1.6-.2Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="surface-card inline-flex min-h-11 items-center gap-3 rounded-full border border-border/80 px-3 py-2 text-foreground-muted transition hover:text-foreground"
    >
      <SunIcon />
      <span className="relative inline-flex h-6 w-12 items-center rounded-full border border-border bg-background-muted px-1">
        <span
          className={`h-4 w-4 rounded-full bg-primary transition-transform duration-200 ${
            isDark ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </span>
      <MoonIcon />
      <span className="type-label hidden sm:inline text-foreground-muted">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}

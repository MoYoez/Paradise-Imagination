"use client";

import { useTheme } from "@/contexts/ThemeContext";

export function EntranceWhiteOverlay() {
  const { hasCompletedEntrance } = useTheme();

  return (
    <div
      className={`entrance-white-overlay ${hasCompletedEntrance ? "entrance-white-overlay--done" : ""}`}
      aria-hidden
    />
  );
}

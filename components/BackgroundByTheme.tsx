"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import type { ThemeId } from "@/lib/theme-config";

export function BackgroundByTheme() {
  const { activeTheme } = useTheme();
  const [previousTheme, setPreviousTheme] = useState<ThemeId>(activeTheme);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (activeTheme !== previousTheme) {
      queueMicrotask(() => {
      setIsTransitioning(true);
      });
      const t = setTimeout(() => {
        setPreviousTheme(activeTheme);
        setIsTransitioning(false);
      }, 2500);
      return () => clearTimeout(t);
    }
  }, [activeTheme, previousTheme]);

  return (
    <div
      className="background-by-theme"
      data-theme={activeTheme}
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    >
      <div className="atmosphere" />
      <div
        className="theme-overlay"
        data-theme={previousTheme}
        style={{ opacity: isTransitioning ? 0 : 1 }}
        aria-hidden
      />
      <div
        className="theme-overlay"
        data-theme={activeTheme}
        style={{ opacity: isTransitioning ? 1 : 0 }}
        aria-hidden
      />
    </div>
  );
}

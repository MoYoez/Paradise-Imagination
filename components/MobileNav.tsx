"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { THEME_IDS, THEME_PASTEL, getThemeById } from "@/lib/theme-config";

export function MobileNav() {
  const { activeTheme, requestThemeChange, isTransitioning } = useTheme();

  return (
    <nav className="mobile-nav flex items-center justify-center gap-2 py-3 px-4 bg-[var(--color-veil)] rounded-[var(--radius-md)] shadow-[var(--shadow-diffuse)] mx-4 mb-4">
      {THEME_IDS.map((id) => {
        const isActive = id === activeTheme;
        return (
          <button
            key={id}
            type="button"
            aria-label={getThemeById(id).section}
            aria-pressed={isActive}
            disabled={isTransitioning}
            onClick={() => requestThemeChange(id, true)}
            className={`w-7 h-7 rounded-full border-2 shrink-0 transition-[transform,opacity,background,border-color] duration-[var(--duration-theme-ui)] ease-[var(--ease-out)] ${isActive ? "opacity-100 border-black/15" : "opacity-80 border-transparent"} ${isTransitioning ? "cursor-not-allowed" : "cursor-pointer"}`}
            style={{
              background: THEME_PASTEL[id],
              transition: "transform 0.2s var(--ease-out), opacity var(--duration-theme-ui) var(--ease-out), background var(--duration-theme-ui) var(--ease-out), border-color var(--duration-theme-ui) var(--ease-out)",
            }}
          />
        );
      })}
    </nav>
  );
}

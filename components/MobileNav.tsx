"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { THEME_IDS, THEME_PASTEL, getThemeById } from "@/lib/theme-config";

export function MobileNav() {
  const { activeTheme, requestThemeChange, isTransitioning } = useTheme();

  return (
    <nav
      className="mobile-nav"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        padding: "0.75rem 1rem",
        background: "var(--color-veil)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-diffuse)",
        margin: "0 1rem 1rem",
      }}
    >
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
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: THEME_PASTEL[id],
              border: isActive ? "2px solid rgba(0,0,0,0.15)" : "none",
              opacity: isActive ? 1 : 0.8,
              cursor: isTransitioning ? "not-allowed" : "pointer",
              transition: "transform 0.2s var(--ease-out), opacity var(--duration-theme-ui) var(--ease-out), background var(--duration-theme-ui) var(--ease-out), border-color var(--duration-theme-ui) var(--ease-out)",
            }}
          />
        );
      })}
    </nav>
  );
}

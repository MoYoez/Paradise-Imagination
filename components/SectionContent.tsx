"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { getThemeById, THEME_PASTEL } from "@/lib/theme-config";
import { getSectionPage } from "@/content";
import { ConsoleLike } from "@/components/ui/ConsoleLike";

export function SectionContent() {
  const { activeTheme } = useTheme();
  const theme = getThemeById(activeTheme);
  const page = getSectionPage(activeTheme);

  return (
    <div
      key={activeTheme}
      style={{
        animation: "section-content-fade 0.4s var(--ease-out) forwards",
      }}
    >
      <h2 style={{ margin: "0 0 0.5rem", fontSize: "1.25rem", fontWeight: 600 }}>
        {theme.section}
      </h2>
      <p style={{ margin: 0, fontSize: "0.9375rem", fontWeight: 500, color: THEME_PASTEL[activeTheme] }}>
        {page.imageryConsoleLike ? (
          <ConsoleLike prompt="$ " style={{ color: THEME_PASTEL[activeTheme] }}>
            {page.imagery}
          </ConsoleLike>
        ) : (
          page.imagery
        )}
      </p>
      <div
        className="section-content-html"
        style={{
          marginTop: "1rem",
          fontSize: "0.875rem",
          lineHeight: 1.6,
          color: "#000",
        }}
      >
        <page.Content />
      </div>
    </div>
  );
}

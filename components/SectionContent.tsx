"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { getThemeById, THEME_PASTEL, THEME_IDS } from "@/lib/theme-config";
import { getSectionPage } from "@/content";
import { ConsoleLike } from "@/components/ui/ConsoleLike";

export function SectionContent() {
  const { activeTheme } = useTheme();
  const theme = getThemeById(activeTheme);
  const page = getSectionPage(activeTheme);

  return (
    <div
      style={{ animation: "section-content-fade 0.4s var(--ease-out) forwards" }}
    >
      <h2 className="m-0 mb-2 text-xl font-semibold">
        {theme.section}
      </h2>
      <p className="m-0 text-[0.9375rem] font-medium" style={{ color: THEME_PASTEL[activeTheme] }}>
        {page.imageryConsoleLike ? (
          <ConsoleLike prompt="$ " style={{ color: THEME_PASTEL[activeTheme] }}>
            {page.imagery}
          </ConsoleLike>
        ) : (
          page.imagery
        )}
      </p>
      <div className="section-content-html mt-4 text-sm leading-[1.6] text-black">
        {THEME_IDS.map((id) => {
          const sectionPage = getSectionPage(id);
          const Content = sectionPage.Content;
          return (
            <div
              key={id}
              hidden={activeTheme !== id}
              aria-hidden={activeTheme !== id}
            >
              <Content />
            </div>
          );
        })}
      </div>
    </div>
  );
}

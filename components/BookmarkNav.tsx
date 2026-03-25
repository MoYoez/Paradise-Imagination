"use client";

import { useCallback } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { THEME_IDS, THEME_PASTEL, getThemeById, getThemeIndex } from "@/lib/theme-config";
import type { ThemeId } from "@/lib/theme-config";

export function BookmarkNav() {
  const { activeTheme, requestThemeChange, isTransitioning } = useTheme();
  const activeIndex = getThemeIndex(activeTheme);

  const handleSelect = useCallback(
    (themeId: ThemeId) => {
      if (isTransitioning || themeId === activeTheme) return;
      requestThemeChange(themeId, false, 0);
    },
    [isTransitioning, activeTheme, requestThemeChange]
  );

  return (
    <nav className="bookmark-nav" role="tablist" aria-label="内容导航">
      <div className="bookmark-nav__container">
        {THEME_IDS.map((themeId, index) => {
          const theme = getThemeById(themeId);
          const isActive = themeId === activeTheme;
          const distance = Math.abs(index - activeIndex);
          
          return (
            <button
              key={themeId}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={theme.section}
              className={`bookmark-tab ${isActive ? "bookmark-tab--active" : ""}`}
              disabled={isTransitioning}
              onClick={() => handleSelect(themeId)}
              style={{
                "--bookmark-color": THEME_PASTEL[themeId],
                "--bookmark-index": index,
                "--bookmark-distance": distance,
              } as React.CSSProperties}
            >
              <span className="bookmark-tab__label">{theme.section}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

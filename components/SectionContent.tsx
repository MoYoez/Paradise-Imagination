"use client";

import { useRef, useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { getThemeById, THEME_PASTEL, THEME_IDS, getThemeIndex } from "@/lib/theme-config";
import { getSectionPage } from "@/content";
import { ConsoleLike } from "@/components/ui/ConsoleLike";

export function SectionContent() {
  const { activeTheme, slideDirection, isTransitioning } = useTheme();
  const theme = getThemeById(activeTheme);
  const page = getSectionPage(activeTheme);
  const [displayTheme, setDisplayTheme] = useState(activeTheme);
  const [isAnimating, setIsAnimating] = useState(false);
  const prevThemeRef = useRef(activeTheme);
  
  useEffect(() => {
    if (activeTheme !== prevThemeRef.current) {
      setIsAnimating(true);
      // Small delay to allow exit animation, then update display
      const timer = setTimeout(() => {
        setDisplayTheme(activeTheme);
        prevThemeRef.current = activeTheme;
      }, 150);
      
      // Reset animation state after full animation
      const resetTimer = setTimeout(() => {
        setIsAnimating(false);
      }, 400);
      
      return () => {
        clearTimeout(timer);
        clearTimeout(resetTimer);
      };
    }
  }, [activeTheme]);

  const displayThemeData = getThemeById(displayTheme);
  const displayPage = getSectionPage(displayTheme);
  
  // Determine animation class
  const getAnimationClass = () => {
    if (!isAnimating) return "";
    if (slideDirection === "left") return "slide-out-left";
    if (slideDirection === "right") return "slide-out-right";
    return "";
  };

  return (
    <div className="section-content-wrapper">
      <div
        key={displayTheme}
        className={`section-content-slide ${getAnimationClass()}`}
      >
        <h2 className="m-0 mb-2 text-xl font-semibold">
          {displayThemeData.section}
        </h2>
        <p className="m-0 text-[0.9375rem] font-medium" style={{ color: THEME_PASTEL[displayTheme] }}>
          {displayPage.imageryConsoleLike ? (
            <ConsoleLike prompt="$ " style={{ color: THEME_PASTEL[displayTheme] }}>
              {displayPage.imagery}
            </ConsoleLike>
          ) : (
            displayPage.imagery
          )}
        </p>
        <div className="section-content-html mt-4 text-sm leading-[1.6] text-black">
          {THEME_IDS.map((id) => {
            const sectionPage = getSectionPage(id);
            const Content = sectionPage.Content;
            return (
              <div
                key={id}
                hidden={displayTheme !== id}
                aria-hidden={displayTheme !== id}
              >
                <Content />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

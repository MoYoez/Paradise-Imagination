"use client";

import { ContentCard } from "@/components/ContentCard";
import { RainbowWheel } from "@/components/RainbowWheel";
import { MobileNav } from "@/components/MobileNav";
import { SectionContent } from "@/components/SectionContent";
import { EntranceEffect } from "@/components/EntranceEffect";
import { useTheme } from "@/contexts/ThemeContext";

export function Stage() {
  const { hasCompletedEntrance } = useTheme();

  return (
    <>
      <EntranceEffect />
      <div
        className={`stage ${hasCompletedEntrance ? "stage--ready" : "stage--entrance"}`}
        style={stageStyle}
      >
        <div className="stage-card-area" style={cardAreaStyle}>
          <ContentCard>
            <SectionContent />
          </ContentCard>
        </div>
        <div className="stage-wheel" style={wheelAreaStyle}>
          <RainbowWheel />
        </div>
        <div className="stage-mobile-nav">
          <MobileNav />
        </div>
      </div>
    </>
  );
}

const stageStyle: React.CSSProperties = {
  position: "relative",
  zIndex: 1,
  width: "100%",
  height: "100vh",
  minHeight: "100dvh",
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gridTemplateRows: "1fr",
  alignItems: "center",
  justifyItems: "center",
  padding: "2rem",
  boxSizing: "border-box",
  gap: "1rem",
};

const wheelAreaStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: "100%",
  justifySelf: "start",
};

const cardAreaStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: "min(60vw, 100%)",
  height: "100%",
  minHeight: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1.5rem 0",
  justifySelf: "center",
};

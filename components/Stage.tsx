"use client";

import { type ReactNode } from "react";
import { ContentCard } from "@/components/ui/ContentCard";
import { RainbowWheel } from "@/components/RainbowWheel";
import { MobileNav } from "@/components/MobileNav";
import { EntranceEffect } from "@/components/EntranceEffect";
import { useTheme } from "@/contexts/ThemeContext";

export type StageProps = {
  /** Main content to display inside the stage card. Pass in whatever you want to show. */
  children: ReactNode;
  /** Content for the wheel area. Defaults to <RainbowWheel /> when not provided. */
  wheel?: ReactNode;
  /** Content for the mobile nav area. Defaults to <MobileNav /> when not provided. */
  mobileNav?: ReactNode;
};

export function Stage({ children, wheel, mobileNav }: StageProps) {
  const { hasCompletedEntrance } = useTheme();

  return (
    <>
      <EntranceEffect />
      <div
        className={`stage ${hasCompletedEntrance ? "stage--ready" : "stage--entrance"}`}
        style={stageStyle}
      >
        <div className="stage-card-area" style={cardAreaStyle}>
          <ContentCard>{children}</ContentCard>
        </div>
        <div className="stage-wheel" style={wheelAreaStyle}>
          {wheel ?? <RainbowWheel />}
        </div>
        <div className="stage-mobile-nav">
          {mobileNav ?? <MobileNav />}
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
  padding: "2.5rem 3rem",
  boxSizing: "border-box",
  gap: "2rem",
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
  maxWidth: "min(80vw, 100%)",
  height: "100%",
  minHeight: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1.5rem 0",
  justifySelf: "center",
};

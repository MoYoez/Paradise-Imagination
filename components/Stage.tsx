"use client";

import { useEffect, useState } from "react";
import { ContentCard } from "@/components/ContentCard";
import { RainbowWheel } from "@/components/RainbowWheel";
import { MobileNav } from "@/components/MobileNav";
import { SectionContent } from "@/components/SectionContent";
import { EntranceEffect } from "@/components/EntranceEffect";
import { IframeEmbed } from "@/components/IframeEmbed";
import { useTheme } from "@/contexts/ThemeContext";

const NETEASE_PLAYER_SRC =
  "https://music.163.com/outchain/player?type=2&id=2137574903&auto=0&height=66";

export function Stage() {
  const { hasCompletedEntrance, activeTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

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
            <div
              className="maple-player-wrap"
              style={{
                display: activeTheme === "maple" ? "block" : "none",
                marginTop: "1rem",
                width: "100%",
                maxWidth: "100%",
              }}
              aria-hidden={activeTheme !== "maple"}
            >
              <div
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  marginBottom: "0.375rem",
                  color: "var(--text-secondary, #555)",
                }}
              >
                Music Player
              </div>
              {mounted ? (
                <IframeEmbed
                  src={NETEASE_PLAYER_SRC}
                  width="100%"
                  height={86}
                  title="Music Player"
                />
              ) : (
                <div className="maple-player-placeholder" aria-hidden />
              )}
              <blockquote
                style={{
                  margin: "0.5rem 0 0",
                  paddingLeft: "0.75rem",
                  borderLeft: "3px solid var(--text-secondary, #999)",
                  fontSize: "0.8125rem",
                  color: "var(--text-secondary, #555)",
                  fontStyle: "italic",
                }}
              >
                原因: My Favorite Game Music In 2025
              </blockquote>
            </div>
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
  maxWidth: "min(80vw, 100%)",
  height: "100%",
  minHeight: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1.5rem 0",
  justifySelf: "center",
};

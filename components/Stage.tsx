"use client";

import { type ReactNode } from "react";
import { ContentCard } from "@/components/ui/ContentCard";
import { BookmarkNav } from "@/components/BookmarkNav";
import { MobileNav } from "@/components/MobileNav";
import { EntranceEffect } from "@/components/EntranceEffect";
import { useTheme } from "@/contexts/ThemeContext";

export type StageProps = {
  /** Main content to display inside the stage card. Pass in whatever you want to show. */
  children: ReactNode;
  /** Content for the bookmark nav area. Defaults to <BookmarkNav /> when not provided. */
  bookmarkNav?: ReactNode;
  /** Content for the mobile nav area. Defaults to <MobileNav /> when not provided. */
  mobileNav?: ReactNode;
};

export function Stage({ children, bookmarkNav, mobileNav }: StageProps) {
  const { hasCompletedEntrance } = useTheme();

  return (
    <>
      <EntranceEffect />
      <div
        className={`stage ${hasCompletedEntrance ? "stage--ready" : "stage--entrance"}`}
        style={stageStyle}
      >
        {/* Desktop: Book container - card with bookmarks tucked underneath */}
        <div className="stage-book" style={bookContainerStyle}>
          {/* Bookmarks layer - positioned behind the card, peeking out from bottom */}
          <div className="stage-bookmarks" style={bookmarksLayerStyle}>
            {bookmarkNav ?? <BookmarkNav />}
          </div>
          {/* Card layer - sits on top, "covering" the top portion of bookmarks */}
          <div className="stage-card-area stage-card-area--desktop" style={cardAreaStyle}>
            <ContentCard>{children}</ContentCard>
          </div>
        </div>
        {/* Mobile: Standalone card area */}
        <div className="stage-card-area stage-card-area--mobile" style={mobileCardAreaStyle}>
          <ContentCard>{children}</ContentCard>
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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
};

const bookContainerStyle: React.CSSProperties = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "min(900px, 85vw)",
};

const bookmarksLayerStyle: React.CSSProperties = {
  position: "absolute",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%) translateY(100%)",
  zIndex: 0,
  display: "flex",
  justifyContent: "center",
  width: "100%",
  pointerEvents: "auto",
};

const cardAreaStyle: React.CSSProperties = {
  position: "relative",
  zIndex: 1,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const mobileCardAreaStyle: React.CSSProperties = {
  display: "none",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
};

"use client";

import { type ReactNode } from "react";

interface ContentCardProps {
  children: ReactNode;
  className?: string;
}

export function ContentCard({ children, className = "" }: ContentCardProps) {
  return (
    <div
      className={`content-card ${className}`}
      style={{
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-diffuse-lg)",
        background: "rgba(252, 250, 247, 0.96)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(180, 170, 160, 0.22)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        maxHeight: "100%",
        width: "60vw",
        maxWidth: "100%",
        minWidth: "min(100%, 320px)",
      }}
    >
      <div
        className="content-card-body"
        style={{
          padding: "1.625rem 2rem",
          overflowY: "auto",
          flex: 1,
          minHeight: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
}

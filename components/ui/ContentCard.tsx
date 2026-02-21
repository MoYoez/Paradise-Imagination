"use client";

import { type ReactNode } from "react";

interface ContentCardProps {
  children: ReactNode;
  className?: string;
}

export function ContentCard({ children, className = "" }: ContentCardProps) {
  return (
    <div
      className={["content-card rounded-[var(--radius-lg)] shadow-[var(--shadow-diffuse-lg)] bg-[rgba(252,250,247,0.96)] backdrop-blur-[12px] border border-[rgba(180,170,160,0.22)] overflow-hidden flex flex-col max-h-full w-[80vw] max-w-[min(80vw,840px)] min-w-[min(100%,320px)]", className].filter(Boolean).join(" ")}
    >
      <div className="content-card-body py-[1.625rem] px-8 overflow-y-auto flex-1 min-h-0">
        {children}
      </div>
    </div>
  );
}

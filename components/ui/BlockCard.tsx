import type { ReactNode } from "react";

interface BlockCardProps {
  children: ReactNode;
  className?: string;
}

export function BlockCard({ children, className = "" }: BlockCardProps) {
  return (
    <div
      className={["my-4 py-4 px-5 rounded-[var(--radius-md,20px)] border border-[rgba(180,170,160,0.25)] bg-[rgba(252,250,247,0.7)] shadow-[0_4px_16px_rgba(0,0,0,0.04)] text-sm leading-[1.6]", className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}

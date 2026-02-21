import type { ReactNode } from "react";

interface BlockCardProps {
  children: ReactNode;
  className?: string;
}

export function BlockCard({ children, className = "" }: BlockCardProps) {
  return (
    <div
      className={className}
      style={{
        margin: "1rem 0",
        padding: "1rem 1.25rem",
        borderRadius: "var(--radius-md, 20px)",
        border: "1px solid rgba(180, 170, 160, 0.25)",
        background: "rgba(252, 250, 247, 0.7)",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
        fontSize: "0.875rem",
        lineHeight: 1.6,
      }}
    >
      {children}
    </div>
  );
}

"use client";

import { type CSSProperties, type ReactNode } from "react";

interface LeafTagProps {
  children: string;
  /** Optional: shown before label inside leaf as icon | label */
  icon?: ReactNode;
  color?: string;
  textColor?: string;
  className?: string;
  style?: CSSProperties;
}

export function LeafTag({
  children,
  icon,
  color = "var(--color-forest, #a8c4a0)",
  textColor = "rgba(255,255,255,0.95)",
  className = "",
  style,
}: LeafTagProps) {
  return (
    <span
      className={`leaf-tag ${icon ? "leaf-tag--with-icon" : ""} ${className}`.trim()}
      style={{ ...leafTagWrapStyle, ...style }}
      role="img"
      aria-label={children}
    >
      <svg
        viewBox="0 0 200 52"
        className="leaf-tag__shape"
        aria-hidden
        style={{ fill: color }}
      >
        <path d="M 0 26 C 55 0 145 0 200 26 C 145 52 55 52 0 26 Z" />
      </svg>
      <span className="leaf-tag__inner" style={{ color: textColor }}>
        {icon && (
          <>
            <span className="leaf-tag__icon" aria-hidden>{icon}</span>
            <span className="leaf-tag__sep" aria-hidden>|</span>
          </>
        )}
        <span className="leaf-tag__text">{children}</span>
      </span>
    </span>
  );
}

const leafTagWrapStyle: CSSProperties = {
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "6.5rem",
  height: "2.25rem",
  flexShrink: 0,
};

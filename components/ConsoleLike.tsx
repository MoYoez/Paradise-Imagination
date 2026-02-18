"use client";

import { type CSSProperties, type ReactNode } from "react";

interface ConsoleLikeProps {
  children: ReactNode;
  /** terminal prompt, like "$ " or "> ", if not provided, it will not be displayed */
  prompt?: string;
  /** whether to display the trailing dots animation, default is true */
  trailingDots?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function ConsoleLike({
  children,
  prompt,
  trailingDots = true,
  className = "",
  style,
}: ConsoleLikeProps) {
  return (
    <span
      className={`console-like ${className}`.trim()}
      style={{ ...containerStyle, ...style }}
    >
      {prompt != null && (
        <span className="console-like__prompt" aria-hidden>
          {prompt}
        </span>
      )}
      <span className="console-like__content">{children}</span>
      {trailingDots && (
        <span className="console-like__dots" aria-hidden>
          <span className="console-like__dot">.</span>
          <span className="console-like__dot">.</span>
          <span className="console-like__dot">.</span>
        </span>
      )}
    </span>
  );
}

const containerStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "baseline",
  flexWrap: "wrap",
  gap: "0.125rem",
};

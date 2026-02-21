"use client";

import type { CSSProperties } from "react";

interface IframeEmbedProps {
  src: string;
  width?: number | string;
  height?: number | string;
  title?: string;
  className?: string;
  /** When not maple, parent hides via display only; do not unmount */
}

/**
 * iframe embed for external players (e.g. Netease Music).
 * Console errors like "Blocked a frame... cross-origin" or "Permissions policy violation"
 */
export function IframeEmbed({
  src,
  width = 330,
  height = 86,
  title = "Embed",
  className = "",
}: IframeEmbedProps) {
  const resolvedSrc = src.startsWith("//") ? `https:${src}` : src;
  const widthNum = typeof width === "number";
  const heightNum = typeof height === "number";
  const style: CSSProperties = {
    border: 0,
    margin: 0,
    display: "block",
    ...(widthNum ? {} : { width: width as string, maxWidth: "100%" }),
    ...(heightNum ? {} : { height: height as string }),
  };

  return (
    <iframe
      title={title}
      src={resolvedSrc}
      width={widthNum ? (width as number) : undefined}
      height={heightNum ? (height as number) : undefined}
      style={style}
      className={className}
      allow="autoplay; encrypted-media"
    />
  );
}

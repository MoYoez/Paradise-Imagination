"use client";

interface IframeEmbedProps {
  src: string;
  width?: number | string;
  height?: number | string;
  title?: string;
  className?: string;
  /** When not maple, parent hides via display only; do not unmount */
}

/** iframe embed for external players (e.g. Netease Music) */
export function IframeEmbed({
  src,
  width = 330,
  height = 86,
  title = "Embed",
  className = "",
}: IframeEmbedProps) {
  const resolvedSrc = src.startsWith("//") ? `https:${src}` : src;

  return (
    <iframe
      title={title}
      src={resolvedSrc}
      width={typeof width === "number" ? width : width}
      height={typeof height === "number" ? height : height}
      frameBorder={0}
      style={{ border: 0, margin: 0, display: "block" }}
      className={className}
      allow="autoplay; encrypted-media"
    />
  );
}

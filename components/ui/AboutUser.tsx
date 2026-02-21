"use client";

import { FaTag } from "react-icons/fa";

export interface AboutUserProps {
  /** Avatar image URL; omit for placeholder */
  avatarUrl?: string | null;
  name: string;
  tag: string;
  /** Accent color for tag and placeholder (default: neutral gray) */
  accentColor?: string;
}

export function AboutUser({ avatarUrl, name, tag, accentColor = "rgba(0,0,0,0.45)" }: AboutUserProps) {
  return (
    <div className="about-user-wrap max-[1032px]:w-full max-[1032px]:flex max-[1032px]:flex-col max-[1032px]:items-center">
      <div className="shrink-0 flex flex-col items-center gap-2 min-w-[88px]">
        <div className="w-[72px] h-[72px] rounded-full overflow-hidden bg-black/[0.06]">
          {avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element -- Gravatar loaded in browser to avoid server-side ECONNRESET (e.g. GFW)
            <img
              src={avatarUrl}
              alt=""
              width={72}
              height={72}
              className="object-cover w-full h-full block"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-2xl"
              style={{ color: accentColor }}
            >
              ?
            </div>
          )}
        </div>
        <p className="m-0 text-[0.9375rem] font-semibold text-[#333] text-center">
          {name}
        </p>
        <p
          className="m-0 text-xs text-center flex items-center justify-center gap-1"
          style={{ color: accentColor }}
        >
          <FaTag size={10} aria-hidden />
          {tag}
        </p>
      </div>
    </div>
  );
}

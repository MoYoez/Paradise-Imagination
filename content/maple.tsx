"use client";

import { useEffect, useState } from "react";
import { FaGlobe, FaCogs, FaUser } from "react-icons/fa";
import { SiUbuntu, SiApple, SiGit } from "react-icons/si";
import { BlockCard } from "@/components/ui/BlockCard";
import { LeafTag } from "@/components/ui/LeafTag";
import { IframeEmbed } from "@/components/ui/IframeEmbed";
import { AboutUser } from "@/components/ui/AboutUser";

const NETEASE_PLAYER_SRC =
  "https://music.163.com/outchain/player?type=2&id=2137574903&auto=0&height=66";

const iconClassNameInLeaf = "text-white/95 shrink-0";

export const imagery = "! ✨ [Thinking...] No output and go to sleep 😴";
export const imageryConsoleLike = true; // require enable in index.ts to show console-like style


const AVATAR_URL = "https://gravatar.com/avatar/24972965681ebfcf8369dcecbc7080fa?size=256";
const NAME = "MoeMagicMango";
const TAG = "#Magician";

const NICKNAMES = [
  {
    name: "MoYoez",
  },
  {
    name: "KoiParadise",
  },
]
const FooterContent = 'Always try to seek for Stellar and Dream 💫';

export default function MapleContent() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
    <div className="about-content-reveal">
    <div>
      <hr className="mb-5 border-0 border-t border-black/[0.08]" />
      <div className="maple-about-row flex gap-6 items-start">
        <AboutUser
          avatarUrl={AVATAR_URL}
          name={NAME}
          tag={TAG}
          accentColor="var(--color-maple, #e8b4a0)"
        />
        <div className="flex-1 min-w-0 flex flex-col gap-3 text-sm leading-[1.65] text-[#333]">
          <div className="maple-about-grid grid gap-x-3 gap-y-2.5 items-center grid-cols-[7.5rem_1fr]">
            <div className="flex items-center gap-[0.35rem]">
              <FaUser size={14} className="text-maple shrink-0" aria-hidden />
              <span className="text-xs font-semibold text-maple uppercase tracking-wide">
                Known As
              </span>
            </div>
            <div className="maple-about-tags flex items-center gap-2 flex-nowrap">
                {NICKNAMES.map((nickname) => (
                <LeafTag color="var(--color-maple, #e8b4a0)" key={nickname.name}>{nickname.name}</LeafTag>
              ))}
            </div>
            <div className="flex items-center gap-[0.35rem]">
              <FaGlobe size={14} className="text-maple shrink-0" aria-hidden />
              <span className="text-xs font-semibold text-maple uppercase tracking-wide">
                Language
              </span>
            </div>
            <div className="maple-about-tags flex items-center gap-2 flex-nowrap">
              <LeafTag color="var(--color-maple, #e8b4a0)">汉语</LeafTag>
              <LeafTag color="var(--color-maple, #e8b4a0)">漢語</LeafTag>
              <LeafTag color="var(--color-maple, #e8b4a0)">English</LeafTag>
              <LeafTag color="var(--color-maple, #e8b4a0)">Japanese</LeafTag>
            </div>
            <div className="flex items-center gap-[0.35rem]">
              <FaCogs size={14} className="text-maple shrink-0" aria-hidden />
              <span className="text-xs font-semibold text-maple uppercase tracking-wide">
                DevOps
              </span>
            </div>
            <div className="maple-about-tags flex items-center gap-2 flex-nowrap">
              <LeafTag icon={<SiUbuntu size={12} className={iconClassNameInLeaf} />} color="var(--color-maple, #e8b4a0)">Ubuntu</LeafTag>
              <LeafTag icon={<SiApple size={12} className={iconClassNameInLeaf} />} color="var(--color-maple, #e8b4a0)">MacOS</LeafTag>
              <LeafTag icon={<SiGit size={12} className={iconClassNameInLeaf} />} color="var(--color-maple, #e8b4a0)">Git</LeafTag>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <BlockCard>
        <p>
          {FooterContent}
        </p>
      </BlockCard>
      <div className="maple-player-wrap mt-4 w-full max-w-full">
        <div className="text-[0.9375rem] font-semibold mb-1.5 text-[var(--text-secondary,#555)]">
          Music Player
        </div>
        {mounted ? (
          <IframeEmbed
            src={NETEASE_PLAYER_SRC}
            width="100%"
            height={86}
            title="Music Player"
          />
        ) : (
          <div className="maple-player-placeholder" aria-hidden />
        )}
        <blockquote className="mt-2 pl-3 border-l-[3px] border-[var(--text-secondary,#999)] text-[0.8125rem] text-[var(--text-secondary,#555)] italic">
          原因: My Favorite Game Music In 2025
        </blockquote>
      </div>
    </>
  );
}

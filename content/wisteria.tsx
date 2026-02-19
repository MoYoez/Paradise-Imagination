"use client";

import Link from "next/link";
import { FaBlog, FaMusic } from "react-icons/fa";
import { SiGithub, SiTencentqq, SiX, SiMastodon, SiDiscord } from "react-icons/si";
import { BlockCard } from "@/components/BlockCard";

export const imagery = "Link to my social network";

const WISTERIA = "var(--color-wisteria, #c8b8d8)";

// you can put your links here.
const links = [
  {
    icon: SiGithub,
    label: "GitHub",
    handle: "MoeMagicMango",
    href: "https://github.com/MoYoez",
  },
  {
    icon: FaBlog,
    label: "Blog",
    handle: "lemonkoi.one",
    href: "https://lemonkoi.one",
  },
  {
    icon: FaMusic,
    label: "Netease",
    handle: "MoeMagicMango",
    href: "https://music.163.com/#/user/home?id=555696683",
  },
  {
    icon: SiTencentqq,
    label: "QQ",
    handle: "MoeMagicMango💫",
    href: "https://wpa.qq.com/msgrd?v=3&uin=1292581422&site=qq&menu=yes",
  },
  {
    icon: SiX,
    label: "Twitter",
    handle: "@Akirasweetz",
    href: "https://twitter.com/akirasweetz",
  },
  {
    icon: SiMastodon,
    label: "Mastodon",
    handle: "MoeMagicMango@hello.2heng.xin",
    href: "https://hello.2heng.xin/web/@moyoez",
  },
  {
    icon: SiDiscord,
    label: "Discord",
    handle: "MoeMagicMango",
    href: "https://discord.com/users/529604493642301449",
  },
] as const;

export default function WisteriaContent() {
  return (
    <>
      <div className="about-content-reveal">
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "0.65rem",
          }}
        >
          {links.map(({ icon: Icon, label, handle, href }) => (
            <li key={label}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: "#333",
                  textDecoration: "none",
                  padding: "0.35rem 0",
                  borderRadius: "var(--radius-md)",
                  transition: "color 0.2s ease, background 0.2s ease",
                }}
                className="wisteria-link"
              >
                <Icon
                  size={18}
                  style={{ color: WISTERIA, flexShrink: 0 }}
                  aria-hidden
                />
                <span style={{ fontWeight: 600, color: WISTERIA }}>{label}</span>
                {handle != null && (
                  <span style={{ color: "#555", fontWeight: 500 }}>{handle}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <BlockCard>
        <p style={{ margin: 0 }}>
          邮箱、留言等更多方式可通过上述社交账号私信或主页联系。
        </p>
      </BlockCard>
    </>
  );
}

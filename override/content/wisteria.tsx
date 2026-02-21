"use client";

import Link from "next/link";
import { FaBlog } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { BlockCard } from "@/components/ui/BlockCard";

export const imagery = "Link to my social network";

const WISTERIA = "var(--color-wisteria, #c8b8d8)";

// Add your links here.
const links = [
  {
    icon: SiGithub,
    label: "GitHub",
    handle: "your-handle",
    href: "https://github.com/your-handle",
  },
  {
    icon: FaBlog,
    label: "Blog",
    handle: "your-blog",
    href: "https://your-blog.example",
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
          Optional footer text (e.g. contact info, more links).
        </p>
      </BlockCard>
    </>
  );
}

import { FaTag, FaGlobe, FaCogs, FaUser } from "react-icons/fa";
import { SiUbuntu, SiApple, SiGit } from "react-icons/si";
import { BlockCard } from "@/components/BlockCard";
import { LeafTag } from "@/components/LeafTag";

const iconStyleInLeaf = { color: "rgba(255,255,255,0.95)", flexShrink: 0 } as const;

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
  return (
    <>
    <div className="about-content-reveal">
    <div>
      <hr
        style={{
          margin: "0 0 1.25rem",
          border: 0,
          borderTop: "1px solid rgba(0,0,0,0.08)",
        }} />
      <div
        className="maple-about-row"
        style={{
          display: "flex",
          gap: "1.5rem",
          alignItems: "flex-start",
        }}
      >
        <div className="maple-about-avatar-wrap" style={{ alignItems: "center" }}>
        <div
          style={{
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            minWidth: 88,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              overflow: "hidden",
              background: "rgba(0,0,0,0.06)",
            }}
          >
            {AVATAR_URL ? (
              // eslint-disable-next-line @next/next/no-img-element -- Gravatar loaded in browser to avoid server-side ECONNRESET (e.g. GFW)
              <img
                src={AVATAR_URL}
                alt=""
                width={72}
                height={72}
                style={{ objectFit: "cover", width: "100%", height: "100%", display: "block" }} />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  color: "var(--color-maple, #e8b4a0)",
                }}
              >
                ?
              </div>
            )}
          </div>
          <p
            style={{
              margin: 0,
              fontSize: "0.9375rem",
              fontWeight: 600,
              color: "#333",
              textAlign: "center",
            }}
          >
            {NAME}
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "0.75rem",
              color: "var(--color-maple, #e8b4a0)",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.25rem",
            }}
          >
            <FaTag size={10} aria-hidden />
            {TAG}
          </p>
        </div>
        </div>
        <div
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            fontSize: "0.875rem",
            lineHeight: 1.65,
            color: "#333",
          }}
        >
          <div
            className="maple-about-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "7.5rem 1fr",
              gap: "0.5rem 0.75rem",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
              }}
            >
              <FaUser size={14} style={{ color: "var(--color-maple, #e8b4a0)", flexShrink: 0 }} aria-hidden />
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--color-maple, #e8b4a0)",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                Known As
              </span>
            </div>
            <div className="maple-about-tags" style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "nowrap" }}>
                {NICKNAMES.map((nickname) => (
                <LeafTag color="var(--color-maple, #e8b4a0)" key={nickname.name}>{nickname.name}</LeafTag>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
              }}
            >
              <FaGlobe size={14} style={{ color: "var(--color-maple, #e8b4a0)", flexShrink: 0 }} aria-hidden />
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--color-maple, #e8b4a0)",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                Language
              </span>
            </div>
            <div className="maple-about-tags" style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "nowrap" }}>
              <LeafTag color="var(--color-maple, #e8b4a0)">汉语</LeafTag>
              <LeafTag color="var(--color-maple, #e8b4a0)">漢語</LeafTag>
              <LeafTag color="var(--color-maple, #e8b4a0)">English</LeafTag>
              <LeafTag color="var(--color-maple, #e8b4a0)">Japanese</LeafTag>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
              }}
            >
              <FaCogs size={14} style={{ color: "var(--color-maple, #e8b4a0)", flexShrink: 0 }} aria-hidden />
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--color-maple, #e8b4a0)",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                DevOps
              </span>
            </div>
            <div className="maple-about-tags" style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "nowrap" }}>
              <LeafTag icon={<SiUbuntu size={12} style={iconStyleInLeaf} />} color="var(--color-maple, #e8b4a0)">Ubuntu</LeafTag>
              <LeafTag icon={<SiApple size={12} style={iconStyleInLeaf} />} color="var(--color-maple, #e8b4a0)">MacOS</LeafTag>
              <LeafTag icon={<SiGit size={12} style={iconStyleInLeaf} />} color="var(--color-maple, #e8b4a0)">Git</LeafTag>
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
      </BlockCard></>
  );
}

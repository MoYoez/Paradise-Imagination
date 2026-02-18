import { FaTag } from "react-icons/fa";
import { BlockCard } from "@/components/BlockCard";


export const imagery = "! ✨ [Thinking...] No output and go to sleep 😴";
export const imageryConsoleLike = true; // require enable in index.ts to show console-like style

const AVATAR_URL = "https://gravatar.com/avatar/24972965681ebfcf8369dcecbc7080fa?size=256";
const NAME = "MoeMagicMango";
const TAG = "#Magician";

export default function MapleContent() {
  return (
    <><div>
      <hr
        style={{
          margin: "0 0 1.25rem",
          border: 0,
          borderTop: "1px solid rgba(0,0,0,0.08)",
        }} />
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          alignItems: "flex-start",
        }}
      >
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

        <div
          style={{
            flex: 1,
            minWidth: 0,
            fontSize: "0.875rem",
            lineHeight: 1.65,
            color: "#333",
          }}
        >
          <p style={{ margin: 0 }}>
            
          </p>
        </div>
      </div>
    </div>
    <BlockCard>
        <p>
          Stay hungry, stay foolish.
        </p>
      </BlockCard></>
  );
}

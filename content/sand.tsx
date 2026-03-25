/* eslint-disable @next/next/no-img-element */

export const imagery = "Tech stack / tools";

const LANG_BADGES = [
  { alt: "TypeScript", src: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" },
  { alt: "React", src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
];

export default function SandContent() {
  return (
    <>
      <blockquote
        style={{
          margin: "0 0 1rem",
          paddingLeft: "0.75rem",
          borderLeft: "3px solid rgba(0,0,0,0.12)",
          fontSize: "0.875rem",
          color: "#444",
        }}
      >
        Optional intro (e.g. main stack, hobbies).
      </blockquote>
      <h3 style={{ margin: "0 0 0.5rem", fontSize: "0.9375rem", fontWeight: 600 }}>
        Tech / Languages
      </h3>
      <p style={{ margin: 0 }}>
        <span
          style={{
            display: "inline-flex",
            flexWrap: "wrap",
            gap: "0.35rem",
            alignItems: "center",
          }}
        >
          {LANG_BADGES.map(({ alt, src }) => (
            <img
              key={alt}
              alt={alt}
              src={src}
              height={28}
              style={{ height: 28, width: "auto", display: "inline-block", verticalAlign: "middle" }}
            />
          ))}
        </span>
      </p>
    </>
  );
}

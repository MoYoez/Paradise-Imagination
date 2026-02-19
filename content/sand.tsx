/* eslint-disable @next/next/no-img-element */

export const imagery = "沉淀积累的工具";

const LANG_BADGES = [
  { alt: "Go", src: "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white" },
  { alt: "Python", src: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" },
  { alt: "Node", src: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" },
  { alt: "TypeScript", src: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" },
  { alt: "React", src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
  { alt: "Vue3", src: "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" },
  { alt: "C", src: "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" },
  { alt: "Rust", src: "https://img.shields.io/badge/Rust-000000.svg?style=for-the-badge&logo=Rust&logoColor=white" },
  { alt: "PHP", src: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" },
  { alt: "Swift", src: "https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white" },
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
        我经常使用 Golang + TypeScript 作为主力开发,
        其余大部分都是兴趣爱好学了一下下
      </blockquote>
      <h3 style={{ margin: "0 0 0.5rem", fontSize: "0.9375rem", fontWeight: 600 }}>
        Program Language
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

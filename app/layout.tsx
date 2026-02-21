import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import "./globals.css";
import { AppShell } from "@/components/AppShell";

const TEMPLATE_REPO_URL = "https://github.com/MoYoez/Paradise-Imagination";

export const metadata: Metadata = {
  title: "Paradise Imagination",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const defaultFooter = (
  <>
    Copyright © 2025-2026 IsoHark0x (HiMoYo). |{" "}
    <Link
      href={TEMPLATE_REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "inherit",
        textDecoration: "underline",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.25rem",
      }}
    >
      <SiGithub size={14} aria-hidden />
      Fork this template on GitHub
    </Link>
  </>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="layout-root">
        <AppShell footer={defaultFooter}>{children}</AppShell>
      </body>
    </html>
  );
}

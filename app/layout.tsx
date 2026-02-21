import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppShell } from "@/components/AppShell";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Paradise Imagination",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="layout-root">
        <AppShell footer={<Footer copyright="Copyright © 2025-2026 IsoHark0x (HiMoYo)." />}>{children}</AppShell>
      </body>
    </html>
  );
}

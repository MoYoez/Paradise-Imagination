"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { BackgroundByTheme } from "@/components/BackgroundByTheme";
import { EntranceWhiteOverlay } from "@/components/EntranceWhiteOverlay";

const TEMPLATE_REPO_URL = "https://github.com/MoYoez/Paradise-Imagination";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <div className="layout-main">
        <BackgroundByTheme />
        <EntranceWhiteOverlay />
        {children}
        <footer className="layout-footer">
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
      </footer>
      </div>
    </ThemeProvider>
  );
}

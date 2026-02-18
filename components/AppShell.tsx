"use client";

import { type ReactNode } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { BackgroundByTheme } from "@/components/BackgroundByTheme";
import { EntranceWhiteOverlay } from "@/components/EntranceWhiteOverlay";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <BackgroundByTheme />
      <EntranceWhiteOverlay />
      {children}
    </ThemeProvider>
  );
}

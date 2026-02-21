"use client";

import { type ReactNode } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { BackgroundByTheme } from "@/components/BackgroundByTheme";
import { EntranceWhiteOverlay } from "@/components/EntranceWhiteOverlay";

export type AppShellProps = {
  children: ReactNode;
  /** Footer content to display. Pass in whatever you want to show in the footer. */
  footer?: ReactNode;
};

export function AppShell({ children, footer }: AppShellProps) {
  return (
    <ThemeProvider>
      <div className="layout-main">
        <BackgroundByTheme />
        <EntranceWhiteOverlay />
        {children}
        {footer != null && (
          <footer className="layout-footer">{footer}</footer>
        )}
      </div>
    </ThemeProvider>
  );
}

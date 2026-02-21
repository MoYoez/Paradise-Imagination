"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ThemeId } from "@/lib/theme-config";
import { THEME_IDS } from "@/lib/theme-config";

interface ThemeContextValue {
  activeTheme: ThemeId;
  setActiveTheme: (id: ThemeId) => void;
  hasCompletedEntrance: boolean;
  setHasCompletedEntrance: (v: boolean) => void;
  isTransitioning: boolean;
  setTransitioning: (v: boolean) => void;
  /** When themeDelayMs is set (e.g. for wheel), activeTheme updates after that delay to sync with animation. */
  requestThemeChange: (id: ThemeId, immediate?: boolean, themeDelayMs?: number) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const DURATIONS = {
  take: 500,
  wheel: 600,
  select: 500,
  deal: 400,
} as const;
const TOTAL_TRANSITION = DURATIONS.take + DURATIONS.wheel + DURATIONS.select + DURATIONS.deal;

const DefaultTheme = "maple";
const DefaultThemeId = THEME_IDS.find((id) => id === DefaultTheme) as ThemeId;

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [activeTheme, setActiveThemeState] = useState<ThemeId>(DefaultThemeId);
  const [hasCompletedEntrance, setHasCompletedEntrance] = useState(false);
  const [isTransitioning, setTransitioning] = useState(false);

  const setActiveTheme = useCallback((id: ThemeId) => {
    setActiveThemeState(id);
  }, []);

  const requestThemeChange = useCallback(
    (id: ThemeId, immediate = false, themeDelayMs?: number) => {
      if (id === activeTheme || isTransitioning) return;
      setTransitioning(true);
      if (immediate) {
        setActiveThemeState(id);
        const lockMs = 280;
        setTimeout(() => setTransitioning(false), lockMs);
      } else {
        const delay = themeDelayMs ?? DURATIONS.take;
        setTimeout(() => setActiveThemeState(id), delay);
        setTimeout(() => setTransitioning(false), TOTAL_TRANSITION - DURATIONS.deal);
      }
    },
    [activeTheme, isTransitioning]
  );

  const value = useMemo<ThemeContextValue>(
    () => ({
      activeTheme,
      setActiveTheme,
      hasCompletedEntrance,
      setHasCompletedEntrance,
      isTransitioning,
      setTransitioning,
      requestThemeChange,
    }),
    [
      activeTheme,
      setActiveTheme,
      hasCompletedEntrance,
      isTransitioning,
      requestThemeChange,
    ]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

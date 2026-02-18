"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const ENTRANCE_HAZE_WAKE_MS = 1200;
const ENTRANCE_DONE_MS = 2400;

export function EntranceEffect() {
  const {
    hasCompletedEntrance,
    setHasCompletedEntrance,
    setActiveTheme,
  } = useTheme();
  const didRun = useRef(false);

  useEffect(() => {
    if (hasCompletedEntrance || didRun.current) return;
    didRun.current = true;

    const t1 = setTimeout(() => {
      setActiveTheme("maple");
    }, ENTRANCE_HAZE_WAKE_MS);

    const t2 = setTimeout(() => {
      setHasCompletedEntrance(true);
    }, ENTRANCE_DONE_MS);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [hasCompletedEntrance, setHasCompletedEntrance, setActiveTheme]);

  return null;
}

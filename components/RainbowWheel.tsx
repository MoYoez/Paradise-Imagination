"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { THEME_IDS, THEME_PASTEL, getThemeById, getThemeIndex } from "@/lib/theme-config";

const N = THEME_IDS.length;
const ROLL_DURATION_MS = 300; // set roll to 300ms.
/** Sync theme update with roll end so current slot updates in same frame as roll clear (no flash). */
const THEME_UPDATE_DELAY_MS = 300;
const INCOMING_EXIT_MS = 120;
const JUST_SELECTED_ANIMATION_MS = 400;
const ENTERING_ANIMATION_MS = 250;

function prevIndex(i: number): number {
  return (i - 1 + N) % N;
}
function nextIndex(i: number): number {
  return (i + 1) % N;
}

export function RainbowWheel() {
  const { activeTheme, requestThemeChange, isTransitioning } = useTheme();
  const [rollingDirection, setRollingDirection] = useState<"prev" | "next" | null>(null);
  const [rollJustEnded, setRollJustEnded] = useState(false);
  const [justSelected, setJustSelected] = useState(false);
  const [prevEntering, setPrevEntering] = useState(false);
  const [nextEntering, setNextEntering] = useState(false);
  const rollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rollEndedTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animationTimeoutsRef = useRef<{ justSelected: ReturnType<typeof setTimeout> | null; entering: ReturnType<typeof setTimeout> | null; incomingExit: ReturnType<typeof setTimeout> | null }>({ justSelected: null, entering: null, incomingExit: null });
  const [exitingIncoming, setExitingIncoming] = useState<{ id: (typeof THEME_IDS)[number]; direction: "prev" | "next" } | null>(null);
  const lastRollRef = useRef<{ incomingId: (typeof THEME_IDS)[number]; direction: "prev" | "next" } | null>(null);

  const activeIndex = getThemeIndex(activeTheme);
  const prevId = THEME_IDS[prevIndex(activeIndex)];
  const nextId = THEME_IDS[nextIndex(activeIndex)];
  const incomingId =
    rollingDirection === "next"
      ? THEME_IDS[(activeIndex + 2) % N]
      : rollingDirection === "prev"
        ? THEME_IDS[(activeIndex - 2 + N) % N]
        : null;

  const ROLL_SETTLE_MS = 220;

  const clearRollAndStartAnimations = useCallback(() => {
    const last = lastRollRef.current;
    if (last) {
      setExitingIncoming({ id: last.incomingId, direction: last.direction });
      lastRollRef.current = null;
      if (animationTimeoutsRef.current.incomingExit) clearTimeout(animationTimeoutsRef.current.incomingExit);
      animationTimeoutsRef.current.incomingExit = setTimeout(() => {
        setExitingIncoming(null);
        animationTimeoutsRef.current.incomingExit = null;
      }, INCOMING_EXIT_MS);
    }
    setRollingDirection(null);
    rollTimeoutRef.current = null;
    setRollJustEnded(true);
    if (rollEndedTimeoutRef.current) clearTimeout(rollEndedTimeoutRef.current);
    rollEndedTimeoutRef.current = setTimeout(() => {
      setRollJustEnded(false);
      rollEndedTimeoutRef.current = null;
    }, ROLL_SETTLE_MS);
    setJustSelected(true);
    setPrevEntering(true);
    setNextEntering(true);
    if (animationTimeoutsRef.current.justSelected) clearTimeout(animationTimeoutsRef.current.justSelected);
    animationTimeoutsRef.current.justSelected = setTimeout(() => {
      setJustSelected(false);
      animationTimeoutsRef.current.justSelected = null;
    }, JUST_SELECTED_ANIMATION_MS);
    if (animationTimeoutsRef.current.entering) clearTimeout(animationTimeoutsRef.current.entering);
    animationTimeoutsRef.current.entering = setTimeout(() => {
      setPrevEntering(false);
      setNextEntering(false);
      animationTimeoutsRef.current.entering = null;
    }, ENTERING_ANIMATION_MS);
  }, []);

  const incomingToRender = exitingIncoming ?? (rollingDirection ? { id: incomingId!, direction: rollingDirection } : null);

  const handlePrev = useCallback(() => {
    if (isTransitioning || rollingDirection) return;
    lastRollRef.current = { incomingId: THEME_IDS[(activeIndex - 2 + N) % N], direction: "prev" };
    setRollingDirection("prev");
    requestThemeChange(prevId, false, THEME_UPDATE_DELAY_MS);
    rollTimeoutRef.current = setTimeout(clearRollAndStartAnimations, ROLL_DURATION_MS);
  }, [isTransitioning, rollingDirection, prevId, activeIndex, requestThemeChange, clearRollAndStartAnimations]);

  const handleNext = useCallback(() => {
    if (isTransitioning || rollingDirection) return;
    lastRollRef.current = { incomingId: THEME_IDS[(activeIndex + 2) % N], direction: "next" };
    setRollingDirection("next");
    requestThemeChange(nextId, false, THEME_UPDATE_DELAY_MS);
    rollTimeoutRef.current = setTimeout(clearRollAndStartAnimations, ROLL_DURATION_MS);
  }, [isTransitioning, rollingDirection, nextId, activeIndex, requestThemeChange, clearRollAndStartAnimations]);

  useEffect(() => {
    return () => {
      const rollId = rollTimeoutRef.current;
      if (rollId) clearTimeout(rollId);
      if (rollEndedTimeoutRef.current) clearTimeout(rollEndedTimeoutRef.current);
      // Need latest ref at cleanup to clear timeouts set during roll
      // eslint-disable-next-line react-hooks/exhaustive-deps -- ref.current intentionally read in cleanup
      const anim = animationTimeoutsRef.current;
      if (anim.justSelected) clearTimeout(anim.justSelected);
      if (anim.entering) clearTimeout(anim.entering);
      if (anim.incomingExit) clearTimeout(anim.incomingExit);
    };
  }, []);

  const isRolling = rollingDirection !== null;

  return (
    <div
      className="rainbow-wheel-wrap rainbow-wheel-wrap--vertical"
      role="radiogroup"
    >
      <div
        className={`rainbow-wheel rainbow-wheel--three ${isRolling ? `rainbow-wheel--rolling-${rollingDirection}` : ""} ${rollJustEnded ? "rainbow-wheel--roll-ended" : ""}`}
      >
        <div
          className={`wheel-slot wheel-slot--current${justSelected ? " wheel-slot--just-selected" : ""}`}
          role="radio"
          aria-checked={true}
          aria-label={getThemeById(activeTheme).section}
          style={{
            background: THEME_PASTEL[activeTheme],
            borderRadius: "var(--radius-lg)",
            padding: "1rem 1.25rem",
            fontSize: "1rem",
            fontWeight: 600,
            color: "rgba(50,45,40,0.9)",
            boxShadow: "var(--shadow-diffuse-lg), inset 0 1px 0 rgba(255,255,255,0.6)",
            border: "2.5px solid rgba(255,255,255,0.65)",
          }}
        >
          {getThemeById(activeTheme).section}
        </div>
        <button
          type="button"
          className={`wheel-slot wheel-slot--prev${prevEntering ? " wheel-slot--entering" : ""}`}
          role="radio"
          aria-label={getThemeById(prevId).section}
          aria-checked={false}
          disabled={isTransitioning || isRolling}
          onClick={handlePrev}
          style={{
            background: THEME_PASTEL[prevId],
            border: "1.5px solid rgba(255,255,255,0.4)",
            borderRadius: "var(--radius-md)",
            padding: "0.625rem 0.875rem",
            fontSize: "0.875rem",
            color: "rgba(60,55,50,0.75)",
            cursor: isTransitioning || isRolling ? "not-allowed" : "pointer",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
          }}
        >
          {getThemeById(prevId).section}
        </button>
        <button
          type="button"
          className={`wheel-slot wheel-slot--next${nextEntering ? " wheel-slot--entering" : ""}`}
          role="radio"
          aria-label={getThemeById(nextId).section}
          aria-checked={false}
          disabled={isTransitioning || isRolling}
          onClick={handleNext}
          style={{
            background: THEME_PASTEL[nextId],
            border: "1.5px solid rgba(255,255,255,0.4)",
            borderRadius: "var(--radius-md)",
            padding: "0.625rem 0.875rem",
            fontSize: "0.875rem",
            color: "rgba(60,55,50,0.75)",
            cursor: isTransitioning || isRolling ? "not-allowed" : "pointer",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
          }}
        >
          {getThemeById(nextId).section}
        </button>
        {incomingToRender !== null && (
          <div
            className={`wheel-slot wheel-slot--incoming wheel-slot--incoming-${incomingToRender.direction}${exitingIncoming ? " wheel-slot--incoming-exiting" : ""}`}
            aria-hidden="true"
            style={{
              background: THEME_PASTEL[incomingToRender.id],
              border: "1.5px solid rgba(255,255,255,0.4)",
              borderRadius: "var(--radius-md)",
              padding: "0.625rem 0.875rem",
              fontSize: "0.875rem",
              color: "rgba(60,55,50,0.75)",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
            }}
          >
            {getThemeById(incomingToRender.id).section}
          </div>
        )}
      </div>
    </div>
  );
}

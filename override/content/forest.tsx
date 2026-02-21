"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { SiSteamdeck } from "react-icons/si";
import { FaSteam } from "react-icons/fa";
import type { GetRecentlyPlayedGamesResult } from "@/lib/steam";
import { getSteamImageUrl } from "@/lib/steam";

export const imagery = "Recent games / play log";
export const recent_games_description = "Simple description here.";

function formatPlayTime(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

export default function ForestContent() {
  const [data, setData] = useState<GetRecentlyPlayedGamesResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openAppid, setOpenAppid] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    fetch("/api/steam/recent-games?count=12")
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(setData)
      .catch((err) => setError(err?.message ?? "Failed to load"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <div className="mb-4">
        <div className="flex items-center gap-2 text-sm text-forest font-semibold">
          <FaSteam size={18} aria-hidden />
          <span>Recent games</span>
          <span className="font-normal opacity-[0.85]">·</span>
          <span className="font-medium opacity-90">PC</span>
          {!loading && !error && data?.games.some((g) => (g.playtime_deck_forever ?? 0) > 0) && (
            <>
              <span className="font-normal opacity-[0.85]">·</span>
              <SiSteamdeck size={18} aria-hidden />
              <span className="font-medium opacity-90">Steam Deck</span>
            </>
          )}
        </div>
        <blockquote className="mt-2 py-2 pl-3.5 border-l-[3px] border-forest text-[0.8125rem] text-[#555] font-normal opacity-90">
          {recent_games_description}
        </blockquote>
      </div>

      {loading && (
        <p className="m-0 text-gray-600 text-sm">
          Loading…
        </p>
      )}

      {error && (
        <p className="m-0 text-[#b55] text-sm">
          {error}
        </p>
      )}

      {!loading && !error && data && (
          <ul className="m-0 p-0 list-none flex flex-col gap-2">
            {data.games.map((game) => {
              const deckMins = game.playtime_deck_forever ?? 0;
              const hasDeck = deckMins > 0;
              const pcMins = game.playtime_forever - deckMins;
              const isOpen = openAppid === game.appid;

              const handleEnter = () => {
                if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current);
                  timeoutRef.current = null;
                }
                setOpenAppid(game.appid);
              };
              const handleLeave = () => {
                timeoutRef.current = setTimeout(() => setOpenAppid(null), 120);
              };
              const handleClick = () => setOpenAppid((id) => (id === game.appid ? null : game.appid));

              return (
                <li
                  key={game.appid}
                  className="flex items-center gap-2 py-[0.35rem] border-b border-black/[0.06] text-sm"
                >
                  {game.img_icon_url ? (
                    <Image
                      src={getSteamImageUrl(game.appid, game.img_icon_url)}
                      alt=""
                      width={24}
                      height={24}
                      className="rounded shrink-0"
                    />
                  ) : (
                    <span className="w-6 h-6 rounded bg-black/[0.08] shrink-0" />
                  )}
                  <span className="flex-1 font-medium">{game.name}</span>
                  <div
                    className="relative shrink-0"
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                  >
                    <button
                      type="button"
                      onClick={handleClick}
                      className="text-gray-600 text-[0.8125rem] inline-flex items-center gap-[0.35rem] bg-transparent border border-transparent py-1 px-2 rounded-md cursor-pointer font-inherit"
                      title="Hover or click for PC / Deck playtime"
                    >
                      {game.playtime_2weeks > 0
                        ? `2w ${formatPlayTime(game.playtime_2weeks)}`
                        : `Total ${formatPlayTime(game.playtime_forever)}`}
                    </button>
                    {isOpen && (
                      <div
                        role="tooltip"
                        className="absolute right-0 bottom-full mb-1.5 py-2 px-3 bg-forest text-white/[0.98] text-[0.8125rem] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] whitespace-nowrap z-10 flex flex-col gap-1"
                      >
                        <span className="inline-flex items-center gap-[0.35rem]">
                          <FaSteam size={12} aria-hidden />
                          PC {formatPlayTime(pcMins)}
                        </span>
                        {hasDeck && (
                          <span className="inline-flex items-center gap-[0.35rem]">
                            <SiSteamdeck size={12} aria-hidden />
                            Deck {formatPlayTime(deckMins)}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
      )}

      {!loading && !error && data && data.games.length === 0 && (
        <p className="m-0 text-gray-600 text-sm">
          No recent games.
        </p>
      )}
    </>
  );
}

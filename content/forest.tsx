"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SiSteamdeck } from "react-icons/si";
import { FaSteam } from "react-icons/fa";
import type { GetRecentlyPlayedGamesResult } from "@/lib/steam";
import { getSteamImageUrl } from "@/lib/steam";

export const imagery = "探险地图 / 游戏手账";
export const recent_games_description = "最近以独立游戏为主, 玩的还是老几样。";

function formatPlayTime(minutes: number): string {
  if (minutes < 60) return `${minutes} 分钟`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h} 小时 ${m} 分` : `${h} 小时`;
}

export default function ForestContent() {
  const [data, setData] = useState<GetRecentlyPlayedGamesResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/steam/recent-games?count=12")
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(setData)
      .catch((err) => setError(err?.message ?? "加载失败"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.875rem",
            color: "var(--color-forest, #a8c4a0)",
            fontWeight: 600,
          }}
        >
          <FaSteam size={18} aria-hidden />
          <span>最近游玩</span>
          <span style={{ fontWeight: 400, opacity: 0.85 }}>·</span>
          <SiSteamdeck size={18} aria-hidden />
          <span style={{ fontWeight: 500, opacity: 0.9 }}>PC & Steam Deck</span>
        </div>
        <blockquote
          style={{
            margin: "0.5rem 0 0",
            padding: "0.5rem 0 0.5rem 0.875rem",
            borderLeft: "3px solid var(--color-forest, #a8c4a0)",
            fontSize: "0.8125rem",
            color: "#555",
            fontWeight: 400,
            opacity: 0.9,
          }}
        >
          {recent_games_description}
        </blockquote>
      </div>

      {loading && (
        <p style={{ margin: 0, color: "#666", fontSize: "0.875rem" }}>
          正在拉取游戏记录…
        </p>
      )}

      {error && (
        <p style={{ margin: 0, color: "#b55", fontSize: "0.875rem" }}>
          {error}
        </p>
      )}

      {!loading && !error && data && (
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {data.games.map((game) => (
            <li
              key={game.appid}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
                fontSize: "0.875rem",
              }}
            >
              {game.img_icon_url ? (
                <Image
                  src={getSteamImageUrl(game.appid, game.img_icon_url)}
                  alt=""
                  width={24}
                  height={24}
                  style={{ borderRadius: 4, flexShrink: 0 }}
                />
              ) : (
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 4,
                    background: "rgba(0,0,0,0.08)",
                    flexShrink: 0,
                  }}
                />
              )}
              <span style={{ flex: 1, fontWeight: 500 }}>{game.name}</span>
              <span style={{ color: "#666", fontSize: "0.8125rem" }}>
                {game.playtime_2weeks > 0
                  ? `近两周 ${formatPlayTime(game.playtime_2weeks)}`
                  : `总时长 ${formatPlayTime(game.playtime_forever)}`}
              </span>
            </li>
          ))}
        </ul>
      )}

      {!loading && !error && data && data.games.length === 0 && (
        <p style={{ margin: 0, color: "#666", fontSize: "0.875rem" }}>
          暂无最近游玩记录。
        </p>
      )}
    </>
  );
}

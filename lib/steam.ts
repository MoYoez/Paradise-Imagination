/**
 * Steam Web API - GetRecentlyPlayedGames (v0001)
 * Returns a list of games the user has played in the last two weeks.
 *
 * Note: Data is only returned when the profile is publicly visible. Private,
 * friends-only, etc. are not supported unless you are requesting your own
 * details (i.e. the Web API key is linked to the steamid you are requesting).
 *
 * Image URL format: https://media.steampowered.com/steamcommunity/public/images/apps/{appid}/{hash}.jpg
 * @see https://partner.steamgames.com/doc/webapi/IPlayerService#GetRecentlyPlayedGames
 */

const STEAM_API_BASE = "https://api.steampowered.com";

export interface SteamRecentGame {
  appid: number;
  name: string;
  /** Total minutes played in the last 2 weeks (playtime_2weeks) */
  playtime_2weeks: number;
  /** Total minutes played on record since Steam began tracking (~2009) (playtime_forever) */
  playtime_forever: number;
  img_icon_url: string;
  img_logo_url: string;
  /** Platform-specific total minutes (returned by API when available) */
  playtime_windows_forever?: number;
  playtime_mac_forever?: number;
  playtime_linux_forever?: number;
  playtime_deck_forever?: number;
}

export interface GetRecentlyPlayedGamesResult {
  /** Total number of unique games played in the last 2 weeks (may be capped by count) */
  total_count: number;
  games: SteamRecentGame[];
}

interface SteamApiResponse {
  response?: {
    total_count?: number;
    games?: SteamRecentGame[];
  };
}

/**
 * Get recently played games for the given Steam user (last 2 weeks).
 * @param steamId - 64-bit Steam ID
 * @param count - Max number of games to return (default 20; typically few in 2 weeks)
 * @returns List of recently played games
 */
export async function getRecentlyPlayedGames(
  steamId: string,
  count: number = 5
): Promise<GetRecentlyPlayedGamesResult> {
  const key = process.env.STEAM_WEB_API_KEY;
  if (!key) {
    throw new Error("STEAM_WEB_API_KEY is not configured, please set it in .env.local");
  }

  const url = new URL(
    `${STEAM_API_BASE}/IPlayerService/GetRecentlyPlayedGames/v1/`
  );
  url.searchParams.set("key", key);
  url.searchParams.set("steamid", steamId);
  url.searchParams.set("count", String(count));
  url.searchParams.set("format", "json");

  let res: Response;
  try {
    res = await fetch(url.toString(), {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(15000), // 15s timeout
    });
  } catch (e) {
    const cause = e instanceof Error ? e : new Error(String(e));
    throw new Error(
      `Steam API unreachable (network/DNS/GFW?). ${cause.message}`,
      { cause }
    );
  }

  if (!res.ok) {
    throw new Error(
      `Steam API request failed: ${res.status} ${res.statusText}`
    );
  }

  const data = (await res.json()) as SteamApiResponse;
  const response = data?.response;

  if (!response) {
    return { total_count: 0, games: [] };
  }

  return {
    total_count: response.total_count ?? 0,
    games: response.games ?? [],
  };
}

/**
 * Build full URL for a game icon (format: .../apps/{appid}/{hash}.jpg).
 */
export function getSteamImageUrl(appId: number, hash: string): string {
  if (!hash) return "";
  return `https://media.steampowered.com/steamcommunity/public/images/apps/${appId}/${hash}.jpg`;
}

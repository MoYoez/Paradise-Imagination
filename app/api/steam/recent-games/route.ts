import { NextRequest } from "next/server";
import { getRecentlyPlayedGames } from "@/lib/steam";

/**
 * GET /api/steam/recent-games?count=20
 * STEAM_USER_ID_64 is required, if not provided, it will return an error
 * count is optional, if not provided, it will use the environment variable STEAM_RECENT_GAMES_COUNT
 */
export async function GET(request: NextRequest) {
  const steamid = process.env.STEAM_USER_ID_64;
  const countParam = request.nextUrl.searchParams.get("count");

  if (!steamid) {
    return Response.json(
      { error: "STEAM_USER_ID_64 is not configured" },
      { status: 400 }
    );
  }

  const count = countParam ? Math.min(100, Math.max(1, parseInt(countParam, 10))) : 20;
  if (Number.isNaN(count)) {
    return Response.json({ error: "Parameter count must be a number" }, { status: 400 });
  }

  try {
    const result = await getRecentlyPlayedGames(steamid, count);
    return Response.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Steam API request failed";
    const cause = err instanceof Error && err.cause instanceof Error ? err.cause.message : null;
    return Response.json(
      { error: message, ...(cause && { cause }) },
      { status: 500 }
    );
  }
}

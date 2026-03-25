/**
 * GET /api/avatar
 * Proxies the profile image from AVATAR_SOURCE_URL (server-only) so the client never uses a direct external URL.
 */
export async function GET() {
  const source = process.env.AVATAR_SOURCE_URL?.trim();
  if (!source) {
    return new Response(null, { status: 404 });
  }

  try {
    const upstream = await fetch(source, {
      headers: { Accept: "image/*,*/*" },
      next: { revalidate: 3600 },
    });

    if (!upstream.ok || !upstream.body) {
      return new Response(null, { status: upstream.status === 404 ? 404 : 502 });
    }

    const contentType = upstream.headers.get("content-type") ?? "image/jpeg";

    return new Response(upstream.body, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    });
  } catch {
    return new Response(null, { status: 502 });
  }
}

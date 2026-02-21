[中文](README-ZH-CN.md) | **English**

> What is Paradise? I don't know — maybe on the rainbow?


<p align="center">
<h2 align="center">Paradise Imagination</h2>

  <img src=".github/preview.png" alt="Preview" />
</p>

✨Inspired by spontaneous imagination, this site categorizes pages by the colors of the rainbow, presenting content like a stage show.

> Maple, Sunset, Sand, Forest, Stream, Bluebell, Wisteria, means seven color of rainbow.

---

## Tech Stack

- **Next.js 16**
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / pnpm / yarn

### Install & Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).


> If you need to integrate Steam, you need to add STEAM_WEB_API_KEY and STEAM_USER_ID_64 to your env before using.

### Build

```bash
npm run build
npm start
```

---

## Deployment

### Vercel (recommended)

1. Push the repo to GitHub.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. **Import** this repository.
4. Leave defaults (framework: Next.js, build: `next build`, output: default).
5. Add environment variables in **Settings → Environment Variables** if you use any (e.g. from `.env`).
6. Click **Deploy**. Vercel will build and host the site and give you a URL.

### Other platforms

- **Build command:** `npm run build` or `next build`
- **Output directory:** `.next` (use `npm start` or the platform’s Node.js start command; do not serve static files from `.next` directly)
- **Node version:** 18 or 20 (set in platform config or `engines` in `package.json`)

Example `package.json` for Node version:

```json
"engines": {
  "node": ">=18"
}
```

---

## Project Structure

- `app/` — Next.js App Router (pages, layout, globals)
- `content/` — Section content (wisteria, sunset, forest, etc.)
- `components/` — Reusable UI (Stage, AppShell, theme components)
- `contexts/` — React context (e.g. theme)
- `lib/` — Utilities and config

---

## Contact

For more ways to reach out (email, Discord, etc.), see the **Wisteria / 联系** section on the site or the links in the repo author profile.


## Related

- Background artwork: https://www.pixiv.net/artworks/76371065
- AGPL - V3
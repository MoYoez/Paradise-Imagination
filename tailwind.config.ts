import type { Config } from "tailwindcss";

const themeColors = {
  maple: "#e8b4a0",
  sunset: "#d4a5b5",
  sand: "#e5d4b8",
  forest: "#a8c4a0",
  stream: "#a8c8d4",
  bluebell: "#b8b8d8",
  wisteria: "#c8b8d8",
} as const;

const baseColors = {
  veil: "rgba(248, 246, 243, 0.95)",
  "veil-dark": "rgba(32, 30, 28, 0.04)",
  "layout-start": "#f0ebe3",
  "layout-mid": "#e8e2d8",
  "layout-end": "#e2ddd4",
} as const;

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...themeColors,
        ...baseColors,
      },
      fontFamily: {
        sans: ['"Noto Sans CJK SC"', "sans-serif"],
      },
      borderRadius: {
        md: "20px",
        lg: "24px",
      },
      boxShadow: {
        diffuse: "0 24px 48px rgba(0, 0, 0, 0.06)",
        "diffuse-lg": "0 32px 64px rgba(0, 0, 0, 0.08)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.33, 1, 0.68, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      transitionDuration: {
        bg: "2.5s",
        "theme-ui": "0.5s",
      },
    },
  },
  plugins: [],
} satisfies Config;

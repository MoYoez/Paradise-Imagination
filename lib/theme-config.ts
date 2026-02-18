export const THEME_IDS = [
  "maple",
  "sunset",
  "sand",
  "forest",
  "stream",
  "bluebell",
  "wisteria",
] as const;

export type ThemeId = (typeof THEME_IDS)[number];

export interface ThemeConfig {
  id: ThemeId;
  color: string;
  natural: string;
  section: string;
}

export const THEMES: ThemeConfig[] = [
  { id: "maple", color: "Maple", natural: "枫叶", section: "关于" },
  { id: "sunset", color: "Sunset", natural: "晚霞", section: "作品" },
  { id: "sand", color: "Sand", natural: "沙滩", section: "技能" },
  { id: "forest", color: "Forest", natural: "森林", section: "游玩" },
  { id: "stream", color: "Stream", natural: "溪流", section: "此刻" },
  { id: "bluebell", color: "Bluebell", natural: "蓝铃花", section: "随想" },
  { id: "wisteria", color: "Wisteria", natural: "紫藤萝", section: "联系" },
];

export const THEME_PASTEL: Record<ThemeId, string> = {
  maple: "#e8b4a0",
  sunset: "#d4a5b5",
  sand: "#e5d4b8",
  forest: "#a8c4a0",
  stream: "#a8c8d4",
  bluebell: "#b8b8d8",
  wisteria: "#c8b8d8",
};

export function getThemeById(id: ThemeId): ThemeConfig {
  const t = THEMES.find((x) => x.id === id);
  if (!t) throw new Error(`Unknown theme: ${id}`);
  return t;
}

export function getThemeIndex(id: ThemeId): number {
  return THEME_IDS.indexOf(id);
}

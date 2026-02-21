import type { ComponentType } from "react";
import type { ThemeId } from "@/lib/theme-config";
import MapleContent, { imagery as mapleImagery, imageryConsoleLike as mapleImageryConsoleLike } from "./maple";
import SunsetContent, { imagery as sunsetImagery } from "./sunset";
import SandContent, { imagery as sandImagery } from "./sand";
import ForestContent, { imagery as forestImagery } from "./forest";
import StreamContent, { imagery as streamImagery } from "./stream";
import BluebellContent, { imagery as bluebellImagery } from "./bluebell";
import WisteriaContent, { imagery as wisteriaImagery } from "./wisteria";

export interface SectionPage {
  imagery: string;
  imageryConsoleLike?: boolean;
  Content: ComponentType;
}

const pages: Record<ThemeId, SectionPage> = {
  maple: { imagery: mapleImagery, imageryConsoleLike: mapleImageryConsoleLike, Content: MapleContent },
  sunset: { imagery: sunsetImagery, Content: SunsetContent },
  sand: { imagery: sandImagery, Content: SandContent },
  forest: { imagery: forestImagery, Content: ForestContent },
  stream: { imagery: streamImagery, Content: StreamContent },
  bluebell: { imagery: bluebellImagery, Content: BluebellContent },
  wisteria: { imagery: wisteriaImagery, Content: WisteriaContent },
};

export function getSectionPage(id: ThemeId): SectionPage {
  const page = pages[id];
  if (!page) throw new Error(`Unknown section page: ${id}`);
  return page;
}

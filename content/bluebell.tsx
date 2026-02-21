import { ContentCard } from "@/components/ui/ContentCard";
import { Del } from "@/components/ui/Del";

export const imagery = "零散摘取的思绪";

export default function BluebellContent() {
  return (
    <ContentCard className="content-card--nested">
      <p className="m-0 mb-3">
        貌似没有什么特别~唯一的爱好可能是
        <Del>睡觉💤</Del>
        或者打游戏，有时候感兴趣可能会学着做好吃的饭。
      </p>
      <p className="m-0">
        大概会有一些做小玩具的想法，大脑的创意还是挺多的，不过不知道哪一天会被用竭尽。
      </p>
    </ContentCard>
  );
}

import { ContentCard } from "@/components/ui/ContentCard";

export const imagery = "实时流动的状态";

export default function StreamContent() {
  return (
    <ContentCard className="content-card--nested">
      <p className="m-0 mb-3">
        这段时间在做开源项目，还顺带学了点忘的干干净净的日语，哎头疼。
      </p>
      <p className="m-0 mb-3">
        如果问我大部分时间都跑哪里了，问就是做 BO。
      </p>
      <p className="m-0">
        不过这些越做越能学到知识，算是某种意义上的收获了。
      </p>
    </ContentCard>
  );
}

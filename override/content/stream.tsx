import { ContentCard } from "@/components/ui/ContentCard";

export const imagery = "Status / stream";

export default function StreamContent() {
  return (
    <ContentCard className="content-card--nested">
      <p className="m-0 mb-3">
        Simple description or status text here.
      </p>
    </ContentCard>
  );
}

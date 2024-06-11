import { useLoaderData } from "react-router-dom";
import { contentTypes, type seriesProps } from "@/types/content-types";
import { ContentCard } from "@/components/content-card";
import { Heading } from "@/components/ui/heading";
import { ContentList } from "@/components/content-list";

export function SeriesPage() {
  const series = useLoaderData() as seriesProps[];

  return (
    <>
      <Heading>Popular Series</Heading>
      <ContentList>
        {series.map((serie: seriesProps) => (
          <ContentCard key={serie.id} c={serie} contentType={contentTypes.tv} />
        ))}
      </ContentList>
    </>
  );
}

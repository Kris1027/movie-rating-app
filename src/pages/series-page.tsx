import { useLoaderData } from "react-router-dom";
import { contentTypes, type seriesProps } from "@/types/content-types";
import { ContentCard } from "@/components/content-card";
import { Heading } from "@/components/ui/heading";

export function SeriesPage() {
  const series = useLoaderData() as seriesProps[];

  return (
    <div className="p-4">
      <Heading>Popular Series</Heading>
      <div className="grid grid-cols-3 gap-4 text-centerv p-4">
        {series.map((serie: seriesProps) => (
          <ContentCard
            key={serie.id}
            c={serie}
            contentType={contentTypes.series}
          />
        ))}
      </div>
    </div>
  );
}

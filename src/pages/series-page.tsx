import { SeriesCard } from "@/components/series/series-card";
import { Heading } from "@/components/ui/heading";
import { seriesProps } from "@/types/content-types";
import { useLoaderData } from "react-router-dom";

export function SeriesPage() {
  const series = useLoaderData() as seriesProps[];

  return (
    <div className="p-4">
      <Heading>Popular Series</Heading>
      <div className="grid grid-cols-3 gap-4 text-centerv p-4">
        {series.map((serie: seriesProps) => (
          <SeriesCard key={serie.id} serie={serie} />
        ))}
      </div>
    </div>
  );
}

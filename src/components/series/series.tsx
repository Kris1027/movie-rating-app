import { getSeries } from "@/api/getSeries";
import { useEffect, useState } from "react";
import { SeriesCard } from "./series-card";

export type seriesProps = {
  id: number;
  name: string;
  first_air_date: string;
  overview: string;
  vote_average: number;
  poster_path: string;
};

export function Series() {
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getSeries()
      .then((data) => {
        setSeries(data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div className="grid grid-cols-3 gap-4 text-center">
      {series.map((serie: seriesProps) => (
        <SeriesCard key={serie.id} serie={serie} />
      ))}
    </div>
  );
}

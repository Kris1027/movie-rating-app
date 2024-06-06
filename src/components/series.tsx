import { useEffect, useState } from "react";
import { getSeries } from "../api/getSeries";

type seriesProps = {
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
    <div>
      {series.map((serie: seriesProps) => (
        <div key={serie.id}>
          <h2>{serie.name}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
            alt={`${serie.name} poster`}
          />
        </div>
      ))}
    </div>
  );
}

import { getPopularMovies } from "./getPopularMovies";
import { getPopularSeries } from "./getPopularSeries";

export async function homeLoader() {
  const [movies, series] = await Promise.all([
    getPopularMovies(),
    getPopularSeries(),
  ]);

  return { movies, series };
}

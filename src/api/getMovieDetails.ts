import { API_KEY } from "@/lib/constants";

export async function getMovieDetails({
  movieId,
}: {
  movieId: string | undefined;
}) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch popular series");
    }

    const movieDetails = await res.json();
    return movieDetails;
  } catch (error) {
    console.error("Failed to fetch popular series:", error);
    throw error;
  }
}

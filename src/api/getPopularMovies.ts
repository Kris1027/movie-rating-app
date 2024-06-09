import { API_KEY, DATA_URL } from "@/lib/constants";

export async function getPopularMovies() {
  try {
    const res = await fetch(`${DATA_URL}/movie/popular?language=en-US&page=1`, {
      headers: {
        Authorization: API_KEY,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch all the movies");
    }

    const { results } = await res.json();
    return results;
  } catch (error) {
    console.error("Failed to fetch all the movies:", error);
    throw error;
  }
}

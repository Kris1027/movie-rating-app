export async function getPopularMovies() {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      }
    );

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

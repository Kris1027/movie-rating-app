export async function getMovies() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch movies: ${response.status} ${response.statusText}`
      );
    }

    const { results } = await response.json();
    return results;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    throw error;
  }
}

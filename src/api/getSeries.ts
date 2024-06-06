export async function getSeries() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc",
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch series");
    }

    const { results } = await response.json();
    return results;
  } catch (error) {
    console.error("Failed to fetch series:", error);
    throw error;
  }
}

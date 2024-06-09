export async function getPopularSeries() {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch popular series");
    }

    const { results } = await res.json();
    return results;
  } catch (error) {
    console.error("Failed to fetch popular series:", error);
    throw error;
  }
}

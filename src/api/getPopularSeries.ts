import { API_KEY, DATA_URL } from "@/lib/constants";

export async function getPopularSeries() {
  try {
    const res = await fetch(`${DATA_URL}/tv/popular?language=en-US&page=1`, {
      headers: {
        Authorization: API_KEY,
      },
    });

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

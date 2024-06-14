import { API_KEY, DATA_URL } from "@/lib/constants";

export async function searchData(query: string) {
  try {
    const res = await fetch(
      `${DATA_URL}/search/keyword?query=${query}&page=1&api_key=${API_KEY}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

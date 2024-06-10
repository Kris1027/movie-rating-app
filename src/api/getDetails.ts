import { API_KEY } from "@/lib/constants";
import { type contentTypes } from "@/types/content-types";

const PATHS = {
  movies: "movie",
  series: "tv",
};

export async function getDetails({
  id,
  contentType,
}: {
  id: string | undefined;
  contentType: contentTypes | undefined;
}) {
  if (!id || !contentType) {
    throw new Error("Invalid movie ID or content type");
  }

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/${PATHS[contentType]}/${id}?language=en-US`,
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

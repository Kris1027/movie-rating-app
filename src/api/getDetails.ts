import { API_KEY, DATA_URL } from "@/lib/constants";
import { type contentTypes } from "@/types/content-types";

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
    const res = await fetch(`${DATA_URL}/${contentType}/${id}?language=en-US`, {
      headers: {
        Authorization: API_KEY,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch details");
    }

    const movieDetails = await res.json();
    return movieDetails;
  } catch (error) {
    console.error("Failed to fetch details: ", error);
    throw error;
  }
}

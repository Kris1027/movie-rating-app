import { ACCESS_TOKEN, DATA_URL } from "@/lib/constants";
import { ContentTypeProps } from "@/types/data-types";

export async function fetchDetails(
  contentType: ContentTypeProps,
  movieId: number
) {
  const res = await fetch(
    `${DATA_URL}/${contentType}/${movieId}?language=en-US`,
    {
      headers: {
        Authorization: ACCESS_TOKEN,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

import { ACCESS_TOKEN, API_KEY, DATA_URL } from "@/lib/constants";
import { ContentTypeProps } from "@/types/data-types";

export async function addRating(
  contentType: ContentTypeProps,
  mediaId: number,
  rating: number
) {
  const SESSION_ID = localStorage.getItem("guest_session_id");

  const res = await fetch(
    `${DATA_URL}/${contentType}/${mediaId}/rating?api_key=${API_KEY}&session_id=${SESSION_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: ACCESS_TOKEN,
      },
      body: JSON.stringify({ value: rating }),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to add rating");
  }
  return res.json();
}

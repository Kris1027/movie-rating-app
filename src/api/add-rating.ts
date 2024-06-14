import { API_KEY, DATA_URL } from "@/lib/constants";
import { ContentTypeProps } from "@/types/data-types";

export async function addRating(
  contentType: ContentTypeProps,
  id: number,
  rating: number
) {
  const res = await fetch(
    `${DATA_URL}/${contentType}/${id}/rating?guest_session_id=${localStorage.getItem(
      "guest_session_id"
    )}&api_key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json;charset=utf-8",
      },

      body: `{"value":${rating}}`,
    }
  );

  return res.json();
}

import { API_KEY, DATA_URL } from "@/lib/constants";
import { RatedContentTypeProps } from "@/types/data-types";

export async function fetchRated(contentType: RatedContentTypeProps) {
  const guestSessionId = localStorage.getItem("guest_session_id");

  if (!guestSessionId) {
    throw new Error("Guest session ID not found");
  }

  try {
    const res = await fetch(
      `${DATA_URL}/guest_session/${guestSessionId}/rated/${contentType}?language=en-US&page=1&sort_by=created_at.asc&api_key=${API_KEY}`
    );

    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    throw new Error(`Fetching rated ${contentType}`);
  }
}

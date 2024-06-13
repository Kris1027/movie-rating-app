import { ACCESS_TOKEN, DATA_URL } from "@/lib/constants";

export async function createGuestSession() {
  const res = await fetch(`${DATA_URL}/authentication/guest_session/new`, {
    headers: {
      Authorization: ACCESS_TOKEN,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to create guest session");
  }
  return res.json();
}

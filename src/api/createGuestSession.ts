import { API_KEY, DATA_URL } from "@/lib/constants";

export async function createGuestSession() {
  try {
    const res = await fetch(`${DATA_URL}/authentication/guest_session/new`, {
      headers: {
        Authorization: API_KEY,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to create guest session");
    }
    const { guest_session_id } = await res.json();
    return guest_session_id;
  } catch (error) {
    console.error("Failed to create guest session:", error);
    throw error;
  }
}

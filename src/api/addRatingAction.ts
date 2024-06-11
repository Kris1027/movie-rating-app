import { API_KEY } from "@/lib/constants";

export async function addRatingAction(args: { request: Request }) {
  const data = await args.request.formData();
  const id = data.get("id");
  const rating = data.get("rating");

  return fetch(`https://api.themoviedb.org/3/movie/${id}/rating`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: API_KEY,
    },
    body: JSON.stringify({ value: rating }),
  });
}

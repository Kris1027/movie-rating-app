import { ACCESS_TOKEN, DATA_URL } from "@/lib/constants";
import { ContentTypeProps } from "@/types/data-types";

export async function fetchData(contentType: ContentTypeProps, page: number) {
  const res = await fetch(
    `${DATA_URL}/${contentType}/popular?language=en-US&page=${page}`,
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

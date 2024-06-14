import { isMovie } from "@/lib/is-movie";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { ItemProps } from "@/types/data-types";
import { IMAGE_URL } from "@/lib/constants";

export function MediaCard({ item }: { item: ItemProps }) {
  return (
    <Card>
      <CardHeader>
        <img
          src={`${IMAGE_URL}/${item.poster_path}`}
          alt={isMovie(item) ? item.title : item.name}
          width={200}
          height={300}
        />
      </CardHeader>
      <CardTitle>{isMovie(item) ? item.title : item.name}</CardTitle>
    </Card>
  );
}

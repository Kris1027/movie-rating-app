import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  ContentTypeProps,
  ItemProps,
  RatedContentTypeProps,
} from "@/types/data-types";
import { IMAGE_URL } from "@/lib/constants";
import { RateModal } from "./rate-modal";
import { isMovie } from "@/lib/is-movie";

export function MediaCard({
  item,
  contentType,
}: {
  item: ItemProps;
  contentType: ContentTypeProps | RatedContentTypeProps;
}) {
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
      <CardContent>
        {!item.rating && <RateModal item={item} contentType={contentType} />}
      </CardContent>
    </Card>
  );
}

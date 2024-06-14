import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  ContentTypeProps,
  ItemProps,
  RatedContentTypeProps,
} from "@/types/data-types";
import { IMAGE_URL } from "@/lib/constants";
import { RateModal } from "./rate-modal";
import { isMovie } from "@/lib/is-movie";
import { Star } from "lucide-react";

export function MediaCard({
  item,
  contentType,
}: {
  item: ItemProps;
  contentType: ContentTypeProps | RatedContentTypeProps;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center gap-4">
        <img
          src={`${IMAGE_URL}/${item.poster_path}`}
          alt={isMovie(item) ? item.title : item.name}
          width={300}
        />
        <CardTitle className="text-center">
          {isMovie(item) ? item.title : item.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center py-4">
        {item.rating ? (
          <div className="flex gap-2">
            <Star color="#009ffd" />
            <p>{item.rating}</p>
          </div>
        ) : (
          <RateModal item={item} contentType={contentType} />
        )}
        <div className="flex gap-2">
          <Star color="#fcab10" />
          <p>{item.vote_average.toFixed(2)}</p>
        </div>
      </CardContent>
    </Card>
  );
}

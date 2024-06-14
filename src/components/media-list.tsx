import {
  ContentTypeProps,
  ItemProps,
  RatedContentTypeProps,
} from "@/types/data-types";
import { MediaCard } from "./media-card";

export function MediaList({
  data,
  contentType,
}: {
  data: {
    results: ItemProps[];
  };
  contentType: ContentTypeProps | RatedContentTypeProps;
}) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {data.results.map((item: ItemProps) => (
        <MediaCard key={item.id} item={item} contentType={contentType} />
      ))}
    </div>
  );
}

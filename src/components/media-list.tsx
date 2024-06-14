import {
  ContentTypeProps,
  ItemProps,
  RatedContentType,
} from "@/types/data-types";
import { MediaCard } from "./media-card";

export function MediaList({
  data,
  contentType,
}: {
  data: {
    results: ItemProps[];
  };
  contentType: ContentTypeProps | RatedContentType;
}) {
  return (
    <div className="flex flex-wrap">
      {data.results.map((item: ItemProps) => (
        <MediaCard key={item.id} item={item} contentType={contentType} />
      ))}
    </div>
  );
}

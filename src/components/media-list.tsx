import { ItemProps } from "@/types/data-types";
import { MediaCard } from "./media-card";

type MediaListProps = {
  data: {
    results: ItemProps[];
  };
};

export function MediaList({ data }: MediaListProps) {
  return (
    <div className="flex flex-wrap">
      {data.results.map((item: ItemProps) => (
        <MediaCard key={item.id} item={item} />
      ))}
    </div>
  );
}

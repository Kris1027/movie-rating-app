import { ItemProps, MovieProps } from "@/types/data-types";

export function isMovie(item: ItemProps): item is MovieProps {
  return (item as MovieProps).title !== undefined;
}

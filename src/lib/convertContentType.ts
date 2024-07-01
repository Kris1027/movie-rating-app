import { ContentTypeProps, RatedContentTypeProps } from "@/types/data-types";

export function convertToContentTypeProps(type: string): ContentTypeProps {
  if (type === RatedContentTypeProps.movies) return ContentTypeProps.movie;
  if (type === RatedContentTypeProps.tv) return ContentTypeProps.tv;
  return type as ContentTypeProps;
}

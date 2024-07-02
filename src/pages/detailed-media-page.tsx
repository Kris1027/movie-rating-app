import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchDetails } from "@/api/fetch-details";
import { DetailedMediaCard } from "@/components/detailed-media-card";
import { Loader } from "@/components/loader";
import { ContentTypeProps } from "@/types/data-types";
import { convertToContentTypeProps } from "@/lib/convertContentType";

export function DetailedMediaPage() {
  const { id, contentType } = useParams<{ id: string; contentType: string }>();
  const { data, isLoading, isError } = useQuery({
    queryKey: [contentType, id],
    queryFn: () => {
      const convertedType = convertToContentTypeProps(contentType!);
      if (convertedType in ContentTypeProps) {
        return fetchDetails(convertedType, Number(id));
      }
      throw new Error("Invalid content type");
    },
  });

  if (isLoading) return <Loader />;

  if (!data || isError || !contentType) {
    return <p>An error occurred. Please try again.</p>;
  }

  const convertedContentType = convertToContentTypeProps(contentType);

  return (
    <div className="flex-grow overflow-y-auto p-4 min-h-[calc(100vh-8rem)]">
      <DetailedMediaCard data={data} contentType={convertedContentType} />
    </div>
  );
}

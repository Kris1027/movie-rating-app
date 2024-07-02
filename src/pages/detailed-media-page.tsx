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
    <div className="relative p-4 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] overflow-hidden">
      {data.backdrop_path && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
          }}
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 w-full max-w-4xl flex justify-center">
        <DetailedMediaCard data={data} contentType={convertedContentType} />
      </div>
    </div>
  );
}

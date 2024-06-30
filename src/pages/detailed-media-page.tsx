import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchDetails } from "@/api/fetch-details";
import { DetailedMediaCard } from "@/components/detailed-media-card";
import { Loader } from "@/components/loader";
import { ContentTypeProps, RatedContentTypeProps } from "@/types/data-types";

export function DetailedMediaPage() {
  const { id, contentType } = useParams<{ id: string; contentType: string }>();
  const { data, isLoading, isError } = useQuery({
    queryKey: [contentType, id],
    queryFn: () => {
      if (contentType && contentType in ContentTypeProps) {
        return fetchDetails(contentType as ContentTypeProps, Number(id));
      }
      throw new Error("Invalid content type");
    },
  });

  if (isLoading) return <Loader />;

  if (!data || isError || !contentType || !(contentType in ContentTypeProps)) {
    return <p>An error occurred. Please try again.</p>;
  }

  return (
    <main className="p-4 flex flex-col items-center min-h-[calc(100vh-8rem)]">
      <DetailedMediaCard
        data={data}
        contentType={contentType as ContentTypeProps | RatedContentTypeProps}
      />
    </main>
  );
}

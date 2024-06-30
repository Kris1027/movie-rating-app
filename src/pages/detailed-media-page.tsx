import { fetchDetails } from "@/api/fetch-details";
import { Loader } from "@/components/loader";
import { ContentTypeProps } from "@/types/data-types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function DetailedMediaPage() {
  const { id, contentType } = useParams();
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

  if (!data || isError) {
    return <p>An error occurred. Please try again.</p>;
  }

  console.log(data);

  return (
    <main className="p-4 flex flex-col items-center min-h-[calc(100vh-8rem)]"></main>
  );
}

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchData } from "@/api/fetch-data";
import { ContentTypeProps } from "@/types/data-types";
import { MediaList } from "@/components/media-list";
import { Heading } from "@/components/ui/heading";
import { ContentSwitcher } from "@/components/content-switcher";
import { PaginationComponent } from "@/components/pagination-component";

export function HomePage() {
  const [contentType, setContentType] = useState<ContentTypeProps>(
    ContentTypeProps.movie
  );
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [contentType, page],
    queryFn: () => fetchData(contentType, page),
  });

  const handleToggle = (contentType: ContentTypeProps) => {
    setContentType(contentType);
    setPage(1);
  };

  const handleNextPage = () => {
    if (data?.total_pages && page < data.total_pages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  if (!data) return <p>You need to rate at least one item</p>;
  isLoading && <p>Loading...</p>;
  isError && <p className="text-destructive">Error: {error.message}</p>;

  return (
    <main className="p-4 flex flex-col items-center">
      <ContentSwitcher contentType={contentType} handleToggle={handleToggle} />
      {data && (
        <div className="flex flex-col items-center text-center">
          {contentType === "movie" ? (
            <>
              <Heading>Welcome to Our Movie Oasis</Heading>
              <p className="pb-4">
                Discover the latest and most popular films right here. Dive into
                a world of cinematic wonder and find your next favorite movie
                today
              </p>
            </>
          ) : (
            <>
              <Heading>Welcome to Our TV Show Haven</Heading>
              <p className="pb-4">
                Explore the latest and most popular TV shows. Dive into
                captivating series and find your next binge-worthy favorite
                today
              </p>
            </>
          )}
          <MediaList data={data} contentType={contentType} />
          <PaginationComponent
            page={page}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        </div>
      )}
    </main>
  );
}

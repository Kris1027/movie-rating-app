import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchData } from "@/api/fetch-data";
import { ContentTypeProps, type ItemProps } from "@/types/data-types";
import { isMovie } from "@/lib/is-movie";
import { Button } from "@/components/ui/button";

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

  return (
    <div>
      <h1 className="text-3xl font-bold">Home Page</h1>
      <div className="my-4">
        <Button
          variant="default"
          onClick={() => handleToggle(ContentTypeProps.movie)}
        >
          Fetch Movies
        </Button>
        <Button
          variant="default"
          onClick={() => handleToggle(ContentTypeProps.tv)}
        >
          Fetch TV Shows
        </Button>
      </div>
      {isLoading && <p>Loading...</p>}
      {isError && <p className="text-destructive">Error: {error.message}</p>}
      {data && (
        <div>
          <h2 className="text-2xl font-bold">
            {contentType === "movie" ? "Popular Movies" : "Popular TV Shows"}
          </h2>
          {data.results.map((item: ItemProps) => (
            <p key={item.id}>{isMovie(item) ? item.title : item.name}</p>
          ))}
          <div className="my-4">
            <Button
              variant="default"
              onClick={handlePreviousPage}
              disabled={page === 1}
            >
              Previous
            </Button>
            <Button
              variant="default"
              onClick={handleNextPage}
              disabled={page === data.total_pages}
            >
              Next
            </Button>
            <p>
              Page {page} of {data.total_pages}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

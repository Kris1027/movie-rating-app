import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchRated } from "@/api/fetch-rated";
import { Button } from "@/components/ui/button";
import { RatedContentType } from "@/types/data-types";
import { MediaList } from "@/components/media-list";

export function RatedPage() {
  const [contentType, setContentType] = useState<RatedContentType>(
    RatedContentType.movies
  );

  const { data, isLoading, isError } = useQuery({
    queryKey: ["rated", contentType],
    queryFn: () => fetchRated(contentType),
  });

  const isLoggedIn: boolean = !!localStorage.getItem("guest_session_id");
  if (!isLoggedIn) {
    return <p>You must be logged in to view this page</p>;
  }

  const handleToggle = (contentType: RatedContentType) => {
    setContentType(contentType);
  };

  if (!data) return <p>You need to rate at least one item</p>;
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p className="text-destructive">Error: {isError}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold">Rated Page</h1>
      <div className="my-4">
        <Button
          variant="default"
          onClick={() => handleToggle(RatedContentType.movies)}
        >
          Fetch Movies
        </Button>
        <Button
          variant="default"
          onClick={() => handleToggle(RatedContentType.tv)}
        >
          Fetch TV Shows
        </Button>
      </div>
      {isLoading && <p>Loading...</p>}
      {isError && <p className="text-destructive">Error: {isError}</p>}
      {data && (
        <div>
          <h2 className="text-2xl font-bold">
            {contentType === "movies" ? "Popular Movies" : "Popular TV Shows"}
          </h2>
          <MediaList data={data} contentType={contentType} />
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchRated } from "@/api/fetch-rated";
import { RatedContentTypeProps } from "@/types/data-types";
import { MediaList } from "@/components/media-list";
import { RatedContentSwitcher } from "@/components/rated-content-switcher";
import { Loader } from "@/components/loader";

export function RatedPage() {
  const [contentType, setContentType] = useState<RatedContentTypeProps>(
    RatedContentTypeProps.movies
  );

  const { data: moviesData, isLoading: isMoviesLoading } = useQuery({
    queryKey: ["rated", RatedContentTypeProps.movies],
    queryFn: () => fetchRated(RatedContentTypeProps.movies),
    retry: false,
  });

  const { data: tvData, isLoading: isTvLoading } = useQuery({
    queryKey: ["rated", RatedContentTypeProps.tv],
    queryFn: () => fetchRated(RatedContentTypeProps.tv),
    retry: false,
  });

  const isLoggedIn: boolean = !!localStorage.getItem("guest_session_id");
  if (!isLoggedIn) {
    return <p>You must be logged in to view this page</p>;
  }

  const handleToggle = (contentType: RatedContentTypeProps) => {
    setContentType(contentType);
  };

  if (isMoviesLoading || isTvLoading) return <Loader />;

  const hasRatedMovies = moviesData?.results?.length > 0;
  const hasRatedTvShows = tvData?.results?.length > 0;

  if (!hasRatedMovies && !hasRatedTvShows) {
    return <p>You haven't rated any movies or TV shows yet.</p>;
  }

  const currentData =
    contentType === RatedContentTypeProps.movies ? moviesData : tvData;

  return (
    <main className="p-4 flex flex-col items-center">
      <RatedContentSwitcher
        handleToggle={handleToggle}
        contentType={contentType}
        hasRatedMovies={hasRatedMovies}
        hasRatedTvShows={hasRatedTvShows}
      />
      {currentData && (
        <MediaList data={currentData} contentType={contentType} />
      )}
    </main>
  );
}

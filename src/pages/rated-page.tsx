import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchRated } from "@/api/fetch-rated";
import { RatedContentTypeProps } from "@/types/data-types";
import { MediaList } from "@/components/media-list";
import { RatedContentSwitcher } from "@/components/rated-content-switcher";

export function RatedPage() {
  const [contentType, setContentType] = useState<RatedContentTypeProps>(
    RatedContentTypeProps.movies
  );

  const { data, isLoading, isError } = useQuery({
    queryKey: ["rated", contentType],
    queryFn: () => fetchRated(contentType),
  });

  const isLoggedIn: boolean = !!localStorage.getItem("guest_session_id");
  if (!isLoggedIn) {
    return <p>You must be logged in to view this page</p>;
  }

  const handleToggle = (contentType: RatedContentTypeProps) => {
    setContentType(contentType);
  };

  if (!data) return <p>You need to rate at least one item</p>;
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p className="text-destructive">Error: {isError}</p>;

  return (
    <main className="p-4 flex flex-col items-center">
      <RatedContentSwitcher
        handleToggle={handleToggle}
        contentType={contentType}
      />
      <MediaList data={data} contentType={contentType} />
    </main>
  );
}

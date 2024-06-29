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

  const { data, isLoading, isError } = useQuery({
    queryKey: ["rated", contentType],
    queryFn: () => fetchRated(contentType),
    retry: false,
  });

  const isLoggedIn: boolean = !!localStorage.getItem("guest_session_id");
  if (!isLoggedIn) {
    return <p>You must be logged in to view this page</p>;
  }

  const handleToggle = (contentType: RatedContentTypeProps) => {
    setContentType(contentType);
  };

  if (isLoading) return <Loader />;
  if (!data || data.length === 0) {
    return <p>You haven't rated any {contentType} yet.</p>;
  } else if (isError) {
    return <p>An error occurred. Please try again.</p>;
  }

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

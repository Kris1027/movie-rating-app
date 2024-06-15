import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchData } from "@/api/fetch-data";
import { ContentTypeProps } from "@/types/data-types";
import { MediaList } from "@/components/media-list";
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

  if (!data) return <p>Data not found</p>;
  isLoading && <p>Loading...</p>;
  isError && <p className="text-destructive">Error: {error.message}</p>;

  return (
    <main className="p-4 flex flex-col items-center">
      <ContentSwitcher contentType={contentType} handleToggle={handleToggle} />
      <MediaList data={data} contentType={contentType} />
      <PaginationComponent page={page} setPage={setPage} data={data} />
    </main>
  );
}

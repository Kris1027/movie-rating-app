import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { contentTypes, type dataProps } from "@/types/content-types";
import { ContentSwitcher } from "@/components/content-switcher";
import { ContentCard } from "@/components/content-card";
import { ContentList } from "@/components/content-list";

export function HomePage() {
  const [contentType, setContentType] = useState<contentTypes>(
    contentTypes.movies
  );
  const data = useLoaderData() as dataProps;

  const content =
    contentType === contentTypes.movies ? data.movies : data.series;

  return (
    <>
      <ContentSwitcher
        contentType={contentType}
        setContentType={setContentType}
      />
      <ContentList>
        {content.map((c) => (
          <ContentCard key={c.id} c={c} contentType={contentType} />
        ))}
      </ContentList>
    </>
  );
}

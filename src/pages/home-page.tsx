import { ContentCard } from "@/components/content-card";
import { ContentSwitcher } from "@/components/content-switcher";
import { contentTypes, dataProps } from "@/types/content-types";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export function HomePage() {
  const [contentType, setContentType] = useState<contentTypes>(
    contentTypes.movies
  );
  const data = useLoaderData() as dataProps;

  const content =
    contentType === contentTypes.movies ? data.movies : data.series;

  return (
    <div className="p-4">
      <ContentSwitcher
        contentType={contentType}
        setContentType={setContentType}
      />
      <div className="grid grid-cols-3 gap-4 text-center p-4">
        {content.map((c) => (
          <ContentCard key={c.id} c={c} contentType={contentType} />
        ))}
      </div>
    </div>
  );
}

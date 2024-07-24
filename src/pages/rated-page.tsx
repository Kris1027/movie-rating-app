import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchRated } from '@/api/fetch-rated';
import { RatedContentTypeProps } from '@/types/data-types';
import { MediaList } from '@/components/media-list';
import { RatedContentSwitcher } from '@/components/rated-content-switcher';
import { Loader } from '@/components/loader';
import { MainWrapper } from '@/components/ui/main-wrapper';

export function RatedPage() {
   const [contentType, setContentType] = useState<RatedContentTypeProps>(
      RatedContentTypeProps.movies
   );

   const { data: moviesData, isLoading: isMoviesLoading } = useQuery({
      queryKey: ['rated', RatedContentTypeProps.movies],
      queryFn: () => fetchRated(RatedContentTypeProps.movies),
      retry: false,
   });

   const { data: tvData, isLoading: isTvLoading } = useQuery({
      queryKey: ['rated', RatedContentTypeProps.tv],
      queryFn: () => fetchRated(RatedContentTypeProps.tv),
      retry: false,
   });

   const handleToggle = (contentType: RatedContentTypeProps) => {
      setContentType(contentType);
   };

   if (isMoviesLoading || isTvLoading) return <Loader />;

   const hasRatedMovies = moviesData?.results?.length > 0;
   const hasRatedTvShows = tvData?.results?.length > 0;

   const currentData =
      contentType === RatedContentTypeProps.movies ? moviesData : tvData;

   return (
      <MainWrapper>
         <RatedContentSwitcher
            handleToggle={handleToggle}
            contentType={contentType}
            hasRatedMovies={hasRatedMovies}
            hasRatedTvShows={hasRatedTvShows}
         />
         {currentData && (
            <MediaList data={currentData} contentType={contentType} />
         )}
      </MainWrapper>
   );
}

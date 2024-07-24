import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchData } from '@/api/fetch-data';
import { ContentTypeProps } from '@/types/data-types';
import { MediaList } from '@/components/media-list';
import { ContentSwitcher } from '@/components/content-switcher';
import { PaginationComponent } from '@/components/pagination-component';
import { Loader } from '@/components/loader';
import { Heading } from '@/components/ui/heading';
import { MainWrapper } from '@/components/ui/main-wrapper';

export function HomePage() {
   const [contentType, setContentType] = useState<ContentTypeProps>(
      ContentTypeProps.movie
   );
   const [page, setPage] = useState(1);

   const { data, isLoading, isError } = useQuery({
      queryKey: [contentType, page],
      queryFn: () => fetchData(contentType, page),
   });

   const handleToggle = (newContentType: ContentTypeProps) => {
      setContentType(newContentType);
      setPage(1);
   };

   const renderContent = () => {
      if (isLoading) return <Loader />;
      if (isError)
         return (
            <p className='text-red-500'>An error occurred. Please try again.</p>
         );
      if (!data || !data.results || data.results.length === 0) {
         return (
            <p className='text-center text-gray-500'>
               No {contentType}s available at the moment.
            </p>
         );
      }
      return (
         <>
            <MediaList data={data} contentType={contentType} />
            <PaginationComponent page={page} setPage={setPage} data={data} />
         </>
      );
   };

   return (
      <MainWrapper>
         <Heading>
            {contentType === ContentTypeProps.movie ? 'Movies' : 'TV Shows'}
         </Heading>
         <ContentSwitcher
            contentType={contentType}
            handleToggle={handleToggle}
         />
         {renderContent()}
      </MainWrapper>
   );
}

import { fetchData } from '@/api/fetch-data';
import { searchTvShows } from '@/api/search-tv';
import { Loader } from '@/components/loader';
import { MediaCard } from '@/components/media-card';
import { MediaList } from '@/components/media-list';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { MainWrapper } from '@/components/ui/main-wrapper';
import { ContentTypeProps, TvProps } from '@/types/data-types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export function TvShowsPage() {
   const [query, setQuery] = useState('');
   const [searchResults, setSearchResults] = useState<TvProps[] | null>(null);

   const {
      mutate,
      isPending,
      isError: isSearchError,
   } = useMutation({
      mutationFn: () => searchTvShows(query),
      mutationKey: ['tv search', query],
      onSuccess: (data) => {
         setSearchResults(data.results);
         setQuery('');
      },
   });

   const {
      data,
      isLoading,
      isError: isDataError,
   } = useQuery({
      queryKey: [ContentTypeProps.tv, 1],
      queryFn: () => fetchData(ContentTypeProps.tv, 1),
   });

   const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      if (query.trim()) {
         mutate();
      }
   };

   const renderContent = () => {
      if (isPending || isLoading) return <Loader />;
      if (isSearchError || isDataError)
         return (
            <p className='text-red-500'>An error occurred. Please try again.</p>
         );
      if (searchResults) {
         return (
            <div className='flex flex-col items-center w-full'>
               <h2 className='text-2xl font-bold mb-6'>
                  {searchResults.length === 1
                     ? '1 result'
                     : `${searchResults.length} results`}
               </h2>
               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full'>
                  {searchResults.map((item: TvProps) => (
                     <MediaCard
                        key={item.id}
                        item={item}
                        contentType={ContentTypeProps.tv}
                     />
                  ))}
               </div>
            </div>
         );
      }
      if (data && data.results) {
         return <MediaList data={data} contentType={ContentTypeProps.tv} />;
      }
      return null;
   };

   return (
      <MainWrapper>
         <Heading>TV Shows</Heading>
         <form
            className='w-full max-w-md flex gap-4 my-8'
            onSubmit={handleSubmit}
         >
            <Input
               className='flex-grow'
               type='search'
               onChange={(e) => setQuery(e.target.value)}
               value={query}
               placeholder='Search for a tv show...'
            />
            <Button
               type='submit'
               disabled={isPending || !query.trim()}
               variant='destructive'
            >
               {isPending ? 'Searching...' : 'Search'}
            </Button>
         </form>

         {renderContent()}
      </MainWrapper>
   );
}

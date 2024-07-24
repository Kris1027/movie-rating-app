import { fetchData } from '@/api/fetch-data';
import { searchMovies } from '@/api/search-movies';
import { Loader } from '@/components/loader';
import { MediaCard } from '@/components/media-card';
import { MediaList } from '@/components/media-list';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { MainWrapper } from '@/components/ui/main-wrapper';
import { ContentTypeProps, MovieProps } from '@/types/data-types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export function MoviesPage() {
   const [query, setQuery] = useState('');
   const [searchResults, setSearchResults] = useState<MovieProps[] | null>(
      null
   );

   const {
      mutate,
      isPending,
      isError: isSearchError,
   } = useMutation({
      mutationFn: () => searchMovies(query),
      mutationKey: ['movie search', query],
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
      queryKey: [ContentTypeProps.movie, 1],
      queryFn: () => fetchData(ContentTypeProps.movie, 1),
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
                  {searchResults.map((item: MovieProps) => (
                     <MediaCard
                        key={item.id}
                        item={item}
                        contentType={ContentTypeProps.movie}
                     />
                  ))}
               </div>
            </div>
         );
      }
      if (data && data.results) {
         return <MediaList data={data} contentType={ContentTypeProps.movie} />;
      }
      return null;
   };

   return (
      <MainWrapper>
         <Heading>Movies</Heading>
         <form
            className='w-full max-w-md flex gap-4 my-8'
            onSubmit={handleSubmit}
         >
            <Input
               className='flex-grow'
               type='search'
               onChange={(e) => setQuery(e.target.value)}
               value={query}
               placeholder='Search for a movie...'
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

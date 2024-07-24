import { fetchData } from '@/api/fetch-data';
import { searchMovies } from '@/api/search-movies';
import { Loader } from '@/components/loader';
import { MediaCard } from '@/components/media-card';
import { MediaList } from '@/components/media-list';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ContentTypeProps, MovieProps } from '@/types/data-types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export function SearchPage() {
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

   return (
      <main className='p-4 flex flex-col items-center min-h-[calc(100vh-8rem)]'>
         <form className='text-black flex gap-4 pb-4' onSubmit={handleSubmit}>
            <Input
               className='text-primary'
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

         {isPending || isLoading ? (
            <Loader />
         ) : isSearchError || isDataError ? (
            <p>An error occurred. Please try again.</p>
         ) : searchResults ? (
            <div className='flex flex-col items-center'>
               <h2 className='text-xl font-bold mb-4'>
                  {searchResults.length === 1
                     ? '1 result'
                     : `${searchResults.length} results`}
               </h2>
               <div className='grid grid-cols-4 gap-4'>
                  {searchResults.map((item: MovieProps) => (
                     <MediaCard
                        key={item.id}
                        item={item}
                        contentType={ContentTypeProps.movie}
                     />
                  ))}
               </div>
            </div>
         ) : data && data.results ? (
            <MediaList data={data} contentType={ContentTypeProps.movie} />
         ) : null}
      </main>
   );
}

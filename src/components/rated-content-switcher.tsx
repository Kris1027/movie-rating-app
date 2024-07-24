import { RatedContentTypeProps } from '@/types/data-types';
import { Button } from './ui/button';
import { Heading } from './ui/heading';
import { NoRatedContent } from './no-rated-content';
import { Paragraph } from './ui/paragraph';

export function RatedContentSwitcher({
   handleToggle,
   contentType = RatedContentTypeProps.movies,
   hasRatedMovies,
   hasRatedTvShows,
}: {
   handleToggle: (contentType: RatedContentTypeProps) => void;
   contentType: RatedContentTypeProps;
   hasRatedMovies: boolean;
   hasRatedTvShows: boolean;
}) {
   return (
      <>
         <div className='my-4'>
            <Button
               variant={
                  contentType === RatedContentTypeProps.movies
                     ? 'default'
                     : 'secondary'
               }
               onClick={() => handleToggle(RatedContentTypeProps.movies)}
            >
               Rated Movies
            </Button>
            <Button
               variant={
                  contentType === RatedContentTypeProps.tv
                     ? 'default'
                     : 'secondary'
               }
               onClick={() => handleToggle(RatedContentTypeProps.tv)}
            >
               Rated TV Shows
            </Button>
         </div>
         <div className='flex flex-col items-center text-center'>
            {contentType === RatedContentTypeProps.movies ? (
               <>
                  {hasRatedMovies && (
                     <Heading>Welcome to Your Rated Movies</Heading>
                  )}
                  {hasRatedMovies ? (
                     <Paragraph>
                        Discover the films you have rated and see how they stack
                        up against your personal favorites. Dive into your own
                        curated collection of movies and find out which ones
                        have earned your highest praise. Enjoy revisiting your
                        top-rated films and explore new recommendations based on
                        your ratings
                     </Paragraph>
                  ) : (
                     <NoRatedContent
                        contentType={RatedContentTypeProps.movies}
                     />
                  )}
               </>
            ) : (
               <>
                  {hasRatedTvShows && (
                     <Heading>Welcome to Your Rated TV Shows</Heading>
                  )}
                  {hasRatedTvShows ? (
                     <Paragraph>
                        Explore the TV shows you've rated and see which ones
                        stand out as your top picks. Dive into your personalized
                        list of series and discover which shows have left a
                        lasting impression. Enjoy revisiting your highest-rated
                        TV shows and uncover new recommendations tailored to
                        your viewing preferences
                     </Paragraph>
                  ) : (
                     <NoRatedContent contentType={RatedContentTypeProps.tv} />
                  )}
               </>
            )}
         </div>
      </>
   );
}

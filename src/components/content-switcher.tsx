import { ContentTypeProps } from '@/types/data-types';
import { Button } from './ui/button';
import { Heading } from './ui/heading';
import { Paragraph } from './paragraph';

export function ContentSwitcher({
   contentType = ContentTypeProps.movie,
   handleToggle,
}: {
   contentType: ContentTypeProps;
   handleToggle: (contentType: ContentTypeProps) => void;
}) {
   return (
      <>
         <div className='my-4'>
            <Button
               variant={contentType === 'movie' ? 'default' : 'secondary'}
               onClick={() => handleToggle(ContentTypeProps.movie)}
            >
               Show Movies
            </Button>
            <Button
               variant={contentType === 'tv' ? 'default' : 'secondary'}
               onClick={() => handleToggle(ContentTypeProps.tv)}
            >
               Show TV Shows
            </Button>
         </div>
         <div>
            {contentType === 'movie' ? (
               <>
                  <Heading>Welcome to Our Movie Oasis</Heading>
                  <Paragraph>
                     Discover the latest and most popular films right here. Dive
                     into a world of cinematic wonder and find your next
                     favorite movie today
                  </Paragraph>
               </>
            ) : (
               <>
                  <Heading>Welcome to Our TV Show Haven</Heading>
                  <Paragraph>
                     Explore the latest and most popular TV shows. Dive into
                     captivating series and find your next binge-worthy favorite
                     today
                  </Paragraph>
               </>
            )}
         </div>
      </>
   );
}

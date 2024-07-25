import { Star } from 'lucide-react';
import { RatedContentTypeProps } from '@/types/data-types';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { CONTENT_TYPE } from '@/lib/constants';
import { Heading } from './ui/heading';
import { Paragraph } from './ui/paragraph';

export function NoRatedContent({
   contentType,
}: {
   contentType: RatedContentTypeProps;
}) {
   const navigate = useNavigate();

   const handleExploreClick = () => {
      const targetRoute = contentType === 'movies' ? '/movies' : '/tv-shows';
      navigate(targetRoute);
   };

   return (
      <div className='flex flex-col justify-center items-center bg-gradient-to-b from-background to-muted p-4'>
         <Star color='#009ffd' className='w-16 h-16 mx-auto mb-4' />
         <Heading>No Rated {CONTENT_TYPE[contentType]}</Heading>
         <Paragraph>
            You haven't rated any {CONTENT_TYPE[contentType]} yet. Start
            watching and rating {CONTENT_TYPE[contentType]} to see them here!
         </Paragraph>
         <Button
            variant='default'
            size='lg'
            onClick={handleExploreClick}
            className='font-semibold'
         >
            Explore {CONTENT_TYPE[contentType]}
         </Button>
      </div>
   );
}

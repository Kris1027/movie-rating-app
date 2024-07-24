import { Star } from 'lucide-react';
import { RatedContentTypeProps } from '@/types/data-types';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { CONTENT_TYPE } from '@/lib/constants';

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
         <div className='text-center p-8 rounded-lg shadow-lg bg-card max-w-md'>
            <Star color='#009ffd' className='w-16 h-16 mx-auto mb-4' />
            <p className='text-3xl font-bold mb-4 text-foreground'>
               No Rated {CONTENT_TYPE[contentType]}
            </p>
            <p className='text-xl mb-6 text-muted-foreground'>
               You haven't rated any {CONTENT_TYPE[contentType]} yet. Start
               watching and rating {CONTENT_TYPE[contentType]} to see them here!
            </p>
            <Button
               variant='default'
               size='lg'
               onClick={handleExploreClick}
               className='font-semibold'
            >
               Explore {CONTENT_TYPE[contentType]}
            </Button>
         </div>
      </div>
   );
}

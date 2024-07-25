import { Menu, X } from 'lucide-react';

export default function Burger({
   setToggled,
   toggled,
}: {
   setToggled: React.Dispatch<React.SetStateAction<boolean>>;
   toggled: boolean;
}) {
   return (
      <>
         {!toggled ? (
            <Menu
               className='w-5 h-5 cursor-pointer z-50'
               onClick={() => setToggled((prevToggle) => !prevToggle)}
            />
         ) : (
            <X
               className='w-5 h-5 cursor-pointer z-50'
               onClick={() => setToggled((prevToggle) => !prevToggle)}
            />
         )}
      </>
   );
}

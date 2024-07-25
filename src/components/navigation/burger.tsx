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
               className='cursor-pointer z-50'
               onClick={() => setToggled((prevToggle) => !prevToggle)}
               size={32}
            />
         ) : (
            <X
               className='cursor-pointer z-50'
               onClick={() => setToggled((prevToggle) => !prevToggle)}
               size={32}
            />
         )}
      </>
   );
}

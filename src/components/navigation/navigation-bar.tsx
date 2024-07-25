import { useState } from 'react';
import { useMediaQuery } from '../../hooks/use-media-query';
import MobileMenu from './mobile-menu';
import DesktopMenu from './desktop-menu';
import Burger from './burger';
import { ModeToggle } from './mode-toggle';
import { Login } from './login';

export type NaviLinksProps = {
   links: { href: string; title: string }[];
};

export default function NavigationBar() {
   const [toggled, setToggled] = useState(false);
   const matches = useMediaQuery('(min-width: 768px)');

   const links = [
      { title: 'Home', href: '/' },
      { title: 'Rated', href: '/rated' },
      { title: 'Movies', href: '/movies' },
      { title: 'TV Shows', href: '/tv-shows' },
   ];

   return (
      <nav className='flex justify-between items-center w-full py-5 px-10 max-w-7xl mx-auto'>
         {matches && <DesktopMenu links={links} />}
         <div className='flex gap-4 z-50'>
            <ModeToggle />
            <Login />
         </div>
         {!matches && <Burger setToggled={setToggled} toggled={toggled} />}
         {toggled && !matches && (
            <MobileMenu links={links} setToggled={setToggled} />
         )}
      </nav>
   );
}

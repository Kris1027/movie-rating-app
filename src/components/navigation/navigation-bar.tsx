import { useState } from 'react';
import { useMediaQuery } from '../../hooks/use-media-query';
import MobileMenu from './mobile-menu';
import DesktopMenu from './desktop-menu';
import Burger from './burger';
import { ModeToggle } from './mode-toggle';
import { Login } from './login';
import { Logo } from './logo';
import clsx from 'clsx';

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
         <div
            className={clsx(
               'flex gap-2 z-50 items-center justify-end',
               !matches && 'w-full'
            )}
         >
            <Logo />
            <ModeToggle />
            <Login />
            {!matches && <Burger setToggled={setToggled} toggled={toggled} />}
         </div>
         {toggled && !matches && (
            <MobileMenu links={links} setToggled={setToggled} />
         )}
      </nav>
   );
}

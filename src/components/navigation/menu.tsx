import { Link } from 'react-router-dom';
import {
   NavigationMenu,
   NavigationMenuList,
   NavigationMenuItem,
} from '../ui/navigation-menu';

const pages = [
   { title: 'Home', href: '/' },
   { title: 'Rated', href: '/rated' },
   { title: 'Movies', href: '/movies' },
   { title: 'TV Shows', href: '/tv-shows' },
];

export function Menu() {
   return (
      <NavigationMenu>
         <NavigationMenuList className='flex flex-col md:flex-row gap-2 md:gap-4'>
            {pages.map((page) => (
               <NavigationMenuItem key={page.href}>
                  <Link to={page.href}>{page.title}</Link>
               </NavigationMenuItem>
            ))}
         </NavigationMenuList>
      </NavigationMenu>
   );
}

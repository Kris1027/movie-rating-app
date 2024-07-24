import { Link } from 'react-router-dom';
import {
   NavigationMenu,
   NavigationMenuItem,
   NavigationMenuList,
   navigationMenuTriggerStyle,
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
         <NavigationMenuList>
            {pages.map((page) => (
               <NavigationMenuItem key={page.href}>
                  <Link className={navigationMenuTriggerStyle()} to={page.href}>
                     {page.title}
                  </Link>
               </NavigationMenuItem>
            ))}
         </NavigationMenuList>
      </NavigationMenu>
   );
}

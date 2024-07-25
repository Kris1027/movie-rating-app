import { Link } from 'react-router-dom';
import { NaviLinksProps } from './navigation-bar';

export default function MobileMenu({
   links,
   setToggled,
}: {
   links: NaviLinksProps['links'];
   setToggled: React.Dispatch<React.SetStateAction<boolean>>;
}) {
   return (
      <ul className='fixed flex flex-col justify-center gap-24 items-center bottom-0 left-0 w-full h-screen text-4xl z-40 text-foreground bg-gradient-to-b from-background to-muted'>
         {links.map((link) => (
            <li
               className='font-bold'
               key={link.href}
               onClick={() => setToggled((prevToggle) => !prevToggle)}
            >
               <Link to={link.href}>{link.title}</Link>
            </li>
         ))}
      </ul>
   );
}

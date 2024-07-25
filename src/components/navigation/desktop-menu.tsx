import { NaviLinksProps } from './navigation-bar';

export default function DesktopMenu({
   links,
}: {
   links: NaviLinksProps['links'];
}) {
   return (
      <ul className='flex text-lg gap-8'>
         {links.map((link) => (
            <li className='font-bold' key={link.href}>
               <a href={link.href}>{link.title}</a>
            </li>
         ))}
      </ul>
   );
}

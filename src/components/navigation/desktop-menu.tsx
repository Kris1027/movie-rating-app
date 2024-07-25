import { NaviLinksProps } from './navigation-bar';

export default function DesktopMenu({
   links,
}: {
   links: NaviLinksProps['links'];
}) {
   return (
      <ul className='flex text-2xl gap-16'>
         {links.map((link) => (
            <li className='font-bold' key={link.href}>
               <a href={link.href}>{link.title}</a>
            </li>
         ))}
      </ul>
   );
}

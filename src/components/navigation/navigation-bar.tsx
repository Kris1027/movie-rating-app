import { Login } from './login';
import { Logo } from './logo';
import { Menu } from './menu';
import { ModeToggle } from './mode-toggle';

export function NavigationBar() {
   return (
      <header className='flex justify-between p-4 text-primary bg-primary-foreground max-w-7xl mx-auto'>
         <Logo />
         <div className='flex gap-10'>
            <Login />
            <Menu />
            <ModeToggle />
         </div>
      </header>
   );
}

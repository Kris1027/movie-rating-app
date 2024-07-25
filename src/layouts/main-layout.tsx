import { ThemeProvider } from '@/providers/theme-provider';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/footer';
import { LogoutPage } from '@/pages/logout-page';
import NavigationBar from '@/components/navigation/navigation-bar';

export function MainLayout() {
   const isLoggedIn: boolean = !!localStorage.getItem('guest_session_id');

   return (
      <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
         <NavigationBar />
         {isLoggedIn ? <Outlet /> : <LogoutPage />}
         <Footer />
      </ThemeProvider>
   );
}

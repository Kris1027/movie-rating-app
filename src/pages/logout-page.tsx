import { Login } from '@/components/navigation/login';
import { MainWrapper } from '@/components/ui/main-wrapper';
import { LogOut } from 'lucide-react';

export function LogoutPage() {
   return (
      <MainWrapper>
         <div className='flex flex-col justify-center items-center bg-gradient-to-b from-background to-muted p-4'>
            <LogOut className='w-16 h-16 mx-auto mb-4 text-primary' />
            <h1 className='text-3xl font-bold mb-4 text-foreground'>
               Access Restricted
            </h1>
            <p className='text-xl mb-6 text-muted-foreground'>
               You must be logged in to view this page
            </p>
            <Login />
         </div>
      </MainWrapper>
   );
}

import { useEffect, useState } from 'react';
import { createGuestSession } from '@/api/create-guest-session';
import { Button } from '@/components/ui/button';
import { useMutation } from '@tanstack/react-query';

export function Login() {
   const [isLoggedIn, setIsLoggedIn] = useState(
      !!localStorage.getItem('guest_session_id')
   );

   const { data, mutate, isError, isPending, error } = useMutation({
      mutationFn: createGuestSession,
      mutationKey: ['create-guest-session'],
      onSuccess: () => {
         setIsLoggedIn(true);
         window.location.reload();
      },
   });

   const handleLogin = async (event: React.FormEvent) => {
      event.preventDefault();
      mutate();
   };

   const handleLogout = () => {
      localStorage.removeItem('guest_session_id');
      setIsLoggedIn(false);
      window.location.reload();
   };

   useEffect(() => {
      if (data) {
         localStorage.setItem('guest_session_id', data.guest_session_id);
         setIsLoggedIn(true);
         window.location.reload();
      }
   }, [data]);

   return (
      <>
         {isLoggedIn ? (
            <Button size='sm' variant='destructive' onClick={handleLogout}>
               Logout
            </Button>
         ) : (
            <Button
               size='sm'
               variant='destructive'
               onClick={handleLogin}
               disabled={isPending}
            >
               {isPending ? 'Logging in...' : 'Login'}
            </Button>
         )}
         {isError && <p className='text-destructive'>Error: {error.message}</p>}
      </>
   );
}

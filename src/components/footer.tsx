export function Footer() {
   const date = new Date().getFullYear();

   return (
      <footer className='p-4 text-center text-primary bg-primary-foreground max-w-7xl mx-auto'>
         <p>
            ©{date} All rights reserved. Designed & crafted with love by{' '}
            <a
               href='https://www.linkedin.com/in/krzysztof-obarzanek-6b8803254/'
               target='_blank'
               rel='noopener noreferrer'
               className='hover:underline font-bold'
            >
               Kris1027
            </a>
         </p>
      </footer>
   );
}

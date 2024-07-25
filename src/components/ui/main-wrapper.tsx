export function MainWrapper({ children }: { children: React.ReactNode }) {
   return (
      <main className='p-6 flex flex-col items-center min-h-[calc(100vh-8rem)] max-w-7xl mx-auto bg-gradient-to-b from-background to-muted'>
         {children}
      </main>
   );
}

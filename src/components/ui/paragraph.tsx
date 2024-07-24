export function Paragraph({ children }: { children: React.ReactNode }) {
   return (
      <p className='pb-4 text-sm md:text-base lg:text-lg text-center opacity-70 max-w-7xl mx-auto'>
         {children}
      </p>
   );
}

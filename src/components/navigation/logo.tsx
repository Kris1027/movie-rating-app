import { Link } from 'react-router-dom';

export function Logo() {
   return (
      <Link to='/'>
         <h1 className='text-lg lg:text-2xl font-bold'>📽️ Movie Rating App</h1>
      </Link>
   );
}

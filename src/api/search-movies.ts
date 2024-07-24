import { API_KEY, DATA_URL } from '@/lib/constants';

export async function searchMovies(query: string) {
   try {
      const res = await fetch(
         `${DATA_URL}/search/movie?query=${query}&api_key=${API_KEY}`
      );

      if (!res.ok) {
         throw new Error('Failed to search movies data');
      }

      return await res.json();
   } catch (error) {
      console.error('Error searching movies data:', error);
      throw error;
   }
}

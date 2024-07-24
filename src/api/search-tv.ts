import { API_KEY, DATA_URL } from '@/lib/constants';

export async function searchTvShows(query: string) {
   try {
      const res = await fetch(
         `${DATA_URL}/search/tv?query=${query}&api_key=${API_KEY}`
      );

      if (!res.ok) {
         throw new Error('Failed to search tv shows data');
      }

      return await res.json();
   } catch (error) {
      console.error('Error searching tv shows data:', error);
      throw error;
   }
}

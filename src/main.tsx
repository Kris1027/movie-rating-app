import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { MainLayout } from './layouts/main-layout.tsx';
import { HomePage } from './pages/home-page.tsx';
import { RatedPage } from './pages/rated-page.tsx';
import { MoviesPage } from './pages/movies-page.tsx';
import { DetailedMediaPage } from './pages/detailed-media-page.tsx';
import { TvShowsPage } from './pages/tvshows-page.tsx';

const queryClient = new QueryClient();

const router = createHashRouter([
   {
      path: '/',
      element: <MainLayout />,
      children: [
         {
            path: '/',
            index: true,
            element: <HomePage />,
         },
         {
            path: '/rated',
            element: <RatedPage />,
         },
         {
            path: '/movies',
            element: <MoviesPage />,
         },
         {
            path: '/tv-shows',
            element: <TvShowsPage />,
         },
         {
            path: ':contentType/:id',
            element: <DetailedMediaPage />,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
   <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
   </QueryClientProvider>
);

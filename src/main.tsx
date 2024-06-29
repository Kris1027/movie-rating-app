import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { MainLayout } from "./layouts/main-layout.tsx";
import { HomePage } from "./pages/home-page.tsx";
import { RatedPage } from "./pages/rated-page.tsx";
import { SearchPage } from "./pages/search-page.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
      },
      {
        path: "/rated",
        element: <RatedPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

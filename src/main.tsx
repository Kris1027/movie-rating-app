import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import { ClerkProvider } from "@clerk/clerk-react";

import { Layout } from "./components/layout.tsx";
import { HomePage } from "./pages/home-page.tsx";
import { LoginPage } from "./pages/login-page.tsx";
import { MoviesPage } from "./pages/movies-page.tsx";
import { SeriesPage } from "./pages/series-page.tsx";
import { RatedPage } from "./pages/rated-page.tsx";
import { ContentDetailsPage } from "./pages/content-details-page.tsx";

import { getPopularMovies } from "./api/getPopularMovies.ts";
import { getPopularSeries } from "./api/getPopularSeries.ts";
import { homeLoader } from "./api/homeLoader.ts";
import { detailsLoader } from "./api/detailsLoader.ts";
import { addRatingAction } from "./api/addRatingAction.ts";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/movie",
        element: <MoviesPage />,
        loader: getPopularMovies,
      },
      {
        path: "/tv",
        element: <SeriesPage />,
        loader: getPopularSeries,
      },
      {
        path: "/:contentType/:id",
        element: <ContentDetailsPage />,
        loader: detailsLoader,
      },
      {
        path: "/rated",
        element: <RatedPage />,
        action: addRatingAction,
      },
    ],
  },
]);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);

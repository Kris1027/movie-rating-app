import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import { Layout } from "./components/layout.tsx";
import { HomePage } from "./pages/home-page.tsx";
import { LoginPage } from "./pages/login-page.tsx";
import { MoviesPage } from "./pages/movies-page.tsx";
import { SeriesPage } from "./pages/series-page.tsx";
import { RatedPage } from "./pages/rated-page.tsx";

import { getPopularMovies } from "./loaders/getPopularMovies.ts";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/movies",
        element: <MoviesPage />,
        loader: getPopularMovies,
      },
      {
        path: "/series",
        element: <SeriesPage />,
      },
      {
        path: "/rated",
        element: <RatedPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

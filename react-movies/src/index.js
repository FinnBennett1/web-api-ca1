import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import PopularMovies from "./pages/popularMovies";
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";
import Login from "./components/auth/logIn";
import SignUp from "./components/auth/signUp";
import { auth } from "./firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

// PrivateRoute Component
const PrivateRoute = ({ children }) => {
  const [user] = useAuthState(auth);

  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route path="/movies/popular" element={<PopularMovies />} />
            <Route path="/movies/trending" element={<TrendingMoviesPage />} />
            <Route path="/movies/now-playing" element={<NowPlayingMoviesPage />} />

            {/* Private Routes */}
            <Route
              path="/movies/favorites"
              element={
                <PrivateRoute>
                  <FavoriteMoviesPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/reviews/form"
              element={
                <PrivateRoute>
                  <AddMovieReviewPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/reviews/:id"
              element={
                <PrivateRoute>
                  <MovieReviewPage />
                </PrivateRoute>
              }
            />

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);

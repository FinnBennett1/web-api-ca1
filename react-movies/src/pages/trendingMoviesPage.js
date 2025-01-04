import React from "react";
import { getTrendingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const TrendingMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    "trending",
    () => getTrendingMovies("day") // Defaults to daily trending movies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;


  const addToFavorites = (movieId) => true;

  return (
    <PageTemplate
      title="Trending Movies"
      movies={movies}
      action={(movie) => <AddToFavoritesIcon movie={movie} />}
    />
  );
};

export default TrendingMoviesPage;

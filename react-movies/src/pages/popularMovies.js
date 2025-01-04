import React, { useContext } from "react";
import { getPopularMovies } from "../api/tmdb-api";
import { MoviesContext } from "../contexts/moviesContext";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import MarkAsWatched from "../components/cardIcons/markAsWatched";


const PopularMovies = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('popular', getPopularMovies);
  const { markAsWatched, watched } = useContext(MoviesContext);
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

//   // Redundant, but necessary to avoid app crashing.
//   const favorites = movies.filter(m => m.favorite)
//   localStorage.setItem('favorites', JSON.stringify(favorites))
//   const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Popular Movies "
      movies={movies}
      action={(movie) => {
        return <MarkAsWatched movie={movie} />
      }}
    />
);
};
export default PopularMovies;
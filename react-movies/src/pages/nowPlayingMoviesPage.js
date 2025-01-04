import React from "react";
import { getNowPlayingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch';

const NowPlayingMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery('nowPlaying', getNowPlayingMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  return (
    <PageTemplate
      title="Now Playing in Theaters"
      movies={movies}
      action={(movie) => <AddToMustWatchIcon movie={movie} />}
    />
  );
};

export default NowPlayingMoviesPage;

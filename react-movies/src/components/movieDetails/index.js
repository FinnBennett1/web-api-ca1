import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import { useQuery } from "react-query";
import { getMovieCast, getSimilarMovies } from "../../api/tmdb-api";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";


const root = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  padding: 1.5,
  margin: 0,
};
const chip = { margin: 0.5 };

const scrollContainer = {
  display: "flex",
  overflowX: "auto",
  padding: "1em",
  gap: "1em",
};

const similarMovieCard = {
  minWidth: "150px",
  textAlign: "center",
  flexShrink: 0,
};

const MovieDetails = ({ movie }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [castDrawerOpen, setCastDrawerOpen] = useState(false);

  const { data: castData, error: castError, isLoading: castLoading } = useQuery(
    ["movieCast", { id: movie.id }],
    getMovieCast
  );

  const {
    data: similarMoviesData,
    error: similarMoviesError,
    isLoading: similarMoviesLoading,
  } = useQuery(["similarMovies", { id: movie.id }], getSimilarMovies);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper component="ul" sx={{ ...root }}>
        <li>
          <Chip label="Genres" sx={{ ...chip }} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{ ...chip }} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={{ ...root }}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={'${movie.vote_average} (${movie.vote_count})'}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>

      <Typography variant="h5" component="h3">
        Cast
      </Typography>
      {castLoading ? (
        <Typography variant="body1">Loading Cast...</Typography>
      ) : castError ? (
        <Typography variant="body1">{castError.message}</Typography>
      ) : (
        <Paper component="ul" sx={{ ...root }}>
          {castData.cast.slice(0, 5).map((member) => (
            <li key={member.id}>
              <Chip
                label={`${member.name} as ${member.character}`}
                sx={{ ...chip }}
              />
            </li>
          ))}
        </Paper>
      )}

      <Fab
        color="primary"
        variant="extended"
        onClick={() => setCastDrawerOpen(true)}
        sx={{
          position: "fixed",
          bottom: "5em",
          right: "1em",
        }}
      >
        Full Cast
      </Fab>

      <Drawer
        anchor="top"
        open={castDrawerOpen}
        onClose={() => setCastDrawerOpen(false)}
      >
        <Typography variant="h5" component="h3" sx={{ padding: 2 }}>
          Full Cast
        </Typography>
        {castData &&
          castData.cast.map((member) => (
            <Typography key={member.id} variant="body1" sx={{ padding: 1 }}>
              {member.name} as {member.character}
            </Typography>
          ))}
      </Drawer>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: "fixed",
          bottom: "1em",
          right: "1em",
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <MovieReviews movie={movie} />
      </Drawer>

      <Box sx={{ marginTop: "2em" }}>
  <Typography variant="h5" component="h3" sx={{ marginBottom: "1em" }}>
    Similar Movies
  </Typography>
  {similarMoviesLoading ? (
    <CircularProgress />
  ) : similarMoviesError ? (
    <Typography variant="body1">{similarMoviesError.message}</Typography>
  ) : (
    <Box sx={{ ...scrollContainer }}>
      {similarMoviesData.results.map((similarMovie) => (
        <Link
          to={`/movies/${similarMovie.id}`}
          key={similarMovie.id}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Box sx={{ ...similarMovieCard }}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${similarMovie.poster_path}`}
              alt={similarMovie.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <Typography variant="body2" sx={{ marginTop: "0.5em" }}>
              {similarMovie.title}
            </Typography>
          </Box>
        </Link>
      ))}
    </Box>
  )}
</Box>
    </>
  );
};

export default MovieDetails;

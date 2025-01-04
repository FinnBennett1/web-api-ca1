import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";

const MarkAsWatched = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleMarkAsWatched = (e) => {
    e.preventDefault();
    context.markAsWatched(movie);
  };

  return (
    <IconButton aria-label="Mark as watched" onClick={handleMarkAsWatched}>
      <CheckIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default MarkAsWatched;
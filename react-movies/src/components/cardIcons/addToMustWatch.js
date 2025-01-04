import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext"; // Import MoviesContext
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd"; // Correct the icon import

const AddToMustWatchIcon = ({ movie }) => {
  const context = useContext(MoviesContext); // Access the context

  const handleAddToMustWatch = (e) => {
    e.preventDefault(); // Prevent default behavior (if needed)
    context.addToMustWatch(movie); // Call addToMustWatch function from context
  };

  return (
    <IconButton aria-label="add to must watch" onClick={handleAddToMustWatch}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToMustWatchIcon;

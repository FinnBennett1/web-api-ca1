import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [mustWatch, setMustWatch] = useState( [] )
  const [watched, setMarkedAsWatched] = useState( [] )

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  const addToMustWatch = (movie) => {
    let newMustWatch = [];
    if(!mustWatch.includes(movie.id)){
      newMustWatch = [...mustWatch, movie.id];
      console.log("Movie added:", movie.id);
    }
    else{
      newMustWatch = [...mustWatch];
      console.log("Movie already in list:", movie.id);
    }
  
    setMustWatch(newMustWatch)
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  
  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const markAsWatched = (movie) => {
    let newMarkedWatched = [];
    if(!watched.includes(movie.id)){
      newMarkedWatched = [...watched, movie.id];
      console.log("Movie added:", movie.id);
    }
    else{
      newMarkedWatched = [...watched];
      console.log("Movie already in list:", movie.id);
    }
  
    setMarkedAsWatched(newMarkedWatched)
  };



  

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToMustWatch,
        markAsWatched
        
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
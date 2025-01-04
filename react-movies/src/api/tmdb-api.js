

export const getMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};


  
export const getMovie = (args) => {
  console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  console.log("Movie ID:", id)
  return fetch(
      `http://localhost:8080/api/movies/${id}`
  ).then((response) => {
      if (!response.ok) {
          return response.json().then((error) => {
              throw new Error(error.status_message || "Something went wrong");
          });
      }
      return response.json();
  })
      .catch((error) => {
          throw error
      });
};

  
export const getGenres = () => {
  return fetch(
      `http://localhost:8080/api/movies/tmdb/genres`
  ).then( (response) => {
      if (!response.ok) {
          return response.json().then((error) => {
              throw new Error(error.status_message || "Something went wrong");
          });
      }
      return response.json();
  })
      .catch((error) => {
          throw error
      });
};
  
export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
      `http://localhost:8080/api/movies/${id}/tmdb/movie-images`
  ).then( (response) => {
      if (!response.ok) {
          return response.json().then((error) => {
              throw new Error(error.status_message || "Something went wrong");
          });
      }
      return response.json();
  })
      .catch((error) => {
          throw error
      });
};
// unchnaged to get from api due to error 
  export const getMovieReviews = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getUpcomingMovies = () => {
    return fetch(
        `http://localhost:8080/api/movies/tmdb/upcoming`
    ).then((response) => {
        if (!response.ok) {
            return response.json().then((error) => {
                throw new Error(error.status_message || "Something went wrong");
            });
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};
// unchnaged to get from api due to error 
// new static 
  export const getPopularMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
  };
  //new static 2
  export const getTrendingMovies = () => {
    return fetch(
        `http://localhost:8080/api/movies/tmdb/trending`
    ).then((response) => {
        if (!response.ok) {
            return response.json().then((error) => {
                throw new Error(error.status_message || "Something went wrong");
            });
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};
  
// unchnaged to get from api due to error 
  //new static 3
  export const getNowPlayingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.status_message || "Something went wrong");
          });
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };
  


  // unchnaged to get from api due to error 
  //new paramertised (id)  (used)
  export const getMovieCast = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};



//new paramertised (id)  (used)
export const getSimilarMovies = (args) => {
  console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
      `http://localhost:8080/api/movies/${id}/tmdb/similar-movies`
  ).then((response) => {
      if (!response.ok) {
          return response.json().then((error) => {
              throw new Error(error.status_message || "Something went wrong");
          });
      }
      return response.json();
  })
      .catch((error) => {
          throw error
      });
};

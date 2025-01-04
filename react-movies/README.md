
# Assignment 1 - ReactJS App

**Name:** Finn Bennett

## Overview
This repository contains a ReactJS application built for managing and exploring movies. The app integrates multiple features, including user authentication, dynamic content rendering, and data fetching from TMDB API.

---

### Features
- **User Authentication**: Login and Sign-Up using Firebase.
- **Trending Movies**: Display trending movies dynamically fetched from TMDB API.
- **Popular Movies**: Showcase top-rated movies.
- **Now Playing Movies**: List currently playing movies in theaters.
- **Movie Details Enhancements**:
  - Display cast members.
  - Show similar movies.
- **Protected Routes**: Only logged-in users can access Favorites, Review Form, and Reviews pages.

---

### Setup Requirements
To set up the project locally:
1. Clone the repository:
   git clone <https://github.com/FinnBennett1/react-movies-labs.git>
   
2. Install dependencies:
    npm install
   
3. Set up Firebase:
   - Add a `.env` file at the root level with your Firebase and TMDB API keys:
     REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
     REACT_APP_TMDB_KEY=your-tmdb-api-key
     
4. Start the development server:
   
   npm start
   

---

### API Endpoints
The following TMDB API endpoints are used:

- **Discover movies**: `discover/movie`
- **Movie details**: `movie/:id`
- **Movie genres**: `genre/movie/list`
- **Popular movies**: `movie/top_rated`
- **Trending movies**: `trending/movie/:timeWindow`
- **Now Playing movies**: `movie/now_playing`
- **Movie cast**: `movie/:id/credits`
- **Similar movies**: `movie/:id/similar`

---

### Routing
The application supports the following routes:

- **Public Routes**:
  - `/` - Home page displaying discover movies.
  - `/movies/popular` - Displays popular movies.
  - `/movies/upcoming` - Displays upcoming movies.
  - `/movies/trending` - Displays trending movies.
  - `/movies/now-playing` - Displays now-playing movies.
  - `/movies/:id` - Displays detailed information about a specific movie.
  
- **Protected Routes** (require authentication):
  - `/movies/favorites` - Displays user-favorite movies.
  - `/reviews/form` - Form to submit a movie review.
  - `/reviews/:id` - Displays a specific movie review.

---

### Independent Learning
This project involved exploring new technologies and resources not covered in lectures:
-**Sorting and Filtering**: Tried to add differnt sorting and filtering, but could not get it to work. 
- **Firebase Integration**: Implemented user authentication for login and sign-up using [this comprehensive guide](https://medium.com/@Rushabh_/implementing-user-login-and-signup-with-reactjs-and-firebase-a-comprehensive-guide-7300bd33cb01).
- **Generative AI for Development**:
  - Utilized generative AI tools to debug and resolve code errors during implementation.
  - Improved code efficiency and design with AI suggestions.
  

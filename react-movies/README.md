
# Assignment 2 api 

**Name:** Finn Bennett

## Overview
This repository contains a ReactJS application built for managing and exploring movies. The app integrates multiple features, including user authentication, dynamic content rendering, and data fetching from TMDB API going through my custom API.

---

### Features
- **User Authentication**: Login and Sign-Up using Firebase.
- ** Use of API**: the front end uses the api to call the data from the databases

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
     
4. Start the api server:
   
   npm run dev
   
5. start development server
 
   npm start 
---

### API Endpoints
The majority of my end points go through my api, ones that dont i would get errros from that stopped me doing it.


---

### Routing
The application supports the following routes:

- **Public Routes**:
  - `/` - Home page displaying discover movies.
  
- **Protected Routes** (require authentication):
  - `/movies/favorites` - Displays user-favorite movies.
  - `/reviews/form` - Form to submit a movie review.
  - `/reviews/:id` - Displays a specific movie review.
  - `/movies/popular` - Displays popular movies.
  - `/movies/upcoming` - Displays upcoming movies.
  - `/movies/trending` - Displays trending movies.
  - `/movies/now-playing` - Displays now-playing movies.
  - `/movies/:id` - Displays detailed information about a specific movie.

---

### Independent Learning
This project involved exploring new technologies and resources not covered in lectures:
-**Sorting and Filtering**: Tried to add differnt sorting and filtering, but could not get it to work. 
- **Firebase Integration**: Implemented user authentication for login and sign-up using [this comprehensive guide](https://medium.com/@Rushabh_/implementing-user-login-and-signup-with-reactjs-and-firebase-a-comprehensive-guide-7300bd33cb01).

  

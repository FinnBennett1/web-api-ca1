import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import {getGenres, getUpcomingMovies, getMovie, getTrending, getRecommended, getSimilar, getImagesForMovieCard, getReviews} from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    console.log("MOVIE ID IS BEING RECEVIED: ", id)
    const movie = await getMovie(id)
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/:id/tmdb/movie-images', asyncHandler(async (req, res) => {
    const movie_id = parseInt(req.params.id);
    const images = await getImagesForMovieCard(movie_id);
    res.status(200).json(images);
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const movieGenresList = await getGenres();
    res.status(200).json(movieGenresList);
}));

router.get('/tmdb/trending', asyncHandler(async (req, res) => {
    const trendingMovies = await getTrending();
    res.status(200).json(trendingMovies);
}));

router.get('/:id/tmdb/recommended-movies', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    console.log("Movie id for recommended movies: ", id)
    const recommendedMovies = await getRecommended(id);
    res.status(200).json(recommendedMovies);
}));

router.get('/:id/tmdb/similar-movies', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    console.log("Movie id for similar movies: ", id)
    const movies = await getSimilar(id);
    res.status(200).json(movies);
}));



export default router;
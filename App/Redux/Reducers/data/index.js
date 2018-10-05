import { combineReducers } from 'redux';
import { moviesReducer } from './movies';
import { movieDetailReducer } from './movieDetail';
import { nowPlayingMoviesReducer } from './nowPlayingMovies';
import { popularMoviesReducer } from './popularMovies';
import { topRatedMoviesReducer } from './topRatedMovies';
import { upcomingMoviesReducer } from './upcomingMovies';

const dataReducers = combineReducers({
    movies: moviesReducer,
    movieDetail: movieDetailReducer,
    nowPlayingMovies: nowPlayingMoviesReducer,
    popularMovies: popularMoviesReducer,
    topRatedMovies: topRatedMoviesReducer,
    upcomingMovies: upcomingMoviesReducer,
});
export {
    dataReducers
};

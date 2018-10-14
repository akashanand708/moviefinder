import { combineReducers } from 'redux';
import { moviesReducer } from './movies';
import { movieDetailReducer } from './movieDetail';
import { nowPlayingMoviesReducer } from './nowPlayingMovies';
import { popularMoviesReducer } from './popularMovies';
import { topRatedMoviesReducer } from './topRatedMovies';
import { upcomingMoviesReducer } from './upcomingMovies';
import { searchedMoviesReducer } from './searchedMovies';
import { searchedPeopleReducer } from './searchedPeople';
import { searchedTvshowsReducer } from './searchedTvshows';

const dataReducers = combineReducers({
    movies: moviesReducer,
    movieDetail: movieDetailReducer,
    nowPlayingMovies: nowPlayingMoviesReducer,
    popularMovies: popularMoviesReducer,
    topRatedMovies: topRatedMoviesReducer,
    upcomingMovies: upcomingMoviesReducer,
    searchedMovies: searchedMoviesReducer,
    searchedPeople: searchedPeopleReducer,
    searchedTvshows: searchedTvshowsReducer
});
export {
    dataReducers
};

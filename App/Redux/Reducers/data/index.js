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
import { peopleReducer } from './people';
import { peopleDetailReducer } from './peopleDetail';

import { tvshowsReducer } from './tvshows';
import { tvshowsDetailReducer } from './tvshowsDetail';
import { tvOnAirTvshowsReducer } from './tvOnAirTvshows';
import { tvArivingTvshowsReducer } from './tvArivingTvshows';
import { topRatedTvshowsReducer } from './topRatedTvshows';
import { popularTvshowsReducer } from './popularTvshows';

const dataReducers = combineReducers({
    movies: moviesReducer,
    movieDetail: movieDetailReducer,
    nowPlayingMovies: nowPlayingMoviesReducer,
    popularMovies: popularMoviesReducer,
    topRatedMovies: topRatedMoviesReducer,
    upcomingMovies: upcomingMoviesReducer,
    searchedMovies: searchedMoviesReducer,
    searchedPeople: searchedPeopleReducer,
    searchedTvshows: searchedTvshowsReducer,
    people: peopleReducer,
    peopleDetail: peopleDetailReducer,
    tvShows: tvshowsReducer,
    tvshowsDetail:tvshowsDetailReducer,
    tvOnAirTvshows:tvOnAirTvshowsReducer,
    tvArivingTvshows:tvArivingTvshowsReducer,
    topRatedTvshows:topRatedTvshowsReducer,
    popularTvshows:popularTvshowsReducer
});
export {
    dataReducers
};

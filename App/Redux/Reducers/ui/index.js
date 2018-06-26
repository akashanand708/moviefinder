import { combineReducers } from 'redux';
import { moviesReducer } from '../data/movies';

const uiReducers = combineReducers({
    //More data reducers, if needed.
    //popularMovies: popularMoviesReducer
});

export {
    uiReducers
};

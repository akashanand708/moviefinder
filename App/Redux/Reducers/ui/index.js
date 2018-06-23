import { combineReducers } from 'redux';
import { popularMoviesReducer } from '../data/popularMovies';

const uiReducers = combineReducers({
    //More data reducers, if needed.
    //popularMovies: popularMoviesReducer
});

export {
    uiReducers
};

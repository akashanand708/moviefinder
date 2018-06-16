import { combineReducers } from 'redux';
import { popularMoviesReducer } from './popularMovies';

const dataReducers = combineReducers({
    //More data reducers, if needed.
    popularMovies: popularMoviesReducer
});
export {
    dataReducers
};

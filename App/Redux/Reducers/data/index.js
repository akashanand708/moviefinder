import { combineReducers } from 'redux';
import { moviesReducer } from './movies';

const dataReducers = combineReducers({
    //More data reducers, if needed.
    movies: moviesReducer
});
export {
    dataReducers
};

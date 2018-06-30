import { combineReducers } from 'redux';
import { moviesReducer } from './movies';
import { movieDetailReducer } from './movieDetail';

const dataReducers = combineReducers({
    //More data reducers, if needed.
    movies: moviesReducer,
    movieDetail: movieDetailReducer
});
export {
    dataReducers
};

import { handleActions } from 'redux-actions';
import { MOVIE_DETAIL, RESET_MOVIE_DETAIL } from '../../../ActionTypes/moviesActionTypes';

const movieDetailReducer = handleActions({
    [MOVIE_DETAIL.PENDING]: (state, action) => {
        return {
            ...state,
            movieDetailFetching: true,
        };
    },
    [MOVIE_DETAIL.SUCCESS]: (state, action) => {
        let results = action.payload;
        return {
            ...state,
            movieDetail: results,
            movieDetailFetching: false,
        };
    },
    [MOVIE_DETAIL.ERROR]: (state, action) => {
        return {
            ...state,
            movieDetailFetching: false,
        };
    },
    [RESET_MOVIE_DETAIL]: (state, action) => {
        return {
            ...state,
            movieDetail: {},
            movieDetailFetching: false
        };
    }
},
    {
        movieDetail: {},
        movieDetailFetching: false,

    });

export {
    movieDetailReducer
};

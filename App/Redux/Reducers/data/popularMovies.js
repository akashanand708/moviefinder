import { handleActions } from 'redux-actions';
import _ from 'lodash';
import { POPULAR_MOVIES, RESET_POPULAR_MOVIES } from '../../../ActionTypes/popularMoviesActionTypes';

const popularMoviesReducer = handleActions({
    [POPULAR_MOVIES.PENDING]: (state, action) => {
        return {
            ...state,
            popularMoviesFetching: true,
        };
    },
    [POPULAR_MOVIES.SUCCESS]: (state, action) => {
        // let results = _.keyBy(action.payload.results, 'id');
        let results = action.payload.results;
        return {
            ...state,
            page: action.payload.page,
            popularMoviesList: [...state.popularMoviesList, ...results],
            totalPages: action.payload.total_pages,
            totalResults: action.payload.total_results,
            popularMoviesFetching: false,
        };
    },
    [POPULAR_MOVIES.ERROR]: (state, action) => {
        return {
            ...state,
            popularMoviesFetching: false,
        };
    },
    [RESET_POPULAR_MOVIES]: (state, action) => {
        return {
            ...state,
            page: 0,
            popularMoviesList: [],
            totalPages: 0,
            totalResults: 0,
            popularMoviesFetching: false,
        };
    }
},
    {
        page: 0,
        popularMoviesList: [],
        totalPages: 0,
        totalResults: 0,
        popularMoviesFetching: false,

    });

export {
    popularMoviesReducer
};

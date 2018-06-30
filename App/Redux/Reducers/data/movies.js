import { handleActions } from 'redux-actions';
import { MOVIES, RESET_MOVIES } from '../../../ActionTypes/moviesActionTypes';

const moviesReducer = handleActions({
    [MOVIES.PENDING]: (state, action) => {
        return {
            ...state,
            moviesFetching: true,
        };
    },
    [MOVIES.SUCCESS]: (state, action) => {
        // let results = _.keyBy(action.payload.results, 'id');
        let results = action.payload.results;
        return {
            ...state,
            page: action.payload.page,
            moviesList: [...state.moviesList, ...results],
            totalPages: action.payload.total_pages,
            totalResults: action.payload.total_results,
            moviesFetching: false,
        };
    },
    [MOVIES.ERROR]: (state, action) => {
        return {
            ...state,
            moviesFetching: false,
        };
    },
    [RESET_MOVIES]: (state, action) => {
        return {
            ...state,
            page: 0,
            moviesList: [],
            totalPages: 0,
            totalResults: 0,
            moviesFetching: false,
        };
    }
},
    {
        page: 0,
        moviesList: [],
        totalPages: 0,
        totalResults: 0,
        moviesFetching: false,

    });

export {
    moviesReducer
};

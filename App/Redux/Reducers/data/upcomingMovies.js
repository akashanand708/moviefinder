import { handleActions } from 'redux-actions';
import { UPCOMING_MOVIES, RESET_UPCOMING_MOVIES, UPCOMING_MOVIES_PAGENO } from '../../../ActionTypes/moviesActionTypes';

const upcomingMoviesReducer = handleActions({
    [UPCOMING_MOVIES.PENDING]: (state, action) => {
        return {
            ...state,
            moviesFetching: true,
        };
    },
    [UPCOMING_MOVIES.SUCCESS]: (state, action) => {
        // let results = _.keyBy(action.payload.results, 'id');
        let results = action.payload.results;
        return {
            ...state,
            page: action.payload.page,
            upcomingMoviesList: [...state.upcomingMoviesList, ...results],
            totalPages: action.payload.total_pages,
            totalResults: action.payload.total_results,
            moviesFetching: false,
        };
    },
    [UPCOMING_MOVIES.ERROR]: (state, action) => {
        return {
            ...state,
            moviesFetching: false,
        };
    },
    [RESET_UPCOMING_MOVIES]: (state, action) => {
        return {
            ...state,
            page: 0,
            upcomingMoviesList: [],
            totalPages: 0,
            totalResults: 0,
            moviesFetching: false,
            pageNo: 1
        };
    },
    [UPCOMING_MOVIES_PAGENO]: (state, action) => {
        return {
            ...state,
            pageNo: action.payload
        };
    }
},
    {
        page: 0,
        upcomingMoviesList: [],
        totalPages: 0,
        totalResults: 0,
        moviesFetching: false,
        pageNo: 1

    });

export {
    upcomingMoviesReducer
};

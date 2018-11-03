import { handleActions } from 'redux-actions';
import { TOP_RATED_MOVIES, RESET_TOP_RATED_MOVIES, TOP_RATED_MOVIES_PAGENO } from '../../../ActionTypes/moviesActionTypes';
import Constants from '../../../Constants/Constants';

const topRatedMoviesReducer = handleActions({
    [TOP_RATED_MOVIES.PENDING]: (state, action) => {
        return {
            ...state,
            moviesFetching: true,
        };
    },
    [TOP_RATED_MOVIES.SUCCESS]: (state, action) => {
        let results = action.payload.movieList.results;
        let refresh = action.payload.refresh;
        let updatedList = [];
        if (refresh === Constants.REFRESH) {
            updatedList = results;
        } else {
            updatedList = [...state.topRatedMoviesList, ...results]
        }
        return {
            ...state,
            page: action.payload.movieList.page,
            topRatedMoviesList: updatedList,
            totalPages: action.payload.movieList.total_pages,
            totalResults: action.payload.movieList.total_results,
            moviesFetching: false,
        };
    },
    [TOP_RATED_MOVIES.ERROR]: (state, action) => {
        return {
            ...state,
            moviesFetching: false,
        };
    },
    [RESET_TOP_RATED_MOVIES]: (state, action) => {
        return {
            ...state,
            page: 0,
            topRatedMoviesList: [],
            totalPages: 0,
            totalResults: 0,
            moviesFetching: false,
            pageNo: 1
        };
    },
    [TOP_RATED_MOVIES_PAGENO]: (state, action) => {
        return {
            ...state,
            pageNo: action.payload
        };
    }
},
    {
        page: 0,
        topRatedMoviesList: [],
        totalPages: 0,
        totalResults: 0,
        moviesFetching: false,
        pageNo: 1

    });

export {
    topRatedMoviesReducer
};

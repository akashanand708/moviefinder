import { handleActions } from 'redux-actions';
import { POPULAR_MOVIES, RESET_POPULAR_MOVIES, POPULAR_MOVIES_PAGENO } from '../../../ActionTypes/moviesActionTypes';
import Constants from '../../../Constants/Constants';

const popularMoviesReducer = handleActions({
    [POPULAR_MOVIES.PENDING]: (state, action) => {
        return {
            ...state,
            moviesFetching: true,
        };
    },
    [POPULAR_MOVIES.SUCCESS]: (state, action) => {
        let results = action.payload.movieList.results;
        let refresh = action.payload.refresh;
        let updatedList = [];
        if (refresh === Constants.REFRESH) {
            updatedList = results;
        } else {
            updatedList = [...state.popularMoviesList, ...results]
        }
        return {
            ...state,
            page: action.payload.movieList.page,
            popularMoviesList: updatedList,
            totalPages: action.payload.movieList.total_pages,
            totalResults: action.payload.movieList.total_results,
            moviesFetching: false,
        };
    },
    [POPULAR_MOVIES.ERROR]: (state, action) => {
        return {
            ...state,
            moviesFetching: false,
        };
    },
    [RESET_POPULAR_MOVIES]: (state, action) => {
        return {
            ...state,
            page: 0,
            popularMoviesList: [],
            totalPages: 0,
            totalResults: 0,
            moviesFetching: false,
            pageNo: 1
        };
    },
    [POPULAR_MOVIES_PAGENO]: (state, action) => {
        return {
            ...state,
            pageNo: action.payload
        };
    }
},
    {
        page: 0,
        popularMoviesList: [],
        totalPages: 0,
        totalResults: 0,
        moviesFetching: false,
        pageNo: 1

    });

export {
    popularMoviesReducer
};

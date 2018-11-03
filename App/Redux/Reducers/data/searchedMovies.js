
import { handleActions } from 'redux-actions';
import { SEARCHED_MOVIES, RESET_SEARCHED_MOVIES, SEARCHED_MOVIES_PAGENO } from '../../../ActionTypes/moviesActionTypes';
import Constants from '../../../Constants/Constants';

const searchedMoviesReducer = handleActions({
    [SEARCHED_MOVIES.PENDING]: (state, action) => {
        return {
            ...state,
            moviesFetching: true,
        };
    },
    [SEARCHED_MOVIES.SUCCESS]: (state, action) => {
        let results = action.payload.searchMovieList.results;
        let refresh = action.payload.refresh;
        let updatedList = [];
        if (refresh === Constants.REFRESH) {
            updatedList = results;
        } else {
            updatedList = [...state.searchedMoviesList, ...results]
        }
        return {
            ...state,
            page: action.payload.searchMovieList.page,
            searchedMoviesList: updatedList,
            totalPages: action.payload.searchMovieList.total_pages,
            totalResults: action.payload.searchMovieList.total_results,
            moviesFetching: false,
        };
    },
    [SEARCHED_MOVIES.ERROR]: (state, action) => {
        return {
            ...state,
            moviesFetching: false,
        };
    },
    [RESET_SEARCHED_MOVIES]: (state, action) => {
        return {
            ...state,
            page: 0,
            searchedMoviesList: [],
            totalPages: 0,
            totalResults: 0,
            moviesFetching: false,
            pageNo: 1
        };
    },
    [SEARCHED_MOVIES_PAGENO]: (state, action) => {
        return {
            ...state,
            pageNo: action.payload
        };
    }
},
    {
        page: 0,
        searchedMoviesList: [],
        totalPages: 0,
        totalResults: 0,
        moviesFetching: false,
        pageNo: 1

    });

export {
    searchedMoviesReducer
};

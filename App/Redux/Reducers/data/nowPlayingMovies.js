import { handleActions } from 'redux-actions';
import { NOW_PLAYING_MOVIES, RESET_NOW_PLAYING_MOVIES, NOW_PLAYING_MOVIES_PAGENO } from '../../../ActionTypes/moviesActionTypes';
import Constants from '../../../Constants/Constants';

const nowPlayingMoviesReducer = handleActions({
    [NOW_PLAYING_MOVIES.PENDING]: (state, action) => {
        return {
            ...state,
            moviesFetching: true,
        };
    },
    [NOW_PLAYING_MOVIES.SUCCESS]: (state, action) => {
        let results = action.payload.movieList.results;
        let refresh = action.payload.refresh;
        let updatedList = [];
        if (refresh === Constants.REFRESH) {
            updatedList = results;
        } else {
            updatedList = [...state.nowPlayingMoviesList, ...results]
        }
        return {
            ...state,
            page: action.payload.movieList.page,
            nowPlayingMoviesList: updatedList,
            totalPages: action.payload.movieList.total_pages,
            totalResults: action.payload.movieList.total_results,
            moviesFetching: false,
        };
    },
    [NOW_PLAYING_MOVIES.ERROR]: (state, action) => {
        return {
            ...state,
            moviesFetching: false,
        };
    },
    [RESET_NOW_PLAYING_MOVIES]: (state, action) => {
        return {
            ...state,
            page: 0,
            nowPlayingMoviesList: [],
            totalPages: 0,
            totalResults: 0,
            moviesFetching: false,
            pageNo: 1
        };
    },
    [NOW_PLAYING_MOVIES_PAGENO]: (state, action) => {
        return {
            ...state,
            pageNo: action.payload
        };
    }
},
    {
        page: 0,
        nowPlayingMoviesList: [],
        totalPages: 0,
        totalResults: 0,
        moviesFetching: false,
        pageNo: 1

    });

export {
    nowPlayingMoviesReducer
};

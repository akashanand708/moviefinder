import { handleActions } from 'redux-actions';
import { NOW_PLAYING_MOVIES, RESET_NOW_PLAYING_MOVIES, NOW_PLAYING_MOVIES_PAGENO } from '../../../ActionTypes/moviesActionTypes';

const nowPlayingMoviesReducer = handleActions({
    [NOW_PLAYING_MOVIES.PENDING]: (state, action) => {
        return {
            ...state,
            moviesFetching: true,
        };
    },
    [NOW_PLAYING_MOVIES.SUCCESS]: (state, action) => {
        // let results = _.keyBy(action.payload.results, 'id');
        let results = action.payload.results;
        return {
            ...state,
            page: action.payload.page,
            nowPlayingMoviesList: [...state.nowPlayingMoviesList, ...results],
            totalPages: action.payload.total_pages,
            totalResults: action.payload.total_results,
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

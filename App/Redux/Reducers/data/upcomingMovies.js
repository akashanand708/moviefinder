import { handleActions } from 'redux-actions';
import { UPCOMING_MOVIES, RESET_UPCOMING_MOVIES, UPCOMING_MOVIES_PAGENO } from '../../../ActionTypes/moviesActionTypes';
import Constants from '../../../Constants/Constants';

const upcomingMoviesReducer = handleActions({
    [UPCOMING_MOVIES.PENDING]: (state, action) => {
        return {
            ...state,
            moviesFetching: true,
        };
    },
    [UPCOMING_MOVIES.SUCCESS]: (state, action) => {
        // let results = _.keyBy(action.payload.results, 'id');
        let results = action.payload.movieList.results;
        let refresh = action.payload.refresh;
        let updatedList = [];
        if (refresh === Constants.REFRESH) {
            updatedList = results;
        } else {
            updatedList = [...state.upcomingMoviesList, ...results]
        }
        return {
            ...state,
            page: action.payload.movieList.page,
            upcomingMoviesList: updatedList,
            totalPages: action.payload.movieList.total_pages,
            totalResults: action.payload.movieList.total_results,
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

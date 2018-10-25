import { handleActions } from 'redux-actions';
import { POPULAR_MOVIES, RESET_POPULAR_MOVIES,POPULAR_MOVIES_PAGENO } from '../../../ActionTypes/moviesActionTypes';

const popularMoviesReducer = handleActions({
    [POPULAR_MOVIES.PENDING]: (state, action) => {
        return {
            ...state,
            moviesFetching: true,
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
            page: 1
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
        pageNo:1

    });

export {
    popularMoviesReducer
};

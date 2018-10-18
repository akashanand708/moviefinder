import { handleActions } from 'redux-actions';
import { TOP_RATED_TVSHOWS, RESET_TOP_RATED_TVSHOWS } from '../../../ActionTypes/moviesActionTypes';

const topRatedTvshowsReducer = handleActions({
    [TOP_RATED_TVSHOWS.PENDING]: (state, action) => {
        return {
            ...state,
            tvshowsFetching: true,
        };
    },
    [TOP_RATED_TVSHOWS.SUCCESS]: (state, action) => {
        // let results = _.keyBy(action.payload.results, 'id');
        let results = action.payload.results;
        return {
            ...state,
            page: action.payload.page,
            topRatedTvshowsList: [...state.topRatedTvshowsList, ...results],
            totalPages: action.payload.total_pages,
            totalResults: action.payload.total_results,
            tvshowsFetching: false,
        };
    },
    [TOP_RATED_TVSHOWS.ERROR]: (state, action) => {
        return {
            ...state,
            tvshowsFetching: false,
        };
    },
    [RESET_TOP_RATED_TVSHOWS]: (state, action) => {
        return {
            ...state,
            page: 0,
            topRatedTvshowsList: [],
            totalPages: 0,
            totalResults: 0,
            tvshowsFetching: false,
        };
    }
},
    {
        page: 0,
        topRatedTvshowsList: [],
        totalPages: 0,
        totalResults: 0,
        tvshowsFetching: false,

    });

export {
    topRatedTvshowsReducer
};

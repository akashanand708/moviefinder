import { handleActions } from 'redux-actions';
import { TOP_RATED_TVSHOWS, RESET_TOP_RATED_TVSHOWS, TOP_RATED_TVSHOWS_PAGENO } from '../../../ActionTypes/moviesActionTypes';
import Constants from '../../../Constants/Constants';

const topRatedTvshowsReducer = handleActions({
    [TOP_RATED_TVSHOWS.PENDING]: (state, action) => {
        return {
            ...state,
            tvshowsFetching: true,
        };
    },
    [TOP_RATED_TVSHOWS.SUCCESS]: (state, action) => {
        let results = action.payload.tvshowList.results;
        let refresh = action.payload.refresh;
        let updatedList = [];
        if (refresh === Constants.REFRESH) {
            updatedList = results;
        } else {
            updatedList = [...state.topRatedTvshowsList, ...results]
        }
        return {
            ...state,
            page: action.payload.tvshowList.page,
            topRatedTvshowsList: updatedList,
            totalPages: action.payload.tvshowList.total_pages,
            totalResults: action.payload.tvshowList.total_results,
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
            pageNo: 1
        };
    },
    [TOP_RATED_TVSHOWS_PAGENO]: (state, action) => {
        return {
            ...state,
            pageNo: action.payload
        };
    }
},
    {
        page: 0,
        topRatedTvshowsList: [],
        totalPages: 0,
        totalResults: 0,
        tvshowsFetching: false,
        pageNo: 1

    });

export {
    topRatedTvshowsReducer
};

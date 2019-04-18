import { handleActions } from 'redux-actions';
import { TV_ARIVING_TVSHOWS, RESET_TV_ARIVING_TVSHOWS, TV_ARIVING_TVSHOWS_PAGENO } from '../../../ActionTypes/moviesActionTypes';
import Constants from '../../../Constants/Constants';

const tvArivingTvshowsReducer = handleActions({
    [TV_ARIVING_TVSHOWS.PENDING]: (state, action) => {
        return {
            ...state,
            tvshowsFetching: true,
        };
    },
    [TV_ARIVING_TVSHOWS.SUCCESS]: (state, action) => {
        let results = action.payload.tvshowList.results;
        let refresh = action.payload.refresh;
        let updatedList = [];
        if (refresh === Constants.REFRESH) {
            updatedList = results;
        } else {
            updatedList = [...state.tvArivingTvshowsList, ...results]
        }
        return {
            ...state,
            page: action.payload.tvshowList.page,
            tvArivingTvshowsList: updatedList,
            totalPages: action.payload.tvshowList.total_pages,
            totalResults: action.payload.tvshowList.total_results,
            tvshowsFetching: false,
        };
    },
    [TV_ARIVING_TVSHOWS.ERROR]: (state, action) => {
        return {
            ...state,
            tvshowsFetching: false,
        };
    },
    [RESET_TV_ARIVING_TVSHOWS]: (state, action) => {
        return {
            ...state,
            page: 0,
            tvArivingTvshowsList: [],
            totalPages: 0,
            totalResults: 0,
            tvshowsFetching: false,
            pageNo: 1
        };
    },
    [TV_ARIVING_TVSHOWS_PAGENO]: (state, action) => {
        return {
            ...state,
            pageNo: action.payload
        };
    }
},
    {
        page: 0,
        tvArivingTvshowsList: [],
        totalPages: 0,
        totalResults: 0,
        tvshowsFetching: false,
        pageNo: 1

    });

export {
    tvArivingTvshowsReducer
};

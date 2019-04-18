import { handleActions } from 'redux-actions';
import { TV_ONAIR_TVSHOWS, RESET_TV_ONAIR_TVSHOWS, TV_ONAIR_TVSHOWS_PAGENO } from '../../../ActionTypes/moviesActionTypes';
import Constants from '../../../Constants/Constants';

const tvOnAirTvshowsReducer = handleActions({
    [TV_ONAIR_TVSHOWS.PENDING]: (state, action) => {
        return {
            ...state,
            tvshowsFetching: true,
        };
    },
    [TV_ONAIR_TVSHOWS.SUCCESS]: (state, action) => {
        let results = action.payload.tvshowList.results;
        let refresh = action.payload.refresh;
        let updatedList = [];
        if (refresh === Constants.REFRESH) {
            updatedList = results;
        } else {
            updatedList = [...state.tvOnAirTvshowsList, ...results]
        }
        return {
            ...state,
            page: action.payload.tvshowList.page,
            tvOnAirTvshowsList: updatedList,
            totalPages: action.payload.tvshowList.total_pages,
            totalResults: action.payload.tvshowList.total_results,
            tvshowsFetching: false,
        };
    },
    [TV_ONAIR_TVSHOWS.ERROR]: (state, action) => {
        return {
            ...state,
            tvshowsFetching: false,
        };
    },
    [RESET_TV_ONAIR_TVSHOWS]: (state, action) => {
        return {
            ...state,
            page: 0,
            tvOnAirTvshowsList: [],
            totalPages: 0,
            totalResults: 0,
            tvshowsFetching: false,
            pageNo: 1
        };
    },
    [TV_ONAIR_TVSHOWS_PAGENO]: (state, action) => {
        return {
            ...state,
            pageNo: action.payload
        };
    }
},
    {
        page: 0,
        tvOnAirTvshowsList: [],
        totalPages: 0,
        totalResults: 0,
        tvshowsFetching: false, 
        pageNo: 1

    });

export {
    tvOnAirTvshowsReducer
};

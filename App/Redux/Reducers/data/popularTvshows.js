import { handleActions } from 'redux-actions';
import { POPULAR_TVSHOWS, RESET_POPULAR_TVSHOWS, POPULAR_TVSHOWS_PAGENO } from '../../../ActionTypes/moviesActionTypes';
import Constants from '../../../Constants/Constants';

const popularTvshowsReducer = handleActions({
    [POPULAR_TVSHOWS.PENDING]: (state, action) => {
        return {
            ...state,
            tvshowsFetching: true,
        };
    },
    [POPULAR_TVSHOWS.SUCCESS]: (state, action) => {
        let results = action.payload.tvshowList.results;
        let refresh = action.payload.refresh;
        let updatedList = [];
        if (refresh === Constants.REFRESH) {
            updatedList = results;
        } else {
            updatedList = [...state.popularTvshowsList, ...results]
        }
        return {
            ...state,
            page: action.payload.tvshowList.page,
            popularTvshowsList: updatedList,
            totalPages: action.payload.tvshowList.total_pages,
            totalResults: action.payload.tvshowList.total_results,
            tvshowsFetching: false,
        };
    },
    [POPULAR_TVSHOWS.ERROR]: (state, action) => {
        return {
            ...state,
            tvshowsFetching: false,
        };
    },
    [RESET_POPULAR_TVSHOWS]: (state, action) => {
        return {
            ...state,
            page: 0,
            popularTvshowsList: [],
            totalPages: 0,
            totalResults: 0,
            tvshowsFetching: false,
            pageNo: 1
        };
    },
    [POPULAR_TVSHOWS_PAGENO]: (state, action) => {
        return {
            ...state,
            pageNo: action.payload
        };
    }
},
    {
        page: 0,
        popularTvshowsList: [],
        totalPages: 0,
        totalResults: 0,
        tvshowsFetching: false,
        pageNo: 1
    });

export {
    popularTvshowsReducer
};

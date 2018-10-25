import { handleActions } from 'redux-actions';
import { TV_ARIVING_TVSHOWS, RESET_TV_ARIVING_TVSHOWS, TV_ARIVING_TVSHOWS_PAGENO } from '../../../ActionTypes/moviesActionTypes';

const tvArivingTvshowsReducer = handleActions({
    [TV_ARIVING_TVSHOWS.PENDING]: (state, action) => {
        return {
            ...state,
            tvshowsFetching: true,
        };
    },
    [TV_ARIVING_TVSHOWS.SUCCESS]: (state, action) => {
        // let results = _.keyBy(action.payload.results, 'id');
        let results = action.payload.results;
        return {
            ...state,
            page: action.payload.page,
            tvArivingTvshowsList: [...state.tvArivingTvshowsList, ...results],
            totalPages: action.payload.total_pages,
            totalResults: action.payload.total_results,
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

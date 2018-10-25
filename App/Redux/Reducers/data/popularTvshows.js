import { handleActions } from 'redux-actions';
import { POPULAR_TVSHOWS, RESET_POPULAR_TVSHOWS, POPULAR_TVSHOWS_PAGENO } from '../../../ActionTypes/moviesActionTypes';

const popularTvshowsReducer = handleActions({
    [POPULAR_TVSHOWS.PENDING]: (state, action) => {
        return {
            ...state,
            tvshowsFetching: true,
        };
    },
    [POPULAR_TVSHOWS.SUCCESS]: (state, action) => {
        // let results = _.keyBy(action.payload.results, 'id');
        let results = action.payload.results;
        return {
            ...state,
            page: action.payload.page,
            popularTvshowsList: [...state.popularTvshowsList, ...results],
            totalPages: action.payload.total_pages,
            totalResults: action.payload.total_results,
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

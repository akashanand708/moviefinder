import { handleActions } from 'redux-actions';
import { TV_ONAIR_TVSHOWS, RESET_TV_ONAIR_TVSHOWS } from '../../../ActionTypes/moviesActionTypes'; 

const tvOnAirTvshowsReducer = handleActions({
    [TV_ONAIR_TVSHOWS.PENDING]: (state, action) => {
        return {
            ...state,
            tvshowsFetching: true,
        };
    },
    [TV_ONAIR_TVSHOWS.SUCCESS]: (state, action) => {
        // let results = _.keyBy(action.payload.results, 'id');
        let results = action.payload.results;
        return {
            ...state,
            page: action.payload.page,
            tvOnAirTvshowsList: [...state.tvOnAirTvshowsList, ...results],
            totalPages: action.payload.total_pages,
            totalResults: action.payload.total_results,
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
        };
    }
},
    {
        page: 0,
        tvOnAirTvshowsList: [],
        totalPages: 0,
        totalResults: 0,
        tvshowsFetching: false,

    });

export {
    tvOnAirTvshowsReducer
};

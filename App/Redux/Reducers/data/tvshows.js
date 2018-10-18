import { handleActions } from 'redux-actions';
import { TVSHOWS, RESET_TVSHOWS } from '../../../ActionTypes/moviesActionTypes';

const tvshowsReducer = handleActions({
    [TVSHOWS.PENDING]: (state, action) => {
        return {
            ...state,
            tvshowsFetching: true,
        };
    },
    [TVSHOWS.SUCCESS]: (state, action) => {
        // let results = _.keyBy(action.payload.results, 'id');
        let results = action.payload.results;
        return {
            ...state,
            page: action.payload.page,
            tvshowsList: [...state.tvshowsList, ...results],
            totalPages: action.payload.total_pages,
            totalResults: action.payload.total_results,
            tvshowsFetching: false,
        };
    },
    [TVSHOWS.ERROR]: (state, action) => {
        return {
            ...state,
            tvshowsFetching: false,
        };
    },
    [RESET_TVSHOWS]: (state, action) => {
        return {
            ...state,
            page: 0,
            tvshowsList: [],
            totalPages: 0,
            totalResults: 0,
            tvshowsFetching: false,
        };
    }
},
    {
        page: 0,
        tvshowsList: [],
        totalPages: 0,
        totalResults: 0,
        tvshowsFetching: false,

    });

export {
    tvshowsReducer
};

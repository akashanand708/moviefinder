import { handleActions } from 'redux-actions';
import { TVSHOWS_DETAIL, RESET_TVSHOWS_DETAIL } from '../../../ActionTypes/moviesActionTypes';

const tvshowsDetailReducer = handleActions({
    [TVSHOWS_DETAIL.PENDING]: (state, action) => {
        return {
            ...state,
            tvshowsDetailFetching: true,
        };
    },
    [TVSHOWS_DETAIL.SUCCESS]: (state, action) => {
        let results = action.payload;
        return {
            ...state,
            tvshowsDetail: results,
            tvshowsDetailFetching: false,
        };
    },
    [TVSHOWS_DETAIL.ERROR]: (state, action) => {
        return {
            ...state,
            tvshowsDetailFetching: false,
        };
    },
    [RESET_TVSHOWS_DETAIL]: (state, action) => {
        return {
            ...state,
            tvshowsDetail: {},
            tvshowsDetailFetching: false
        };
    }
},
    {
        tvshowsDetail: {},
        tvshowsDetailFetching: false,

    });

export {
    tvshowsDetailReducer
};

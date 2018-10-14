
import { handleActions } from 'redux-actions';
import { SEARCHED_TVSHOWS, RESET_SEARCHED_TVSHOWS } from '../../../ActionTypes/moviesActionTypes';

const searchedTvshowsReducer = handleActions({
    [SEARCHED_TVSHOWS.PENDING]: (state, action) => {
        return {
            ...state,
            tvshowsFetching: true,
        };
    },
    [SEARCHED_TVSHOWS.SUCCESS]: (state, action) => {
        let results = action.payload.results;
        return {
            page: action.payload.page,
            searchedTvshowsList: [...state.searchedTvshowsList, ...results],
            totalPages: action.payload.total_pages,
            totalResults: action.payload.total_results,
            tvshowsFetching: false,
        };
    },
    [SEARCHED_TVSHOWS.ERROR]: (state, action) => {
        return {
            ...state,
            tvshowsFetching: false,
        };
    }, [RESET_SEARCHED_TVSHOWS]: (state, action) => {
        return {
            ...state,
            page: 0,
            searchedTvshowsList: [],
            totalPages: 0,
            totalResults: 0,
            tvshowsFetching: false,
        };
    }
},
    {
        page: 0,
        searchedTvshowsList: [],
        totalPages: 0,
        totalResults: 0,
        tvshowsFetching: false,

    });

export {
    searchedTvshowsReducer
};

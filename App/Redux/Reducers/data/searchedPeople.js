
import { handleActions } from 'redux-actions';
import { SEARCHED_PEOPLE, RESET_SEARCHED_PEOPLE } from '../../../ActionTypes/moviesActionTypes';

const searchedPeopleReducer = handleActions({
    [SEARCHED_PEOPLE.PENDING]: (state, action) => {
        return {
            ...state,
            peopleFetching: true,
        };
    },
    [SEARCHED_PEOPLE.SUCCESS]: (state, action) => {
        let results = action.payload.results;
        return {
            page: action.payload.page,
            searchedPeopleList: [...state.searchedPeopleList, ...results],
            totalPages: action.payload.total_pages,
            totalResults: action.payload.total_results,
            peopleFetching: false,
        };
    },
    [SEARCHED_PEOPLE.ERROR]: (state, action) => {
        return {
            ...state,
            peopleFetching: false,
        };
    }, [RESET_SEARCHED_PEOPLE]: (state, action) => {
        return {
            ...state,
            page: 0,
            searchedPeopleList: [],
            totalPages: 0,
            totalResults: 0,
            peopleFetching: false,
        };
    }
},
    {
        page: 0,
        searchedPeopleList: [],
        totalPages: 0,
        totalResults: 0,
        peopleFetching: false,

    });

export {
    searchedPeopleReducer
};

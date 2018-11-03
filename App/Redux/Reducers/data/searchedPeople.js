
import { handleActions } from 'redux-actions';
import { SEARCHED_PEOPLE, RESET_SEARCHED_PEOPLE } from '../../../ActionTypes/moviesActionTypes';
import Constants from '../../../Constants/Constants';

const searchedPeopleReducer = handleActions({
    [SEARCHED_PEOPLE.PENDING]: (state, action) => {
        return {
            ...state,
            peopleFetching: true,
        };
    },
    [SEARCHED_PEOPLE.SUCCESS]: (state, action) => {
        let results = action.payload.searchPeopleList.results;
        let refresh = action.payload.refresh;
        let updatedList = [];
        if (refresh === Constants.REFRESH) {
            updatedList = results;
        } else {
            updatedList = [...state.searchedPeopleList, ...results]
        }
        return {
            ...state,
            page: action.payload.searchPeopleList.page,
            searchedPeopleList: updatedList,
            totalPages: action.payload.searchPeopleList.total_pages,
            totalResults: action.payload.searchPeopleList.total_results,
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

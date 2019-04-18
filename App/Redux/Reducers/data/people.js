import { handleActions } from 'redux-actions';
import { PEOPLE, RESET_PEOPLE } from '../../../ActionTypes/moviesActionTypes';
import Constants from '../../../Constants/Constants';

const peopleReducer = handleActions({
    [PEOPLE.PENDING]: (state, action) => {
        return {
            ...state,
            peopleFetching: true,
        };
    },
    [PEOPLE.SUCCESS]: (state, action) => {
        let results = action.payload.peopleList.results;
        let refresh = action.payload.refresh;
        let updatedList = [];
        if (refresh === Constants.REFRESH) {
            updatedList = results;
        } else {
            updatedList = [...state.peopleList, ...results]
        }
        return {
            ...state,
            page: action.payload.peopleList.page,
            peopleList: updatedList,
            totalPages: action.payload.peopleList.total_pages,
            totalResults: action.payload.peopleList.total_results,
            peopleFetching: false,
        };
    },
    [PEOPLE.ERROR]: (state, action) => {
        return {
            ...state,
            peopleFetching: false,
        };
    },
    [RESET_PEOPLE]: (state, action) => {
        return {
            ...state,
            page: 0,
            peopleList: [],
            totalPages: 0,
            totalResults: 0,
            peopleFetching: false,
        };
    }
},
    {
        page: 0,
        peopleList: [],
        totalPages: 0,
        totalResults: 0,
        peopleFetching: false,

    });

export {
    peopleReducer
};

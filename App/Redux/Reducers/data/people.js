import { handleActions } from 'redux-actions';
import { PEOPLE, RESET_PEOPLE } from '../../../ActionTypes/moviesActionTypes';

const peopleReducer = handleActions({
    [PEOPLE.PENDING]: (state, action) => {
        return {
            ...state,
            peopleFetching: true,
        };
    },
    [PEOPLE.SUCCESS]: (state, action) => {
        let results = action.payload.results;
        return {
            ...state,
            page: action.payload.page,
            peopleList: [...state.peopleList, ...results],
            totalPages: action.payload.total_pages,
            totalResults: action.payload.total_results,
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

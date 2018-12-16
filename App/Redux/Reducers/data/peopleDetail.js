import { handleActions } from 'redux-actions';
import { PEOPLE_DETAIL, RESET_PEOPLE_DETAIL } from '../../../ActionTypes/moviesActionTypes';

const peopleDetailReducer = handleActions({
    [PEOPLE_DETAIL.PENDING]: (state, action) => {
        return {
            ...state,
            peopleDetailFetching: true,
        };
    },
    [PEOPLE_DETAIL.SUCCESS]: (state, action) => {
        let results = action.payload;
        return {
            ...state,
            peopleDetail: results,
            peopleDetailFetching: false,
        };
    },
    [PEOPLE_DETAIL.ERROR]: (state, action) => {
        return {
            ...state,
            peopleDetailFetching: false,
        };
    },
    [RESET_PEOPLE_DETAIL]: (state, action) => {
        return {
            ...state,
            peopleDetail: {},
            //peopleDetailFetching: false
        };
    }
},
    {
        peopleDetail: {},
        peopleDetailFetching: false
    });

export {
    peopleDetailReducer
};

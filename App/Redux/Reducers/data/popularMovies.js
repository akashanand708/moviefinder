import { handleActions } from 'redux-actions';
import _ from 'lodash';
import { ONBOARDING } from '../../../ActionTypes/popularMoviesActionTypes';

const popularMoviesReducer = handleActions({
    [ONBOARDING.PENDING]: (state, action) => {
        return {
            ...state,
            folderAwaitingData: true,
        };
    },
    [ONBOARDING.SUCCESS]: (state, action) => {
        return {
            ...state,
            folderAwaitingData: false,
            folderList: action.payload,
        };
    },
    [ONBOARDING.ERROR]: (state, action) => {
        return {
            ...state,
            folderAwaitingData: false,
        };
    }
},
    {
        //Initial value
        folderAwaitingData: false,

    });

export {
    popularMoviesReducer
};

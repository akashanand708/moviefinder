import { handleActions } from 'redux-actions';
import { UPDATE_NETWORK_INFO } from '../../../ActionTypes/moviesActionTypes';

const networkInfoReducer = handleActions({
    [UPDATE_NETWORK_INFO]: (state, action) => {
        return {
            ...state,
            start: false,
            connectionType: action.payload,
        };
    }
},
    {
        connectionType: 'none',
        start: true

    });

export {
    networkInfoReducer
};

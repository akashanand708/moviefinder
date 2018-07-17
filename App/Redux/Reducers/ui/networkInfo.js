import { handleActions } from 'redux-actions';
import { UPDATE_NETWORK_INFO } from '../../../ActionTypes/moviesActionTypes';

const networkInfoReducer = handleActions({
    [UPDATE_NETWORK_INFO]: (state, action) => {
        return {
            ...state,
            connectionType: action.payload,
        };
    }
},
    {
        connectionType: 'none'

    });

export {
    networkInfoReducer
};

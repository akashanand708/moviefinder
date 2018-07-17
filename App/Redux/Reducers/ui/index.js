import { combineReducers } from 'redux';
import { networkInfoReducer } from './networkInfo';

const uiReducers = combineReducers({
    networkInfo: networkInfoReducer
});

export {
    uiReducers
};

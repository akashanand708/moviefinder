import { combineReducers } from 'redux';
import { uiReducers } from './ui';
import { navigationReducer } from './navigationReducer';
import { dataReducers } from './data';

const reducers = {
    ui: uiReducers,
    data: dataReducers,
    nav: navigationReducer,
}
const rootReducer = combineReducers(reducers);

export default rootReducer;

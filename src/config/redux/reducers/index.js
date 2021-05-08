import { combineReducers } from 'redux';
import global from './global';

const allReducer = {
    global
};

const reducer = combineReducers(allReducer);

export default reducer;

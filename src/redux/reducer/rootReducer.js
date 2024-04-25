import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import useReducer from './userReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    user: useReducer,
});

export default rootReducer;
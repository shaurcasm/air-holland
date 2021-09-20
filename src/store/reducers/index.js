import { combineReducers } from 'redux';    // Not necessary for the scope of this application. But showcase for real world applications with multiple reducers.
import roster from './roster';

const rootReducer = combineReducers({
    roster
});

export default rootReducer;
import reducers from "./userReducer";
import reducersItem from "./itemReducer";

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    reducers,
    reducersItem,
});

export default rootReducer;
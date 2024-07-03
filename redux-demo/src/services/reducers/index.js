//root reducer single store ko lagi sabai reducer merge huncha

import {combineReducers} from 'redux'
import cardItems from "./reducer";

export default combineReducers({
    cardItems
});






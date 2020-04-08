import { combineReducers } from 'redux';
import { complements } from './complements';
import { variation } from './variation';
import { order } from './order';
import { util } from './util';

export default combineReducers({
    complements,
    variation,
    order,
    util
})
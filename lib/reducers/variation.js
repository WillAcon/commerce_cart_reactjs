import { handleActions } from 'redux-actions';
import { FETCH_VARIATION, SET_QUANTITY_VARIATION } from '../constants';

export const variation = handleActions({
    [FETCH_VARIATION]: (state, action) => (action.payload),
    [SET_QUANTITY_VARIATION]: (state, action) => {
        const quantity = action.payload;
        return { ...state, quantity };
    }
}, {});
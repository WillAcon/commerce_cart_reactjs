import { handleActions } from 'redux-actions';
import { FETCH_COMPLEMENTS } from '../constants';

export const complements = handleActions({
    [FETCH_COMPLEMENTS]: (state, action) => [ ...action.payload],
}, []);
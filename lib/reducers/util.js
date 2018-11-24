import { handleActions } from 'redux-actions';
import { SET_OPEN_CART_TOP_BLOCK, SET_OPEN_COMPLEMENT_BLOCK, SET_OPEN_MODAL, SET_COUNT_CART, SET_COMPLEMENT } from '../constants';


export const util = handleActions({
    [SET_OPEN_COMPLEMENT_BLOCK]: (state, action) => {
        const openComplementBlock = action.payload;
        return {...state, openComplementBlock}
    },
    [SET_OPEN_CART_TOP_BLOCK]: (state, action) => {
        const openCartTopBlock = action.payload;
        return {...state, openCartTopBlock}
    },
    [SET_OPEN_MODAL]: (state, action) => {
        const openModal = action.payload;
        return {...state, openModal}
    },
    [SET_COUNT_CART]: (state, action) => {
        const count = action.payload;
        return {...state, count}
    },
    [SET_COMPLEMENT]: (state, action) => {
        const complement = action.payload;
        return {...state, complement}
    }
}, {});
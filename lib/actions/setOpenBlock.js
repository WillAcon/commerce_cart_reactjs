import { SET_OPEN_CART_TOP_BLOCK, SET_OPEN_COMPLEMENT_BLOCK } from "../constants";
import { createAction } from "redux-actions";

export const setOpenCartTopBlock = createAction(SET_OPEN_CART_TOP_BLOCK, (open) => open);

export const setOpenComplementBlock = createAction(SET_OPEN_COMPLEMENT_BLOCK, (open) => open);
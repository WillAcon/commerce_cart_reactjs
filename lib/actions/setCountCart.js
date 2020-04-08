import { SET_COUNT_CART } from "../constants";
import { createAction } from "redux-actions";

export const setCountCart = createAction(SET_COUNT_CART, (count) => count);
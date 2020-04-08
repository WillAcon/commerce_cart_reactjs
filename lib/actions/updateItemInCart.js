import { UPDATE_ORDER, UPDATE_CART_ORDER } from "../constants";
import { createAction } from "redux-actions";

export const updateItemInCart = createAction(UPDATE_ORDER, 
    payload => payload);
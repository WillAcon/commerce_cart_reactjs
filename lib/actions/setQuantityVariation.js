import { SET_QUANTITY_VARIATION } from "../constants";
import { createAction } from "redux-actions";

export const setQuantityVariation = createAction(SET_QUANTITY_VARIATION, (quantity)=> quantity);
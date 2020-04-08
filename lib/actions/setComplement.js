import { SET_COMPLEMENT } from "../constants";
import { createAction } from "redux-actions";

export const setComplement = createAction(SET_COMPLEMENT, complement => complement);
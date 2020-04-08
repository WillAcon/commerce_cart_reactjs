import { SET_OPEN_MODAL } from "../constants";
import { createAction } from "redux-actions";

export const setOpenModal = createAction(SET_OPEN_MODAL, (open) => open);
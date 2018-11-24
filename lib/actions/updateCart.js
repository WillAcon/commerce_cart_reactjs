import { FETCH_ORDER } from "../constants";
import { createAction } from "redux-actions";
import { apiUpdateCart } from "../api"
import { baseUrl} from "../utils";

const url = `${baseUrl}`;

export const updateCart = createAction(FETCH_ORDER, 
    (payload,id)=>apiUpdateCart(url,id, payload)());
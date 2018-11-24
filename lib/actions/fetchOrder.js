import { FETCH_ORDER, MATH_CONST } from "../constants";
import { createAction } from "redux-actions";
import { apiGetOrder } from "../api"
import { baseUrl} from "../utils";

const urlCart = `${baseUrl}cart?_format=json&t=${MATH_CONST}`;

export const fetchOrder = createAction(FETCH_ORDER, apiGetOrder(urlCart));
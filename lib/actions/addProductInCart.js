import { UPDATE_CART_ORDER } from "../constants";
import { createAction } from "redux-actions";
import { apiAddProductInCart } from "../api"
import { baseUrl} from "../utils";

const urlCart = `${baseUrl}cart/add?_format=json`;

export const addProductInCart = createAction(UPDATE_CART_ORDER, 
    (payload)=>apiAddProductInCart(urlCart, payload)());
import { DELETE_ITEM_ORDER } from "../constants";
import { createAction } from "redux-actions";
import { apiDeleteItemInCart } from "../api"
import { baseUrl} from "../utils";

const url = `${baseUrl}`;

export const deleteItemInCart = createAction(DELETE_ITEM_ORDER, 
    (idOrder,idItem)=>apiDeleteItemInCart(url ,idOrder, idItem)());
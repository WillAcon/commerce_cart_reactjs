export const FETCH_COMPLEMENTS = "FETCH_COMPLEMENTS";
export const FETCH_VARIATION = "FETCH_VARIATION";
export const FETCH_ORDER = "FETCH_ORDER";
export const SET_QUANTITY_VARIATION = "SET_QUANTITY_VARIATION";
export const UPDATE_CART_ORDER = "UPDATE_CART_ORDER";
export const UPDATE_ORDER = "UPDATE_ORDER";
export const SET_OPEN_CART_TOP_BLOCK = "SET_OPEN_CART_TOP_BLOCK";
export const SET_OPEN_COMPLEMENT_BLOCK = "SET_OPEN_COMPLEMENT_BLOCK";
export const SET_OPEN_MODAL = "SET_OPEN_MODAL";
export const SET_COUNT_CART = "SET_COUNT_CART";
export const SET_COMPLEMENT = "SET_COMPLEMENT";
export const DELETE_ITEM_ORDER = "DELETE_ITEM_ORDER" ;

export const ID_PRODUCT = drupalSettings.path.currentPath.substr(8,9);
export const LANGUAGE =drupalSettings.path.currentLanguage;
export const MATH_CONST = Math.floor((Math.random() * 199998880) + 1);
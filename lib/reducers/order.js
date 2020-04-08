import { handleActions } from 'redux-actions';
import { FETCH_ORDER, UPDATE_ORDER, DELETE_ITEM_ORDER, UPDATE_CART_ORDER } from '../constants';

export const order = handleActions({
    [FETCH_ORDER]: (state, action) => (action.payload),
    [UPDATE_ORDER]: (state, action) => {
        const orderItemPayload = action.payload;
        const { id } = orderItemPayload;
        const order_items_store = state.orderItems;
        const initialOrderItems = [];
        const orderItems = order_items_store.reduce(
            (acc,order_item) => {
                if(order_item.id === id){
                    return [ ...acc, orderItemPayload];
                }
                else{
                    return [ ...acc, order_item];
                }
            },
        initialOrderItems);
        const totalPrice = orderItems.reduce((sum,item) => sum + Number(item.price), 0).toFixed(2);
        const count = orderItems.reduce((sum,item) => sum + item.quantity, 0);

        return { ...state, totalPrice, count, orderItems};
        

    },
    [UPDATE_CART_ORDER]: (state, action) => {
        const orderItemPayload = action.payload;
        const { idOrder, id } = orderItemPayload;
        const order_items_store = state.orderItems;
        const initialOrderItems = [];
        const orderItems = order_items_store.reduce(
            (acc,order_item) => {
                if(order_item.id === id){
                    return [ ...acc, orderItemPayload];
                }
                else{
                    return [ ...acc, order_item];
                }
            },
        initialOrderItems);
        const exist = order_items_store.some(order_item => order_item.id === id);
        if(!exist){orderItems.push(orderItemPayload)};
        const totalPrice = orderItems.reduce((sum,item) => sum + Number(item.price), 0).toFixed(2);
        const count = orderItems.reduce((sum,item) => sum + item.quantity, 0);
        if(state.id !== 0){
            return { ...state, totalPrice, count, orderItems};
        }
        else{
            return { ...state, id: idOrder, totalPrice, count, orderItems};
        }
    },
    [DELETE_ITEM_ORDER]: (state, action) => {
        const orderItems = state.orderItems.filter(order_item => order_item.id !== action.payload);
        const totalPrice = orderItems.reduce((sum,item) => sum + Number(item.price), 0).toFixed(2);
        const count = orderItems.reduce((sum,item) => sum + item.quantity, 0);
        return {...state, totalPrice, count, orderItems }
    }
}, {});
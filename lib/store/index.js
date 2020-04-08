import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './../reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState ={
    util: 
    {
        openCartTopBlock: false,
        openComplementBlock: false,
        openModal: false,
        complement: '',
        count: 0
    }
}

export const store = createStore(reducers, initialState, 
    composeEnhancers(applyMiddleware(promiseMiddleware)));
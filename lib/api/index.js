import superagent from 'superagent';
import { GetFilterComplement, GetFilterVariation, GetFilterOrder, GetFilterOrderItem } from '../utils';
     
export const apiGetComplements = (url) => () => 
superagent
.get(url).then(r => {
    return GetFilterComplement(r.body);
})

export const apiGetVariation = (url) => () => 
superagent
.get(url).then(r => {
    return GetFilterVariation(r.body[0]);
})

export const apiGetOrder = (url) => () => 
superagent
.get(url).then(r => {
    return GetFilterOrder(r.body[0]);
})

export const apiAddProductInCart = (url,payload) => () => 
superagent
.post(url)
.send(payload)
.set('Content-Type', 'application/json')
.then( res => {
    return GetFilterOrderItem(res.body[0]);
});

export const apiUpdateCart = (url,id,payload) => () => 
superagent
.patch(`${url}cart/${id}/items?_format=json`)
.send(JSON.stringify(payload))
.set('Content-Type', 'application/json')
.then( res => {
    return GetFilterOrder(res.body);
});

export const apiDeleteItemInCart = (url,idOrder,idItem) => () => 
superagent
.delete(`${url}cart/${idOrder}/items/${idItem}?_format=json`)
.then( res => {
    return idItem;
});

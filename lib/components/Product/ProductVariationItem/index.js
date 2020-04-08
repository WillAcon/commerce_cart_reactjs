import React from 'react';
import PropTypes from 'prop-types';

const getPriceData = ({price, priceSale}) => {
    if(priceSale) { 
        return (
        <div className="ctn-product-detaills-price-data">
            <div className="ctn-product-detaills-price oferta-normal">{priceSale}</div>
            <div className="ctn-product-detaills-price oferta-oferta">{price}</div>
        </div>)
    }
    else{
        return (<div className="ctn-product-detaills-price normal">
            {price}
        </div>)
    }
}

const ProductVariationItem = ({
    variation:{id,price,priceSale,quantity}, 
    onDecrementQuantityClick,
    onIncrementQuantityClick,
    onBuyProductClick}) =>(
        <div className="ctn-product-data">
            {
                getPriceData({price, priceSale})
            }
            <div className="ctn-product-value">
                <div className="ctn-car-cantidad-select">
                <span className="button-decrement" onClick={()=>onDecrementQuantityClick(quantity)}>-</span>
                    <input type="text" id="txt" value={quantity}/>
                <span className="button-increment" onClick={()=>onIncrementQuantityClick(quantity)}>+</span>
                </div>
                <input onClick={()=>onBuyProductClick(id,quantity)} class="button is-custom is-uppercase" value="Añadir al carrito" />
            </div>
        </div>
    );
ProductVariationItem.propTypes = {
    variation: PropTypes.shape({
        id: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        priceSale: PropTypes.number,
        quantity: PropTypes.number.isRequired,
    }),

};

export default ProductVariationItem;
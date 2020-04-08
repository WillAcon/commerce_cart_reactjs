import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ 
    orderItem,
    onDecrementQuantityClick,
    onIncrementQuantityClick,
    onDeleteItemClick,
     }) => {
    return (
        <div className="cart-item-product">
            <div className="item-producto">
                <div className="data">
                    <div className="left-prod">
                        <img src={orderItem.image} alt={orderItem.title}/>
                    </div>
                    <div className="center-prod">
                        <h4 className="titulo">{orderItem.title}</h4>
                        <div className="content-cant">
                            <p>Cantidad</p>
                            <span className="btn-minus"  onClick={() => onDecrementQuantityClick(orderItem)}>
                                <i className="fas fa-minus"></i>
                            </span>
                            <span className="cantidad">{orderItem.quantity}</span>
                            <span className="btn-mas" onClick={() => onIncrementQuantityClick(orderItem)}>
                                <i className="fas fa-plus"></i>
                            </span>
                        </div>
                        <span onClick={()=>onDeleteItemClick(orderItem)}> <i className="far fa-trash-alt js-delete"></i> </span>
                        <span className="precio">{`${orderItem.priceFormatted} ${orderItem.price}`}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    orderItem: PropTypes.shape({
        id: PropTypes.number.isRequired,
        idOrder: PropTypes.number.isRequired,
        purchasedEntity: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,        
        price: PropTypes.string.isRequired,
        isParent: PropTypes.bool.isRequired,
      }),
    onDecrementQuantityClick: PropTypes.func.isRequired,
    onIncrementQuantityClick: PropTypes.func.isRequired,
    onDeleteItemClick: PropTypes.func.isRequired,
};

export default CartItem;
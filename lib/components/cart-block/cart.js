import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import CartItem from './CartItem';
import { updateItemInCart } from '../../actions/updateItemInCart';
import { updateCart } from '../../actions/updateCart';
import { deleteItemInCart } from '../../actions/deleteItemInCart';
import { getOrder } from '../../selectors/order';

class Cart extends Component {

  componentDidMount() {
    
  }
  
  doItemDelete = item => {
    this.props.deleteItemInCart(item.idOrder,item.id);
  }

  doItemsUpdate = () => {
    const payload = {};
    this.props.cart.orderItems.map(item => {
      payload[item.id] = {
        quantity: item.quantity
      };
    });

    this.props.updateCart(payload,this.props.cart.id);
  }
  handleQuantityIncrement = item => {
    item.quantity++;
    item.price = (item.quantity * Number(item.purchasedEntityPrice)).toFixed(2);
    this.props.updateItemInCart(item);
    this.doItemsUpdate();
  }

  handleQuantityDecrement = item => {
    item.quantity--;
    item.price = (item.quantity * Number(item.purchasedEntityPrice)).toFixed(2);
    if(item.quantity >= 1) {
      this.props.updateItemInCart(item);
      this.doItemsUpdate();
    }
  }

  strToComponent = order_items => {
    return order_items.map( item => (
      <CartItem
        key = {item.id}
        orderItem = {item}
        onDecrementQuantityClick={this.handleQuantityDecrement}
        onIncrementQuantityClick={this.handleQuantityIncrement}
        onDeleteItemClick={this.doItemDelete}
         />
  ))
  }
  render() {
    const {cart} = this.props;
    return(
      <div className="cartContent">
        <div className="car-mbody">
          <div className="container-mbody">
            <div className="content-mbody">
              <div>    
                <table>
                  {
                    this.strToComponent(cart.orderItems)
                  }
                </table>      
              </div>
            </div>
          </div>
        </div>
        <div className="car-mfooter">
          <div className="sub-total">
            <p>Sub Total</p>
            <span>{`${cart.totalPriceFormatted} ${cart.totalPrice}`}</span>
          </div>
          <a href="/cart">Ver bolsas de compras</a>
        </div>
      </div>
    )
  }
}

Cart.propTypes = {
  updateItemInCart: PropTypes.func,
  updateCart: PropTypes.func,
  deleteItemInCart: PropTypes.func,
  cart: PropTypes.object,
}
const mapStateToProps = state => ({
  cart: getOrder(state)
})
export default connect(mapStateToProps,{
  updateItemInCart,
  updateCart,
  deleteItemInCart
})(Cart);

import React, { Component } from 'react';
import {object} from 'prop-types';
import {baseUrl, formatNewCart} from "../../utils";
import superagent from 'superagent';

class Cart extends Component {

  static propTypes = {
    cart: object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      // Copy the prop into state so we can refresh it.
      cart: props.cart,
      cartId: props.cart.order_id,
      langCode: drupalSettings.path.currentLanguage,
    };
  }
  doCartRefresh() {
    const url = `${baseUrl}/cart/${this.props.cart.order_id}?_format=json`;
    superagent
      .get(url)
      .end((err, { body }) => {
        // debugger;
        this.setState({
          cart: body,
        });
      })
  }
  doItemDelete(item, event) {
    event.preventDefault();
    superagent
      .delete(`${baseUrl}/cart/${this.props.cart.order_id}/items/${item.order_item_id}?_format=json`)
      .end((err, { body }) => {
        // debugger;
        this.doCartRefresh();
      })
  }
  render() {
    // console.log("40", this.state.cart);
    const cart_temp = this.state.cart ? this.state.cart : this.props.cart;
    return(
      <div>
        <table>
          {cart_temp.order_items.map(item => (
            <tr key={item.order_item_id}>
              <td>x{parseInt(item.quantity)}</td>
              <td>{item.title}</td>
              <td>{formatPrice(item.unit_price)}</td>
              <td>{formatPrice(item.total_price)}</td>
              <td><button onClick={this.doItemDelete.bind(this, item)}>
                <span>X</span> <span className="hidden">Remove</span>
              </button></td>
            </tr>
          ))}
        </table>
        <div>Total: {formatPrice(this.props.cart.total_price)}</div>
      </div>
    )
  }
}
export default Cart;

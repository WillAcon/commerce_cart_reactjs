import React, { Component } from 'react';
import {object} from 'prop-types';
import {baseUrl, formatPrice} from "../../utils";
import superagent from 'superagent';

class Cart extends Component {
  // static propTypes = {
  //   cart: object.isRequired
  // };
  constructor(props) {
    super(props);
    // this.state = {
    //   // Copy the prop into state so we can refresh it.
    //   cart: props.cart,
    //   cartId: props.cart.order_id,
    //   langCode: drupalSettings.path.currentLanguage,
    // };
  }
  // doCartRefresh() {
  //   const url = `${baseUrl}/cart/${this.state.cartId}?_format=json`;
  //   superagent
  //     .get(url)
  //     .end((err, { body }) => {
  //       debugger;
  //       this.setState({
  //         cart: body,
  //       });
  //     })
  // }
  // doItemDelete(item, event) {
  //   event.preventDefault();
  //   superagent
  //     .delete(`${baseUrl}/cart/${this.state.cartId}/items/${item.order_item_id}?_format=json`)
  //     .end((err, { body }) => {
  //       debugger;
  //       this.doCartRefresh();
  //     })
  // }
  render() {
    return(
      <div>
        Agregar
      </div>
    )
  }
}
export default Cart;

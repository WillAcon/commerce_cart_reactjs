import React, { Component } from 'react';
import {object} from 'prop-types';
import {baseUrl, formatPrice} from "../../utils";
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
    var x = Math.floor((Math.random() * 199998880) + 1);

    const url = `${baseUrl}/cart/${this.props.cart.order_id}?_format=json&t=${x}`;
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
    console.log("DELETEEE", item);
    event.preventDefault();
    superagent
      .delete(`${baseUrl}/cart/${this.props.cart.order_id}/items/${item.order_item_id}?_format=json`)
      .end((err, { body }) => {
        // debugger;
        this.doCartRefresh();
      })
  }
  render() {
  //  console.log("41111111111111110", this.state.cart);
    const cart_temp = this.state.cart;
    return(
      <div>
        <table>
          {cart_temp.order_items.map(item => (
            
              <div className="item-producto" key={item.order_item_id}>
                <div className="data">
                    <div className="left-prod">
                        <img src="https://los-herrajes.s3-us-west-2.amazonaws.com/media/cache/78/a7/78a70b101ae86ad775cf2524be096d47.png" alt=""/>
                    </div>
                    <div className="center-prod">
                        <h4 className="titulo">{item.title}</h4>
                        <div className="content-cant">
                            <p>Cantidad</p>
                            <span className="btn-minus">
                                <i className="fas fa-minus"></i>
                            </span>
                            <span className="cantidad">{parseInt(item.quantity)}</span>
                            <span className="btn-mas">
                                <i className="fas fa-plus"></i>
                            </span>
                        </div>
                        <span onClick={this.doItemDelete.bind(this, item)}> <i className="far fa-trash-alt js-delete"></i> </span>
                       
                        <span className="precio">{item.total_price.formatted}</span>
                    </div>
                </div>
                <ul className="complementos">
                </ul>
            </div>
            // <tr key={item.order_item_id}>
            //   <td>x{parseInt(item.quantity)}</td>
            //   <td>{item.title}</td>
            //   <td>{formatPrice(item.unit_price)}</td>
            //   <td>{formatPrice(item.total_price)}</td>
            //   <td><button onClick={this.doItemDelete.bind(this, item)}>
            //     <span>X</span> <span className="hidden">Remove</span>
            //   </button></td>
            // </tr>


          ))}
        </table>
        <div>Total: {this.state.cart.total_price.formatted}</div>
      </div>
    )
  }
}
export default Cart;

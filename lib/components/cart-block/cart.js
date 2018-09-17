import React, { Component } from 'react';
import {object} from 'prop-types';
import {baseUrl, formatPrice, formatNewCart,formatNewCart_1 } from "../../utils";
import superagent from 'superagent';

class Cart extends Component {
  static propTypes = {
    cart: object.isRequired
  };
  constructor(props) {
    super(props);
    // console.log("PROPSS", this.props);
    this.state = { 
      // Copy the prop into state so we can refresh it.
      cart: props.cart,
      cartId: props.cart.order_id,
      order_id: props.order_id,
      langCode: drupalSettings.path.currentLanguage,
    };
  }

  doCartRefresh(borre) {
    var x = Math.floor((Math.random() * 199998880) + 1);
    const url = `${baseUrl}/cart?_format=json&t=${x}`;
      superagent
        .get(url)
        .end((err, { body }) => {
  
          //  console.log("bodyy", body)
        // console.log("DESUES DE BORRAR", body[0].total_price);
          if(borre == 'delete' && body[0].total_price == 0){
            window.location.reload();
          }else {
            body = formatNewCart_1(body[0]);
            this.setState({
              cart: body,
            });
          } 
  
        })


    // const url = `${baseUrl}/api/carts/${this.state.order_id}?_format=json&t=${x}`;
    // superagent
    //   .get(url)
    //   .end((err, { body }) => {

    //     // console.log("DESUES DE BORRAR", body[0].total_price);
    //     if(borre == 'delete' && body[0].total_price == 0){
    //       window.location.reload();
    //     }else {
    //       body = formatNewCart(body);
    //       this.setState({
    //         cart: body,
    //       });
    //     }              

    //   })


  }
  doItemDelete(item, event) {
    // console.log("DELETEEE", item);
    event.preventDefault();
    superagent
      .delete(`${baseUrl}/cart/${this.props.cart.order_id}/items/${item.order_item_id}?_format=json`)
      .end((err, { body }) => {
        // debugger;
    
        this.doCartRefresh("delete");
      })
  }


  doItemsUpdate() {
    event.preventDefault();

    const payload = {};
    this.state.cart.order_items.map(item => {
      payload[item.order_item_id] = {
        quantity: item.quantity
      };
    });

    superagent
      .patch(`${baseUrl}/cart/${this.state.cartId}/items?_format=json`)
      .set('Content-Type', 'application/json')
      .send(JSON.stringify(payload))
      .end((err, { body }) => {
        this.doCartRefresh();
      })
  }
  handleQuantityChange(item, _key, event) {
    // Update the items quantity.
    // item.quantity = event.target.value;
    
    item.quantity = parseInt(item.quantity) + 1;
    // console.log("item mas", item);
    let cart = this.state.cart;
    cart.order_items[_key] = item;
    this.setState({
      cart: cart
    })

    this.doItemsUpdate();

  }
  handleQuantityLess(item, _key, event) {
    // Update the items quantity.
    // item.quantity = event.target.value;

    item.quantity = parseInt(item.quantity) - 1;
    if(item.quantity >= 1) {
        let cart = this.state.cart;
        cart.order_items[_key] = item;
        this.setState({
          cart: cart
        })
        this.doItemsUpdate();
    }
  }

  render() {
//  console.log("41111111111111110", this.state.cart);
    const cart_temp = this.state.cart;
    // console.log("41111111111111110", cart_temp);
    // if(!this.state.cart) {
    //   return (<div>Loading</div>)
    // }
    return(
<div>
      <div className="car-mbody">
      <div className="container-mbody">
          <div className="content-mbody">
<div>

            
        <table>
          {this.state.cart.order_items.map((item, _key )=> (
              <div className="item-producto" key={item.order_item_id}>
                <div className="data">
                    <div className="left-prod">
                       
                        <img src={item.image} alt={item.title}/>
                    </div>
                    <div className="center-prod">
                        <h4 className="titulo">{item.title}</h4>
                        <div className="content-cant">
                            <p>Cantidad</p>
                            <span className="btn-minus"  onClick={this.handleQuantityLess.bind(this, item, _key)}>
                                <i className="fas fa-minus"></i>
                            </span>
                            <span className="cantidad">{parseInt(item.quantity)}</span>

                           {/* { <span>
                                <input
                                    type="number"
                                    value={parseInt(item.quantity)}
                                    onChange={this.handleQuantityChange.bind(this, item, _key)}
                                />
                            </span>} */}

                            <span className="btn-mas" onClick={this.handleQuantityChange.bind(this, item, _key)}>
                                <i className="fas fa-plus"></i>
                            </span>
                        </div>
                        <span onClick={this.doItemDelete.bind(this, item)}> <i className="far fa-trash-alt js-delete"></i> </span>
                        <span className="precio">{item.price}</span>
                        {/* <span className="precio">{item.total_price.formatted}</span> */}
                    </div>
                </div>
                <ul className="complementos">
   
                </ul>
            </div>
 


          ))}
        </table>
      
            </div>

          </div>
      </div>
  </div>
  <div className="car-mfooter">
      <div className="sub-total">
          <p>Sub Total</p>
          <span>{cart_temp.total_price}</span>
      </div>
      <a href="/cart">Ver bolsas de compras</a>
  </div>
</div>
      
    )
  }
}
export default Cart;

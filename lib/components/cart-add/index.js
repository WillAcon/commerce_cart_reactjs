import React, { Component } from 'react';
import {baseUrl} from "../../utils";
import superagent from 'superagent';
import Cart from "./cart";

class CartAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      expanded: false,
      count: 0,
      carts: [],
    };
    this.onClickExpand = this.onClickExpand.bind(this);
  }
  getCarts() {
    console.log('Getting add');
    const url = `${baseUrl}/cart?_format=json`;
    superagent
      .get(url)
      .end((err, { body }) => {
        let count = 0;
        for (let i in body) {
          count += body[i].order_items.length;
        }
        this.setState({
          loaded: true,
          count: count,
          carts: body.length > 0 ? body : [],
        });
      })
  }
  componentDidMount() {
    this.getCarts();
  }
  onClickExpand(event) {
    event.preventDefault();
    this.setState({
      expanded: !this.state.expanded
    });
  }
  render() {
    if (!this.state.loaded) {
      return null;
    }
    return (
      <div>
        <Cart/>
      </div>
    )
  }
}
export default CartAdd;

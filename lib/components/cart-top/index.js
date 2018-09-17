import React, { Component } from 'react';
import {baseUrl,formatNewCart} from "../../utils";
import superagent from 'superagent';
import CartBlock from "../cart-block";

class CartTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open_block: false,
      order_id: null,
      count: null,
    };
    // this.onClickExpand = this.onClickExpand.bind(this);

    // this.loadingBlock =  this.loadingBlock.bind(this);
    // this.closeCartTop =  this.closeCartTop.bind(this);
    this.setChangeOpen = this.setChangeOpen.bind(this);
    this.openCartTop =  this.openCartTop.bind(this);

  }
  getCarts() {
    var x = Math.floor((Math.random() * 199998880) + 1);

    // this.setState({loading_block: true});
    // this.setState({block: true});

    const url = `${baseUrl}/cart?_format=json&t=${x}`;
    
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
          order_id: body.length > 0 ? body[0].order_id : null
        });
      })
  }


  componentDidMount() {
    this.getCarts();
  }


  openCartTop() {
     this.setState({open_block: true});
  }
  // END
  setChangeOpen() {
    this.setState({open_block: false});
    this.getCarts();
  }

  render() {


    // if (!this.state.order_id) {
    //   return null;
    // }
    // console.log("CARGAAAAAA",this.props)
    
    return (
         <div>
          {
             this.state.open_block ? <CartBlock openBlock={this.state.open_block} order_id={this.state.order_id} changeOpen={this.setChangeOpen} /> : null 
          }
          <div  onClick={this.openCartTop}  className="btn--shopping--list">
            <span className="icon-shopping ico-header"></span>
            {
              (this.state.count && this.state.count > 0) ?
                <span className=""> 
                ({this.state.count})
                </span>:null
            }
           </div>
        </div>
    )
  }
}
export default CartTop;

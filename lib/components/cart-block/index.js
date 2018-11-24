import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Cart from "./cart";

class CartBlock extends Component {
  componentDidMount() {
  }
  
  render() {
    const {openBlock, cart} = this.props;
    return ( openBlock &&
      <div className="global-ipe">
      { cart ?           
        <section className='menu-lateral active' >
          <div className="background-flor" onClick={() => this.props.changeOpen()}></div>
          <div className={'container-menu-lateral enable'}>
            {
              cart.orderItems.length === 0 ?
              <div className='content-sin-flores active' >
                <p>Aun no has agregado productos a tu carrito</p>
                <a  onClick={() => this.props.changeOpen()} className="btn-comprando" >Continuar comprando</a>
              </div>
            :
            <div className="content-con-flores">
              <div className="car-mheader">
                <p>Carrito de compra</p>
                <span onClick={() => this.props.changeOpen()}> 
                  <i className="fas fa-times js-close"></i>
                </span>
              </div>
              <Cart />
            </div>
            }   
          </div>
        </section> :  
        <section className='loading-flor active'>
          <i className="fas fa-leaf"></i>
        </section>
      }
      </div>
    )
  }
}
CartBlock.propTypes= {
  openBlock: PropTypes.bool.isRequired,
  cart: PropTypes.object,
}
export default connect(null,null)(CartBlock);

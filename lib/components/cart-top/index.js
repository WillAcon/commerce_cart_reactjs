import React, { Component } from 'react';
import CartBlock from "../cart-block";
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getOrder } from '../../selectors/order';
import { getUtil } from '../../selectors/util';
import { fetchOrder } from '../../actions/fetchOrder';
import { setOpenCartTopBlock } from '../../actions/setOpenBlock';
import { setCountCart } from '../../actions/setCountCart';

class CartTop extends Component {

  componentDidMount() {
    console.log("CartTop")
    const { order, fetchOrder, setCountCart } = this.props;
    if(Object.getOwnPropertyNames(order).length === 0){
      fetchOrder().then(r => {
        const count = r.payload.count;
        setCountCart(count);
      });
    }  
  }

  openCartBlock = () => {
    this.props.setOpenCartTopBlock(true);
  }

  setChangeOpen = () => {
    this.props.setCountCart(this.props.order.count);
    this.props.setOpenCartTopBlock(false);
  }

  render() {
    const {util, order} = this.props;
    return (
         <div className="cartTopBlock">
          {util.openCartTopBlock &&
          <CartBlock 
            openBlock={util.openCartTopBlock} 
            cart={order} 
            changeOpen={this.setChangeOpen} />
            }
          <div  onClick={this.openCartBlock}  className="btn--shopping--list">
            <span className="icon-shopping ico-header"></span>
            <span className="">({util.count})</span>
           </div>
        </div>
    )
  }
}
CartTop.propTypes = {
  fecthOrder: PropTypes.func.isRequired,
  setOpenCartTopBlock: PropTypes.func,
  setCountCart: PropTypes.func,
  util: PropTypes.object,
  order: PropTypes.object,
}

CartTop.defaultProps = {
  order:{}
}
const mapStateToProps = state =>({
  order: getOrder(state),
  util: getUtil(state)
});

export default connect(mapStateToProps, {
  fetchOrder,
  setOpenCartTopBlock,
  setCountCart
})(CartTop);
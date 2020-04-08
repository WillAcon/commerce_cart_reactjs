import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import {getComplementByType} from '../../selectors/complements';
import ComplementItem from './ComplementItem/ComplementItem';
import { getOrder } from '../../selectors/order';
import { getVariation } from '../../selectors/variation';
import { deleteItemInCart } from '../../actions/deleteItemInCart';
import { addProductInCart } from '../../actions/addProductInCart';
import { setOpenComplementBlock } from '../../actions/setOpenBlock';

class Complements extends Component {
 
  componentDidMount() {

  }

  BuscarClase(item) {
    return this.props.order.orderItems.some(order_item => order_item.purchasedEntity == +item.cid);
  }
  searchParent(){
    return this.props.order.orderItems.some(order_item => order_item.purchasedEntity == +this.props.variation.id);
  }
  AddProductos = (id) => {
    const payload = {
      order_item_data : {
        "purchased_entity_type": 'commerce_product_variation',
        "purchased_entity_id": id,
        "quantity": "1"
      }
    };
    if(!this.searchParent()){
      const productParent = {
        order_item_data : {
          "purchased_entity_type": 'commerce_product_variation',
          "purchased_entity_id": this.props.variation.id,
          "quantity": "1"
        }
      };
      this.props.addProductInCart(productParent);

    }
    this.props.addProductInCart(payload);
  }

  doItemDelete = item => {
    this.props.deleteItemInCart(item.idOrder,item.id);
  }

  handleComplementClick =(item) => {
    const change = this.props.order.orderItems.some(order_item => order_item.purchasedEntity == +item.cid);
    const orderItem = this.props.order.orderItems.find(order_item => order_item.purchasedEntity == +item.cid);
    if(change){
      this.doItemDelete(orderItem); 
    }
    else{
      this.AddProductos(item.cid);
    }
  }

  strToComponents = (item) => ( 
    item.map( complement => {
      const classes = classnames('complement__item',{'in-list': this.BuscarClase(complement)}) 
      return(
      <ComplementItem
      key={complement.cid}
      data={complement}
      classes={classes}
      onComplementItemClick={this.handleComplementClick} />
    )
    }
  ));

  render() {
    const {complement, type} = this.props;
      return( complement ?
        <div className="modal-card hero is-white">
          <div class="title-filtro"><h3>{type}</h3></div>
          <div className="content complementos__box__item">
            <div className="columns is-centered is-multiline">
              {this.strToComponents(complement.data)}
            </div>
          </div>
        </div>:
        <div className="loader">
        </div>
      )
  }
}

Complements.propTypes = {
    type: PropTypes.string.isRequired,
    complement: PropTypes.object, 
    order: PropTypes.object,
    addProductInCart: PropTypes.func,
    deleteItemInCart: PropTypes.func,
    setOpenComplementBlock: PropTypes.func,
}

const mapStateToProps = (state, props) => ({
    complement: getComplementByType(state, props),
    order: getOrder(state),
    variation: getVariation(state)
})
export default connect(mapStateToProps, {
  addProductInCart,
  deleteItemInCart,
  setOpenComplementBlock
})(Complements);

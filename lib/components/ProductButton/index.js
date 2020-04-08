import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Complements from "../cart-complement";
import ReactModal  from 'react-modal';
import ComplementIconList from '../ComplementIconList';
import CartBlock from "../cart-block";
import { customStyles } from '../../constants/styles';
import { fetchComplements } from '../../actions/fetchComplements';
import { fetchVariation } from '../../actions/fetchVariation';
import { addProductInCart } from '../../actions/addProductInCart';
import { setQuantityVariation } from '../../actions/setQuantityVariation';
import { getComplements } from '../../selectors/complements';
import { getVariation } from '../../selectors/variation';
import { getOrder } from '../../selectors/order';
import ProductVariationItem from './ProductVariationItem';
import { getUtil } from '../../selectors/util';
import { setOpenComplementBlock } from '../../actions/setOpenBlock';
import { setCountCart } from '../../actions/setCountCart';
import { setOpenModal } from '../../actions/setOpenModal';
import { setComplement } from '../../actions/setComplement';

class ProductButton extends Component {
  
  componentDidMount() {

    if(this.props.complements.length === 0){
      this.props.fetchComplements();
    }
    if(Object.getOwnPropertyNames(this.props.variation).length === 0){
      this.props.fetchVariation();
    }
  }

  incrementQuantity = quantity => {
    quantity++;
    this.props.setQuantityVariation(quantity);
  }
  decrementQuantity = quantity => {
    if(quantity > 1) {
      quantity--;
      this.props.setQuantityVariation(quantity);
    }
  }

  buyProduct = (id,quantity) => {
    const payload = {
      order_item_data : {
        "purchased_entity_type": 'commerce_product_variation',
        "purchased_entity_id": id,
        "quantity": quantity
      }
    };
    this.props.addProductInCart(payload);
    this.props.setOpenComplementBlock(true);
  }

  handleSelectionComplement = type => {
    this.props.setComplement(type);
    this.props.setOpenModal(true);
  }

  closeModal = () => {
    this.props.setCountCart(this.props.order.count);
    this.props.setOpenModal(false);
  }

  setChangeOpen= () => {
    this.props.setCountCart(this.props.order.count);
    this.props.setOpenComplementBlock(false);
  }
  render() {
    const {complements, variation, util, order} = this.props
    return (
       <div>
          
          <ProductVariationItem 
            variation={variation}
            onDecrementQuantityClick={this.decrementQuantity}
            onIncrementQuantityClick={this.incrementQuantity}
            onBuyProductClick={this.buyProduct}>
          </ProductVariationItem>

      </div>
    )
  }
}
ProductButton.propTypes = {
  fetchComplements: PropTypes.func.isRequired,
  fetchVariation: PropTypes.func.isRequired,
  setQuantityVariation: PropTypes.func,
  addProductInCart: PropTypes.func,
  setOpenComplementBlock: PropTypes.func,
  setCountCart: PropTypes.func,
  setOpenModal: PropTypes.func,
  setComplement: PropTypes.func,
  complements: PropTypes.array.isRequired,
  order: PropTypes.object,
  util: PropTypes.object,
  variation: PropTypes.object,
};

ProductButton.defaultProps = {
  complements: [],
  variation: {},
  order:{},
}
const mapStateToProps = state => ({ 
  complements: getComplements(state),
  variation: getVariation(state),
  order: getOrder(state),
  util: getUtil(state)
});

export default connect(mapStateToProps, { 
  fetchComplements,
  fetchVariation,
  setQuantityVariation,
  addProductInCart,
  setOpenComplementBlock,
  setCountCart,
  setOpenModal,
  setComplement
} )(ProductButton);

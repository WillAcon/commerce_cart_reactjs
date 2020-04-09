import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
// import CartBlock from "./components/cart-block";
// import CartForm from "./components/cart-form";
// import CartAdd from "./components/cart-add";

import Product from "./components/Product";
//import CartComplement from "./components/cart-complement/index-2";

import CartTop from "./components/cart-top";

import ProductButton from "./components/ProductButton";


// if (document.getElementById('reactCartBlock')) {
//   render(<CartBlock/>, document.getElementById('reactCartBlock'));
// }

// if (document.getElementById('reactCartForm')) {
//   render(<CartForm/>, document.getElementById('reactCartForm'));
// }

const CartTopComponent = (
  <Provider store={store}>
    <CartTop />
  </Provider>
)
if (document.getElementById('reactCartTop')) {
  render(CartTopComponent, document.getElementById('reactCartTop'));
}

// const CartTopMobileComponent = (
//   <Provider store={store}>
//     <CartTop />
//   </Provider>
// )

// if (document.getElementById('reactCartMobile')) {
//   render(CartTopMobileComponent, document.getElementById('reactCartMobile'));
// }

// if (document.getElementById('reactCartAdd')) {
//   render(<CartAdd/>, document.getElementById('reactCartAdd'));
// }
// if (document.getElementById('reactCartComplement')) {
//   render(<CartComplement />, document.getElementById('reactCartComplement'));
// }
const CartComplementComponent = (
  <Provider store={store}>
    <Product />
  </Provider>
)
if (document.getElementById('reactCartComplement')) {
  render(CartComplementComponent, document.getElementById('reactCartComplement'));
}


const ButtonProductComponent = (id_variation) => (
  <Provider store={store}>
    <ProductButton id_variation={id_variation} />
  </Provider>
)

if (document.querySelectorAll('.add-redux-cart')) {
  const items = document.querySelectorAll('.add-redux-cart');
  items.forEach(item => {
    let id_variation = item.getAttribute("data-variation");
    render(ButtonProductComponent(id_variation), item);
  })
}


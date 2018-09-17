import React from 'react';
import { render } from 'react-dom';
// import CartBlock from "./components/cart-block";
// import CartForm from "./components/cart-form";
// import CartAdd from "./components/cart-add";

import CartComplement from "./components/cart-complement";
import CartTop from "./components/cart-top";

// if (document.getElementById('reactCartBlock')) {
//   render(<CartBlock/>, document.getElementById('reactCartBlock'));
// }

// if (document.getElementById('reactCartForm')) {
//   render(<CartForm/>, document.getElementById('reactCartForm'));
// }


if (document.getElementById('reactCartTop')) {
  render(<CartTop/>, document.getElementById('reactCartTop'));
}

if (document.getElementById('reactCartMobile')) {
  render(<CartTop/>, document.getElementById('reactCartMobile'));
}

// if (document.getElementById('reactCartAdd')) {
//   render(<CartAdd/>, document.getElementById('reactCartAdd'));
// }


if (document.getElementById('reactCartComplement')) {
  render(<CartComplement/>, document.getElementById('reactCartComplement'));
}
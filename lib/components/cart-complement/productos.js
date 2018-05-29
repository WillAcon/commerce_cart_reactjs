import React, { Component } from 'react';
import {object} from 'prop-types';
import {baseUrl, formatPrice} from "../../utils";
import superagent from 'superagent';

class Productos extends Component {
  // static propTypes = {
  //   cart: object.isRequired
  // };
  constructor(props) {
    super(props);
    this.state = {
      // Copy the prop into state so we can refresh it.
      complementos: props.complementos,
      addCart: [] ,
      // cartId: props.cart.order_id,
      langCode: drupalSettings.path.currentLanguage,
    };

    this.onClickSelect= this.onClickSelect.bind(this);
  }

// onClickSelect = (param) => (e) => { 
//   console.log('Event', e);
//   console.log('Parameter', param);
// }
  onClickSelect(item) {
  	// https://reactjs.org/docs/faq-functions.html
    
    // this.setState({ justClicked: letter });
    // console.log(item);

    //  this.state.addCart.push(item)
    // this.setState(
    //   this.state
    // )
    
      console.log("38",this.props)
   var size = Object.keys(this.state.addCart)
   console.log("size", size);
 for(var i = 0; i < size; i++){
    	console.log("cid",item.cid);
    	console.log("i",i);
    	// console.log("addCart",this.state.addCart[i]);
      if(this.state.addCart[i].cid && (this.state.addCart[i].cid == item.cid)){
         delete this.state.addCart[i];
         this.state.addCart.length = this.state.addCart.length - 1;
         console.log("DELETECART",this.state.addCart)
         return true;
      }
    }

    this.state.addCart.push(item);
    this.setState(
    	this.state
    )
    console.log("ADDCART",this.state.addCart)

  }
// https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9

  //  onClickSelect(item, param)=> {
  //   // event.preventDefault();
  //   console.log("event", param);
  //   // this.setState({
  //   //   expanded: !this.state.expanded
  //   // });
  // }

  // doProductosRefresh() {
  //   const url = `${baseUrl}/cart/${this.state.cartId}?_format=json`;
  //   superagent
  //     .get(url)
  //     .end((err, { body }) => {
  //       debugger;
  //       this.setState({
  //         cart: body,
  //       });
  //     })
  // }
  // doItemDelete(item, event) {
  //   event.preventDefault();
  //   superagent
  //     .delete(`${baseUrl}/cart/${this.state.cartId}/items/${item.order_item_id}?_format=json`)
  //     .end((err, { body }) => {
  //       debugger;
  //       this.doProductosRefresh();
  //     })
  // }
  render() {
  	console.log("productos 90", this.props);
    return(
      <div className="modal-card hero is-white">
        <div classsName="content">
          <div className="columns is-multiline is-mobile">
           {this.state.complementos.map(item => (
             <div key={item.cid} className="column is-one-quarter" data-id={item.cid}  onClick={()=>this.onClickSelect(item)} >
               {item.cid}
               {item.producto}
               <img src={item.image} />
             </div>
            ))}
          </div>
        </div>
        <footer>
    	  <button className="button is-primary" onClick={() => this.props.cargar(this.state.addCart)}>Guardar</button>
        </footer>
      </div>
    )
  }
}
export default Productos;

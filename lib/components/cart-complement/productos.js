import React, { Component } from 'react';
import {object} from 'prop-types';
import {baseUrl, formatPrice} from "../../utils";
import superagent from 'superagent';
import classnames from 'classnames';
// import superagentCache from 'superagent-cache';

// superagentCache(superagent);
// https://github.com/Tigatok/commerce_shipping-1/tree/2831602/create-a-shipment-object
class Productos extends Component {
  // static propTypes = {
  //   cart: object.isRequired
  // };
  constructor(props) {
    super(props);
    this.state = {
      // Copy the prop into state so we can refresh it. 
      complementos: props.complementos,
      addCart: props.productos[0] ? props.productos[0].order_items:[] ,
      cartId: props.productos[0] ? props.productos[0].order_id: null,
      langCode: drupalSettings.path.currentLanguage,
      loaded: false
    };

    this.onClickSelect= this.onClickSelect.bind(this);
    this.getCarts= this.getCarts.bind(this);
    this.BuscarClase= this.BuscarClase.bind(this);
    this.renderRow= this.renderRow.bind(this);
    this.AddProductos = this.AddProductos.bind(this);
  }
  // https://github.com/reactjs/react-modal
  // https://reactjs.org/docs/state-and-lifecycle.html

  componentDidMount() {
    console.log('componentDidMount state1111', this.props.productos);
    // this.getCarts();

    setTimeout(() => {
        this.setState(() => {
            console.log('setting state');
            return { loaded: true }
        });
    }, 600);

  }

  getCarts() {
    console.log('LOAD CART PRODUCTO');
    var x = Math.floor((Math.random() * 199998880) + 1);

    const url = `/cart?_format=json&t=${x}`;
    superagent
      .get(url)
      .end((err, { body }) => {
        console.log("LOADDDDDD",body);

        
        this.setState({
          loaded: true,
          addCart:  body.length > 0 ? body[0].order_items : [],
        });

        // this.state.loaded = true;
        // this.state.addCart = body.length > 0 ? body[0].order_items : [];
        // this.setState(
        //   this.state
        // );

      })
  }

  componentWillUnmount() {
    console.log('setting componentWillMount');
  }

  

// onClickSelect = (param) => (e) => { 
//   console.log('Event', e);
//   console.log('Parameter', param);
// }
  BuscarClase(item) {

    for(var i = 0; i < this.state.addCart.length; i++){
      if(this.state.addCart[i].purchased_entity == item.cid) {
        // console.log("activado 11");
        // return "notification is-primary";
        return true;
      }
    }
    // console.log("no active");

    // return false;
  }

  AddProductos(item) {
    // const body = {};
    const url = `/cart/add?_format=json`;

    const payload = {
      order_item_data : {
        "purchased_entity_type":'commerce_product_variation',
        "purchased_entity_id": item.cid,
        "quantity": "1"
      }
    };
    
    console.log(payload);
    superagent
      .post(url)
      .set('Content-Type', 'application/json')
      .send(payload)
      .end((err, { body }) => {

        // console.log(err);
        console.log("aregado",body);
        
        this.state.addCart = body[0].order_items;

        // this.state.addCart.push(item);
        this.setState(
          this.state
        )
        // debugger;
        // console.log(body);
        // this.setState({
        //   cart: body,
        // });
      })
  }


  doItemDelete(item, i) {
    // event.preventDefault();
    superagent
      .delete(`/cart/${this.state.cartId}/items/${item.order_item_id}?_format=json`)
      .end((err, { body }) => {
        // debugger;
        // this.doProductosRefresh();
        this.state.addCart.splice(i,1);
        this.setState(
          this.state
        )
        // this.getCarts();

      })
  }

  onClickSelect(item) {
  	// https://reactjs.org/docs/faq-functions.html
    
    // this.setState({ justClicked: letter });
    // console.log(item);

    //  this.state.addCart.push(item)
    // this.setState(
    //   this.state
    // )
    
      // console.log("38",this.props)
   var size = this.state.addCart.length;
  //  console.log("size", size);
 for(var i = 0; i < this.state.addCart.length; i++){
      if(this.state.addCart[i].purchased_entity && (this.state.addCart[i].purchased_entity == item.cid)){
        this.doItemDelete(this.state.addCart[i],i);     
         return true;
      }
    }
 
  
    this.AddProductos(item);
     return true;
    // console.log("ADDCART",this.state.addCart)

  }

  renderRow(item){
    // console.log("119",this.state.addCart);
    let classes = classnames('column is-one-quarter', { "notification is-primary": this.BuscarClase(item) });
    // className={`column is-one-quarter ${this.BuscarClase(item)}`}
    return (
      <div key={item.cid} className={classes}  data-id={item.cid}  onClick={()=>this.onClickSelect(item)} >
               {item.cid}
               {item.producto}
               <img src={item.image} />
      </div>
    );
  }

  render() {
    console.log("productos 90", this.props);
    console.log("state 91", this.state);
    // this.state.addCart = this.props.productos ? this.props.productos[2]:[];
    if(this.state.loaded) {
      return(
        <div className="modal-card hero is-white">
          <div classsName="content">
            <div className="columns is-multiline is-mobile">
             {this.state.complementos.map(item => (
  
               this.renderRow(item)
  
              ))}
            </div>
          </div>
          <footer>
          {/* <button className="button is-primary" onClick={() => this.props.cargar()}>Guardar</button> */}
          </footer>
        </div>
      )
    }
    else {
      return(
        <div>
          Loading......
        </div>
      )
    }

  }
}
export default Productos;

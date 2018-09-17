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
      addCart: props.productos ? props.productos.order_items:[] ,
      cartId: props.productos ? props.productos.order_id: null,
      langCode: drupalSettings.path.currentLanguage,
      parent_id: props.parent_id,
      loaded: false
    };

    this.onClickSelect= this.onClickSelect.bind(this);
    this.getCarts= this.getCarts.bind(this);
    this.BuscarClase= this.BuscarClase.bind(this);
    this.renderRow= this.renderRow.bind(this);
    this.AddProductos = this.AddProductos.bind(this);
    this.searchParent = this.searchParent.bind(this);
  }
  // https://github.com/reactjs/react-modal
  // https://reactjs.org/docs/state-and-lifecycle.html

  componentDidMount() {

    // this.getCarts();

    setTimeout(() => {
        this.setState(() => {
          
            return { loaded: true }
        });
    }, 600);

  }

  getCarts() {
    
    var x = Math.floor((Math.random() * 199998880) + 1);

    const url = `/cart?_format=json&t=${x}`;
    superagent
      .get(url)
      .end((err, { body }) => {

        this.setState({
          loaded: true,
          addCart:  body.length > 0 ? body[0].order_items : [],
        });



      })
  }

  componentWillUnmount() {

  }

  

// onClickSelect = (param) => (e) => { 
//   console.log('Event', e);
//   console.log('Parameter', param);
// }
  BuscarClase(item) {

    for(var i = 0; i < this.state.addCart.length; i++){
      if(this.state.addCart[i].purchased_entity.variation_id == parseInt(item.cid)) {
        // console.log("activado 11");
        
        // return "notification is-primary";
        return true;
      }
    }
    // console.log("no active");

    // return false;
  }

  AddProductos(item, is_parent) {
    // const body = {};
    // var x = Math.floor((Math.random() * 199998880) + 1);
    const url = `/cart/add?_format=json`;

    const payload = {
      order_item_data : {
        "purchased_entity_type":'commerce_product_variation',
        "purchased_entity_id": item.cid,
        "quantity": "1"
      }
    };
    
 
    superagent
      .post(url)
      .set('Content-Type', 'application/json')
      .send(payload)
      .end((err, { body }) => {


        
        if(body && !this.searchParent(this.state.addCart) && is_parent == null) {
          let item_temp = {
            cid: this.state.parent_id
          };
          this.AddProductos(item_temp, true);
        }else {
 
          // this.state.addCart = body[0];
          
          this.state.addCart.push(body[0]);
          
          this.setState(
            this.state
          )
        }

        
        // debugger;
        // console.log(body);
        // this.setState({
        //   cart: body,
        // });
      })
  }

  searchParent(objectProduct){

    for (var counter=0; counter < objectProduct.length; counter++) {
      if (parseInt(objectProduct[counter].purchased_entity.variation_id) == parseInt(this.state.parent_id)){
        return true;
      }
    }
    return false;
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


      // console.log("38",this.props)
   var size = this.state.addCart.length;
   var change = true;
  //  console.log("size", size);
  for(var i = 0; i < this.state.addCart.length; i++){
      if(this.state.addCart[i].purchased_entity && (this.state.addCart[i].purchased_entity.variation_id == parseInt(item.cid))){
        this.doItemDelete(this.state.addCart[i],i); 
        change = false;
         return true;
      }
    }
 
  if(change){
    this.AddProductos(item);
    return true;
  }
    
    // console.log("ADDCART",this.state.addCart)

  }

  renderRow(item){
    // console.log("119",this.state.addCart);
    let classes = classnames('column is-one-quarter compl-col', { "notification is-primary": this.BuscarClase(item) });
    // className={`column is-one-quarter ${this.BuscarClase(item)}`}
    return (
      <div key={item.cid} className={classes}  data-id={item.cid}  onClick={()=>this.onClickSelect(item)} >
               
              <div className="content">
            
               <div  className="image-co"><img src={item.image} /></div>
               <div  className="title-co">{item.producto}</div>
               <div className="price-co">{item.price__number}</div>
               </div>
      </div>
    );
  }

  render() {

    // this.state.addCart = this.props.productos ? this.props.productos[2]:[];
    if(this.state.loaded) {
      return(
        <div className="modal-card hero is-white">
          <h3 cass="title-filtro">{this.props.title}</h3>
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

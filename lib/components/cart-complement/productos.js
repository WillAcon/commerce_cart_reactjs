import React, { Component } from 'react';
import {object} from 'prop-types';
import {baseUrl, formatPrice} from "../../utils";
import superagent from 'superagent';
import classnames from 'classnames';

class Productos extends Component {
  // static propTypes = {
  //   cart: object.isRequired
  // };
  constructor(props) {
    super(props);
    this.state = {
      // Copy the prop into state so we can refresh it.
      complementos: props.complementos,
      addCart: props.productos ? props.productos[2]:[] ,
      // cartId: props.cart.order_id,
      langCode: drupalSettings.path.currentLanguage,
      loading: false
    };

    this.onClickSelect= this.onClickSelect.bind(this);
    this.BuscarClase= this.BuscarClase.bind(this);
    this.renderRow= this.renderRow.bind(this);
  }
  // https://github.com/reactjs/react-modal
  // https://reactjs.org/docs/state-and-lifecycle.html

  componentDidMount() {
    console.log('componentDidMount state');
    setTimeout(() => {
        this.setState(() => {
            console.log('setting state');
            return { loading: true }
        });
    }, 1000);
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
      if(this.state.addCart[i].cid == item.cid) {
        // console.log("activado 11");
        // return "notification is-primary";
        return true;
      }
    }
    // console.log("no active");

    // return false;
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
    	// console.log("cid",item.cid);
    	// console.log("i",i);
    	// console.log("addCart",this.state.addCart[i]);
      if(this.state.addCart[i].cid && (this.state.addCart[i].cid == item.cid)){
        //  delete this.state.addCart[i];
        this.state.addCart.splice(i,1);
         //this.state.addCart.length = this.state.addCart.length - 1;
        //  this.BuscarClase(item);
        //  console.log("DELETECART",this.state.addCart);
         this.setState(
          this.state
        )
         return true;
      }
    }
 
    this.state.addCart.push(item);
    this.setState(
    	this.state
    )
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
    if(this.state.loading) {
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
          <button className="button is-primary" onClick={() => this.props.cargar(this.state.addCart)}>Guardar</button>
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

import React, { Component } from 'react';
import { baseUrl, formatNewCart } from "../../utils";
import superagent from 'superagent';
import Productos from "./productos";
import ReactModal  from 'react-modal';
// import { setTimeout } from 'timers';
import CartBlock from "../cart-block";
// import { parse } from 'uri-js';
// import { Utils } from 'handlebars';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
// Modal.setAppElement('#reactCartComplement');
// Modal.setAppElement('#reactCartForm');


class CartComplement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      expanded: false,
      count: 0,
      carts: [],
      id_producto: drupalSettings.path.currentPath.substr(8,9),
      id_variation: 0,
      cantidad: 1,
      productos: null,
      modalIsOpen: false,
      open_block: false
    };
    // this.onClickExpand = this.onClickExpand.bind(this);
    this.onClickOpenC1 = this.onClickOpenC1.bind(this);
    this.onClickOpenC2 = this.onClickOpenC2.bind(this);
    this.onClickOpenC3 = this.onClickOpenC3.bind(this);
    // this.setProducts = this.setProducts.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setChangeOpen = this.setChangeOpen.bind(this);

    this.Increment = this.Increment.bind(this);
    this.Decrement = this.Decrement.bind(this);
    this.comprarProducto = this.comprarProducto.bind(this);
    this.searchCart = this.searchCart.bind(this);
    this.AddProductos =  this.AddProductos.bind(this);
    this.getVariation =  this.getVariation.bind(this);
    this.saveStorage = this.saveStorage.bind(this);

    this.getNewCart = this.getNewCart.bind(this);
  }

  componentDidMount() {
    // document.body.classList.toggle('loader');
    this.getVariation();
    //getcarts
    this.getCarts();
    this.getComplementos();

    this.getNewCart();
  }

  openModal() {
    this.setState({c1: true});
    
  }


  closeModal() {
  
    console.log("despues de cerrar11");
    this.getCarts("cerrar");
    // window.location.reload();

    // this.setState({open_block: false});

  }




  getComplementos() {
    console.log('Getting complement3',drupalSettings);
    const url = `${baseUrl}/api/product/complementos1/2?_format=json`;
    superagent
      .get(url)
      .end((err, { body }) => {
        console.log(body);
        let count = 0;

        this.setState({
          // loaded: true,
          c1: false,
          c2: false,
          c3: false,
          complementos: body,
        });

     

      })    
  }

  getVariation() {
    const url = `${baseUrl}/api/product/variation?_format=json`;
    superagent
      .get(url)
      .end((err, { body }) => {
        console.log("body1111", body[0].id_variation);

        this.setState({
          id_variation: body[0].id_variation,
        });

      })    
  }
  getNewCart() {
    const url = `${baseUrl}/api/carts?_format=json`;
    superagent
      .get(url)
      .end((err, { body }) => {
        console.log("NEW CART111", body); 
        //
        formatNewCart(body);
      

      })    
  }


  getCarts(type) {
    console.log('LOAD111111111 CART');

   

    var x = Math.floor((Math.random() * 199998880) + 1);
    // const url = `${baseUrl}/cart?_format=json`;
    const url = `/cart?_format=json&t=${x}`;
    superagent
      .get(url)
      .end((err, { body }) => {
        let count = 0;
        for (let i in body) {
          count += body[i].order_items.length;
        }
        console.log("body",body);

        // this.setState({
        //   loaded: true,
        //   count: count,
        //   c1: false,
        //   productos: body.length > 0 ? body : [],
        // });
        this.state.loaded = true;
        this.state.productos = body.length > 0 ? body : [];
        this.state.c1 = false;
        this.setState(
          this.state
        );

        this.setState({
          // s: true,
          count: count,
          carts: body.length > 0 ? body : [],
        });
        // console.log(type);
        if(type == 'cerrar') {
          // this.loadingBlock();
          this.setState({open_block: true});
        }
        // console.log(this.state.carts);
        
        // document.body.classList.remove('loader')

      })
  }

  setChangeOpen() {
    this.setState({open_block: false});
  }

  saveStorage(item, parent){
  
    // let my_cart =  localStorage.getItem('my_cart');

    let my_cart_array =  JSON.parse(localStorage.getItem('my_cart'));

   if(!my_cart_array) {
      let data = [];
    console.log("item", item);
      data.push(item);

      localStorage.setItem('my_cart', JSON.stringify(data));

      console.log("data11", data);

      console.log("data33333",  JSON.parse(localStorage.getItem('my_cart')));
      // localStorage.setItem('my_cart', JSON.parse(data));      
    }



  }
 
  // onClickExpand(event) {
  //   event.preventDefault();
  //   this.setState({
  //     expanded: !this.state.expanded
  //   });
  // }
  onClickOpenC1(event) {
    event.preventDefault();
    this.setState({
      c1: !this.state.c1
    });
  }
  onClickOpenC2(event) {
    event.preventDefault();
    this.setState({
      c2: !this.state.c2
    });
  }
  onClickOpenC3(event) {
    event.preventDefault();
    this.setState({
      c3: !this.state.c3
    });
  }

  Increment(event) {
    event.preventDefault();
    this.state.cantidad++
    this.setState(
      this.state
    );
  }
  Decrement(event) {
    event.preventDefault();
    if(this.state.cantidad > 1) {
      this.state.cantidad--;
      this.setState(
        this.state
      );
    }
  }

  searchCart(item){
    var x = Math.floor((Math.random() * 199998880) + 1);
    const url = `/cart?_format=json&t=${x}`;
    superagent
      .get(url)
      .end((err, { body }) => {
        let count = 0;
        
        if(body) {
          let order_items = body[0].order_items;

          if(this.searchInArray(order_items, this.state.id_variation) < 0) {
             this.AddProductos();
          }
          else {
            this.setState({open_block: true});
            return false;
          }
          // console.log("order_items", this.searchInArray(order_items, this.state.id_variation));
        }
     


      })
  }

  AddProductos() {
    // const body = {};
    const url = `/cart/add?_format=json`;

    const payload = {
      order_item_data : {
        "purchased_entity_type": 'commerce_product_variation',
        "purchased_entity_id": this.state.id_variation,
        "quantity": this.state.cantidad
      }
    };
    
    console.log(payload);
    superagent
      .post(url)
      .set('Content-Type', 'application/json')
      .send(payload)
      .end((err, { body }) => {
        this.setState({open_block: true});
       
        
        let pos = this.searchInArray(body[0].order_items,this.state.id_variation);
        if(pos >= 0) {

          let item = body[0].order_items[pos];

          item.is_parent = true;
          item.id_parent = this.state.id_variation;
         
          this.saveStorage(item);

        }
        
        
        // this.state.addCart = body[0].order_items;

        // // this.state.addCart.push(item);
        // this.setState(
        //   this.state
        // )
  
      })
  }

  searchInArray(items, find_item){
    for(var i=0; i < items.length; i++) {
      console.log(items[i]);
      console.log("find_item",find_item);
      if(items[i].purchased_entity == find_item) {
        return i;
      }
    }
    return -1;
  }

  comprarProducto(event){
    event.preventDefault();

   
    // let my_cart =  localStorage.getItem('my_cart');

    this.searchCart("item");

    // if(!my_cart) {
    //   // let my_cart_array =  JSON.parse(localStorage.getItem('my_cart'));
    //   let data = [{
    //     parent: this.state.id_variation
    //   }];
    //   localStorage.setItem('my_cart', JSON.stringify(data));
    //   // console.log("data11", data);
    //   // localStorage.setItem('my_cart', JSON.parse(data));      
    // }



  
    // let my_cart_array =  JSON.parse(localStorage.getItem('my_cart'));

    // console.log("my_cart_array",my_cart_array);

    // let data = [{
    //   parent: this.state.id_producto
    // }];

    // console.log("data11", data);
    // localStorage.setItem('my_cart', JSON.stringify(data));

    // let my_cart =  localStorage.getItem('my_cart');

    // console.log("JSON", JSON.parse(my_cart));
    
    // localStorage.setItem('ticker', JSON.stringify(this.state));

    // let my_cart =  localStorage.getItem('my_cart');


   
  }

//  setProducts() {
//   //   this.getCarts();

  
//   //   // console.log("index productos 86",this.state.productos)
//   //    this.setState({
//   //     c1: !this.state.c1
//   //   });

//   }

  render() {
    // <Cart complementos={this.state.complementos}/>
    if (!this.state.loaded) {
      return <div>Cargando complementos</div>;
    }
    return (
      <div>
     {
       this.state.open_block ? <CartBlock openBlock={this.state.open_block} changeOpen={this.setChangeOpen} /> : null 
     }
        
        
{/* 
        <button onClick={this.onClickOpenC1} className="button is-primary modal-button">Complemento 1</button>
        <button onClick={this.onClickOpenC2} className="button is-primary modal-button">Complemento 2</button>
        <button onClick={this.onClickOpenC3} className="button is-primary modal-button">Complemento 3</button> */}

       {/* <a className="button" title="Disabled button" disabled>Disabled</a> */}

        <a onClick={this.openModal} className="complemento-link">
          <span className="icon">
            <i className="fas fa-2x fa-camera-retro"></i>
          </span>
        </a>

        <a onClick={this.openModal} className="complemento-link" >
          <span className="icon">
            <i className="fas fa-2x fa-bug"></i>
          </span>
        </a>

        <a onClick={this.openModal} className="complemento-link" >
          <span className="icon">
            <i className="fas fa-2x fa-wine-glass"></i>
          </span>
        </a>

        
        <div className="">
          <div className="tags has-addons">
            <span className="tag is-primary" onClick={this.Decrement}>-</span>
              <span className="tag">{this.state.cantidad}</span>
              <span className="tag is-primary" onClick={this.Increment}>+</span>
            </div>
            <a onClick={this.comprarProducto} className="producto-link button is-primary" >
              comprar
            </a>
        </div>

        <div className="preloader"></div>

           <ReactModal
                isOpen={this.state.c1}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
                shouldCloseOnEsc={false}
              >
                <Productos complementos={this.state.complementos} productos={this.state.productos} cargar={this.setProducts}/>              
                <div><button onClick={this.closeModal}>Cerrar</button></div>
              </ReactModal>
   

        {/* <div 
         className={`complemento1 modal ${this.state.c1 ? ['is-active'] : []}`}
        >
          <div className="modal-background"  onClick={this.closeModal}></div>
            {
              this.state.c1 
              ?
              <Productos complementos={this.state.complementos} productos={this.state.productos}/>
              :
              <div>Loading</div>
            }
          <button onClick={this.closeModal} className="modal-close is-large" aria-label="close"></button>
          

        </div> */}
        <div className="clae">
          {/* <CartBlock carts={this.state.carts} count={this.state.count}></CartBlock> */}
        </div>
          <div 
            className={`complemento2 modal ${this.state.c2 ? ['is-active'] : []}`}
          >
          <div className="modal-background"  onClick={this.onClickOpenC2}></div>
           

           {
              this.state.c2 
              ?
              <Productos complementos={this.state.complementos} productos={this.state.productos} cargar={this.setProducts}/>
              :
              <div>Loading</div>
            }

          <button onClick={this.onClickOpenC2} className="modal-close is-large" aria-label="close"></button>
        </div>

          <div 
            className={`complemento3 modal ${this.state.c3 ? ['is-active'] : []}`}
          >
          <div className="modal-background"  onClick={this.onClickOpenC3}></div>
            

            {
              this.state.c3 
              ?
              <Productos complementos={this.state.complementos} productos={this.state.productos} cargar={this.setProducts}/>
              :
              <div>Loading</div>
            }

          <button onClick={this.onClickOpenC3} className="modal-close is-large" aria-label="close"></button>
        </div>

      </div>
    )
  }
}
export default CartComplement;

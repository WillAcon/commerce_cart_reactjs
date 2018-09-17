import React, { Component } from 'react';
import { baseUrl, formatNewCart, GetFiltros } from "../../utils";
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
      precio_producto: 0,
      precio_venta: null,
      cantidad: 1,
      order_id: null,
      productos: null,
      modalIsOpen: false,
      open_block: false
    };
    // this.onClickExpand = this.onClickExpand.bind(this);
    this.onClickOpenC1 = this.onClickOpenC1.bind(this);
    this.onClickOpenC2 = this.onClickOpenC2.bind(this);
    this.onClickOpenC3 = this.onClickOpenC3.bind(this);
    // this.setProducts = this.setProducts.bind(this);

    this.openC1 = this.openC1.bind(this);
    this.openC2 = this.openC2.bind(this);
    this.openC3 = this.openC3.bind(this);
    this.openC4 = this.openC4.bind(this);

    this.closeModal = this.closeModal.bind(this);
    this.setChangeOpen = this.setChangeOpen.bind(this);

    this.Increment = this.Increment.bind(this);
    this.Decrement = this.Decrement.bind(this);
    this.comprarProducto = this.comprarProducto.bind(this);
    this.searchCart = this.searchCart.bind(this);
    this.AddProductos =  this.AddProductos.bind(this);
    this.getVariation =  this.getVariation.bind(this);
    

    this.getNewCart = this.getNewCart.bind(this);
  }

  componentDidMount() {
    // document.body.classList.toggle('loader');
    this.getVariation();
    //getcarts
    this.getCarts();
    this.getComplementos();

    // this.getNewCart();
  }

  openC1() {
    this.setState({c1: true});
  }
  openC2() {
    this.setState({c2: true});
  }
  openC3() {
    this.setState({c3: true});
  }
  openC4() {
    this.setState({c4: true});
  }

  closeModal() {
  
    
    this.getCarts("cerrar");
   
    // this.setState({open_block: false});

  }




  getComplementos() {
    
    const url = `${baseUrl}/api/product/complementos/${this.state.id_producto}?_format=json`;
    superagent
      .get(url)
      .end((err, { body }) => {
        
        // let count = 0;
        // console.log("bodycomplemebtos", body);
        this.setState({
          // loaded: true,
          c1: false,
          c2: false,
          c3: false,
          c4: false,
          complementos: body ? GetFiltros(body) : [],
        });

        
       

     

      })    
  }

  getVariation() {
    const url = `${baseUrl}/api/product/variation/${this.state.id_producto}?_format=json`;
    superagent
      .get(url)
      .end((err, { body }) => {
        

        this.setState({
          id_variation: body[0].id_variation,
          precio_producto: body[0].precio,
          precio_venta: body[0].precio_venta ? body[0].precio_venta : null,
        });

      })    
  }
  getNewCart() {
    var x = Math.floor((Math.random() * 199998880) + 1);
    const url = `${baseUrl}/api/carts?_format=json&t=${x}`;
    superagent
      .get(url)
      .end((err, { body }) => {
        
        //
        // this.state. formatNewCart(body);
      

      })    
  }


  getCarts(type) {
    

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
        
        // console.log("productos--body>",body)
        // this.setState({
        //   loaded: true,
        //   count: count,
        //   c1: false,
        //   productos: body.length > 0 ? body : [],
        // });
        this.state.loaded = true;
        this.state.productos = body.length > 0 ? body[0] : [];
        this.state.c1 = false;
        this.state.c2 = false;
        this.state.c3 = false;
        this.state.c4 = false;

        this.state.order_id = body[0].length > 0 ? body[0].order_id : null;

        // console.log("productos-->", this.state.productos)
        this.setState(
          this.state
        );

        this.setState({
          // s: true,
          count: count,
          carts: body[0].length > 0 ? body[0] : [],
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
        // console.log("nEWWWWWWWW");
        if(body && body.length > 0) {
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
        else {
          this.AddProductos();
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
    
    // console.log(payload);
    superagent
      .post(url)
      .set('Content-Type', 'application/json')
      .send(payload)
      .end((err, { body }) => {
      
  
        
        this.state.order_id = body[0].order_id;
        this.state.open_block = true;
        // this.state.addCart = body[0].order_items;

        // // this.state.addCart.push(item);
        this.setState(
          this.state
        )
  
      })
  }

  searchInArray(items, find_item){
    for(var i=0; i < items.length; i++) {
      // console.log(items[i]);
      // console.log("find_item",find_item);
      if(items[i].purchased_entity == find_item) {
        return i;
      }
    }
    return -1;
  }

  comprarProducto(event){
    event.preventDefault();

    this.searchCart("item");  
   
  }



  render() {
    // <Cart complementos={this.state.complementos}/>
    if (!this.state.loaded) {
      return <div>Cargando complementos</div>;
    }
    return (
      <div>
     {
       this.state.open_block ? <CartBlock openBlock={this.state.open_block} order_id={this.state.order_id} changeOpen={this.setChangeOpen} /> : null 
     }


          <div className="ctn-product-detaills">
              {
                this.state.complementos && this.state.complementos.length > 0 ? 
                   <div>
                <div className="ctn-product-detaills-text">Complemento:</div> 
                <ul className="ctn-product-detaills-icon">

                 {
                   this.state.complementos && this.state.complementos.Chocolates.length > 0 ?
                    <li className="btn-complements" onClick={this.openC1} >
                      <a><span className="icon-item icon-chocolate"></span></a>
                    </li>
                   :
                   null
                 }
                {
                   this.state.complementos && this.state.complementos.Licores.length > 0 ?
                    <li className="btn-complements" onClick={this.openC2} >
                      <a><span className="icon-item icon-botella"></span></a>
                    </li>
                   :
                   null
                 }

                {
                   this.state.complementos && this.state.complementos.Peluches.length > 0 ?
                    <li className="btn-complements" onClick={this.openC3} >
                      <a><span className="icon-item icon-peluche"></span></a>
                    </li>
                   :
                   null
                 }
                 
                {
                   this.state.complementos && this.state.complementos.Otros.length > 0 ?
                    <li className="btn-complements" onClick={this.openC4} >
                      <a><span className="icon-item icon-otros"></span></a>
                    </li>
                   :
                   null
                 }
                
                </ul>
                </div>
                :
                null
              }

          </div>
          {
            this.state.precio_venta ?
            <div className="ctn-product-detaills-sale-price">  
               <div>{this.state.precio_venta}</div>
            </div>
            : null
          }
         
          <div className="ctn-product-detaills-price normal">
              <div>{this.state.precio_producto}</div>
           </div>
          <div className="ctn-product-value">
            <div className="ctn-car-cantidad-select">
              <span className="button-increment" onClick={this.Decrement}>-</span>
                <input type="text" id="txt" value={this.state.cantidad}/>
              <span className="button-increment" onClick={this.Increment}>+</span>
            </div>
              {/* <a  onClick={this.comprarProducto} className="button is-custom is-uppercase">Añadir al carrito</a> */}
              <input onClick={this.comprarProducto} class="button is-custom is-uppercase" value="Añadir al carrito" />
          </div>
        
      
          
          {
              this.state.complementos && this.state.complementos.Chocolates && this.state.c1
              ?
                <ReactModal
                      isOpen={this.state.c1}
                      onAfterOpen={this.afterOpenModal}
                      onRequestClose={this.closeModal}
                      style={customStyles}
                      contentLabel="Chocolates"
                      ariaHideApp={false}
                      shouldCloseOnEsc={false}
                    >
                      <Productos title="Chocolates" parent_id={this.state.id_variation} complementos={this.state.complementos.Chocolates} productos={this.state.productos} cargar={this.setProducts}/>              
                      <div><button onClick={this.closeModal}>Cerrar</button></div>
                 </ReactModal>
              :
              null
            }

            {
              this.state.complementos && this.state.complementos.Licores && this.state.c2
              ?
                <ReactModal
                      isOpen={this.state.c2}
                      onAfterOpen={this.afterOpenModal}
                      onRequestClose={this.closeModal}
                      style={customStyles}
                      contentLabel="Licores"
                      ariaHideApp={false}
                      shouldCloseOnEsc={false}
                    >
                      <Productos title="Licores" parent_id={this.state.id_variation} complementos={this.state.complementos.Licores } productos={this.state.productos} cargar={this.setProducts}/>              
                      <div><button onClick={this.closeModal}>Cerrar</button></div>
                 </ReactModal>
              :
              null 
            }

            {
              this.state.complementos && this.state.complementos.Peluches && this.state.c3
              ?
                <ReactModal
                      isOpen={this.state.c3}
                      onAfterOpen={this.afterOpenModal}
                      onRequestClose={this.closeModal}
                      style={customStyles}
                      contentLabel="Peluches"
                      ariaHideApp={false}
                      shouldCloseOnEsc={false}
                    >
                      <Productos title="Peluches"  parent_id={this.state.id_variation} complementos={this.state.complementos.Peluches} productos={this.state.productos} cargar={this.setProducts}/>              
                      <div><button onClick={this.closeModal}>Cerrar</button></div>
                 </ReactModal>
              :
             null
            }

            {
              this.state.complementos && this.state.complementos.Otros && this.state.c4
              ?
                <ReactModal
                      isOpen={this.state.c4}
                      onAfterOpen={this.afterOpenModal}
                      onRequestClose={this.closeModal}
                      style={customStyles}
                      contentLabel="Otros"
                      ariaHideApp={false}
                      shouldCloseOnEsc={false}
                    >
                      <Productos  title="Otros" parent_id={this.state.id_variation} complementos={this.state.complementos.Otros} productos={this.state.productos} cargar={this.setProducts}/>              
                      <div><button onClick={this.closeModal}>Cerrar</button></div>
                 </ReactModal>
              :
              null
            }
            

       
      
     

      </div>
    )
  }
}
export default CartComplement;

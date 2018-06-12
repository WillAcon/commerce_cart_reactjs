import React, { Component } from 'react';
import {baseUrl} from "../../utils";
import superagent from 'superagent';
import Productos from "./productos";
import ReactModal  from 'react-modal';
import { setTimeout } from 'timers';
import CartBlock from "../cart-block";


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
      productos: null,
      modalIsOpen: false
    };
    // this.onClickExpand = this.onClickExpand.bind(this);
    this.onClickOpenC1 = this.onClickOpenC1.bind(this);
    this.onClickOpenC2 = this.onClickOpenC2.bind(this);
    this.onClickOpenC3 = this.onClickOpenC3.bind(this);
    // this.setProducts = this.setProducts.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({c1: true});
  }


  closeModal() {
  
    console.log("despues de cerrar");
    this.getCarts();
    // window.location.reload();

 
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

  getCarts() {
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

        console.log(this.state.carts);
        
        document.body.classList.remove('loader')

      })
  }

  componentDidMount() {
    // document.body.classList.toggle('loader');
    this.getCarts();
    this.getComplementos();
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
          <CartBlock carts={this.state.carts} count={this.state.count}></CartBlock>
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

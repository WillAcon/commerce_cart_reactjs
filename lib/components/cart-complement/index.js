import React, { Component } from 'react';
import {baseUrl} from "../../utils";
import superagent from 'superagent';
import Productos from "./productos";
import Modal from 'react-modal';

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
Modal.setAppElement('#reactCartComplement');

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
    this.setProducts = this.setProducts.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({c1: true});
  }

 

  closeModal() {
    this.setState({c1: false});
  }

  getCarts() {
    console.log('Getting complement3',drupalSettings);
    const url = `${baseUrl}/api/product/complementos1/2?_format=json`;
    superagent
      .get(url)
      .end((err, { body }) => {
        console.log(body);
        let count = 0;
        // for (let i in body) {
        //   count += body[i].order_items.length;
        // }

        this.setState({
          loaded: true,
          c1: false,
          c2: false,
          c3: false,
          complementos: body,
        });

      })
  }
  componentDidMount() {
    this.getCarts();
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

  setProducts(items){
    console.log("setProducts items 76",items);
    var url_producto = drupalSettings.path.currentPath;
    var numbers = url_producto.match(/\d+/g).map(Number);
    console.log(numbers);
    if(!this.state.productos) {
      this.state.productos = {};
    }
    this.state.productos[numbers] = items;
    this.setState(
      this.state
    )
    console.log("index productos 86",this.state.productos)
     this.setState({
      c1: !this.state.c1
    });
  }

  render() {
    // <Cart complementos={this.state.complementos}/>
    if (!this.state.loaded) {
      return null;
    }
    return (
      <div>
        

        <button onClick={this.onClickOpenC1} className="button is-primary modal-button">Complemento 1</button>
        <button onClick={this.onClickOpenC2} className="button is-primary modal-button">Complemento 2</button>
        <button onClick={this.onClickOpenC3} className="button is-primary modal-button">Complemento 3</button>

        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.c1}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          
          <Productos complementos={this.state.complementos} productos={this.state.productos} cargar={this.setProducts}/>
          
        </Modal>

        {this.state.productos ? this.state.productos[2].map(item => (
             
             <div key={item.cid} className="column is-one-quarter" data-id={item.cid}  >
               {item.cid}
               {item.producto}
               <img src={item.image} />
             </div>
            )): 'Seleccione su producto'}

        {/* <div 
         className={`complemento1 modal ${this.state.c1 ? ['is-active'] : []}`}
        >
          <div className="modal-background"  onClick={this.onClickOpenC1}></div>
            {
              this.state.c1 
              ?
              <Productos complementos={this.state.complementos} productos={this.state.productos} cargar={this.setProducts}/>
              :
              <div>Loading</div>
            }
          <button onClick={this.onClickOpenC1} className="modal-close is-large" aria-label="close"></button>
          
        </div> */}

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

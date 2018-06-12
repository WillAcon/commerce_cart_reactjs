import React, { Component } from 'react';
import {baseUrl} from "../../utils";
import superagent from 'superagent';
import Cart from "./cart";

class CartBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      expanded: false,
      count:0,
      carts:[],
    };
    this.onClickExpand = this.onClickExpand.bind(this);

    this.loadingBlock =  this.loadingBlock.bind(this);
    this.closeCartBlock =  this.closeCartBlock.bind(this);
    this.openCartBlock =  this.openCartBlock.bind(this);

  }
  getCarts(type) {
    this.setState({loading_block: true});
    this.setState({block: true});

    const url = `${baseUrl}/cart?_format=json`;
    
    superagent
      .get(url)
      .end((err, { body }) => {
        let count = 0;
        for (let i in body) {
          count += body[i].order_items.length;
        }
        console.log("carts11111", body);
        this.setState({
          loaded: true,
          count: count,
          carts: body.length > 0 ? body : [],
        });

        if(type == 'open') {
          this.setState({loading_block: true});
          this.setState({loading_block: false});
          this.setState({container_enable: true});
        }

      })
  }
  componentDidMount() {
    // console.log("propsss", this.props);
    
    if(this.props.openBlock) {
      this.getCarts('open');
      return true;
    } 
    // this.loadingBlock();
  }

  // INIIACR
  loadingBlock() {
    this.setState({loading_block: true});
    console.log("loasssssssss");
    this.openCartBlock();
    setTimeout(() => {
       this.setState({loading_block: false});
       this.setState({container_enable: false});
    }, 1500);

  }

  openCartBlock() {
    this.getCarts('open');
    // this.setState({block: true});
    // this.getCarts('blockcart');
  }
  // END


  closeCartBlock() {
    this.setState({block: false});
  }


  onClickExpand(event) {
    event.preventDefault();
    this.setState({
      expanded: !this.state.expanded
    });
  }
  render() {
    console.log("propssss",this.props);

    // if (this.props.openBlock) {
    //   this. getCarts();
    // }

    if (!this.state.carts.length) {
      return null;
    }
    // console.log("CARGAAAAAA",this.props)
    
    return (
         <div className="global-ipe">
            
            {/* <section className="container-web">
                <button className="flor-click" onClick={this.loadingBlock}>Click</button>
            </section> */}
        
            <section className={this.state.block ? 'menu-lateral active' : 'menu-lateral'} >

                <div className="background-flor" onClick={() => this.props.changeOpen()}></div>
                {/* <div className="background-flor" onClick={this.closeCartBlock}></div> */}
                
                <div className={this.state.block ? 'container-menu-lateral enable' : 'container-menu-lateral'}>
                    <div className="content-sin-flores">
                        <i className="fas fa-ban"></i>
                        <p>Aun no has agregado productos a tu carrito</p>
                        <a className="btn-comprando" href="#">Continuar comprando</a>
                    </div>
                    <div className="content-con-flores">
                        <div className="car-mheader">
                            <p>Carrito de compra</p>
                            <span onClick={() => this.props.changeOpen()}> <i className="fas fa-times js-close"></i></span>
                            {/* <span  onClick={this.closeCartBlock}> <i className="fas fa-times js-close"></i></span> */}
                        </div>
                        <div className="car-mbody">
                            <div className="container-mbody">
                                <div className="content-mbody">

                                  {this.state.carts.map(cart => (
                                    <Cart cart={cart}/>
                                  ))}

                                    <div className="item-producto">
                                        <div className="data">
                                            <div className="left-prod">
                                                <img src="https://los-herrajes.s3-us-west-2.amazonaws.com/media/cache/78/a7/78a70b101ae86ad775cf2524be096d47.png" alt=""/>
                                            </div>
                                            <div className="center-prod">
                                                <h4 className="titulo">Feliz Grabado</h4>
                                                <div className="content-cant">
                                                    <p>Cantidad</p>
                                                    <span className="btn-minus">
                                                        <i className="fas fa-minus"></i>
                                                    </span>
                                                    <span className="cantidad">2</span>
                                                    <span className="btn-mas">
                                                        <i className="fas fa-plus"></i>
                                                    </span>
                                                </div>
                                                <i className="far fa-trash-alt js-delete"></i>
                                                <span className="precio">s/. 175.00</span>
                                            </div>
                                        </div>
                                        <ul className="complementos">
                                            <li className="item-complemento">
                                                <div className="data">
                                                    <div className="left-prod">
                                                        <img src="https://los-herrajes.s3-us-west-2.amazonaws.com/media/cache/75/11/751109e402c23f35577d87d9f3c88e0c.png" alt=""/>
                                                    </div>
                                                    <div className="center-prod">
                                                        <h4 className="titulo">Feliz Grabado</h4>
                                                        <div className="content-cant">
                                                            <p>Cantidad</p>
                                                            <span className="btn-minus">
                                                                <i className="fas fa-minus"></i>
                                                            </span>
                                                            <span className="cantidad">2</span>
                                                            <span className="btn-mas">
                                                                <i className="fas fa-plus"></i>
                                                            </span>
                                                        </div>
                                                        <i className="far fa-trash-alt js-delete"></i>
                                                        <span className="precio">s/. 175.00</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="item-complemento">
                                                <div className="data">
                                                    <div className="left-prod">
                                                        <img src="https://los-herrajes.s3-us-west-2.amazonaws.com/media/cache/75/11/751109e402c23f35577d87d9f3c88e0c.png" alt=""/>
                                                    </div>
                                                    <div className="center-prod">
                                                        <h4 className="titulo">Feliz Grabado</h4>
                                                        <div className="content-cant">
                                                            <p>Cantidad</p>
                                                            <span className="btn-minus">
                                                                <i className="fas fa-minus"></i>
                                                            </span>
                                                            <span className="cantidad">2</span>
                                                            <span className="btn-mas">
                                                                <i className="fas fa-plus"></i>
                                                            </span>
                                                        </div>
                                                        <i className="far fa-trash-alt js-delete"></i>
                                                        <span className="precio">s/. 175.00</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="item-producto">
                                            <div className="data">
                                                <div className="left-prod">
                                                    <img src="https://los-herrajes.s3-us-west-2.amazonaws.com/media/cache/78/a7/78a70b101ae86ad775cf2524be096d47.png" alt=""/>
                                                </div>
                                                <div className="center-prod">
                                                    <h4 className="titulo">Feliz Grabado</h4>
                                                    <div className="content-cant">
                                                        <p>Cantidad</p>
                                                        <span className="btn-minus">
                                                            <i className="fas fa-minus"></i>
                                                        </span>
                                                        <span className="cantidad">2</span>
                                                        <span className="btn-mas">
                                                            <i className="fas fa-plus"></i>
                                                        </span>
                                                    </div>
                                                    <i className="far fa-trash-alt js-delete"></i>
                                                    <span className="precio">s/. 175.00</span>
                                                </div>
                                            </div>
                                            <ul className="complementos">
                                            </ul>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="car-mfooter">
                            <div className="sub-total">
                                <p>Sub Total</p>
                                <span>s/. 325.00</span>
                            </div>
                            <a href="#">Ver bolsas de compras</a>
                        </div>
                    </div>
                </div>
            </section>
        
            <section className={this.state.loading_block ? 'loading-flor active' : 'loading-flor'}>
                <i className="fas fa-leaf"></i>
            </section>

        </div>
    )
  }
}
export default CartBlock;

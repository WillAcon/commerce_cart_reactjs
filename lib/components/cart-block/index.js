import React, { Component } from 'react';
import {baseUrl,formatNewCart, formatNewCart_1} from "../../utils";
import superagent from 'superagent';
import Cart from "./cart";

class CartBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      expanded: false,
      order_id: props.order_id,
      count:0,
      carts:[],
    };
    this.onClickExpand = this.onClickExpand.bind(this);

    this.loadingBlock =  this.loadingBlock.bind(this);
    this.closeCartBlock =  this.closeCartBlock.bind(this);
    this.openCartBlock =  this.openCartBlock.bind(this);

  }
  getCarts11(type) {
    var x = Math.floor((Math.random() * 199998880) + 1);

    this.setState({loading_block: true});
    this.setState({block: true});

    const url = `${baseUrl}/cart?_format=json&t=${x}`;
    
    superagent
      .get(url)
      .end((err, { body }) => {
        let count = 0;
        for (let i in body) {
          count += body[i].order_items.length;
        }
        
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

  getCarts_bk(type) {
    

    var x = Math.floor((Math.random() * 199998880) + 1);
   

    this.setState({loading_block: true});
    this.setState({block: true});

    const url = `${baseUrl}/api/carts/${this.state.order_id}?_format=json&t=${x}`;
    superagent
      .get(url)
      .end((err, { body }) => {
        
        
        body = formatNewCart(body);
        console.log("body 1---->", body)

        
        // this.setState({
        //   loaded: true,
        // //   count: count,
        //   carts: body.order_id ? body : [],
        // });

        

        // if(type == 'open') {
        //   this.setState({loading_block: true});
        //   this.setState({loading_block: false});
        //   this.setState({container_enable: true});
        // }

      })
  }

  getCarts(type) {
    

    var x = Math.floor((Math.random() * 199998880) + 1);
   

    this.setState({loading_block: true});
    this.setState({block: true});

    // const url = `${baseUrl}/carts/${this.state.order_id}?_format=json&t=${x}`;
    const url = `${baseUrl}/cart?_format=json&t=${x}`;
    superagent
      .get(url)
      .end((err, { body }) => {

        // console.log("body 2---->", body[0]);
        // formatNewCart_1(body[0]);
         body = formatNewCart_1(body[0]);

        
        this.setState({
          loaded: true,
        //   count: count,
          carts: body.order_id ? body : [],
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
      // this.getCarts('open');
      this.getCarts('open');
      // this.getCarts_bk('open');
      return true;
    } 
    // this.loadingBlock();
  }

  // INIIACR
  loadingBlock() {
    this.setState({loading_block: true});
    
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
    

    // if (this.props.openBlock) {
    //   this. getCarts();
    // }

    // if (!this.state.carts.order_id) {
    //   return null;
    // }
    console.log("CARGAAAAAA",this.state.carts)
    // if(!this.state.carts.length){
    //  return (<div>Loadig</div>);
    // }
    return (
         <div className="global-ipe">
            
            {
            /* <section className="container-web">
                <button className="flor-click" onClick={this.loadingBlock}>Click</button>
            </section> */
            }


            <section className={this.state.block ? 'menu-lateral active' : 'menu-lateral'} >

                <div className="background-flor" onClick={() => this.props.changeOpen()}></div>
                {/* <div className="background-flor" onClick={this.closeCartBlock}></div> */}
                
                <div className={this.state.block ? 'container-menu-lateral enable' : 'container-menu-lateral'}>
                    <div className={this.state.carts.total_price == 0 ? 'content-sin-flores active' : 'content-sin-flores'} >
                        <i className="fas fa-ban"></i>
                        <p>Aun no has agregado productos a tu carrito</p>
                        <a  onClick={() => this.props.changeOpen()} className="btn-comprando" >Continuar comprando</a>
                    </div>
                    {
                      this.state.carts.length > 0 ? 
                      <div className="content-con-flores">
                         <div className="car-mheader">
                              <p>Carrito de compra</p>
                              <span onClick={() => this.props.changeOpen()}> 
                                    <i className="fas fa-times js-close"></i>
                              </span>
                              {/* <span  onClick={this.closeCartBlock}> <i className="fas fa-times js-close"></i></span> */}
                          </div>
                          <Cart cart={this.state.carts} order_id={this.state.order_id}/>
                      </div>
                      : null
                    }

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

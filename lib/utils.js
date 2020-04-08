const langCode = drupalSettings.path.currentLanguage;

export const baseUrl = `${window.location.origin}${drupalSettings.path.baseUrl}`;

export function formatPrice(priceObject) {
  if (priceObject.currency_code === null) {
    return '';
  }
  // console.log("priceObject.currency_code",priceObject.currency_code);
  return new Intl.NumberFormat(langCode, {style: 'currency', currency: priceObject.currency_code}).format(priceObject.number)
}

export function formatNewCart(cartObject) {


  const Items = [];

  const parents = [];
  const result = {
    order_items: []
  };

  // console.log("cartObject", cartObject[0].total_price)

  cartObject.map((item, index) => {
 


    let objectTemp = {
      order_item_id : item.order_item_id,
      purchased_entity :  item.purchased_entity,
      quantity :  item.quantity,
      title :  item.title,
      image :  item.image,
      price :  item.price,
      // complementos :  item.field_complementos,
      parent: item.parent,
      is_parent: !item.parent ? true : false
    };

    // if(item.type == 'Predeterminado') {
    //   parents.push(objectTemp);
    // }
    if(!item.parent) {
      parents.push(objectTemp);
    }

    result.total_price = item.total_price ? item.total_price : 0;
    result.order_id = item.order_id;
    // Items.order_item[index] = objectTemp;

    Items.push(objectTemp);
    

  });

  

  parents.map((parent, index) => {
  
    // console.log("parent111", parent);
    // console.log("parent111", index);
    result.order_items[index] = parent;
    result.order_items[index]['childrens'] = [];
    // var strChildren = parent.complementos;
    for(var cont= 0; cont < Items.length ; cont++) {



      if(BuscarChildren(parent.purchased_entity, Items[cont]['parent']) && !Items[cont]['is_parent']) {
        // console.log("econtrado00", Items[cont]['purchased_entity']);
        result.order_items[index]['childrens'].push(Items[cont]);
      }

    }

    result.length = cartObject.length;


  });



  return result;
}

//NUEVO
export function formatNewCart_1(cartObject) {


  const Items = [];

  const parents = [];
  
  const result = {
    order_items: []
  };

  result.total_price = cartObject.total_price.formatted  ? cartObject.total_price.formatted : 0;
  result.order_id = cartObject.order_id ? cartObject.order_id : 0;
  result.length = 0;
  // console.log("cartObject", cartObject[0].total_price)
 if(cartObject.order_items) {
        cartObject.order_items.map((item, index) => {
          let objectTemp = {
            order_item_id : item.order_item_id,
            purchased_entity :  item.purchased_entity.variation_id,
            quantity :  item.quantity,
            title :  item.title,
            image :  item.purchased_entity.field_imagen_producto[0].uri ? item.purchased_entity.field_imagen_producto[0].uri : '',
            price :  item.total_price.formatted,
            // complementos :  item.field_complementos,
            // parent: item.parent,
            is_parent: !item.purchased_entity.type == 'default' ? true : false
          };
          // console.log("objectTemp",objectTemp)

          result.order_items.push(objectTemp);
          

        });

        result.length = result.order_items.length;
 }
  
//  console.log("formetado-->", result);
  




  return result;
}



export function BuscarChildren(str, findChildren) {
  var childrens = str.split(",");
  // console.log("childrenschildrens",childrens);
  // console.log("findChildren",findChildren);
  // var hasFive = false;

  for (var counter=0; counter < childrens.length; counter++) {
   
    if (parseInt(childrens[counter]) == parseInt(findChildren)){
      
      //  hasFive = true;
      //  break;
      return true;
    }
  }

  return false;
}
const getClassIcon = key => {
  switch (key) {
    case 'Chocolates':
      return 'icon-chocolate';
    case 'Peluches':
      return 'icon-peluche';  
    case 'Licores':
      return 'icon-botella';
    default:
      return 'icon-otros';
  }
}


export const GetFilterComplement = complements => {
  const filtros = complements.reduce((obj,item) => {
    obj[item.filtro] = obj[item.filtro] || [];
    obj[item.filtro].push(item);
    return obj;
  },{});

  const newComplements = Object.keys(filtros).map( key => ({
    type: key, 
    classIcon: getClassIcon(key),
    data: filtros[key]
  }));

  return newComplements;
}
export const GetFilterVariation = variation => {
  const {id_variation, precio, precio_venta } = variation
  const data = {
    id: id_variation,
    price: precio,
    priceSale: (precio_venta !=="") && precio_venta,
    quantity: 1
  };
  return data;
}

export const GetFilterOrder = order => {
  const data = {
    id: 0, 
    orderNumber: 0,
    idStore: 0, 
    totalPriceFormatted: 'S/',
    totalPrice: 0, 
    orderItems: [],
    count: 0
  }
  if(!!order){
    data.id = order.order_id;
    data.orderNumber = data.order_number? data.order_number: 0;
    data.idStore = order.store_id;
    data.totalPriceFormatted = order.total_price && order.total_price.formatted ? order.total_price.formatted.substring(0,2) : 'S/';
    data.totalPrice = (+order.total_price.number).toFixed(2);
    //data.orderItems = order.order_items ? order.order_items.map(item=> GetFilterOrderItem(item)):[];
    data.orderItems = order.order_items.map(item=> GetFilterOrderItem(item));
    data.count = order.order_items.reduce((sum,item) => sum + (+item.quantity), 0);
  }
  return data;
}

export const GetFilterOrderItem = order_item => {
  const data = {
    id: order_item.order_item_id,
    idOrder: order_item.order_id,
    purchasedEntity: order_item.purchased_entity.variation_id,
    purchasedEntityPrice: (+order_item.purchased_entity.price.number).toFixed(2),
    quantity: +order_item.quantity,
    title: order_item.title,
    image: order_item.purchased_entity.field_imagen_producto[0].uri? order_item.purchased_entity.field_imagen_producto[0].uri: '',
    priceFormatted: order_item.total_price.formatted.substring(0,3),
    price: (+order_item.total_price.number).toFixed(2),
    isParent: !order_item.purchased_entity.type == 'default' ? true : false
  }
  return data;
}

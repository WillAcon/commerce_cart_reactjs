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

export function GetFiltros(compObject) {
  // console.log("compObject",compObject);
  var complementos = {
    Chocolates:[],
    Peluches:[],
    Licores:[],
    Otros:[]
  };

  compObject.map((item) => {  
    complementos[item.filtro].push(item);
  });
  complementos.length = compObject.length;
  // console.log("complementos", complementos);
  return complementos;
}

// [{
//   "order_id":"14",
//   "image":"\/sites\/default\/files\/styles\/thumbnail\/public\/commerce\/2018-05\/osopere_0.jpg?itok=oDpqG2-4",
//   "quantity":"1.00",
//   "order_item_id":"190",
//   "type":"Predeterminado",
//   "title":"Oso perezoso - Gris",
//   "purchased_entity":"3",
//   "field_complementos":"5, 6, 8, 7, 9, 10",
//   "total_price":"S\/ 46.00",
//   "price":"S\/ 34.00",
//   "price_code":"S\/ 34.00"
// }


// order_item_id
// :
// 190
// purchased_entity
// :
// 3
// quantity
// :
// "1.00"
// title
// :
// "Oso perezoso - Gris"
// total_price
// :
// {number: "34.000000", currency_code: "PEN", formatted: "S/ 34.00"}
// unit_price
// :
// {number: "34.000000", currency_code: "PEN", formatted: "S/ 34.00"}
// uuid
// :
// "8bf8b7b4-a5ce-4720-896e-2dca0e03a53d"
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
    order_item: []
  };

  cartObject.map((item, index) => {
    console.log("item1119",item);
    console.log("index1119",index);

    let objectTemp = {
      order_item_id : item.order_item_id,
      purchased_entity :  item.purchased_entity,
      quantity :  item.quantity,
      title :  item.title,
      image :  item.image,
      price :  item.price,
      complementos :  item.field_complementos,
      parent: item.field_complementos ? true : false
    };

    if(item.field_complementos) {
      parents.push(objectTemp);
    }

    result.total_price = item.total_price;
    result.order_id = item.order_id;
    // Items.order_item[index] = objectTemp;

    Items.push(objectTemp);
    

  });


  parents.map((parent, index) => {
  
    console.log("parent111", parent);
    console.log("parent111", index);
    result.order_item[index] = parent;
    result.order_item[index]['childrens'] = [];
    var strChildren = parent.complementos;
    for(var cont= 0; cont < Items.length ; cont++) {
      console.log("ITEEMMM",Items[cont]['purchased_entity']);
      if(BuscarChildren(strChildren, Items[cont]['purchased_entity']) && !Items[cont]['parent']) {
        console.log("econtrado00", Items[cont]['purchased_entity']);
        result.order_item[index]['childrens'].push(Items[cont]);
      }
    }
/*
    Items.map((item) => {
      // console.log("item.purchased_entity-", item.purchased_entity);
      // console.log("ITEM-", BuscarChildren(strChildren, item.purchased_entity));
      // console.log("item.parent-",item.parent);
      
      if(BuscarChildren(strChildren, item.purchased_entity) && !item.parent ) {
        console.log("econtrado00", item);
        result.order_item[index]['childrens'].push(item);
      }

    });
*/ 

  });

  // for(var i = 0; i < parents.length ; i++) {
  //   Items.map((item) => {
  //     console.log("ITEM1111", item);
  //   });
  // }
  
    // console.log("resultresult", result);
  // for(var i=0; i < cartObject.length; i++) {
     
  // }


  return result;
}

export function BuscarChildren(str, findChildren) {
  var childrens = str.split(",");
  // console.log("childrenschildrens",childrens);
  // console.log("findChildren",findChildren);
  // var hasFive = false;

  for (var counter=0; counter < childrens.length; counter++) {
   
    if (parseInt(childrens[counter]) == parseInt(findChildren)){
       console.log("se encontro",findChildren );
      //  hasFive = true;
      //  break;
      return true;
    }
  }

  return false;
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
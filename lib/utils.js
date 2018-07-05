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
  const result = {
    order_item: []
  };

  const parent = [];

  cartObject.map((item, index) => {
    console.log("item1114",item);
    console.log("index1114",index);

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
      parent.push(objectTemp);
    }

    result.total_price = item.total_price;
    result.order_id = item.order_id;
    // result.order_item[index] = objectTemp;

    result['order_item'].push(objectTemp);
    

  });


  parent.map((item, index) => {
  
    console.log("parent", item);
  });
  

  // for(var i=0; i < cartObject.length; i++) {
     
  // }
  console.log("REUSLTTT0", result);

  console.log("PRENT", parent);

  return "result";
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
var processOrders = function(order){
    for(field in order){
        console.log(field + " " + order[field])
    }
}

let order={
    product: 'iPhone',
    quantity: 2,
    price: 95000.00
}
processOrders(order);
let value="99.99"
console.log(!!value);
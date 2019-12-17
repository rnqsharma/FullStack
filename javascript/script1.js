var orderId;
console.log(orderId);
//object type
var order = {
    orderId : 9001,
    isActive : true
}

//Array type
var cancelOrders = new Array(9001, 9002, 9003);

console.log(typeof order.isActive);
console.log(typeof cancelOrders);
console.log(cancelOrders instanceof Array);
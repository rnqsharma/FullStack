//Prevent Hoisting
var processOrders = function (orderId=1){
    var isActive = false;
    console.log("Completed Processing Order " + orderId);
    for(let i=0; i<10; i++){
        console.log(i);    
    }
}
processOrders();

// console.log("Active " + isActive);
//Prevent Hoisting
var processOrders = function (orderId=1, orderType='business'){
    var shipMethod;
    switch(orderType){
        case 'business' : shipMethod='FedEx';
        // case 'personal' : shipMethod='Blue Dart';
        
        break;
        // default: shipMethod = 'AMEX'
    }
    console.log(shipMethod);
}
processOrders(1, 'personal');

// console.log("Active " + isActive);
'use strict';
let basetax = 0.07;
let getTotal = (price, tax=price*basetax,
    cb=(value)=>{})=>{
    console.log(price + tax);
}
getTotal(100, 10, function(value){
    console.log(value);
});
'use strict';
let basetax = 0.07;
let getTotal = (price, tax=price*basetax)=>{
    console.log(price + tax);
}
getTotal(100)
//Function Currying

var myFunc = function(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

var innerFunc1 = myFunc(1);
var innerFunc2 = innerFunc1(2);
console.log(innerFunc2(3));
//OR
console.log(myFunc(1)(2)(3));

var order = {
    toString : function(){
        return 999.5;
    }
}
console.log(1000 && order.toString());

/*
var myFunc= function(a){
return function(b){
return function(c){
return a+b+c;
}
}
}

var innerFn1=myFunc(50);
var innerFn2= innerFn1(60)
console.log(innerFn2(90));

// console.log(myFunc(40)(50)(60))

// console.log(2000+undefined);

// console.log("A300"-"B200");


var order = {
toString: function(){
return "9999.77";
},
valueOf: function(){
return 1999.99
}
}
// console.log(order - 10000.5);
// console.log( 10000.00 && order.toString());
// console.log(2 === '2')
console.log(order === 1999.99)
*/
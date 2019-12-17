var myFunc = function(x, y, cb){
    console.log("I am executed fiest");
    setTimeout(function(){
        console.log(cb(x,y));
    }, 1000)
    
}

myFunc(45, 55, function(x,y){
    return x*y;
});
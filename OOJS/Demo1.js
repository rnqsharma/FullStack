//function constructor
let Shape =  function(width, height){
    this.width = width;
    this.height = height;

}
Shape.prototype.calculateArea = function(){};

let Rectangle = function(width, height){
    Shape.call(this, width, height);
}

Rectangle.prototype = Object.create(Shape.prototype);

//Overriding
Rectangle.prototype.calculateArea = function(){
    return this.width * this.height;
};

let Triangle = function(width, height){
    Shape.call(this, width, height);
}

Triangle.prototype = Object.create(Shape.prototype);

//Overriding
Triangle.prototype.calculateArea = function(){
    return .5*this.width * this.height;
};

var Main = function(){

}
Main.display = function(shape){
    console.log('Area Of shape is: ' + shape.calculateArea());  
}

var rectangle = new Rectangle(24, 35);
var triangle = new Triangle(20, 20);
Main.display(rectangle);
Main.display(triangle);
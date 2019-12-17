class Shape{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    calculateArea(){}
}

class Rectangle extends Shape{
    constructor(width, height){
        super(width, height);
    }

    calculateArea(){
        return this.width * this.height;
    }
}

class Triangle extends Shape{
    constructor(width, height){
        super(width, height);
    }

    calculateArea(){
        return .5 * this.width * this.height;
    }
}

class Main{
    static display(shape){
        console.log('Area of shape ' + shape.calculateArea());
    }
}

var rectangle = new Rectangle(24, 35);
var triangle = new Triangle(20, 20);
Main.display(rectangle);
Main.display(triangle);

console.log(typeof Shape);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(rectangle instanceof Shape);
console.log(rectangle instanceof Object);
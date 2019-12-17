import Shape from '../Shape/shape';
import Rectangle from '../Rectangle/rectangle';
import Triangle from '../Triangle/triangle';
class Main{
    static display(shape : Shape){
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
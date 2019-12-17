import Shape from '../Shape/shape'
class Rectangle extends Shape{
    constructor(width, height){
        super(width, height);
    }

    calculateArea(){
        return this.width * this.height;
    }
}

export default Rectangle;
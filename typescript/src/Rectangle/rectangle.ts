import Shape from '../Shape/shape'
let Rectangle = class MyRectangle extends Shape{
    constructor(width: number, height: number){
        super(width, height);
    }

    calculateArea() : number{
        return this.width * this.height;
    }
}

export default Rectangle;
import Shape from '../Shape/shape'
let Triangle = class MyTriangle extends Shape{
    constructor(width : number, height : number){
        super(width, height);
    }

    calculateArea() : number{
        return .5 * this.width * this.height;
    }
}
export default Triangle;
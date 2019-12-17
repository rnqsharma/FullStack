import Shape from '../Shape/shape'
class Triangle extends Shape{
    constructor(width, height){
        super(width, height);
    }

    calculateArea(){
        return .5 * this.width * this.height;
    }
}
export default Triangle;
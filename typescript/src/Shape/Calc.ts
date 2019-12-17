let Calculator = class Calc{
    a: number;
    b: number;

    constructor(a:number, b:number){
        this.a = a;
        this.b = b;
    }
    add() : number{
        return this.a+this.b;
    }

    mult(): number{
        return this.a*this.b;
    }

    div(): number{
        return this.a/this.b;
    }
    
    sub(): number{
        return this.a-this.b;
    }

    addSub() : Calc{
        this.a = this.a + this.b;
        return this;
    }
}




export default Calculator;
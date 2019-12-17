class Child extends Parent{
    public doSome(): void{
        console.log("In Child")
    }
}

let p = new Child();
p.doSome();
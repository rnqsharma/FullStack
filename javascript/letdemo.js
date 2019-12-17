let invoice = {
    number: 123,
    process: ()=>console.log(this),
    toString: ()=>{
        return "Raunaq"
    },
    valueOf: ()=>{
        return "invoice"
    }
};

console.log(invoice.toString());
console.log(invoice.process());
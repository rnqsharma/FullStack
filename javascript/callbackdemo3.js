this.orders = [
    {
        orderId: 1,
        price: 88999.5,
        name: 'iPhone'
    },
    {
        orderId : 4,
        price: 48999.5,
        name: 'Redmi'
    },
    {
        orderId : 3,
        price: 51500,
        name: 'OnePlus7Pro'
    }
]

// console.log(orders.sort(function(o1, o2){
//     return o1.price - o2.price;
// }));

setTimeout(()=>{

    console.log(this.orders.sort(function(o1, o2){
        return o1.name.localeCompare(o2.name);
    }));
}, 1000);
console.log("I am executed");

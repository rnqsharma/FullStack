this.orders = [
    {
        orderId: 1,
        price: 88999.5,
        name: 'iPhone',
        isActive: false
    },
    {
        orderId : 4,
        price: 48999.5,
        name: 'Redmi',
        isActive: true
    },
    {
        orderId : 3,
        price: 51500,
        name: 'OnePlus7Pro',
        isActive: true
    }
]

let sumOrders = this.orders.filter(order=>
    order.isActive
).map(order=>order.price).reduce((previous, current)=>
    previous += current, 0)

    console.log(sumOrders/this.orders.length);

let minOrder = this.orders.map(order=>order.price).reduce((previous, current)=>
        Math.min(previous, current), Number.MAX_VALUE)
    
        console.log(minOrder);
    

        let maxOrder = this.orders.map(order=>order.price).reduce((previous, current)=>
        Math.max(previous, current), Number.MIN_VALUE)
    
        console.log(maxOrder);

    
        
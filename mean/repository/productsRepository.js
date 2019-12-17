const Product = require('../model/products');
class ProductRepository{
    save(product){
        return new Product().save(product).then(p => p).catch(error => console.log(error));
    }

    update(product, id){
        // pp = product;
        return Product.findOneAndUpdate(
            {"productId": id} , 
            {product: product}
        )
        // return Product().save(product).then(p => p).catch(error => console.log(error));
    }

    getAllProducts(){
        return Product.find({}).then(products => products);
    }

    getProductById(id){
        // console.log("PPP")
        return Product.find({'productId' : id}).then(product => product);
    }


}

module.exports = new ProductRepository();
const productRepository = require('../repository/productsRepository');
module.exports = (app) =>{
    app.get('/products', (req, res)=>{
        productRepository.getAllProducts().then(products=>{
            console.log(products);
            res.json(products)
        });
    })

    app.get('/products/:id', (req, res)=>{
        productRepository.getProductById(req.params.id).then(product=>res.json(product));
    })

    app.post('/products', (req, res)=>{
        productRepository.save(req.body).then(product => res.json(product))
    })

    app.put('/products/:id', (req, res)=>{
        productRepository.update(req.body, req.params.id).then(product=>res.json(product));
    })

    // app.delete
    
}
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productId: Number,
    productName: String,
    productCode: Number,
    releaseDate: Date,
    description: String,
    price: Number,
    imageUrl: String,
    starRating: Number
})

module.exports = mongoose.model('Product', productSchema);
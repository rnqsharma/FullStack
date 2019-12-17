const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const houseSchema = new Schema({
    id: Number,
    address: String,
    country: String,
    description: String,
    price: Number,
    photo: String,
})

module.exports = mongoose.model('houses', houseSchema);
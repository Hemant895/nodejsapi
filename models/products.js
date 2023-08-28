const mongoose = require('mongoose');

const fuitschema = mongoose.Schema({
    img:String,
    price:Number,
    title:String
})

module.exports = mongoose.model('products',fuitschema);
const mongoose = require('mongoose');

const productschema = mongoose.Schema({
    img:String,
    price:Number,
    title:String
})



module.exports = mongoose.model('product',productschema);

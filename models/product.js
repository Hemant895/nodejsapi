const mongoose = require('mongoose');

const productschema = mongoose.Schema({
 name:String,
price:Number,
company:String
})

module.exports = mongoose.model('product',productschema);
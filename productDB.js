require('dotenv').config();
const connectdb = require('./db/connect');
const product = require('./models/product');
uri = 'mongodb+srv://hemantkhedkar102034:3nm5OYY3bHHJDSTM@fruitapi.opxwier.mongodb.net/fruitapi?retryWrites=true&w=majority'
const data = require('./product.json')
const start = async ()=>{
    try {
        await connectdb(uri);
        await product.create(data);
        console.log('success')
    }catch(err){
    console.log(err)
    }
}
start();
const mongoose = require('mongoose');

uri = 'mongodb+srv://hemantkhedkar102034:3nm5OYY3bHHJDSTM@fruitapi.opxwier.mongodb.net/fruitapi?retryWrites=true&w=majority'

const connectdb = ()=>{
    console.log('connected db')
    return mongoose.connect(uri,{
        useNewurlParser:true,
        useUnifiedTopology:true
    })
}

module.exports = connectdb;
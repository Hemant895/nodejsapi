require('dotenv').config();
const express= require('express');
const product = require('./models/product');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const connectdb = require('./db/connect')
const PORT = process.env.PORT || 5000;
// app.get('/',(req,res)=>{
//  res.send('hi i am live ');
// })

const products_routes = require('./routes/products');

app.use('/api/products',products_routes);
app.use('/api/fruits',products_routes);

const start = async ()=>{
    try {
        await connectdb();
   app.listen(PORT,()=>{
    console.log(`${PORT} yes i am connected`);
   })
    }catch(err){
    console.log(err)
    }
}
start();

app.post('/addproduct',async(req,res)=>{
    let user = new product(req.body);
    let result = user.save();
    res.send(result);
})
app.listen(3000);
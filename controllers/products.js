const Product = require('../models/product')
const getAllProducts = async (req,res)=>{
   const mydata=  await Product.find(req.query);
    res.status(200).json({ mydata})
}
const getAllTestingProducts = async (req,res)=>{
    res.status(200).json({msg:"get all Testing products"})
}

module.exports = {getAllProducts,getAllTestingProducts};

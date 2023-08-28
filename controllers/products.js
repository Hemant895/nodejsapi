const Product = require('../models/product')
const Products = require('../models/products')
const getAllProducts = async (req,res)=>{
   const mydata=  await Product.find(req.query);
    res.status(200).json({ mydata})
}
const getAllTestingProducts = async (req,res)=>{
    res.status(200).json({msg:"get all Testing products"})
}
const getfruitdata = async (req,res)=>{
    const mydata=  await Products.find(req.query);
     res.status(200).json({ mydata})
 }

module.exports = {getAllProducts,getAllTestingProducts,getfruitdata};

const asyncHandler=require('express-async-handler')
const Product = require("../models/productModel");

//@desc     fetch all products
//@route GET/api/products
//@access PUBLIC
const getProducts= asyncHandler(async(req,res) => 
{
    const products=await Product.find({})
    res.send(products)
})


//@desc     fetch single product
//@route GET/api/products/:id
//@access PUBLIC
const getProductById= asyncHandler(async(req,res)=> {
  const product = await Product.findById(req.params.id)
 if(product)
     res.send(product)
     else
     res.status(404).send({message:'product not found'})
})

module.exports={getProducts,getProductById}
const asyncHandler=require('express-async-handler')
const Order = require("../models/orderModel");

//@desc     fetch all products
//@route GET/api/products
//@access PRivate
const addOrderItems= asyncHandler(async(req,res) => 
{
   const {orderItems,shippingAddress,paymentMethod,itemsPrice,taxPrice,shippingPrice,totalPrice}=req.body;
   if(orderItems &&orderItems.length===0)
   {
       res.status('400')
       throw new Error('No order Items')
   }
   else
   {
       const order=new Order({
           orderItems,
           user:req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice

       })

       const createdOrder=await order.save()
       res.status(201).json(createdOrder)
   }
})
//@desc    getOrderBYiD
//@route GET/api/orders:id
//@access PRivate
const getOrderByID= asyncHandler(async(req,res) => 
{
  const order=await Order.findById(req.params.id).populate('user','name email')
  if(order)
  {
      res.json(order)
  }
  else
  {
      res.status(404)
      throw new Error('Order not found')
  }
})

module.exports={getOrderByID,addOrderItems}
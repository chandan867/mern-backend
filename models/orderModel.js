const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
        {
            name:{type:String,required:true},
            quantity:{type:Number,required:true},
            image:{type:String,required:true},
            price:{type:Number,required:true},
            product:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
            ref="product"}
        }
    ],
    shippingAddress: {
     address:{type:String,required:true},
     City:{type:String,required:true},
     PostalCode:{type:String,required:true},
     country:{type:String,required:true}
    },
    paymentMethod: {
      type: Boolean,
      required: true
  
    },
    paymentResult: {
     id:{type:String},
     status:{type:String},
     update_time:{type:String},
     email_address:{type:String}
  
    },
  taxPrice: {
      type:Number,
      required:true,
      default:0.0

  
    },
  ShippingPrice: {
      type:Number,
      required:true,
      default:0.0
},
  TotalPrice: {
      type:Number,
      required:true,
      default:0.0
},
isPaid: {
      type:Boolean,
      required:true,
      default:false
},
paidAt: {
    type:Date
},
isDelivered: {
    type:Boolean,
    required:true,
    default:false
},
deliveredAt: {
    type:Date
},
    
  },
  {
    timeStamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;

const express=require('express');
const ConnectDb = require('./config/db');
const products = require('./data/products');
const cors=require('cors')
const dotenv=require('dotenv');
const colors=require('colors')


dotenv.config()
const app=express()
app.use(express.json())
//app.use(cors())

ConnectDb();

app.get('/',(req,res)=>{
    res.send("hey ram");
})
app.get('/api/products',(req,res)=>
{
   res.send(products)
})

app.get('/api/products/:id',(req,res)=>
{
  const product=products.find((p)=>p._id===req.params.id)
  res.send(product);
})


const port=process.env.PORT ||8000;
app.listen(port,console.log(`server running on port ${port}  and in under ${process.env.NODE_ENV} mode`.yellow))
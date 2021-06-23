const express=require('express');
const ConnectDb = require('./config/db');
//const products = require('./data/products');
const cors=require('cors')
const dotenv=require('dotenv');
const colors=require('colors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');





dotenv.config()
const app=express()
app.use(express.json())
//app.use(cors())
// app.use((err,req,res)=>{

//error handler
// })

ConnectDb();

app.get('/',(req,res)=>{
    res.send("hey ram");
})
app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/orders',orderRoutes)


const port=process.env.PORT ||8000;
app.listen(port,console.log(`server running on port ${port}  and in under ${process.env.NODE_ENV} mode`.yellow))
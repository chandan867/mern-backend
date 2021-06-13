const mongoose = require("mongoose");
const ConnectDb = require("./config/db");
const products = require("./data/products");
const users = require("./data/users");
const User = require("./models/userModel");
const Product = require("./models/productModel");
const Order = require("./models/orderModel");
const dotenv = require("dotenv");
const colors = require("colors");
dotenv.config();
ConnectDb();
//console.log(products)


const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("data deleted".green);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

destroyData();
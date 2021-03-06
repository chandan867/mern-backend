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
const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUser = await User.insertMany(users);
    const adminUser = createdUser[0]._id;
    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser
      };
    });
   await Product.insertMany(sampleProducts);
  
    console.log("data imported".green);
    
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

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

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}

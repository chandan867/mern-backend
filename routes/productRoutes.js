const express = require("express");

const { getProducts, getProductById } = require("../controllers/productController");

const router = express.Router();
const app=express()
app.use(express.json())

router.get("/",getProducts);

router.get("/:id", getProductById);

module.exports = router;

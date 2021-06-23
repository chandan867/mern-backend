const express = require("express");
const { addOrderItems,getOrderByID } = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");


const router = express.Router();
const app=express()
app.use(express.json())


router.route('/').post(protect,addOrderItems)
router.route('/:id').get(protect,getOrderByID)




module.exports = router;

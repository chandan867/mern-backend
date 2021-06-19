const express = require("express");
const {authUser,getUserProfile, registerUser} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");


const router = express.Router();
const app=express()
app.use(express.json())

router.post("/login",authUser);
router.route('/').post(registerUser)
router.get('/profile',protect,getUserProfile)



module.exports = router;

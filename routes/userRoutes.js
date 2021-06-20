const express = require("express");
const {authUser,getUserProfile, registerUser,updateUserProfile} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");


const router = express.Router();
const app=express()
app.use(express.json())

router.post("/login",authUser);
router.route('/').post(registerUser)
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)



module.exports = router;

const asyncHandler=require('express-async-handler')
const User= require("../models/userModel");
const generateToken = require('../utils/generateToken');


//@desc     authenticate user
//@route POST/api/users/login
//@access PUBLIC
const  authUser= asyncHandler(async(req,res) => 
{
  const {email,password}=req.body
 // res.send({email,password})
  
  const user=await User.findOne({email})
  if(user &&(await user.matchPassword(password)))
  {
            res.json({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
               token:generateToken(user._id)
            })
  }
  else
  {
      res.status(401)
      res.send("invalid email or password")
  }
})
//Register a new User
const  registerUser= asyncHandler(async(req,res) => 
{
  const {name,email,password}=req.body
  const userExists=await User.findOne({email})
  if(userExists)
  {
    res.status(400)
    throw new Error("user already Exists")
  }
  const user=await User.create({
    name,
    email,
    password
  })
  if(user)
  {
    res.status(201).json({
      _id:user._id,
      name:user.name,
      email:user.email,
      isAdmin:user.isAdmin,
     token:generateToken(user._id)

    })
    
  }
  else
    {
          res.status(404)
          throw new Error("Invalid user data")
    }
  
})

//getting profile
//private
const  getUserProfile= asyncHandler(async(req,res) => 
{
  // console.log("Success")
  const user=await User.findById(req.user._id)
  if(user)
  {
    res.json({
      _id:user._id,
      name:user.name,
      email:user.email,
      isAdmin:user.isAdmin,
    
  })
  }
  else{
    res.status(404)
    res.send('user NOt found')
  }
})


//@desc-update user
//route-PUT/api/users/profile
//access-private
const  updateUserProfile= asyncHandler(async(req,res) => 
{
  // console.log("Success")
  const user=await User.findById(req.user._id)
  if(user)
  {
    user.name=req.body.name ||user.name
    user.email=req.body.email || user.email
    if(req.body.password)
    {
      user.password=req.body.password
    }
    const updatedUser=await user.save()
    res.json({
      _id:updatedUser._id,
      name:updatedUser.name,
      email:updatedUser.email,
      isAdmin:updatedUser.isAdmin,
     token:generateToken(updatedUser._id)

    })
    
    
  }
  else{
    res.status(404)
    res.send('user NOt found')
  }
})


module.exports={authUser,getUserProfile,registerUser,updateUserProfile};
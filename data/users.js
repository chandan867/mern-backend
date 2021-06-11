const bcrypt=require("bcryptjs")

const users = [
  {
    name: "admin user",
    email: "admin@gmail.com",
    password: bcrypt.hashSync('123456',10),
    isAdmin: true,
  },
  {
    name: "sa dr fr",
    email: "admin12@gmail.com",
    password: bcrypt.hashSync('123456',10)
   
  },
  {
    name: "ad user",
    email: "admin123@gmail.com",
    password: bcrypt.hashSync('123456',10)
   
  },
];

module.exports=users;
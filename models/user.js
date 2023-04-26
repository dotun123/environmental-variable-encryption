require("dotenv").config();
const mongoose= require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;



const userSchema =new mongoose.Schema( {
    email: String,
    password: String
  });


 
  
  
  const User= mongoose.model("user", userSchema);
  
  module.exports=User
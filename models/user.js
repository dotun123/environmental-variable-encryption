require("dotenv").config();
const mongoose= require("mongoose");
const session= require ("express-session");
const passport= require("passport");
const passportLocalMongoose=require("passport-local-mongoose");





const userSchema =new mongoose.Schema( {
    email: String,
    password: String
  });

userSchema.plugin(passportLocalMongoose);
 
  
  
  const User= mongoose.model("user", userSchema);
  
  module.exports=User
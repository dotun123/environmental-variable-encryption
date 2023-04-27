require("dotenv").config();
const mongoose= require("mongoose");
const session= require ("express-session");
const passport= require("passport");
const passportLocalMongoose=require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");





const userSchema =new mongoose.Schema( {
    email: String,
    password: String,
    googleId: String
  });

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
  
  
  const User= mongoose.model("user", userSchema);
  
  module.exports=User
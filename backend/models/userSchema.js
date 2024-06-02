import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import isEmail from "validator/lib/isEmail";

const userSchema = new mongoose.Schema({
  name : {
    type:String,
    required:[true,"Please provide your name!"],
    minLength:[3,"Name must contain at least 3 character"],
    maxLength:[20,"Name should not exceed 20 character!"]
  },
  email:{
    type:String,
    required:[true,"Please provide your email!"],
    validate:[validator.isEmail,"Please provide a valid email"]
  },
  phone:{
    type:Number,
    required:[true,"Please provide your phone number"]
  },
  password:{
    type:String,
    required:[true,"please provide your password!"],
    minLength:[8,"Password must contain at least 8 character"],
    maxLength:[32,"Password should not exceed 32 character!"],
    select: false
  },
  role:{
    type:String,
    required:[true,"Please provide your role!"],
    enum:["Job seeker","Employer"]
  },
  createdat:{
   type:Date,
   default: Date.now
  },
});

// Hashing the password 
userSchema.pre("save",async function(next){
if(!this.isModified("password")){
  next()
}
this.password = await bcrypt.hash(this.password,10)
})


// Comparing password 
userSchema.methods.comparePassword = async function (enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password);
};

// Generating a json web token for authorization 
userSchema.methods.getJWTToken = function(){
  return jwt.sign({id:this._id},process.env.JWT_SECRET_KEY,{
    expiresIn:process.env.JWT_EXPIRE
  })
} 

export const User = mongoose.model("User",userSchema);
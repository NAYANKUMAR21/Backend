const mongoose = require("mongoose")
const file = {
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    age:{type:Number},
    name:{type:String,required:true}
}
const userSchema = new mongoose.Schema(file)

const UserModel = mongoose.model("user",userSchema)



module.exports = UserModel


/*
email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number },
  gender: { type: String },
 */
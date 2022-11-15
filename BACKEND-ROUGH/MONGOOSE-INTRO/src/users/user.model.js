const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:String,
    gender:{type:String,required:true,enum:["Male","Female"]},
    age:{type:Number,required:true,min:10,max:30}
})
//model : Instance of collection so that we can perform every collection
const User = mongoose.model("user",userSchema) ;//everything is working for this 


module.exports = User
const mongoose = require("mongoose")
const file={
    name:{type:String,required:true},
    description:{type:String},
    image:{type:String},
    price:{type:Number,require:true,min:1},
    quantity:{type:Number,require:true}
}
const productSchema = new mongoose.Schema(file)

const ProductModel = mongoose.model("product",productSchema)



module.exports = ProductModel
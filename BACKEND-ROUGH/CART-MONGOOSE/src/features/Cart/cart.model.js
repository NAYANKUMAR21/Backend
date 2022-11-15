const mongoose = require("mongoose");

const file = {
    product:{
        type:mongoose.Schema.Types.ObjectId,                        //on who type os related 
        required:true,
        ref:"product"                                               //on who it is related in this case its product -->model name
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,                        //on who type os related 
        required:true,
        ref:"user"                                                    //on who it is related in this case its user -->model name
    },
    quantity:{type:Number,required:true,min:1}
};

const cartSchema = new mongoose.Schema(file);

const CartModel = mongoose.model("cart", cartSchema);

module.exports = CartModel;







/* 
{
    product:{
        type:mongoose.Schema.Types.ObjectId,                        //on who type os related 
        required:true,
        ref:"product"                                               //on who it is related in this case its product -->model name
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,                        //on who type os related 
        required:true,
        ref:"user"                                                    //on who it is related in this case its user -->model name
    },
    quantity:{type:Number,min:1}
};

*/
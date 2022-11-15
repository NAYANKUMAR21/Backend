const mongoose = require("mongoose");

const file = {
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  price: { type: Number, required: true, min: 1 },
  quantity: { type: Number, required: true ,min:0},
};

const productSchema = new mongoose.Schema(file);

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;




const mongoose = require("mongoose");
const file = {
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "product",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  quantity: { type: Number, required: true },
};

const cartSchema = new mongoose.Schema(file);
const CartModel = mongoose.model("cart", cartSchema);

module.exports = CartModel;

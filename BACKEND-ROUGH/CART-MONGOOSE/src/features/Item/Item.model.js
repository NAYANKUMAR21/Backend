const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  id: { type: Number },
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  gender: String,
  age: Number,
});

const ItemModel = mongoose.model("item", itemSchema);


module.exports  = ItemModel
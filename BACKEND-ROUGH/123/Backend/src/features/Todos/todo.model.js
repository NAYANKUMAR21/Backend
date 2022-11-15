const { default: axios } = require("axios");
const mongoose = require("mongoose");
const file = {
  title: { type: String },
  status: { type: String },
  email: { type: String, required: true },
  groupNumber: { type: Number, require: true },
  auth: { type: mongoose.Schema.Types.ObjectId, ref: "auth" },
};
const todoSchema = new mongoose.Schema(file);
const todoModel = mongoose.model("todo", todoSchema);

module.exports = todoModel;


// axios.get("url",
// header:{
//   token:`${email}_#_${password}`
// })

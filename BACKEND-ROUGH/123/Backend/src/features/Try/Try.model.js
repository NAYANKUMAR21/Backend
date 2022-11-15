const mongoose = require("mongoose");
const file = {
  email: { type: String, require: true },
  groupNumber: { type: Number, require: true },
  groupName: { type: String, require: true },
  todo: [{ status: { type: Boolean }, title: { type: String } }],
};
const trySchema = new mongoose.Schema(file);
const tryModel = mongoose.model("try", trySchema);
module.exports = tryModel;

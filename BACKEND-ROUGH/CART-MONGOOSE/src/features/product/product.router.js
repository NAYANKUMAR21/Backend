const express = require("express");
const app = express.Router();
const ProductModel = require("./product.model");



app.get("/", async (req, res) => {
  const { limit = 10, page = 1 } = req.query;                   //paginationa and getting results
  console.log("inside get request")
  try {
    let products = await ProductModel.find()
      .limit(limit)
      .skip((page - 1) * limit);
      console.log(products)
    res.send(products);
  } catch (er) {
    res.status(400).send(er.message);
  }
});



module.exports = app;

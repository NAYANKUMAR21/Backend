const Router = require("express");
const app = Router();

const productModel = require("./product.model");

app.get("/", async (req, res) => {
  const { limit = 5, page = 1 } = req.query;
  try {
    let data = await productModel
      .find()
      .limit(limit)
      .skip((page - 1) * limit);
    console.log("inside get request");
    res.send(data);
  } catch (er) {
    res.send(er.message);
  }
});

module.exports = app;

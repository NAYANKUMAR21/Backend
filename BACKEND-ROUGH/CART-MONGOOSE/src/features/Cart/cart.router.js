const express = require("express");
const ProductModel = require("../product/product.model");
const UserModel = require("../user/user.model");
const CartModel = require("./cart.model");
const app = express.Router();

const authMiddleWare = async (req, res, next) => {
  let token = req.headers.token;
  if (!token) {
    return res.send("Missing Token");
  }
  let [email, password] = token.split("_#_");
  try {
    console.log(email, password);
    let user = await UserModel.findOne({ email });
    console.log(user);
    if (user) {
      if (password === user.password) {
        req.userID = user.id;
        next();
      } else {
        res.status(401).send("Authentication failed password failed");
      }
    } else {
      res.send(`user with ${email} not found`);
    }
  } catch (er) {
    res.send(er.message);
  }
};

app.use(authMiddleWare);

app.get("/", async (req, res) => {
  try {
    let Cart = await CartModel.find({ user: req.userID }).populate([
      { path: "user", select: ["name", "email"] },
      "product",
    ]);
    res.send(Cart);
  } catch (er) {
    res.status(400).send(er.message);
  }
});

//post
app.post("/", async (req, res) => {
  try {
    let product = await ProductModel.findById(req.body.product);
    if (product.quantity > req.body.quantity) {
      let cart = await CartModel.create({
        ...req.body,
        user: req.userID,
      })
      return res.send(cart);

      //  ProductModel.findByIdAndUpdate(product.id, {
      //   quantity: product.quantity - cart.quantity,
      // });
    } else {
      res.send("fronted end not will be added");
    }
  } catch (er) {
    res.status(400).send(er.message);
  }
});
//post
//delete
//patch

module.exports = app;
/*
Project(DB)
  -boards  
  -auth
*/
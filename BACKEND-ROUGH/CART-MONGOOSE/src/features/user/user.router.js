const express = require("express");
const UserModel = require("./user.model");
const app = express.Router();

app.get("/", async (req, res) => {
  // let data  = await UserModel.find()

  res.send("GET USER ROUTE");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    console.log(user);
    if (user) {
      if (password === user.password) {
        res.send({ token: `${email}_#_${password}`, user });
      } else {
        res.status(401).send("Authentication failed password failed");
      }
    } else {
      res.send(`user with ${email} not found`);
    }
  } catch (er) {
    res.send(er.message);
  }
});

app.post("/signup", async (req, res) => {
  // let data  = await UserModel.find()
  const { email, password, name, age } = req.body;
  console.log("inside user request");
  try {
    let existing = await UserModel.find({ email });
    if (existing.length !== 0) {
      console.log("existing", existing);
      return res.status(404).send("Cannot create user with existing email");
    } else {
      let user = await UserModel.create({ email, password, name, age });
      return res.send(user);
    }
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

module.exports = app;

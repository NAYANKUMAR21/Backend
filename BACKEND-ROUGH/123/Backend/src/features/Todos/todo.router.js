const express = require("express");
const app = express.Router();
const todoModel = require("./todo.model");
const authModel = require("../auth/Auth.model");

const authMiddleWare = async (req, res, next) => {
  let token = req.headers.token;
  if (!token) {
    return res.send("Missing Token");
  }
  let [email, password] = token.split("_#_");
  try {
    console.log(email, password);
    let user = await authModel.findOne({ email });
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
  const { email } = req.query;
  console.log(email, "inside query request");
  try {
    let Todo = await todoModel
      .find({ email })
      .populate(["auth"])
      .sort({ groupNumber: "asc" });
    res.send(Todo);
  } catch (er) {
    res.send(er.message);
  }
});
app.get("/:groupNumber", async (req, res) => {
  let { groupNumber } = req.params;
  console.log(groupNumber, "inside :id search");
  const { email } = req.query;
  try {
    let data = await todoModel.find({ email, groupNumber }).populate(["auth"]);
    res.send(data);
  } catch (er) {
    res.send(`inside get by group---->${er.message}`);
  }
});
app.post("/", async (req, res) => {
  try {
    let user = await authModel.findOne({ email: req.body.email });
    console.log(req.body.email, user);

    let data = await (
      await todoModel.create({ ...req.body, auth: user._id })
    ).populate(["auth"]);
    res.send(data);
  } catch (er) {
    res.send(`inside post --->${er.message}`);
  }
});
module.exports = app;

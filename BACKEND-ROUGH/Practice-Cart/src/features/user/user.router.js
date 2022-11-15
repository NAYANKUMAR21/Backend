const Router = require("express");
const UserModel = require("./user.model");

const app = Router();

app.get("/", async (req, res) => {
  res.send("GET FROM USER");
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (user) {
      if (password === user.password) {
        res.send({ token: `${email}_#_${password}`, user });
      } else {
        res.send("Authentication failed password not correct");
      }
    } else {
      res.send(`${email} user not found`);
    }
  } catch (er) {
    res.send(`${er.message}_error in catch`);
  }
});

app.post("/signup", async (req, res) => {
  let { email, password, name, age } = req.body;
  try {
    let existing = await UserModel.findOne({ email });
    if (existing) {
      return res.send(`User ${email} already exists`);
    } else {
      let user = await UserModel.create({ email, password, name, age });
      return res.send(`${user} created in signup`)
    }
  } catch (er) {
    return res.send(`${er.message} inside catch signup`);
  }
});

module.exports = app;

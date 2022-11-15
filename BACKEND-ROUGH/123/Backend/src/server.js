require("dotenv").config();
const express = require("express");
const connect = require("./config/db");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;
const authRouter = require("./features/auth/Auth.router");
const TodoRouter = require("./features/Todos/todo.router");
const tryRouter = require("./features/Try/Try.router");
app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);
app.use("/todo", TodoRouter);
app.use("/try", tryRouter);

app.get("/", async (req, res) => {
  try {
    res.send("HOME PAGE BASIC ROUTE");
  } catch (er) {
    res.send(er.message);
  }
});
app.listen(PORT, async (req, res) => {
  try {
    await connect();
    console.log(`listening on http://localhost:${PORT}`);
  } catch (er) {
    console.log(er.message);
  }
});

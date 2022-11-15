require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./config/db");
const PORT = process.env.PORT;

const userRouter = require("./features/user/user.router");
const productRoute = require("./features/product/product.router");
const cartRoute = require("./features/Cart/cart.router");
const itemRoute = require("./features/Item/item.router")


app.use(cors());
app.use(express.json());
app.use("/item",itemRoute)
app.use("/user", userRouter);
app.use("/product", productRoute);
app.use("/cart", cartRoute);

app.get("/", async (req, res) => {
  res.send("GET home page");
});

app.listen(PORT, async () => {
  await connect();
  console.log(`listening on http://localhost:${PORT}`);
});

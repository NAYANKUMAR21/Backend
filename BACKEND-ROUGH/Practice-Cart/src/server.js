require("dotenv").config()

const express = require("express")
const app = express()
const cors = require("cors")
const connect  = require("./config/db")
const PORT = process.env.PORT 

const userRouter = require("./features/user/user.router")
const productRouter = require("./features/product/product.router")
const cartRouter = require("./features/Cart/cart.router")

app.use(express.json())
app.use(cors())
app.use("/user",userRouter)
app.use("/products",productRouter)
app.use("/cart",cartRouter)

app.get("/",async(req,res)=>{
    res.send("GET HOME PAGE")
})


app.listen(PORT,async(req,res)=>{
    await connect()
    console.log(`app listening on http://localhost:${PORT}`)
})


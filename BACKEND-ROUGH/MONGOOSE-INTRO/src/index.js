require("dotenv").config();
const express = require("express")
const app = express()
const cors = require("cors")

const connect = require("./config/db")
const usersRoute = require("./users/user.route")

console.log(process.env.DB_URL)

const Port = process.env.PORT
app.use(express.json())
app.use(cors())
app.use("/user",usersRoute)


app.get("/",(req,res)=>{
    res.send("GET HOME PAGE")
})

app.listen(Port,async ()=>{
    try{
        await connect()
    }
    catch(er){
        console.log(er)
    }
    console.log(`listening at http://localhost:${Port}`)
})
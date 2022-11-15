require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors())

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})
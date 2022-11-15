const express = require("express")
const db = require("./db.json")
const cors = require("cors")
const path = require("path")
const usersR = require("./AARoute/user.route")
let port  = 8080

const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })
  
const upload = multer({ storage: storage })


const app = express()
app.use(express.json())
app.use(cors())
app.use("/user",usersR)


app.get("/",(req,res)=>{
    res.send(db.products)
})

app.post("/profile",upload.single("avatar"),(req,res)=>{
    console.log(req.file,"file upload")
    res.send("file uploaded from backedn")
})




app.listen(port,()=>{
console.log(`sevre started http://localhost:${port}`)
})
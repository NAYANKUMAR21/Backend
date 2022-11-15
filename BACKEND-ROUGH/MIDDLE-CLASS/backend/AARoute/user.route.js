const {Router}= require("express")
const app = Router()
const db = require("../db.json")
const auth = (req,res,next)=>{
    if( req.body && req.body.username==="nayan" && req.body.pass=="1234" ){
        next()
    }else{
        res.send("Not Authenticated")
    }
}
app.get("/",(req,res)=>{
    res.send(db.products)
})
app.get("/:id",(req,res)=>{
    res.send("get ID")
})
app.use(auth)
app.post("/login",(req,res)=>{
    res.send("done with post nayan")
})

module.exports = app
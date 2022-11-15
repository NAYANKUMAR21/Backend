const express = require("express")
const User = require("./user.model")
const app = express()

//NORMAL GET
app.get("/",async (req,res)=>{
    const data = await User.find()
    console.log("nayan")
    res.send(data)
})

//GET BY ID
app.get("/:id",async (req,res)=>{
    let {id} = req.params
    const single = await User.findById(id)
    res.send(single)
})
//DELETE
app.delete("/:id",async(req,res)=>{
    let {id} = req.params
    let single = await User.findByIdAndDelete(id)
    res.send(single)
})

//POST
app.post("/",async (req,res)=>{
    let user = await User.create({
        ...req.body
    })
    res.send(user)
    
    // const data = await User.find()
    res.send("")
})
//PATCH
app.patch("",async(req,res)=>{
    
})
module.exports = app
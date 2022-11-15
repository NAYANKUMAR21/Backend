const express = require("express")
const app = express.Router()
const itemModel = require("./Item.model")


app.get("/",async(req,res)=>{
    try{
        let user =  await itemModel.find()
        res.send(user)
    }catch(er)
    {
        res.send("error")
    }
})




module.exports = app

const express = require("express")
const app = express()
const fs = require("fs")
let arr = []
fs.readdir("../EXPRESS-PRE",(er,files)=>{
    
    for(let i=0;i<files.length;i++){
        arr.push(files[i])
        console.log(files[i])
    }
    
})





app.get("/",(req,res)=>{
    res.send("Hellow World")
})
app.get("/products",(req,res)=>{
    
    res.send(JSON.stringify({id:1,author:"nayan"})) //even if you have written the JSON stringify inside the end its doesnt matter its make stringify action withn the function itself
})
app.get("/web",(req,res)=>{
    res.send("Hellow World")
})

app.listen(8080,()=>{
    console.log("started server on http://localhost:8080")
})

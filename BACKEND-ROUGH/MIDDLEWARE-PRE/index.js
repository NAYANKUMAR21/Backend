const express = require("express")
const app = express()
const db = require("./db.json")
const postsRoute = require("./Route/todos.route")



app.use((req,res,next)=>{
    if(!req.query.apiKey){
        return res.send(db.todo)
    }
    next()
})

app.use("/posts",postsRoute)

app.get("/",(req,res)=>{
    res.send("inside homepage get")
})

app.listen(8000,(req,res)=>{
    console.log("server started at http://localhost:8000")
})





//coments

/*
 (req,res,next)=>{
    const {name} = req.query
    if(name){
        return res.send("OOps not found")
    }
    next()
}







*/

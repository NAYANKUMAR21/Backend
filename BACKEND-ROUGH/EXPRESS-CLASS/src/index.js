//http from express
const express = require("express")
const app = express()
// const fs = require("fs")
// const data = require("../src/db.json")
const post  = require("./route/posts.route")


app.use(express.json())
app.use("/posts",post)


app.get("/",(req,res)=>{
    // console.log(req.method,req.url)
    res.send("Hello its Nayan")
})

app.get("/user",(req,res)=>{
    let {id,message} = req.query
    console.log(id)
    
    if(id){
        let  posts = data.user.filter((es)=>es.id===Number(id))
        res.send(posts)
    }
    if(message){
        posts = data.user.filter((es)=>es.author===author.includes(message))
    }
    res.send(posts)
  
})




// app.get("/product",(req,res)=>{
//     res.end("welcome products page")
// })





//listen
app.listen(8080,()=>{
    console.log("started on http://localhost:8080")
})



/* 
 if(req.url==="/products"){
            data.products.push({id:1,content:" new product"})
            res.write(JSON.stringify(data.products))
        }
        
        
        fs.writeFile("./db.json",JSON.stringify(data),()=>{
            encoding:"utf-8"
        })
        */
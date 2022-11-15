const {Router} = require("express")
const app = Router()

const data = require("../db.json")



//GET
app.get("/",(req,res)=>{
    res.send(data.post)
    console.log(req.method,req.url,"GET posts")
})

app.get(`/:id`,(req,res)=>{
    let {id} = req.params
    let x = data.post.find((es)=>{
        return (es.id)===Number(id)
    })
    if(x){
        res.send(x)
    }else {
        res.send(`Element with ${id} not found `)
    }
    res.send(x)
})




//POST
app.post("/",(req,res)=>{
    
    data.post.push({...req.body})
    fs.writeFile("../db.json",JSON.stringify(data),"utf-8",()=>{
        res.status(201).set("content-type","application/json").send(data.post)
    })
})


//DELETE
app.delete("/:id",(req,res)=>{
    let {id} = req.query
    let numId = Number(id)
    let posts = data.user.filter((es)=>{
        return es.id !== numId
    })
     
    data.user = posts
    fs.writeFile("../db.json",JSON.stringify(data),"utf-8",()=>{
        res.send(data.user)
    })
})
//PATCH
app.patch("/",(req,res)=>{
    res.send("THIS PATCH API")
})


module.exports = app
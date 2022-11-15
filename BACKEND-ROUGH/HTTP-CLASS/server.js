const http = require("http");
const data = require("./db.json")
const fs = require("fs")
console.log(data)

const server = http.createServer((req, res) => {
    console.log(req.method,req.url)

    if(req.method==="GET"){

        if(req.url==="/"){
            res.write("on homePage ")
        }else if(req.url==="/login"){
            res.write("Login Page")
        }else if(req.url==="/products"){
            res.write("Products Page")
        }else if(req.url==="/nayan"){
            // res.setHeader("content-type","application/json")
            // res.write("world its Nayan")
            res.write("<h1>NAYAN KUMAR</h1>")
        }
    }else if(req.method==="POST") {
        if(req.url==="/products"){
            data.products.push({id:1,content:" new product"})
            res.write(JSON.stringify(data.products))
        }else if(req.url==="/user"){
            data.users.push({name:"nayan",author:"mac OS"})
            res.write(JSON.stringify(data.users))
        }
        fs.writeFile("./db.json",JSON.stringify(data),()=>{
            encoding:"utf-8"
        })
    }
    res.end("1")

});

server.listen(8080, () => {
  console.log("listening on  http://localhost:8080");
});
/* 
fs.writeFile("./db.json",JSON.stringify(posts),()=>{
    encoding:"utf-8"
})*/
let posts = require("./db.json")
const fs = require("fs")
posts.posts.push({id:1,author:"nayan"})
console.log(posts)


fs.writeFile("./db.json",JSON.stringify(posts),()=>{
    encoding:"utf-8"
})
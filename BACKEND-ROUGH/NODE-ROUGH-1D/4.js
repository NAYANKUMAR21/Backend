const fs = require("fs")

console.log("before")
fs.readFile("./textSample.txt","utf-8",(er,data)=>{   //works as async but its not async 
    console.log(data)                                  //its called callback
})
console.log("after")




console.log("before-2")
let data = fs.readFileSync("./textSample.txt","utf-8")
console.log("data-2",data)
console.log("after-2")
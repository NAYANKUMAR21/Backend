// Requiring module
const express = require("express");
const app = express();
var time = new Date();
function middleware1(req, res, next) {
// Set data
// req.dataFromMiddleware1 = "Data of Middleware 1";

// Go to next middleware
console.log(time.getSeconds(),"1")
next();
}

function middleware2(req, res, next) {
// console.log("We are in Middleware 2.");

// Get Data of Middleware1
// console.log(req.dataFromMiddleware1);

// Go to next middleware
console.log(time.getSeconds(),"2")
next();
}

// Handling Get Request '/'
app.get("/",middleware1,middleware2, (req, res) => {
return res.send("inside the get");
});

// Server Setup
app.listen(9000, () => {
console.log(`Server is up and running on http://localhost:9000 ...`);
});

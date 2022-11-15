const {Router} = require("express")
const { post } = require("../../EXPRESS-CLASS/src/route/posts.route")
const posts = Router()


posts.get("/",(req,res)=>{
    res.send(" get Route")
})

module.exports = posts
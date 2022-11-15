const express = require("express");
const ProductModel = require("../product/product.model");
const app = express.Router();
const UserModel = require("../user/user.model");
const CartModel = require("./cart.model");

const authMiddleWare = async (req, res, next) => {
  let token = req.headers.token;
  if (!token) {
    return res.send(`token Missing from middle practice`);
  }
  try {
    let [email, password] = token.split("_#_");
    let user = await UserModel.findOne({ email });
    if (user) {
      if (password === user.password) {
        req.userId = user._id;
        next();
        console.log(email, password);
      } else {
        return res.send(`password for this user ${email} is wrong`);
      }
    } else {
      return res.send(
        `${email} doesn't exist please signup from cart middleware`
      );
    }
  } catch (er) {
    return res.send(`${er.message} inside cart middle ware er`);
  }
};
app.use(authMiddleWare);

app.get("/", async (req, res) => {
  try {
    let itemsC = await CartModel.find({ user: req.userId }).populate([
     "product",
      "user",
    ]);
    console.log("inside cart get request", itemsC);
    return res.send(itemsC);
  } catch (er) {
    res.send(`${er.message} from cart get request practice`);
  }
});

app.post("/", async (req, res) => {
  try {
    let product = await ProductModel.findOne({_id:req.body.product});
   if(product){
        if(product.quantity >= req.body.quantity){
            
            let exists = await CartModel.findOne(product._id)
            if(exists){
                let productUpdate = await ProductModel.findByIdAndUpdate(product._id,{
                    quantity:Number(product.quantity) - Number(req.body.quantity)
                },{
                    new:true
                });
                let updatedCart = await CartModel.findByIdAndUpdate(exists.product._id,{
                    quantity: req.body.quantity+ exists.quantity
                })    
                return res.send(`${productUpdate} both updated ${updatedCart}`)
            }else{

                let productUpdate = await ProductModel.findByIdAndUpdate(product._id,{
                    quantity:Number(product.quantity) - Number(req.body.quantity)
                },{
                    new:true
                });
                let cart = await CartModel.create({
                    ...req.body,
                    user:req.userId,
                });

                return res.send(`${productUpdate} newly updated ${cart}`)
            }

        }else{
            return res.send("such huge quantity is not present");
        }
   }else{
    return res.send("product doesn't exists in stock") 
   }
    
  } catch (er) {
    return res.send(`${er.message} inside cart post request`);
  }
});


app.delete("/:id",async(req,res)=>{
    let {id} = req.params
    if(!id){
        return res.send("Missing id")
    }
    try{

        let data = await CartModel.deleteMany({product:id},{
            quantity:1
        })
        // return res.send(data)
        
        let N = data.length
        
        let products = await ProductModel.find({_id:id})
        let productUpdated =  await ProductModel.findByIdAndUpdate(id,{
            quantity: Number(products.quantity) + Number(N)
        })
        return res.send(`${data} and ${id} successfully deleted ${productUpdated}`)
    }catch(er){
        res.send(`in the catch--> ${er.message}`)
    }
})



app.patch("/:id",async(req,res)=>{
    let updates = req.body
    let id = req.params.id
    console.log(updates)
    try{
        if(id){
            let {id} = req.params
         let productUpdate = await ProductModel.findByIdAndUpdate({_id:id},{
            ...updates
         })

            return res.send(`updated ${productUpdate}`)
            
        }else{
            return res.send("Missing id to patch")
        }
        
    }catch(er){
        res.send(`${er} inside cart patch request`)
    }

})

module.exports = app;



/*
 let cart = await CartModel.create({
        ...req.body,
        user:req.userId,
      });
      return res.send(cart);   
*/
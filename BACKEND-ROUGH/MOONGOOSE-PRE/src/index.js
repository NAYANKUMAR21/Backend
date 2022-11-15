const mongoose = require("mongoose")

let Structure = {
    fname:{type:String,required:true},
    lname:String,
    age:Number,
    Native:String,
    createdOn: Date,
    nickName:[String]
}

const FileSchema = new mongoose.Schema(Structure)

const Data = mongoose.model("single",FileSchema)  //every single data will look like or have structure like fileSchema   and it is represented on object and not array of object
                        //collection name is single and every entry  structure will look like FileSchema //like mongodb adds _id likewise mongoose adds _v
async function main(){              //most of the function in mongoose return promise so async
    const connect = await mongoose.connect("mongodb://localhost:27017/B20")
    console.log("connected")


     const obj = new Data({                         //save the file in db
        fname:"tejashwini",
        lname:"hanchate",
        age:21,
        Native:"hubli",
        createdOn:new Date(),
        nickName:["teja","created","first","mongoose"]
     })

        await obj.save()
        if(obj.changePassword){
            const full = await Data.find({fname:"tejashwini"})
            console.log(full)
        }
    

    connect.disconnect()
}
main()
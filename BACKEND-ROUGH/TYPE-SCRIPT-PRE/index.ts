import axios from "axios";

let arr = []
async function getData (){
    try{
        let res = await axios.post("https://reqres.in/api/login",{
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        })
        let data = await res.data
        arr.push(data)
        console.log(data)
    }catch(er){
        console.log(er.message)
    }
}

getData()
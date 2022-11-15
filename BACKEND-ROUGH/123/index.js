async function getData(){
    try{
        let data = await fetch("http://localhost:8080/todo")
        let res = await data.json()
        console.log(res.group)
        
    }catch(er){
        console.log(er.message)
    }
}
getData()
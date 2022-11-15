import {useEffect,useState} from "react"

import './App.css';
import axios from "axios"
const post  = ()=>{
  axios.post("http://localhost:8080/user/login",{
    username:"nayan",
    pass:"1234"
  }).then((res)=>{
    console.log(res)
  })
  .catch((er)=>console.log(er))
}
const filepost = ({avatar})=>{
  axios.post("http://localhost:8080/profile",{
    avatar:avatar
  }).then((res)=>{
    console.log(res,"response filepost")
  })
  .catch((er)=>console.log(er,"error  file post"))
}
function App() {
  const [data,setData] = useState([])
  const [img,setImg] = useState({
    avatar:""
  })
  const handleChange = (e)=>{
    const {name,value} = e.target
    setImg({...img,[name]:value})
    
  }

  const handleSubmit = ()=>{
    filepost(img)
  }
  console.log(img)

  useEffect(()=>{
    axios.get("http://localhost:8080/user").then((res)=>{
      setData(res.data)
      console.log(res.data)
    })
    .catch((er)=>console.log(er))
    .finally(()=>console.log("server fetched "))
  },[])
  return (
    <div className="App">
      <form action="/profile" method="POST" enctype="multipart/form-data" onSubmit={handleSubmit}>
        <input type="file" name="avatar" onChange={handleChange}/>
        <input type="submit"/>
      </form>
      <h1>NAYAN</h1>
      <button onClick={()=>post()}>post</button>
      <div className="nayan">
      {
        data?.map((es)=>{
          return(
            <div key={es.id}>
              <img src={es.image} alt=""/>
              <p>{es.price}-{es.name}</p>
            </div>
          )
        })
      }
    </div>
    </div>
  );
}

export default App;


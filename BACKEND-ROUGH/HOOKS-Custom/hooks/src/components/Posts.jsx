import axios from 'axios'

import useAPI from '../Hooks/useAPI'
import useDElayed from '../Hooks/useDElayed'
const getData=async()=>{
    try{
        let response = await axios.get("http://localhost:8080/posts")
        let data = response.data
        return (data)
    }catch(er){
        console.log(er.message)
    }
}

const deleteData = async(id)=>{
    try{
        let response = await axios.delete(`http://localhost:8080/posts/${id}`)
        let data = response.data
        return (data)
    }catch(er){
        console.log(er.message)
    }
}
const Posts = () => {
    const {loading,error,posts,refresh} = useAPI(getData,[])
    const {loading:deleteCall,fetchCall} = useDElayed(deleteData,[])
    if(loading || deleteCall){
        return <h1>...loading</h1>
    }else if(error){
        return <h1>{error}</h1>
    }
  return (
    <div style={{marginTop:"30px"}}>
        <button onClick={refresh}>REFRESH</button>
      {
        posts?.map((item)=>{
            return (
                <div key={item.id} style={{display:"flex"}}>
                <div key={item.id}>{item.id}-{item.title}</div>
                <button onClick={()=>{
                    fetchCall(item.id).then(()=>{
                        refresh()
                    })
                }}>DELETE</button>
                </div>
            )
        })
      }
    </div>
  )
}

export default Posts

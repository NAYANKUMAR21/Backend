import  { useEffect, useState } from 'react'

const useAPI = (getData,state) => {
    const [posts,SetPosts] = useState(state)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const fetchCall =async ()=>{
        setLoading(true)
        try{
            let call = await getData()
            SetPosts(call)
        
        }catch(er){
            setError(true)
            console.log(er.message)
        }
        setLoading(false)
    }
    useEffect(()=>{
        fetchCall()
    },[])
  return {loading,error,posts,refresh:fetchCall}
}

export default useAPI

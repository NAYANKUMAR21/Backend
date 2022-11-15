import  { useState } from 'react'

const useDElayed = (deleteData,state) => {
    const [posts,SetPosts] = useState(state)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const fetchCall =async (id)=>{
        setLoading(true)
        try{
            let call = await deleteData(id)
            SetPosts(call)
        
        }catch(er){
            setError(true)
            console.log(er.message)
        }
        setLoading(false)
    }
    return {loading,error,posts,fetchCall}
}

export default useDElayed

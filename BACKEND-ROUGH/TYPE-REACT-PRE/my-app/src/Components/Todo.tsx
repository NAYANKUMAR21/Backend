import React, { useState } from 'react'
type todo = {
    id:number;
    status:boolean,
    title:string;
}

const Todo = () => {
    const [text,setText]  = useState("")
    const [store,setStore] = useState<todo[]>([])
    const handleClick = ()=>{
        setStore([...store,{id:Math.random(),
            status:false,
            title:text}])
    }
  return (
    <div>
        <input type="text" value={text} placeholder='Enter TODO' onChange={(e)=>{setText(e.target.value)}} />
        <button onClick={handleClick}>ADD TODO</button>
        <div>
        {
                store?.map((es)=>{
                    return (
                        <div key={es.id}>
                            <div>{es.title}-{es.status? "Done":"Not Done"}</div>
                        </div>
                    )
                })
        }
        </div>
    </div>
  )
}

export default Todo

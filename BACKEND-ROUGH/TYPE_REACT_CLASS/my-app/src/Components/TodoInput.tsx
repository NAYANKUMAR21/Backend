
import React, { ChangeEvent, FormEvent, useState } from 'react'
type TodoInputProps = {
    addTodo:(content:string)=>void // or Function
}

const TodoInput = (props:TodoInputProps) => {
    const {addTodo} = props
    const [content,setContent] = useState<string>("")

    const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{
        setContent(e.target.value)
    }


    const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        addTodo(content)
    }

  return (
    <div>
      <h1>TodoInput</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Value' onChange={handleChange} />
        <button type="submit">ADD</button>
      </form>
    </div>
  )
}

export default TodoInput

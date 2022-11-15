import React, { useState } from 'react'
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import {  FaTrashAlt } from 'react-icons/fa';
import {TiTick} from "react-icons/ti"
import {MdOutlineRemoveDone} from "react-icons/md"
type todo = {
    id:number;
    content:string;
    status:boolean;
}
const Todo = () => {
    const [todo,setTodo] = useState<todo[]>([])
    console.log(todo)
    const addTodo = (content:string)=>{
        setTodo([
            ...todo,{
                id:Math.random(),
                status:false,
                content:content
            }
        ])
    }

    const toggleTodo = (id:number)=>{
        let updatedTodo = todo.map((es)=>{
            if(es.id===id){
                es.status = !es.status
            }
            return es
        })
        setTodo(updatedTodo)

    }
    const removeTodo = (id:number)=>{
        let filtered = todo.filter((es)=> {
            return es.id!==id
        })
        setTodo(filtered)
    }
  return (
    <div>
      <h1>-:Todo APP:-</h1>
      <TodoInput addTodo={addTodo}/>
    {
        todo?.map((item)=>{
            return (
                <>
                <TodoItem  {...item} toggleTodo={toggleTodo} completedIcon={<TiTick/>}   inCompleteIcon={<MdOutlineRemoveDone/>} deleteIcon={ <FaTrashAlt onClick={()=>removeTodo(item.id)}/>}/>    
                </>
            )
        })
    }
     
    </div>
  )
}

export default Todo
 
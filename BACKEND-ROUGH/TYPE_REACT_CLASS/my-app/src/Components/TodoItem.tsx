
//removeTodo:(id:number)=>void; or removeTodo:Function
type TodoItemProps = {
    id:number;
    content:string;
    status:boolean;
    toggleTodo:Function;
    completedIcon:any;
    inCompleteIcon:any;
    deleteIcon:any;
}
const TodoItem = (props:TodoItemProps) => {
    const {id,content,status,toggleTodo,completedIcon,inCompleteIcon,deleteIcon} = props

  return (
    <div >
        <span key={id} onClick={()=>toggleTodo(id)} >
        <h1>{content} - {status ? inCompleteIcon : completedIcon }</h1>
        </span>
           {deleteIcon}
    </div>
  )
}

export default TodoItem

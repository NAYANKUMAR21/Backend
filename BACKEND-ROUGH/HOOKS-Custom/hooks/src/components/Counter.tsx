import useReducerMY from './useReducer'
enum countType {
    INC = "inc",
    DEC = "dec"
}
type StateCheck = {
    count:number
}
type ActionCheck  = {
    type:string,
    payload:number
}   
const reducer = (state:StateCheck,actions:ActionCheck)=>{
    switch(actions.type){
        case countType.INC :{
            return {
                ...state,
                count:state.count  + actions.payload
            }
        }
        case countType.DEC :{
            return {
                ...state,
                count:state.count  - actions.payload
            }
        }
        default:{
            return state
        }
    }
}
const Counter = () => {
    const [state,dispatch]   = useReducerMY(reducer,{count:0})

  return (
    <div>
      <h1>Counter : {state.count}</h1>
      <button onClick={()=>{dispatch({type:countType.DEC,payload:1})}}>-</button>
      <button onClick={()=>{dispatch({type:countType.INC,payload:1})}}>+</button>
    </div>
  )
}

export default Counter

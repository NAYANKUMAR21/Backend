import { useState } from 'react'

const useReducerMY = (reducer,initialState) => {
    const [state,setState] = useState(initialState)
    const dispatch = (action)=>{
      let updatedState = reducer(state,action)
      setState(updatedState)
    }

  return [state,dispatch]
}

export default useReducerMY

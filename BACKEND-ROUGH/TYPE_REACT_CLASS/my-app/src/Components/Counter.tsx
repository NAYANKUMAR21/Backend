import React, { useState } from 'react'

const Counter = () => {
    //what is the type of useState we pass if its only number we say <number>
    const [count,SetCount] = useState<number>(0)


  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={()=>SetCount(count+1)}>ADD</button>
      <button onClick={()=>SetCount(count-1)}>SUBTRACT</button>
    </div>
  )
}

export default Counter

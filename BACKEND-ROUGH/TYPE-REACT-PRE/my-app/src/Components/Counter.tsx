import React from 'react'

const Counter = () => {
    const [num,setNum] =React.useState<number>(1)
  return (
    <div>
        Count :{num}
      <button onClick={()=>setNum(num+1)}>INC</button>
      <button onClick={()=>setNum(num-1)}>DEC</button>
    </div>
  )
}

export default Counter

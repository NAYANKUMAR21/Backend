import React,{memo, useMemo} from "react";

const Child = (props) => {
  const {count,updateCount} = props
  console.log("Child is rendered");
  const number = useMemo(()=>{
    let ans=  0
    for(let i=0;i<100;i++){
      ans+=i
    }
  },[])
  console.timeStamp("t1")
  return (
    <div
      style={{
        display: "inline-block",
        margin: "30px",
        padding: "30px",
        border: "1px solid black",
      }}
    >
      <h1>CHILD:{count}</h1>
      <button onClick={updateCount}>+</button>
    </div>
  );
};

export default memo(Child);

/* 
(prev,next)=>{
  if(prev.count===next.count){          //as a call back instead of using useCallBack
    return true                       //don't render
  }
  return false                        //render all time
})

*/

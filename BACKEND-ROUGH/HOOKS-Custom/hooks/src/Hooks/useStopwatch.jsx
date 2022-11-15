import  { useEffect, useRef, useState } from 'react'

const useStopwatch = (initialState) => {
    const [time,SetTime] = useState(initialState)
    let updated = useRef();
    const start = ()=>{
        if(!updated.current){

            updated.current  = setInterval(()=>{
                SetTime(prev=>prev+1)
            },1000)
        }
        
    }
    const stop = ()=>{
        clearInterval(updated.current)
        updated.current =null
    }
    const Reset = ()=>{
            clearInterval(updated.current)
            updated.current = null
            SetTime(0)
    }
    useEffect(()=>{
        return Reset
    },[])
  return {time,start,stop,Reset}
}

export default useStopwatch

import useStopwatch from '../Hooks/useStopwatch'

const StopWatch = () => {
    const {time,start,stop,Reset} = useStopwatch(0)
    console.log("SW1")
  return (
    <div>
      <h1>SW1 :{time}</h1>
      <button onClick={start}>START</button>
      <button onClick={stop}>STOP</button>
      <button onClick={Reset}>RESET</button>
    </div>
  )
}

export default StopWatch

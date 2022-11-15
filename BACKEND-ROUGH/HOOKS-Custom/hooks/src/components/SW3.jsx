import useStopwatch from '../Hooks/useStopwatch'

const SW3 = () => {
    const {time,start,stop,Reset} = useStopwatch(0)
    console.log("SW3")
    return (
      <div>
        <h1>SW3 :{time}</h1>
        <button onClick={start}>START</button>
        <button onClick={stop}>STOP</button>
        <button onClick={Reset}>RESET</button>
      </div>
    )
}

export default SW3

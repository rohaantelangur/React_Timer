import React, { useEffect, useState } from 'react'
const Timer = (props) => {
    const [timer, setimer] = useState(props.starttime)
    let pau=0;
    let id;
    useEffect(() => {
    id = setInterval(()=>{
        if(timer >= props.endtime){
            clearInterval(id);
            // setimer(10)
        }
        else{
            setimer((r)=>r+1)
        }
      },500);
      
      return () =>{
        clearInterval(id)
      }
    },[timer])

    const start=()=>{
      setimer(pau+1)
      
    }

    const pause=()=>{
      pau=timer
      clearInterval(id)      
    }

    const reset=()=>{
      clearInterval(id)
      setimer(props.starttime)
      
    }

    return (
      <>
    <div>Timer : {timer}</div>
    <button onClick={start}>Start</button>
    <button onClick={pause}>Pause</button>
    <button onClick={reset}>Reset</button>
    
      </>
  )
}
export default Timer
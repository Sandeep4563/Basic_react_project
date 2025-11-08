import React, { useEffect, useState } from 'react'

const Timer = ({setisOver}) => {

    const[time,setTime]=useState(15)
    const [display,setDisplay]=useState()


    useEffect(()=>{
       let intervalId=setInterval(()=>{
       setTime(prev=>{
        if(prev==0){
         clearInterval(intervalId);
        
         return 0;
        }
        return prev-1
    })
        },1000)
    },[])

    useEffect(()=>{
        if(time === 0){
             setisOver(true); 
        }
        let displaytime=(`${Math.floor(time/60).toString().padStart(2,0)}:${Math.floor(time%60).toString().padStart(2,0)}`);
        setDisplay(displaytime)
    },[time])

  return (
    
    <div>
      <h1>Time:{display}</h1>
    </div>
  )
}

export default Timer

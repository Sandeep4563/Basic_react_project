import React, { useState } from 'react'
import Timer from './component/Timer'
import Question from './component/Question'
import Result from './component/Result'
const App = () => {
  const[isOver,setisOver]=useState(false)
   const[score,setscore]=useState(0);
  return (
    <div>
     <Timer setisOver={setisOver}/>
     {
     !isOver?<Question setisOver={setisOver}  setscore={setscore}/>:<Result score={score}/>
    }
    </div>

     
  )
}

export default App

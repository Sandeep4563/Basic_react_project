import { use, useState } from 'react'


import './App.css'

import Button from "./component/Button"
import Search from './component/Search';
import Value from './component/Value';


function App() {
  
  
const [count,setCount]=useState(0)

function increment(){
 setCount(count+1);
}

function Decrement(){
  setCount(count-1);
}

function  reset(){
  setCount(0)
}

  return (
    <>
     <h1>Counter App</h1>
     <p>Count: {count}</p>

    <div className="buttons">
     {/* <button onClick={increment}>➕ Increment</button>
     <button onClick={Decrement}>➖ Decrement</button>
     <button onClick={reset}>🔃 Reset</button> */}
    <Button tit="Increment" func={increment}/>
    <Button tit="Decrement" func={Decrement}/>
    <Button tit="Reset" func={reset}/>

    </div>
   <Search/>
   <Value/>
    </>
  )
}


    



export default App

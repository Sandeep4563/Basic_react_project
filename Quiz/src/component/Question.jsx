import React, { useEffect, useState } from 'react'
import QuesApi from './QuesApi.json'
const Question = ({setisOver,setscore}) => {
  const[currque,setques]=useState(0)
 


  const handleOptionClick=(selected)=>{
   if(selected === QuesApi[currque].answer){
    setscore(prev=>prev+1);
   }
   if(currque < QuesApi.length-1){
    setques(currque+1);
   }else{
   
    setisOver(true);
   }
  }

 

  return (

    
    <div>
    <h1 className='text-center'>{QuesApi[currque].question}</h1>

    <div className='flex flex-col gap-4'>
     {
        QuesApi[currque].options.map((ques,index)=>{

            return <button key={index} onClick={()=>(handleOptionClick(ques))}>{ques}</button>
        })
     }
    </div>
    
     </div>
  )
}

export default Question

import React, { useState } from 'react'
import Button from './component/Button'

const App = () => {
  const colors = ['red','green','yellow','orange','tomato','pink']
  const [color,setColor] = useState('purple')

  return (
    <div className='w-dvw m-4'>
      <h1 className='text-center font-bold'>Color Switcher</h1>

      <div className="flex justify-center items-center gap-3 mt-4 ">
        {colors.map((item,index)=> (
          <Button 
            key={index} 
            title={item} 
            onClick={() => setColor(item)} 
          />
        ))}
      </div>

      <div 
        className='h-[200px] w-[300px] border border-black m-auto mt-6 rounded-2xl'
        style={{ backgroundColor: color }}
      />

    </div>
  )
}

export default App

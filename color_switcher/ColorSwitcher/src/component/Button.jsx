import React from 'react'

const Button = ({title,onClick}) => {
   
  return (
    <div>
      <button onClick={onClick} style={{backgroundColor:title}} className='p-1.5 cursor-pointer rounded-[5px]'>{title}</button>
    </div>
  )
}

export default Button

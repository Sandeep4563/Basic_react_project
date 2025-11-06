import React, { useRef, useState } from 'react'

const Value = () => {

    const [data,setData] =useState([]);
    let inputRef=useRef(null)
  
  return (
  <div>
  <input type="text" ref={inputRef} />
  <button onClick={() => setData([...data, inputRef.current.value])}>
    Submit
  </button>
  {data.map((item, index) => (
    <h2 key={index}>{item}</h2>
  ))}
</div>

  )
}

export default Value

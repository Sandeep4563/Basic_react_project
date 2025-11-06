import React from 'react'
import Nav from './component/Nav'
import Card from './component/Card'
import './App.css'
const App = () => {
  return (<>
    <div className='mainContainer'>
      <Nav/>
      <div className='card-component'>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
      </div>
      
    </div>
  </>
  
  )
}
     

export default App

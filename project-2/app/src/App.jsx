import React from 'react'
import Nav from './component/Nav'
import './component/Nav.module.css'
import './App.css'
import Form from './component/Form'
import Para from './component/Para'
import './component/Nav.module.css'
import call from './assets/Service 24_7-pana 1.svg'
const App = () => {
  return (
    <div className='container'>
       <Nav/>


      <div className='main-section'>
        <div className='left-side'>
      <Para/>
      <Form/>
        </div>
     <div className='right-side'>
      <img src={call}/>
     </div>
      
      </div>
    </div>
  )
}
    
       
    

export default App

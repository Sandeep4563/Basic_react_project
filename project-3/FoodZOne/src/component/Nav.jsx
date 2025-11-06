import React from 'react'

const Nav = () => {
 
  return (
    <div>
     <nav className='nav_conatiner'>
         <div className='nav-logo'>
        <img src="\src\image\Foody Zone.svg"/>
        <input type="text" placeholder='Search here...'/>
         </div>
        <ul>
            <a href="#">ALL</a>
            <a href="#">Breakfast</a>
            <a href="#">Lunch</a>
            <a href="#">Dinner</a>
        </ul>
     </nav>
    </div>
  )
}

export default Nav

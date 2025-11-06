import React from 'react'
import styles from './Nav.module.css'
console.log(styles)
import { IoLogoFreebsdDevil } from "react-icons/io";
const Nav = () => {
  return (
    <div>
       <nav className={`contiaer ${styles.nav}`}>
        <div className={styles.logo}>
         <IoLogoFreebsdDevil />
        </div>
        <ul className={styles.navlinks}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </ul>
      </nav>
    </div>
  )
}

export default Nav

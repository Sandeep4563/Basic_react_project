import React from 'react'

import styles from './Nav.module.css'

const Button = ({name,icon,istrue}) => {
  return (
    <div className={styles.btn}>

      <button className={istrue?styles.outline:styles.primary_btn}>{icon}{name}</button>
    </div>
  )
}

export default Button

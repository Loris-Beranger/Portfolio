import React from 'react'
import styles from './buttonMenu.module.scss'

type ButtonMenuProps = {
  isActive: boolean
}

export const ButtonMenu = ({ isActive }: ButtonMenuProps) => {
  return (
    <div className={styles.buttonMenuContainer}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  )
}

import React from 'react'
import styles from './navigation.module.scss'
import { ButtonMenu } from '../navigationStatus/buttonMenu/ButtonMenu'

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.navigationContainer}>
      <p className={styles.name}>Beranger Loris</p>
      <ButtonMenu isActive={false} />
    </nav>
  )
}

import React from 'react'
import styles from './navigationStatus.module.scss'

type NavigationStatusProps = {
  activeLine: number
}

export const NavigationStatus = ({ activeLine }: NavigationStatusProps) => {
  return (
    <div className={styles.navigationStatusContainer}>
      <div
        className={`${styles.line} ${activeLine === 1 ? styles.active : ''}`}
      ></div>
      <div
        className={`${styles.line} ${activeLine === 2 ? styles.active : ''}`}
      ></div>
      <div
        className={`${styles.line} ${activeLine === 3 ? styles.active : ''}`}
      ></div>
      <div
        className={`${styles.line} ${activeLine === 4 ? styles.active : ''}`}
      ></div>
    </div>
  )
}

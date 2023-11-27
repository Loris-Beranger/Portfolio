import React from 'react'
import styles from './separator.module.scss'

export const Separator = () => {
  return (
    <div className={styles.separatorContainer}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  )
}

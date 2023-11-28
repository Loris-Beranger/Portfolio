'use client'

import React from 'react'
import styles from './circles.module.scss'
import { useScroll } from '@/app/hooks/useScroll'

export const Circles = () => {
  const scrollY = useScroll()

  return (
    <div
      className={`${styles.circlesContainer} ${
        scrollY > 1500 ? styles.bottom : ''
      }`}
    >
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
    </div>
  )
}

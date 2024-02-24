'use client'

import { useEffect, useState } from 'react'
import styles from './navigationStatus.module.scss'
import { useScroll } from '@/app/hooks/useScroll'
import useScrollDirectionDetection from '@/app/hooks/useScrollDirection'

export const NavigationStatus = () => {
  const { indexSection } = useScrollDirectionDetection()

  return (
    <div className={styles.navigationStatusContainer}>
      <div
        className={`${styles.line} ${indexSection === 1 ? styles.active : ''}`}
        onClick={() => console.log('test')}
      ></div>
      <div
        className={`${styles.line} ${indexSection === 2 ? styles.active : ''}`}
        onClick={() => console.log('test')}
      ></div>
      <div
        className={`${styles.line} ${indexSection === 3 ? styles.active : ''}`}
        onClick={() => console.log('test')}
      ></div>
      <div
        className={`${styles.line} ${indexSection === 4 ? styles.active : ''}`}
        onClick={() => console.log('test')}
      ></div>
    </div>
  )
}

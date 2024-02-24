'use client'

import styles from './circles.module.scss'
import useScrollDirectionDetection from '@/app/hooks/useScrollDirection'

export const Circles = () => {
  const { indexSection } = useScrollDirectionDetection()
  return (
    <div
      className={`${styles.circlesContainer} ${
        indexSection === 3 ? styles.bottom : ''
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

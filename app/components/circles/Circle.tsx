'use client'

import React from 'react'
import styles from './circles.module.scss'
import { useScroll } from '@/app/hooks/useScroll'

export const Circles = () => {
  const scrollY = useScroll()
  const sectionProjects = document.querySelector('#projects') as HTMLElement
  const projectSectionPosition = sectionProjects?.offsetTop - 48
  return (
    <div
      className={`${styles.circlesContainer} ${
        scrollY > projectSectionPosition ? styles.bottom : ''
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

'use client'

import React, { use, useEffect, useState } from 'react'
import styles from './circles.module.scss'
import { useScroll } from '@/app/hooks/useScroll'

export const Circles = () => {
  const [projectSectionPosition, setProjectSectionPosition] = useState(0)
  const scrollY = useScroll()

  useEffect(() => {
    const sectionProjects = document?.querySelector('#projects') as HTMLElement
    setProjectSectionPosition(sectionProjects?.offsetTop - 48)
  }, [])

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

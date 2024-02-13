'use client'

import React, { use, useEffect, useState } from 'react'
import styles from './circles.module.scss'
import { useScroll } from '@/app/hooks/useScroll'

export const Circles = () => {
  const [positionBottom, setPositionBottom] = useState(false)
  const scrollY = useScroll()

  useEffect(() => {
    const sectionProjects = document?.querySelector('#projects') as HTMLElement
    const sectionProjectTop = sectionProjects?.offsetTop - 48
    const sectionProjectHeight = sectionProjects.getBoundingClientRect().height

    if (
      scrollY > sectionProjectTop &&
      scrollY < sectionProjectTop + sectionProjectHeight
    ) {
      setPositionBottom(true)
    } else {
      setPositionBottom(false)
    }
  }, [scrollY])
  return (
    <div
      className={`${styles.circlesContainer} ${
        positionBottom ? styles.bottom : ''
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

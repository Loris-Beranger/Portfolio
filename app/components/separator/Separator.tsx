'use client'

import React, { useEffect, useRef } from 'react'
import styles from './separator.module.scss'
import { motion, useAnimation, useInView } from 'framer-motion'

export const Separator = () => {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  const animationVariants = {
    hidden: { width: 0 },
    visible: { width: 88 },
  }
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])
  return (
    <div className={styles.separatorContainer}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={animationVariants}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
        className={styles.line}
      ></motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={animationVariants}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
        className={styles.line}
      ></motion.div>
    </div>
  )
}

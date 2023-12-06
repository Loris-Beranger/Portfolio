'use client'

import styles from './projectsSection.module.scss'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Carrousel } from './carrousel/Carrousel'

export const ProjectsSection = () => {
  const controls = useAnimation()
  const ref = useRef<any>(null)
  const inView = useInView(ref, { once: true })

  const animation = {
    hidden: { transform: 'translateY(100px)', opacity: 0 },
    visible: { transform: 'translateY(0)', opacity: 1 },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section id={'projects'} className={styles.projects}>
      <motion.h2
        ref={ref}
        initial={'hidden'}
        animate={controls}
        variants={animation}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
        className={styles.title}
      >
        Projets
      </motion.h2>
      <Carrousel />
    </section>
  )
}

'use client'

import styles from './projectsSection.module.scss'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Carrousel } from './carrousel/Carrousel'
import { Card } from './card/Card'

export const ProjectsSection = () => {
  const controls = useAnimation()
  const ref = useRef<any>(null)
  const inView = useInView(ref)

  const animation = {
    hidden: { transform: 'translateY(100px)', opacity: 0 },
    visible: { transform: 'translateY(0)', opacity: 1 },
  }

  const animation2 = {
    hidden: { transform: 'translateX(-100px)', opacity: 0 },
    visible: { transform: 'translateX(0)', opacity: 1 },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
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

      <div className={styles.projectCardsContainer}>
        <motion.div
          initial={'hidden'}
          animate={controls}
          variants={animation2}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 }}
        >
          <Card
            title={'Jeux'}
            description={`Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups`}
            image={'/img/projects/ex1.webp'}
          />
        </motion.div>
        <motion.div
          initial={'hidden'}
          animate={controls}
          variants={animation2}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.7 }}
        >
          <Card
            title={'Méteo'}
            description={`Application mobile de prévision météo développée en React Native
            ansi que l’api Open Weather`}
            image={'/img/projects/meteo.png'}
          />
        </motion.div>
        <motion.div
          initial={'hidden'}
          animate={controls}
          variants={animation2}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 1 }}
        >
          <Card
            title={'Colors'}
            description={`Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic`}
            image={'/img/projects/ex2.png'}
          />
        </motion.div>
      </div>
    </section>
  )
}

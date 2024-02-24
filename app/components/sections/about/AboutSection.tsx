'use client'

import React, { useEffect, useRef } from 'react'
import styles from './aboutSection.module.scss'
import { Separator } from '../../separator/Separator'
import { Skills } from './skills/Skills'
import { motion, useAnimation, useInView } from 'framer-motion'

export const AboutSection = ({ controlSection, animationSection }: any) => {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  const animationVariants1 = {
    hidden: { transform: 'translateX(-100%)', opacity: 0 },
    visible: { transform: 'translateX(0)', opacity: 1 },
  }

  const animationVariants2 = {
    hidden: { transform: 'translateX(-100%)', opacity: 0 },
    visible: { transform: 'translateX(0)', opacity: 1 },
  }

  const animationVariants3 = {
    hidden: { transform: 'translateX(-100%)', opacity: 0 },
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
    <motion.section
      id="about"
      className={styles.about}
      initial="hidden"
      animate={controlSection}
      variants={animationSection}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Skills />
      <div className={styles.contentContainer}>
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={controlSection}
          variants={animationVariants1}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
          className={styles.title}
        >
          A propos
        </motion.h1>
        <Separator />
        <motion.h2
          initial="hidden"
          animate={controlSection}
          variants={animationVariants2}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
          className={styles.subtitle}
        >
          Développeur web
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={controlSection}
          variants={animationVariants3}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
          className={styles.paragraph}
        >
          <span>Je suis Loris Beranger, développeur web basé en France.</span>
          <span>
            Spécialisé dans le <em>front-end</em> je développe principalement
            avec le framework <em>React</em> et <em>React Native</em> car j’aime
            également beaucoup le développement d’application <em>mobile</em>.
          </span>
          <span>
            Explorez mon portfolio pour voir les différents <em>projets</em> que
            j’ai pu réaliser
          </span>
        </motion.p>
      </div>
    </motion.section>
  )
}

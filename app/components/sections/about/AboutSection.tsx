'use client'

// aboutSection.js
import React, { useEffect, useRef } from 'react'
import styles from './aboutSection.module.scss'
import { Separator } from '../../separator/Separator'
import { Skills } from './skills/Skills'
import { motion, useAnimation, useInView } from 'framer-motion'
import { P, Title } from '../../common/Typography'

export const AboutSection = () => {
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

  const MotionTitle = motion(Title)

  return (
    <section id="about" className={styles.about}>
      <Skills />
      <div className={styles.contentContainer}>
        <MotionTitle
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={animationVariants1}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
          className={styles.title}
        >
          A propos
        </MotionTitle>
        <Separator />
        <motion.h2
          initial="hidden"
          animate={controls}
          variants={animationVariants2}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
          className={styles.subtitle}
        >
          Développeur web
        </motion.h2>
        <P
          initial="hidden"
          animate={controls}
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
        </P>
      </div>
    </section>
  )
}

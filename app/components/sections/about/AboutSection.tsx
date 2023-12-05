'use client'

// aboutSection.js
import React, { useEffect, useRef } from 'react'
import styles from './aboutSection.module.scss'
import { Separator } from '../../separator/Separator'
import { Skills } from './skills/Skills'
import { motion, useAnimation, useInView } from 'framer-motion'

export const AboutSection = () => {
  const controls1 = useAnimation()
  const ref1 = useRef<HTMLDivElement>(null)
  const inView1 = useInView(ref1, { once: true })

  const controls2 = useAnimation()
  const ref2 = useRef<HTMLHeadingElement>(null)
  const inView2 = useInView(ref2, { once: true })

  const controls3 = useAnimation()
  const ref3 = useRef<HTMLParagraphElement>(null)
  const inView3 = useInView(ref3, { once: true })

  const animationVariants1 = {
    hidden: { transform: 'translateX(-100%)' },
    visible: { transform: 'translateX(0)' },
  }

  const animationVariants2 = {
    hidden: { transform: 'translateX(-100%)' },
    visible: { transform: 'translateX(0)' },
  }

  const animationVariants3 = {
    hidden: { transform: 'translateX(-100%)' },
    visible: { transform: 'translateX(0)' },
  }

  useEffect(() => {
    if (inView1) {
      controls1.start('visible')
    }
  }, [controls1, inView1])

  useEffect(() => {
    if (inView2) {
      controls2.start('visible')
    }
  }, [controls2, inView2])

  useEffect(() => {
    if (inView3) {
      controls3.start('visible')
    }
  }, [controls3, inView3])

  return (
    <section id="about" className={styles.about}>
      <Skills />
      <div className={styles.contentContainer}>
        <motion.h1
          ref={ref1}
          initial="hidden"
          animate={controls1}
          variants={animationVariants1}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
          className={styles.title}
        >
          A propos
        </motion.h1>
        <Separator />
        <motion.h2
          ref={ref2}
          initial="hidden"
          animate={controls2}
          variants={animationVariants2}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
          className={styles.subtitle}
        >
          Développeur web
        </motion.h2>
        <motion.p
          ref={ref3}
          initial="hidden"
          animate={controls3}
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
    </section>
  )
}

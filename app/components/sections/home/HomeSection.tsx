'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './homeSection.module.scss'
import { Separator } from '../../separator/Separator'
import { motion, useAnimation, useInView } from 'framer-motion'

export const HomeSection = () => {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)
  const [scrollToAbout, setScrollToAbout] = useState(false)

  const animationVariants1 = {
    hidden: { transform: 'translateX(-100%)', opacity: 0 },
    visible: { transform: 'translateX(0)', opacity: 1 },
  }

  const animationVariants2 = {
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
    <section id="home" className={styles.home}>
      <div className={styles.imageContainer}>
        <Image
          src="/profile.jpg"
          width={1980}
          height={1980}
          priority
          alt="Picture of the author"
          className={styles.profilePicture}
        />
      </div>
      <div className={styles.contentContainer}>
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={animationVariants1}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className={styles.title}
        >
          Beranger Loris
        </motion.h1>
        <Separator />
        <motion.h2
          initial="hidden"
          animate={controls}
          variants={animationVariants2}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
          className={styles.subtitle}
        >
          Développeur web
        </motion.h2>
        <motion.input
          initial="hidden"
          animate={controls}
          variants={animationVariants1}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
          className={styles.showMoreButton}
          value="En savoir plus"
          type="button"
          onClick={() => {
            const main = document.querySelector('main')
            const about: HTMLElement | null = document.querySelector('#about')

            main?.scrollTo({
              top: about?.offsetTop,
              behavior: 'smooth',
            })
          }}
        />
      </div>
    </section>
  )
}

'use client'

import React, { memo, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './homeSection.module.scss'
import { Separator } from '../../separator/Separator'
import { motion, useAnimation, useInView } from 'framer-motion'
import ScrollDirectionDetector from '@/app/hooks/test'
import useScrollDetector from '@/app/hooks/test'

const HomeSection = ({ controlSection, animationSection }: any) => {
  /* const controls = useAnimation() */
  const ref = useRef<HTMLDivElement>(null)
  /* const inView = useInView(ref)
  const [scrollToAbout, setScrollToAbout] = useState(false) */

  const animationVariants1 = {
    hidden: { transform: 'translateX(-100%)', opacity: 0 },
    visible: { transform: 'translateX(0)', opacity: 1 },
  }

  const animationVariants2 = {
    hidden: { transform: 'translateX(-100%)', opacity: 0 },
    visible: { transform: 'translateX(0)', opacity: 1 },
  }
  const animationVariants3 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  /* useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView]) */
  console.log(animationSection)

  return (
    <motion.section
      id="home"
      className={styles.home}
      initial="hidden"
      animate={controlSection}
      variants={animationSection}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        className={styles.imageContainer}
        initial="hidden"
        animate={controlSection}
        variants={animationVariants3}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
      >
        <Image
          src="/profile.jpg"
          width={1980}
          height={1980}
          priority
          alt="Picture of the author"
          className={styles.profilePicture}
        />
      </motion.div>
      <div className={styles.contentContainer}>
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={controlSection}
          variants={animationVariants1}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className={styles.title}
        >
          Beranger Loris
        </motion.h1>
        <Separator />
        <motion.h2
          initial="hidden"
          animate={controlSection}
          variants={animationVariants2}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
          className={styles.subtitle}
        >
          Développeur web
        </motion.h2>
        <motion.input
          initial="hidden"
          animate={controlSection}
          variants={animationVariants1}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.6 }}
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
    </motion.section>
  )
}

export default memo(HomeSection)

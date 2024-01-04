'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './homeSection.module.scss'
import { Separator } from '../../separator/Separator'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Title } from '../../common/Typography'
import { useStore } from '@/app/store'

export const HomeSection = () => {
  const controls = useAnimation()
  const { activeSection } = useStore()

  const animationVariants1 = {
    hidden: { transform: 'translateX(-100%)', opacity: 0 },
    visible: { transform: 'translateX(0)', opacity: 1 },
  }

  const animationVariants2 = {
    hidden: { transform: 'translateX(-100%)', opacity: 0 },
    visible: { transform: 'translateX(0)', opacity: 1 },
  }

  useEffect(() => {
    if (activeSection === 'home') {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, activeSection])

  const MotionTitle = motion(Title)

  return (
    <section id="home" className={styles.home}>
      <div className={styles.imageContainer}>
        <Image
          src="/profile.jpg"
          width={200}
          height={200}
          priority
          alt="Picture of the author"
          className={styles.profilePicture}
        />
      </div>
      <div className={styles.contentContainer}>
        <MotionTitle
          initial="hidden"
          animate={controls}
          variants={animationVariants1}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className={styles.title}
        >
          Beranger Loris
        </MotionTitle>
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
      </div>
    </section>
  )
}

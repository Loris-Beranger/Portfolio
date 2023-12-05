'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './homeSection.module.scss'
import { Separator } from '../../separator/Separator'
import { motion, useAnimation, useInView } from 'framer-motion'

export const HomeSection = () => {
  const controls1 = useAnimation()
  const ref1 = useRef<HTMLDivElement>(null)
  const inView1 = useInView(ref1, { once: true })

  const controls2 = useAnimation()
  const ref2 = useRef<HTMLHeadingElement>(null)
  const inView2 = useInView(ref2, { once: true })

  const animationVariants1 = {
    hidden: { transform: 'translateX(-100%)', opacity: 0 },
    visible: { transform: 'translateX(0)', opacity: 1 },
  }

  const animationVariants2 = {
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
        <motion.h1
          ref={ref1}
          initial="hidden"
          animate={controls1}
          variants={animationVariants1}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className={styles.title}
        >
          Beranger Loris
        </motion.h1>
        <Separator />
        <motion.h2
          ref={ref2}
          initial="hidden"
          animate={controls2}
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

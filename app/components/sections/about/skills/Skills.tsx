'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './skills.module.scss'
import { useAnimation, useInView, motion } from 'framer-motion'

export const Skills = () => {
  const [hoverSkill, setHoverSkill] = useState('')
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  const animationVariants1 = {
    hidden: { transform: 'translateX(+150%)', opacity: 0 },
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
    <motion.div className={styles.skillsContainer} ref={ref}>
      <motion.div
        className={styles.screen}
        initial="hidden"
        animate={controls}
        variants={animationVariants1}
        transition={{ duration: 0.3, ease: 'easeOut', delay: 0.4 }}
      >
        <Image
          src="/w1-1.png"
          width={window.screen.width}
          height={window.screen.height}
          alt="Picture of the author"
        />
      </motion.div>
      <motion.div
        className={styles.screen}
        initial="hidden"
        animate={controls}
        variants={animationVariants1}
        transition={{ duration: 0.3, ease: 'easeOut', delay: 0.2 }}
      >
        <Image
          src="/w4.png"
          width={window.screen.width}
          height={window.screen.height}
          alt="Picture of the author"
        />
      </motion.div>
      <motion.div
        className={styles.screen}
        initial="hidden"
        animate={controls}
        variants={animationVariants1}
        transition={{ duration: 0.3, ease: 'easeOut', delay: 0.3 }}
      >
        <Image
          src="/w4-1.png"
          width={window.screen.width}
          height={window.screen.height}
          alt="Picture of the author"
        />
      </motion.div>
      <motion.div
        className={styles.badgeContainer}
        initial="hidden"
        animate={controls}
        variants={animationVariants1}
        transition={{ duration: 0.3, ease: 'easeOut', delay: 0.5 }}
      >
        <h6
          className={`${styles.badgeTitle} ${
            hoverSkill === '' ? styles.hide : ''
          }`}
        >
          {hoverSkill}
        </h6>
        <div
          className={styles.badge}
          onMouseEnter={() => setHoverSkill('Typescript')}
          onMouseLeave={() => setHoverSkill('')}
        >
          <Image
            src="/img/skills/skill1.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div
          className={styles.badge}
          onMouseEnter={() => setHoverSkill('React')}
          onMouseLeave={() => setHoverSkill('')}
        >
          <Image
            src="/img/skills/skill2.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div
          className={styles.badge}
          onMouseEnter={() => setHoverSkill('React Native')}
          onMouseLeave={() => setHoverSkill('')}
        >
          <Image
            src="/img/skills/skill3.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div
          className={styles.badge}
          onMouseEnter={() => setHoverSkill('Electron')}
          onMouseLeave={() => setHoverSkill('')}
        >
          <Image
            src="/img/skills/skill4.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div
          className={styles.badge}
          onMouseEnter={() => setHoverSkill('Next JS')}
          onMouseLeave={() => setHoverSkill('')}
        >
          <Image
            src="/img/skills/skill5.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div
          className={styles.badge}
          onMouseEnter={() => setHoverSkill('Node JS')}
          onMouseLeave={() => setHoverSkill('')}
        >
          <Image
            src="/img/skills/skill6.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div
          className={styles.badge}
          onMouseEnter={() => setHoverSkill('SQL')}
          onMouseLeave={() => setHoverSkill('')}
        >
          <Image
            src="/img/skills/skill7.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div
          className={styles.badge}
          onMouseEnter={() => setHoverSkill('SCSS')}
          onMouseLeave={() => setHoverSkill('')}
        >
          <Image
            src="/img/skills/skill8.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div
          className={styles.badge}
          onMouseEnter={() => setHoverSkill('PHP')}
          onMouseLeave={() => setHoverSkill('')}
        >
          <Image
            src="/img/skills/skill9.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

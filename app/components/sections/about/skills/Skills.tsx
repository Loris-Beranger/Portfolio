'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import styles from './skills.module.scss'

export const Skills = () => {
  const [hoverSkill, setHoverSkill] = useState('')
  return (
    <div className={styles.skillsContainer}>
      <Image
        src="/w1-1.png"
        width={1920}
        height={1080}
        alt="Picture of the author"
        className={styles.screen}
      />
      <Image
        src="/w4.png"
        width={1920}
        height={1080}
        alt="Picture of the author"
        className={styles.screen}
      />
      <Image
        src="/w4-1.png"
        width={1920}
        height={1080}
        alt="Picture of the author"
        className={styles.screen}
      />
      <div className={styles.badgeContainer}>
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
            width={1920}
            height={1080}
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
            width={1920}
            height={1080}
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
            width={1920}
            height={1080}
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
            width={1920}
            height={1080}
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
            width={1920}
            height={1080}
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
            width={1920}
            height={1080}
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
            width={1920}
            height={1080}
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
            width={1920}
            height={1080}
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
            width={1920}
            height={1080}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  )
}

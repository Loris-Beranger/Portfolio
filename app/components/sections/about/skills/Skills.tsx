import React from 'react'
import Image from 'next/image'
import styles from './skills.module.scss'

export const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <Image
        src="/w1-1.png"
        width={160}
        height={115}
        alt="Picture of the author"
        className={styles.screen}
      />
      <Image
        src="/w2-1.png"
        width={160}
        height={90}
        alt="Picture of the author"
        className={styles.screen}
      />
      <Image
        src="/w3-1.png"
        width={130}
        height={140}
        alt="Picture of the author"
        className={styles.screen}
      />
      <div className={styles.badgeContainer}>
        <div className={styles.badge}>
          <Image
            src="/img/skills/skill1.png"
            width={15}
            height={15}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.badge}>
          <Image
            src="/img/skills/skill2.png"
            width={15}
            height={15}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.badge}>
          <Image
            src="/img/skills/skill3.png"
            width={15}
            height={15}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.badge}>
          <Image
            src="/img/skills/skill4.png"
            width={15}
            height={15}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.badge}>
          <Image
            src="/img/skills/skill5.png"
            width={15}
            height={15}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.badge}>
          <Image
            src="/img/skills/skill6.png"
            width={15}
            height={15}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.badge}>
          <Image
            src="/img/skills/skill7.png"
            width={15}
            height={15}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.badge}>
          <Image
            src="/img/skills/skill8.png"
            width={15}
            height={15}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.badge}>
          <Image
            src="/img/skills/skill9.png"
            width={15}
            height={15}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  )
}

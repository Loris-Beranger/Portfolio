import React from 'react'
import Image from 'next/image'
import styles from './homeSection.module.scss'
import { Separator } from '../../separator/Separator'

export const HomeSection = () => {
  return (
    <section className={styles.home}>
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
        <h1 className={styles.title}>Beranger Loris</h1>
        <Separator />
        <h2 className={styles.subtitle}>Développeur web</h2>
      </div>
    </section>
  )
}

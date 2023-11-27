import React from 'react'
import Image from 'next/image'
import styles from './projectsSection.module.scss'
import { Carrousel } from './carrousel/Carrousel'

export const ProjectsSection = () => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>Projets</h2>
      <Carrousel />
    </section>
  )
}

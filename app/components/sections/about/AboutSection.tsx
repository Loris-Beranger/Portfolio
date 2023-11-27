import React from 'react'
import styles from './aboutSection.module.scss'
import { Separator } from '../../separator/Separator'
import { Skills } from './skills/Skills'

export const AboutSection = () => {
  return (
    <section className={styles.about}>
      <Skills />
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>A propos</h1>
        <Separator />
        <h2 className={styles.subtitle}>Développeur web</h2>
        <p className={styles.paragraph}>
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
        </p>
      </div>
    </section>
  )
}

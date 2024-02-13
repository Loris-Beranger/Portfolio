import { useEffect, useRef } from 'react'
import styles from './card.module.scss'
import { useAnimation, useInView, motion } from 'framer-motion'
import Image from 'next/image'

type CardProps = {
  title: string
  description: string
  image: string
}

export const Card = ({ title, description, image }: CardProps) => {
  const controls = useAnimation()
  const ref = useRef<any>(null)
  const inView = useInView(ref)

  const animation = {
    hidden: { transform: 'translateY(100px)', opacity: 0 },
    visible: { transform: 'translateY(0)', opacity: 1 },
  }
  const animation2 = {
    hidden: { transform: 'translateX(-100px)', opacity: 0 },
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
    <div className={styles.cardContainer}>
      <motion.div
        ref={ref}
        initial={'hidden'}
        animate={controls}
        variants={animation}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
        className={styles.imageContainer}
      >
        <Image
          src={image}
          width={200}
          height={200}
          alt="Picture of the author"
          className={styles.backgroundImage}
        />
        <div className={styles.textContainer}>
          <motion.h5
            initial={'hidden'}
            animate={controls}
            variants={animation2}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
            className={styles.title}
          >
            {title}
          </motion.h5>
          <motion.p
            initial={'hidden'}
            animate={controls}
            variants={animation2}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
            className={styles.description}
          >
            {description}
          </motion.p>
        </div>
        <motion.ul
          initial={'hidden'}
          animate={controls}
          variants={animation2}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
          className={styles.tagList}
        >
          <li className={styles.tag}>Open Weather Api</li>
          <li className={styles.tag}>React Native</li>
        </motion.ul>
      </motion.div>
    </div>
  )
}

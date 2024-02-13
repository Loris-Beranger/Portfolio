'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './carrousel.module.scss'
import { Indicator } from './indicator/Indicator'
import Image from 'next/image'
import { useAnimation, useInView, motion } from 'framer-motion'

export const Carrousel = () => {
  const [index, setIndex] = useState(1)
  const images = ['meteo.png', 'meteo2.png', 'meteo.png']

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

  useEffect(() => {
    if (index > images.length) {
      setIndex(1)
    }
    if (index < 1) {
      setIndex(images.length)
    }
  }, [index])

  return (
    <div className={styles.carrouselContainer}>
      <div className={styles.carrousel}>
        <motion.button
          initial={'hidden'}
          animate={controls}
          variants={animation}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.6 }}
          className={styles.buttonLeft}
          onClick={() => setIndex((prev) => prev - 1)}
        >
          <svg
            width="16"
            height="49"
            viewBox="0 0 16 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="24.2488"
              width="28"
              height="2"
              rx="1"
              transform="rotate(-60 0 24.2488)"
              fill="#D9D9D9"
              fillOpacity="0.8"
            />
            <path
              d="M0.866418 23.5002C1.34471 23.224 1.9563 23.3879 2.23244 23.8662L15.2324 46.3829C15.5086 46.8612 15.3447 47.4728 14.8664 47.7489C14.3881 48.025 13.7765 47.8612 13.5004 47.3829L0.500392 24.8662C0.22425 24.3879 0.388125 23.7763 0.866418 23.5002Z"
              fill="#D9D9D9"
              fillOpacity="0.8"
            />
          </svg>
        </motion.button>
        <motion.div
          ref={ref}
          initial={'hidden'}
          animate={controls}
          variants={animation}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
          className={styles.imageContainer}
        >
          <Image
            src={`/img/projects/${images[index - 1]}`}
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
              Météo
            </motion.h5>
            <motion.p
              initial={'hidden'}
              animate={controls}
              variants={animation2}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
              className={styles.description}
            >
              Application mobile de prévision météo développée en React Native
              ansi que l’api Open Weather{' '}
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
        <motion.button
          initial={'hidden'}
          animate={controls}
          variants={animation}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.6 }}
          className={styles.buttonRight}
          onClick={() => setIndex((prev) => prev + 1)}
        >
          <svg
            width="16"
            height="49"
            viewBox="0 0 16 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="15.7324"
              y="23.9998"
              width="28"
              height="2"
              rx="1"
              transform="rotate(120 15.7324 23.9998)"
              fill="#D9D9D9"
              fillOpacity="0.8"
            />
            <path
              d="M14.866 24.7483C14.3877 25.0245 13.7761 24.8606 13.5 24.3823L0.499979 1.86566C0.223836 1.38737 0.387711 0.775779 0.866004 0.499636C1.3443 0.223494 1.95589 0.387369 2.23203 0.865662L15.232 23.3823C15.5082 23.8606 15.3443 24.4722 14.866 24.7483Z"
              fill="#D9D9D9"
              fillOpacity="0.8"
            />
          </svg>
        </motion.button>
      </div>
      <Indicator numberImages={3} index={index} setIndex={setIndex} />
    </div>
  )
}

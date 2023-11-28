'use client'

import { useEffect, useState } from 'react'
import styles from './carrousel.module.scss'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { Indicator } from './indicator/Indicator'

export const Carrousel = () => {
  const [index, setIndex] = useState(1)
  const images = ['meteo.png', 'meteo2.png', 'meteo.png']

  useEffect(() => {
    if (index > images.length) {
      setIndex(1)
    }
    if (index < 1) {
      setIndex(images.length)
    }
  }, [index])

  return (
    <section className={styles.carrouselContainer}>
      <div className={styles.carrousel}>
        <button className={styles.buttonLeft}>
          <BsChevronCompactLeft
            size={40}
            onClick={() => setIndex((prev) => prev - 1)}
          />
        </button>
        <div
          className={styles.imageContainer}
          style={{
            backgroundImage: `url(/img/projects/${images[index - 1]})`,
          }}
        ></div>
        <button className={styles.buttonRight}>
          <BsChevronCompactRight
            size={40}
            onClick={() => setIndex((prev) => prev + 1)}
          />
        </button>
      </div>
      <Indicator numberImages={3} index={index} setIndex={setIndex} />
    </section>
  )
}

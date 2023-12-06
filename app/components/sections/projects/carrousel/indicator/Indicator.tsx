import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './indicator.module.scss'
import { useAnimation, useInView, motion } from 'framer-motion'

type IndicatorProps = {
  numberImages: number
  index: number
  setIndex: (index: number) => void
}

export const Indicator = ({
  numberImages,
  index,
  setIndex,
}: IndicatorProps) => {
  const controls = useAnimation()
  const ref = useRef<any>(null)
  const inView = useInView(ref, { once: true })

  const animation = {
    hidden: { transform: 'translateY(-100px)', opacity: 0 },
    visible: { transform: 'translateY(0)', opacity: 1 },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <div className={styles.indicatorContainer}>
      {[...Array(numberImages)].map((_, i) => (
        <motion.div
          key={i}
          ref={ref}
          initial={'hidden'}
          animate={controls}
          variants={animation}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.8 + i * 0.1 }}
          className={`${styles.indicator} ${
            index === i + 1 ? styles.active : ''
          }`}
          onClick={() => setIndex(i + 1)}
        ></motion.div>
      ))}
    </div>
  )
}

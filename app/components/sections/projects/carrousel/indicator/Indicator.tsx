import React from 'react'
import Image from 'next/image'
import styles from './indicator.module.scss'

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
  return (
    <div className={styles.indicatorContainer}>
      {[...Array(numberImages)].map((_, i) => (
        <div
          className={`${styles.indicator} ${
            index === i + 1 ? styles.active : ''
          }`}
          onClick={() => setIndex(i + 1)}
        ></div>
      ))}
    </div>
  )
}

import React from 'react'
import styles from './circles.module.scss'

export const Circles = () => {
  return (
    <div className={styles.circlesContainer}>
      <svg
        width="550"
        height="550"
        viewBox="0 0 550 550"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="275" cy="275" r="275" fill="black" fill-opacity="0.15" />
        <ellipse
          cx="276.571"
          cy="275"
          rx="235.714"
          ry="235.714"
          fill="black"
          fill-opacity="0.16"
        />
        <ellipse
          cx="284.821"
          cy="275"
          rx="196.429"
          ry="196.429"
          fill="black"
          fill-opacity="0.17"
        />
        <circle
          cx="284.821"
          cy="279.321"
          r="157.143"
          fill="black"
          fill-opacity="0.18"
        />
        <circle
          cx="284.822"
          cy="276.571"
          r="117.857"
          fill="black"
          fill-opacity="0.2"
        />
      </svg>
    </div>
  )
}

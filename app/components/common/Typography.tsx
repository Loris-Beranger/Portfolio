'use client'

import React, { Ref, forwardRef, useEffect } from 'react'
import styles from './typography.module.scss'
import { motion, useAnimation, useInView } from 'framer-motion'

type TitleProps = {
  children: React.ReactNode
  className?: string
}

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ children, className }, ref: any) => {
    return (
      <h1 ref={ref} className={`${styles.title} ${className || ''}`}>
        {children}
      </h1>
    )
  }
)

Title.displayName = 'Title'

export const P = ({ children, className, rest }: any) => {
  return (
    <motion.p
      className={`${styles.paragraph} ${className ? className : ''}`}
      {...rest}
    >
      {children}
    </motion.p>
  )
}

'use client'

import styles from './page.module.scss'
import { Circles } from './components/circles/Circle'
import { Separator } from './components/separator/Separator'
import { AboutSection } from './components/sections/about/AboutSection'
import { ProjectsSection } from './components/sections/projects/ProjectsSection'
import { ContactSection } from './components/sections/contact/ContactSection'
import ScrollDetector from './hooks/test'
import { motion, useAnimation } from 'framer-motion'
import { memo, useEffect, useState } from 'react'
import useScrollDirectionDetection from './hooks/useScrollDirection'
import HomeSection from './components/sections/home/HomeSection'
const Home = () => {
  /*  const controls1 = useAnimation()
  const controls2 = useAnimation()
  const controls3 = useAnimation()
  const controls4 = useAnimation() */

  const [animate1, setAnimate1] = useState('hidden')
  const [animate2, setAnimate2] = useState('hidden')
  const [animate3, setAnimate3] = useState('hidden')
  const [animate4, setAnimate4] = useState('hidden')

  const { indexSection, prevIndexSection } = useScrollDirectionDetection()

  const animation = {
    hidden: { transform: 'translateY(400px)', opacity: 0 },
    visible: { transform: 'translateY(0px)', opacity: 1 },
  }
  const animation2 = {
    hidden: { transform: 'translateY(-400px)', opacity: 0 },
    visible: { transform: 'translateY(0px)', opacity: 1 },
  }

  useEffect(() => {
    if (indexSection === 1) {
      setAnimate1('visible')
      setAnimate2('hidden')
    }
    if (indexSection === 2) {
      setAnimate1('hidden')
      setAnimate2('visible')
      setAnimate3('hidden')
    }
    if (indexSection === 3) {
      setAnimate2('hidden')
      setAnimate3('visible')
      setAnimate4('hidden')
    }
    if (indexSection === 4) {
      setAnimate3('hidden')
      setAnimate4('visible')
    }
  }, [indexSection])
  console.log('animate1', animate1)

  return (
    <main className={styles.container}>
      {indexSection}
      <Circles />
      <HomeSection
        controlSection={animate1}
        animationSection={
          prevIndexSection > indexSection ? animation : animation2
        }
      />
      <AboutSection
        controlSection={animate2}
        animationSection={
          prevIndexSection > indexSection ? animation : animation2
        }
      />
      <ProjectsSection
        controlSection={animate3}
        animationSection={
          prevIndexSection > indexSection ? animation : animation2
        }
      />
      <ContactSection
        controlSection={animate4}
        animationSection={
          prevIndexSection > indexSection ? animation : animation2
        }
      />
    </main>
  )
}

export default memo(Home)

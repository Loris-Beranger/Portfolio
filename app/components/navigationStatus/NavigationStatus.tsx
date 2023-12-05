'use client'

import { useEffect, useState } from 'react'
import styles from './navigationStatus.module.scss'
import { useScroll } from '@/app/hooks/useScroll'

export const NavigationStatus = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [sectionScroll, setSectionScroll] = useState<any>({
    home: [0, 0],
    about: [0, 0],
    projects: [0, 0],
    contact: [0, 0],
  })
  const scrollY = useScroll()

  useEffect(() => {
    const firstSection = document.querySelector('#home') as HTMLElement
    document.querySelectorAll('main section').forEach((section: any) => {
      setSectionScroll((prevSectionScroll: any) => ({
        ...prevSectionScroll,
        [section.id]: [
          section.offsetTop - firstSection.offsetTop,
          section.offsetTop + section.offsetHeight - firstSection.offsetTop,
        ],
      }))
    })
  }, [])

  const scrollTo = (position: number) => {
    const main = document.querySelector('main')
    main?.scrollTo({
      top: position,
      behavior: 'smooth',
    })
  }

  const getSection = (scroll: any) => {
    let section = ''
    Object.keys(sectionScroll).forEach((key) => {
      if (scroll >= sectionScroll[key][0] && scroll < sectionScroll[key][1]) {
        section = key
      }
    })

    return section
  }

  useEffect(() => {
    if (scrollY > 0) {
      setActiveSection(getSection(scrollY))
    }
  }, [scrollY])

  return (
    <div className={styles.navigationStatusContainer}>
      <div
        className={`${styles.line} ${
          activeSection === 'home' ? styles.active : ''
        }`}
        onClick={() => scrollTo(sectionScroll.home[0])}
      ></div>
      <div
        className={`${styles.line} ${
          activeSection === 'about' ? styles.active : ''
        }`}
        onClick={() => scrollTo(sectionScroll.about[0])}
      ></div>
      <div
        className={`${styles.line} ${
          activeSection === 'projects' ? styles.active : ''
        }`}
        onClick={() => scrollTo(sectionScroll.projects[0])}
      ></div>
      <div
        className={`${styles.line} ${
          activeSection === 'contact' ? styles.active : ''
        }`}
        onClick={() => scrollTo(sectionScroll.contact[0])}
      ></div>
    </div>
  )
}

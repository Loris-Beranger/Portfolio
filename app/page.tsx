import Image from 'next/image'
import styles from './page.module.scss'
import { Circles } from './components/circles/Circle'
import { Separator } from './components/separator/Separator'
import { HomeSection } from './components/sections/home/HomeSection'
import { AboutSection } from './components/sections/about/AboutSection'
import { ProjectsSection } from './components/sections/projects/ProjectsSection'

export default function Home() {
  return (
    <main className={styles.container}>
      <Circles />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  )
}

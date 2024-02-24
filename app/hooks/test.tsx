'use client'

import { useEffect, useState } from 'react'

function useScrollDirectionDetection() {
  /* const [indexSection, setIndexSection] = useState(1)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    console.log('effect')

    function handleWheel(event) {
      if (isScrolling) return

      setIsScrolling(true)

      const delta = event.deltaY

      if (delta > 0 && indexSection < 4) {
        setIndexSection((prevIndex) => prevIndex + 1)
      } else if (delta < 0 && indexSection > 1) {
        setIndexSection((prevIndex) => prevIndex - 1)
      }

      setTimeout(() => {
        setIsScrolling(false)
      }, 1000) // Délai d'une seconde pour réinitialiser le verrouillage
    }

    document.addEventListener('wheel', handleWheel)

    return () => {
      document.removeEventListener('wheel', handleWheel)
    }
  }, [indexSection, isScrolling])

  return indexSection */
}

export default useScrollDirectionDetection

import { useState, useRef, useEffect } from 'react'

function useScrollDirectionDetection() {
  const [prevIndexSection, setPrevIndexSection] = useState(0)
  const [indexSection, setIndexSection] = useState(1)
  const [touchStartY, setTouchStartY] = useState(0)
  const isScrolling = useRef(false)

  const handleWheel = (event: any) => {
    console.log('wheel')

    if (isScrolling.current) return

    isScrolling.current = true

    const delta = event.deltaY

    if (delta > 0 && indexSection < 4) {
      setIndexSection(indexSection + 1)
      setPrevIndexSection(indexSection)
    } else if (delta < 0 && indexSection > 1) {
      setIndexSection(indexSection - 1)
      setPrevIndexSection(indexSection)
    }

    setTimeout(() => {
      isScrolling.current = false
    }, 1500)
  }
  const handleTouch = (event: any) => {
    if (!touchStartY) return

    const touchCurrentY = event.touches[0].clientY
    const deltaY = touchCurrentY - touchStartY
    console.log(indexSection)

    if (deltaY > 50 && indexSection > 1) {
      console.log('moins')

      setIndexSection(indexSection - 1)
    } else if (deltaY < -50 && indexSection < 4) {
      console.log('plus')

      setIndexSection(indexSection + 1)
    }

    setTimeout(() => {
      isScrolling.current = false
    }, 1500)
  }

  // Ajouter un écouteur d'événement une seule fois
  useEffect(() => {
    document.addEventListener('wheel', handleWheel)
    document.addEventListener('touchstart', (e) => {
      setTouchStartY(e.touches[0].clientY)
    })
    document.addEventListener('touchmove', handleTouch)

    return () => {
      document.removeEventListener('wheel', handleWheel)
      document.removeEventListener('touchstart', handleWheel)
      document.removeEventListener('touchmove', handleWheel)
    }
  }, [indexSection, touchStartY])

  return { indexSection, prevIndexSection }
}

export default useScrollDirectionDetection

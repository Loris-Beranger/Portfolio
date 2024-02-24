import { useEffect, useState } from 'react'

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isScroll, setIsScroll] = useState(0)

  useEffect(() => {
    const main = document.querySelector('main')

    const onScroll = (event: any) => {
      setScrollY(main?.scrollTop)
      if (main?.scrollTop > scrollY) {
        /* console.log('down') */
      }
      if (main?.scrollTop < scrollY) {
        /* console.log('up') */
      }
    }

    // Vérifiez si le code s'exécute côté client avant d'ajouter l'événement de défilement
    main?.addEventListener('wheel', onScroll)

    // Supprimez l'événement de défilement lors du démontage du composant
    return () => {
      main?.removeEventListener('wheel', onScroll)
    }
  }, []) // Assurez-vous que cet effet s'exécute une seule fois lors du montage du composant

  return scrollY
}

import { useEffect, useState } from 'react'

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const main = document.querySelector('main')

    const onScroll = () => {
      setScrollY(main?.scrollTop || 0)
    }

    // Vérifiez si le code s'exécute côté client avant d'ajouter l'événement de défilement
    main?.addEventListener('scroll', onScroll)

    // Supprimez l'événement de défilement lors du démontage du composant
    return () => {
      main?.removeEventListener('scroll', onScroll)
    }
  }, []) // Assurez-vous que cet effet s'exécute une seule fois lors du montage du composant

  return scrollY
}

import { create } from 'zustand'

type State = {
  activeSection: string
}
type Action = {
  setActiveSection: (activeSection: State['activeSection']) => void
}

export const useStore = create<State & Action>((set) => ({
  activeSection: 'home',
  setActiveSection: (activeSection) =>
    set(() => ({ activeSection: activeSection })),
}))

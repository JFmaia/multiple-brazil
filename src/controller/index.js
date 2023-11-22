import { create } from 'zustand'

const useStore = create((set) => ({
  multi: '',
  increasePopulation: () => set((state) => ({ bears: state.bears = 'legal' })),
  removeAllBears: () => set({ bears: '' }),
}))

export default useStore
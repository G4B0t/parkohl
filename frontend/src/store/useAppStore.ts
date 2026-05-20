import { create } from 'zustand'

type AppUser = {
  id: string
  name: string
}

type AppStore = {
  appName: string
  count: number
  isAuthenticated: boolean
  user: AppUser | null
  increment: () => void
  loginAsDemo: () => void
  logout: () => void
  reset: () => void
}

export const useAppStore = create<AppStore>((set) => ({
  appName: 'PARKOHL',
  count: 0,
  isAuthenticated: false,
  user: null,
  increment: () => set((state) => ({ count: state.count + 1 })),
  loginAsDemo: () =>
    set({
      isAuthenticated: true,
      user: {
        id: 'demo-user',
        name: 'Demo User',
      },
    }),
  logout: () =>
    set({
      isAuthenticated: false,
      user: null,
    }),
  reset: () => set({ count: 0 }),
}))

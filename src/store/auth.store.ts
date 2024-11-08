import { User } from '@/types/user.type'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface AuthState {
   user: User | null
   setCurrentUser: (user: User | null) => void
   resetState: () => void
}

const INITIAL_STATE = {
   user: null,
   isAuthenticated: false
}

const useAuthStore = create<AuthState>()(
   persist(
      set => ({
         user: null,
         setCurrentUser: (user: User | null) => {
            set({ user })
         },
         resetState: () => {
            set({ ...INITIAL_STATE })
         }
      }),
      {
         name: 'auth-storage',
         storage: createJSONStorage(() => localStorage)
      }
   )
)

export default useAuthStore

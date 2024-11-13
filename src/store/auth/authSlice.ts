import { User } from '@/types/user.type'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface AuthState {
   user: Omit<User, 'hashed_password'> | null
}

const initialState: AuthState = {
   user: null
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setUser(
         state,
         action: PayloadAction<Omit<User, 'hashed_password'> | null>
      ) {
         return { ...state, user: action.payload }
      }
   }
})

export const { setUser } = authSlice.actions
export { authSlice }

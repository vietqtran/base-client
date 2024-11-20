import { CauseError } from '@/types/common.type'
import axiosInstance from '@/utils/axios'
import { useRouter } from '@/hooks/useRouter'
import { useState } from 'react'
import { setUser } from '@/store/auth/authSlice'
import { useAppDispatch } from './useRedux'
import { Tokens } from '@/types/auth.type'

export interface SignInCredentials {
   email: string
   password: string
   isRemember: boolean
}

export interface SignUpCredentials {
   username: string
   email: string
   password: string
   confirmPassword: string
}

export const useAuth = () => {
   const dispatch = useAppDispatch()
   const { push } = useRouter()

   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState<CauseError | null>(null)

   const signIn = async ({ email, password }: SignInCredentials) => {
      setIsLoading(true)
      setError(null)
      try {
         const { data } = await axiosInstance.post('/auth/sign-in', {
            email,
            password
         })
         if (data) {
            const { accessToken, refreshToken } = data.data
            localStorage.setItem(
               'tokens',
               JSON.stringify({
                  accessToken,
                  refreshToken
               })
            )
            dispatch(setUser(data?.data?.user))
            setError(null)
            push('/')
         }
      } catch (e: any) {
         const error = e?.response?.data?.cause
            ? e.response.data.cause
            : {
                 field: 'Authentication failed',
                 message: e?.response?.data?.message || 'An error occurred'
              }
         setError(error)
      } finally {
         setIsLoading(false)
      }
   }

   const signUp = async (signUpCredentials: SignUpCredentials) => {
      setIsLoading(true)
      setError(null)
      try {
         const { data } = await axiosInstance.post('/auth/sign-up', {
            ...signUpCredentials
         })
         if (data) {
            push('/auth/sign-in')
            setError(null)
         }
      } catch (e: any) {
         const error = e?.response?.data?.cause
            ? e.response.data.cause
            : {
                 field: 'Authentication failed',
                 message: e?.response?.data?.message || 'An error occurred'
              }
         setError(error)
      } finally {
         setIsLoading(false)
      }
   }

   const refreshToken = async () => {
      try {
         const tokens : Tokens | null = localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens') as string) : null
         if(!tokens) throw new Error('No refresh token available')
         const { data } = await axiosInstance.post('/auth/refresh-token', {
            refreshToken: tokens.refreshToken
         })
         console.log('refresh token data', data);
         if (data) {
            dispatch(setUser(data?.data?.user))
            setError(null)
         }
      } catch (e: any) {
         const error = e?.response?.data?.cause
            ? e.response.data.cause
            : {
                 field: 'Authentication failed',
                 message: e?.response?.data?.message || 'An error occurred'
              }
         setError(error)
      }
   }

   return {
      isLoading,
      error,
      signIn,
      signUp,
      refreshToken
   }
}

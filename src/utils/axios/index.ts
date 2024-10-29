import axios, {
   AxiosError,
   AxiosInstance,
   InternalAxiosRequestConfig
} from 'axios'

interface Tokens {
   accessToken: string
   refreshToken: string
}

interface RetryableRequest extends InternalAxiosRequestConfig {
   _retry?: boolean
}

const authPaths = ['/sign-in', '/sign-up']

const getTokens = (): Tokens | null => {
   if (typeof window !== 'undefined') {
      const tokens = localStorage.getItem('tokens')
      return tokens ? JSON.parse(tokens) : null
   }
   return null
}

const setTokens = (tokens: Tokens): void => {
   if (typeof window !== 'undefined') {
      localStorage.setItem('tokens', JSON.stringify(tokens))
   }
}

export const axiosInstance: AxiosInstance = axios.create({
   baseURL: process.env.NEXT_PUBLIC_BASE_URL!,
   timeout: 30000
})

axiosInstance.interceptors.request.use(
   (config: InternalAxiosRequestConfig) => {
      const tokens = getTokens()
      if (tokens) {
         config.headers.set('Authorization', `Bearer ${tokens.accessToken}`)
      }
      return config
   },
   (error: AxiosError) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
   response => response,
   async (error: AxiosError) => {
      const originalRequest = error.config as RetryableRequest | undefined
      if (error.response?.status === 401 || error.response?.status === 403) {
         if (originalRequest && !originalRequest._retry) {
            originalRequest._retry = true
            try {
               const tokens = getTokens()
               if (!tokens) throw new Error('No refresh token available')
               const response = await axios.post(
                  `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh`,
                  {
                     refreshToken: tokens.refreshToken
                  }
               )
               if (!response.data.success || !response.data.data) {
                  throw new Error('Failed to refresh token')
               }
               const newTokens: Tokens = response.data.data.tokens
               if (!newTokens.accessToken) {
                  throw new Error('Access token is undefined')
               }
               setTokens(newTokens)
               originalRequest.headers['Authorization'] =
                  `Bearer ${newTokens.accessToken}`
               return axiosInstance(originalRequest)
            } catch (refreshError) {
               localStorage.removeItem('auth-storage')
               localStorage.removeItem('tokens')
               if (!authPaths.includes(window.location.pathname)) {
                  window.location.href = '/sign-in'
               }
               return Promise.reject(
                  new Error('Failed to refresh token: ' + refreshError)
               )
            }
         }
      }

      return Promise.reject(error)
   }
)

export default axiosInstance

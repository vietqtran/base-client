'use client'

import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'
import { useTranslations } from 'next-intl'
import CommonButton from '@/components/common/Button'
import Cookies from 'js-cookie'
import { useRouter } from '@/hooks/useRouter'
import { startAuthentication, startRegistration } from '@simplewebauthn/browser'
import axiosInstance from '@/utils/axios'

interface User {
   id: string
   name: string
   email: string
}

export default function Home() {
   const t = useTranslations('')
   const router = useRouter()
   const [isConnected, setIsConnected] = useState(false)
   const [socketError, setSocketError] = useState<string | null>(null)
   useEffect(() => {
      const socket = io('http://localhost:8000', {
         reconnectionAttempts: 5,
         reconnectionDelay: 1000
      })

      socket.on('connect', () => {
         setIsConnected(true)
         setSocketError(null)
         console.log('Connected to WebSocket')
      })

      socket.on('connect_error', error => {
         setSocketError(`Connection error: ${error.message}`)
         setIsConnected(false)
      })

      socket.on('disconnect', () => {
         setIsConnected(false)
         console.log('Disconnected from WebSocket')
      })

      socket.on('userCreated', (user: User) => {
         if (
            'Notification' in window &&
            Notification.permission === 'granted'
         ) {
            new Notification('New User Created', {
               body: `${user.name} has been added`
            })
         }
      })

      if ('Notification' in window) {
         Notification.requestPermission()
      }

      return () => {
         socket.disconnect()
      }
   }, [])

   const registerPasskey = async () => {
      try {
         const passkey = await axiosInstance.get('/passkey/start-registration')
         const response = await startRegistration({
            optionsJSON: passkey.data.data
         })

         const verifyRes = await axiosInstance.post(
            '/passkey/verify-registration',
            {
               response,
               challenge: passkey.data.data.challenge
            }
         )
         console.log(verifyRes.data)
      } catch (error) {
         console.log(error)
      }
   }

   const authenticatePasskey = async () => {
      try {
         const passkey = await axiosInstance.get(
            '/passkey/start-authentication'
         )
         const response = await startAuthentication({
            optionsJSON: passkey.data.data
         })

         const verifyRes = await axiosInstance.post(
            '/passkey/verify-authentication',
            {
               response,
               challenge: passkey.data.data.challenge
            }
         )
         console.log(verifyRes.data)
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <div className="mx-auto max-w-3xl p-4">
         <h1 className="mb-4 text-2xl font-bold">Real-time User Creation</h1>

         <div className="mb-4">
            <span
               className={`inline-block px-2 py-1 rounded ${
                  isConnected
                     ? 'bg-green-500 text-white'
                     : 'bg-red-500 text-white'
               }`}
            >
               {isConnected ? 'Connected' : 'Disconnected'}
            </span>
            <h1>{t('common.current-lang', { name: 'Viet' })}</h1>
            <CommonButton
               title="change lang"
               onClick={() => {
                  const newLocale =
                     Cookies.get('i18next') === 'en' ? 'vi' : 'en'
                  Cookies.set('i18next', newLocale)
                  router.refresh()
               }}
            />
            {socketError && (
               <div className="mt-2 text-sm text-red-500">{socketError}</div>
            )}
         </div>

         <CommonButton title="Add passkey" onClick={registerPasskey} />
         <CommonButton title="Auth passkey" onClick={authenticatePasskey} />
      </div>
   )
}

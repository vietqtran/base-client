'use client'

import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'

interface User {
   id: string
   name: string
   email: string
}

export default function Home() {
   const [isConnected, setIsConnected] = useState(false)
   const [socketError, setSocketError] = useState<string | null>(null)
   const [text, setText] = useState('empty')
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
         console.log('User created:', user)
         setText(JSON.stringify(user, null, 2))
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

            {socketError && (
               <div className="mt-2 text-sm text-red-500">{socketError}</div>
            )}

            {text}
         </div>
      </div>
   )
}

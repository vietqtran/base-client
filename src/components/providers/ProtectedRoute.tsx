'use client'

import { usePathname, useRouter } from '@/hooks/useRouter'
import React, { Suspense, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'

interface ProtectedRouteProps {
   children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
   const { replace } = useRouter()
   const pathName = usePathname()
   const { me } = useAuth()

   useEffect(() => {
      const checkAuth = async () => {
         const data = await me()
         if (!data && !pathName.startsWith('/auth/')) {
            replace('/auth/sign-in')
         } else if (data && pathName.startsWith('/auth/')) {
            replace('/')
         }
      }
      checkAuth()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   return <Suspense fallback={null}>{children}</Suspense>
}

export default ProtectedRoute

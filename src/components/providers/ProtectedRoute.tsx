'use client'

import { useAppSelector } from '@/hooks/useRedux'
import { usePathname, useRouter } from 'next/navigation'
import React, { Suspense, useEffect } from 'react'

interface ProtectedRouteProps {
   children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
   const { user } = useAppSelector(state => state.auth)
   const { replace } = useRouter()
   const pathName = usePathname()
   useEffect(() => {
      if (!user && !pathName.startsWith('/auth/')) {
         return replace('/auth/sign-in')
      }
      if (user && pathName.startsWith('/auth/')) {
         return replace('/')
      }
   }, [])

   return <Suspense fallback={null}>{children}</Suspense>
}

export default ProtectedRoute

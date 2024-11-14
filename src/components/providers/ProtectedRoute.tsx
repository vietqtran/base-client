'use client'

import { useAppSelector } from '@/hooks/useRedux'
import { RootState } from '@/store'
import { usePathname, useRouter } from '@/hooks/useRouter'
import React, { Suspense, useEffect } from 'react'

interface ProtectedRouteProps {
   children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
   const { user } = useAppSelector((state: RootState) => state.auth)
   const { replace } = useRouter()
   const pathName = usePathname()
   useEffect(() => {
      if (!user && !pathName.startsWith('/auth/')) {
         return replace('/auth/sign-in')
      }
      if (user && pathName.startsWith('/auth/')) {
         return replace('/')
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   return <Suspense fallback={null}>{children}</Suspense>
}

export default ProtectedRoute

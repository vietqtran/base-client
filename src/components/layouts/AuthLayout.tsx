'use client'

import { useAppSelector } from '@/hooks/useRedux'
import { RootState } from '@/store'

interface RootLayoutProps {
   children: React.ReactNode
}

export default function AuthLayout({ children }: Readonly<RootLayoutProps>) {
   const { user } = useAppSelector((state: RootState) => state.auth)
   if (user) return null
   return <>{children}</>
}

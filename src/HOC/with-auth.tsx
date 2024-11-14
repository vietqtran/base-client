import React, { useEffect } from 'react'
import { useRouter } from '@/hooks/useRouter'
import { useAppSelector } from '@/hooks/useRedux'
import { RootState } from '@/store'

const withAuth = <P extends object>(
   WrappedComponent: React.ComponentType<P>
) => {
   const ComponentWithAuth = (props: P) => {
      const { user } = useAppSelector((state: RootState) => state.auth)
      const router = useRouter()

      useEffect(() => {
         if (!user) {
            router.replace('/login')
         }
      }, [user, router])

      if (!user) {
         return null
      }

      return <WrappedComponent {...props} />
   }

   return ComponentWithAuth
}

export default withAuth

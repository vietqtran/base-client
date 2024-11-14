import React, { useEffect } from 'react'
import { usePathname, useRouter } from '@/hooks/useRouter'
import { useAppSelector } from '@/hooks/useRedux'
import { RootState } from '@/store'

const withAuth = <P extends object>(
   WrappedComponent: React.ComponentType<P>
) => {
   const ComponentWithAuth = (props: P) => {
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

      return <WrappedComponent {...props} />
   }

   return ComponentWithAuth
}

export default withAuth

'use client'

import React from 'react'
import CommonButton from '@/components/common/Button'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Test = () => {
   const { push } = useRouter()
   const { resolvedTheme, setTheme } = useTheme()
   return (
      <div className="flex gap-2 p-10">
         <h1 className="~text-base/3xl">Viet deptrai</h1>
         <div>
            The current theme is: {resolvedTheme}
            <button onClick={() => setTheme('light')}>Light Mode</button>
            <button onClick={() => setTheme('dark')}>Dark Mode</button>
         </div>
         <CommonButton
            onClick={() => push('/auth/sign-in')}
            title="Logout"
            variant="outline"
            color="secondary"
         />
         <Link href="/auth/sign-in">Logout</Link>
      </div>
   )
}

export default Test

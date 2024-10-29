'use client'

import CommonButton from '@/components/common/Button'
import PlusIcon from '@/components/icons/PlusIcon'
import { useTheme } from 'next-themes'

export default function Home() {
   const { resolvedTheme, setTheme } = useTheme()
   return (
      <div className="p-10 flex gap-2">
         <h1 className="~text-base/3xl">Viet deptrai</h1>
         <div>
            The current theme is: {resolvedTheme}
            <button onClick={() => setTheme('light')}>Light Mode</button>
            <button onClick={() => setTheme('dark')}>Dark Mode</button>
         </div>
         <CommonButton iconLeft={<PlusIcon />} />
         <CommonButton
            iconLeft={<PlusIcon />}
            iconRight={<PlusIcon />}
            variant="outline"
            color="secondary"
         />
      </div>
   )
}

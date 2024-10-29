import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
   variant?: 'solid' | 'outline'
   color?: 'primary' | 'secondary'
   iconLeft?: React.ReactNode
   iconRight?: React.ReactNode
}

const CommonButton = ({
   variant = 'solid',
   color = 'primary',
   iconLeft,
   iconRight
}: Props) => {
   return (
      <div
         className={twMerge(
            'rounded-sm h-8 whitespace-nowrap button w-fit py-1 px-5',
            color === 'primary' && 'button-primary',
            color === 'secondary' && 'button-secondary',
            variant === 'solid' && 'button-solid',
            variant === 'outline' && 'button-outline'
         )}
      >
         <button className="size-full flex items-center gap-1.5 text-sm leading-4">
            {iconLeft}
            <span>Add widgets</span>
            {iconRight}
         </button>
      </div>
   )
}

export default CommonButton

'use client'

import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
   className?: string
}

const SearchInput = ({ className }: Props) => {
   const [value, setValue] = React.useState('')
   return (
      <div className={twMerge('relative', className)}>
         <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <svg
               width="16"
               height="16"
               viewBox="0 0 16 16"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M7.5127 11.8398C10.1015 11.8398 12.2002 9.74118 12.2002 7.15234C12.2002 4.56351 10.1015 2.46484 7.5127 2.46484C4.92386 2.46484 2.8252 4.56351 2.8252 7.15234C2.8252 9.74118 4.92386 11.8398 7.5127 11.8398Z"
                  stroke="#D5DBDB"
                  strokeWidth="1.875"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
               />
               <path
                  d="M15.0127 14.6523L10.7939 10.4336"
                  stroke="#D5DBDB"
                  strokeWidth="1.875"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
               />
            </svg>
         </div>
         {value && (
            <button
               onClick={() => setValue('')}
               className="absolute bg-transparent cursor-pointer right-2 top-1/2 -translate-y-1/2"
            >
               <svg
                  className="size-[14px]"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M2.26172 2.06836L14.2617 14.0684ZM14.2617 2.06836L2.26172 14.0684Z"
                     fill="#D5DBDB"
                  />
                  <path
                     d="M2.26172 2.06836L14.2617 14.0684M14.2617 2.06836L2.26172 14.0684"
                     stroke="#D5DBDB"
                     strokeWidth="1.875"
                  />
               </svg>
            </button>
         )}
         <input
            value={value}
            onChange={e => setValue(e.target.value)}
            className={twMerge(
               'h-7 border-input placeholder:italic border w-full pr-7 pl-9 text-sm outline-none focus:border-primary-blue',
               className
            )}
            placeholder="Search"
         />
      </div>
   )
}

export default SearchInput

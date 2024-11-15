import SearchInput from '@/app/auth/_components/inputs/SearchInput'
import ApplicationIcon from '@/components/icons/ApplicationIcon'
import Image from 'next/image'
import React from 'react'

const HomePage = () => {
   return (
      <>
         <header className="h-10 border-b bg-header flex items-center text-primary-white">
            <div className="px-4 cursor-pointer h-full grid place-items-center">
               <Image
                  className="w-8"
                  src={'/logo-white.svg'}
                  alt="logo"
                  width={100}
                  height={100}
               />
            </div>
            <div className="h-[22px] w-[1px] bg-split"></div>
            <div className="px-4 h-full cursor-pointer flex items-center justify-center gap-2">
               <ApplicationIcon />
               <span className="text-xs">Services</span>
            </div>
            <div className="flex-1">
               <SearchInput className="w-full max-w-[540px]" />
            </div>
            <div className="h-full">
               <div>
                  <div className="px-4 h-full">
                     <span>@vietqtran</span>
                  </div>
                  <div></div>
               </div>
            </div>
         </header>
         <div className="h-[2000px]">Content</div>
      </>
   )
}

export default HomePage

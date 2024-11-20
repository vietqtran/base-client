import SearchInput from '@/app/auth/_components/inputs/SearchInput'
import NotiIcon from '@/components/icons/NotiIcon'
import SettingIcon from '@/components/icons/SettingIcon'
import Image from 'next/image'
import React from 'react'
import ProfileMenu from './ProfileMenu'

const Header = () => {
   return (
      <header className="h-10 gap-3 border-b bg-header flex items-center text-primary-white">
         <div className="h-full flex items-center">
            <div className="px-4 cursor-pointer ">
               <Image
                  className="w-8"
                  src={'/logo-white.svg'}
                  alt="logo"
                  width={100}
                  height={100}
               />
            </div>
            <div className="h-[22px] w-[1px] bg-split"></div>
         </div>
         <div className="flex-1">
            <SearchInput className="w-full max-w-[540px]" />
         </div>
         <div className="h-full flex items-center">
            <div className="h-[22px] w-[1px] bg-split"></div>
            <div className="~px-2/4 flex items-center justify-center">
               <div className="p-2 hover:text-primary-orange cursor-pointer">
                  <NotiIcon />
               </div>
            </div>
            <div className="h-[22px] w-[1px] bg-split"></div>
            <div className="~px-2/4 flex items-center justify-center">
               <div className="p-2 hover:text-primary-orange cursor-pointer">
                  <SettingIcon />
               </div>
            </div>
            <div className="h-[22px] w-[1px] bg-split"></div>
            <ProfileMenu />
         </div>
      </header>
   )
}

export default Header

import SearchInput from '@/app/auth/_components/inputs/SearchInput'
import NotiIcon from '@/components/icons/NotiIcon'
import SettingIcon from '@/components/icons/SettingIcon'
import Image from 'next/image'
import React from 'react'

const HomePage = () => {
   return (
      <header className="h-10 border-b bg-header flex items-center text-primary-white">
         <div className="flex text-primary-orange items-center px-4 cursor-pointer h-full gap-1.5">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="32"
               height="32"
               viewBox="0 0 24 24"
            >
               <path
                  fill="currentColor"
                  d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm0-1h14.769q.23 0 .423-.192t.192-.424V8H4v9.385q0 .23.192.423t.423.192M7.5 16.288l-.689-.688L9.388 13l-2.6-2.6l.713-.688L10.789 13zm5 .212v-1h5v1z"
               />
            </svg>
            <span className="font-bold text-inherit">vietqtran</span>
         </div>
         <div className="h-[22px] w-[1px] bg-split mr-4"></div>
         <div className="flex-1">
            <SearchInput className="w-full max-w-[540px]" />
         </div>
         <div className="h-full pl-4">
            <div className="h-full flex items-center">
               <div className="h-[22px] w-[1px] bg-split"></div>
               <div className="px-4 hover:text-primary-orange cursor-pointer h-full grid place-items-center">
                  <SettingIcon />
               </div>
               <div className="h-[22px] w-[1px] bg-split"></div>
               <div className="px-4 hover:text-primary-orange cursor-pointer h-full grid place-items-center">
                  <NotiIcon />
               </div>
               <div className="h-[22px] w-[1px] bg-split"></div>
               <div className="flex px-4 items-center gap-2">
                  <div className="size-7">
                     <Image
                        className="size-full rounded-full border-neutral-500 object-cover"
                        src={'https://i.pravatar.cc/100'}
                        alt="avatar"
                        width={100}
                        height={100}
                     />
                  </div>
                  <span className="text-sm cursor-pointer hover:text-primary-orange">
                     Trần Quốc Việt
                  </span>
               </div>
            </div>
         </div>
      </header>
   )
}

export default HomePage

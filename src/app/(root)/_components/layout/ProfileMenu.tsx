import Image from 'next/image'
import React from 'react'

const ProfileMenu = () => {
   return (
      <div className="~px-2/4 relative">
         <div className="relative size-7 cursor-pointer">
            <div className="size-2 bg-primary-orange absolute top-0 right-0 rounded-full"></div>
            <Image
               className="size-full object-cover border rounded-full"
               src={'https://i.pravatar.cc/300'}
               alt="avatar"
               width={100}
               height={100}
            />
         </div>
         <div className="absolute top-[calc(100%+10px)] right-2 w-80 p-5 bg-header border"></div>
      </div>
   )
}

export default ProfileMenu

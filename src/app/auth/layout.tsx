import Image from 'next/image'
import React from 'react'

export default function AuthLayout({
   children
}: Readonly<{ children: React.ReactNode }>) {
   return (
      <>
         <div className="bg-auth fixed z-[-1] h-screen w-screen"></div>
         <div className="h-full w-full text-primary-black">
            <div className="mx-auto w-full py-5">
               <div className="pb-8 pt-5">
                  <Image
                     src="/images/aws-logo.png"
                     alt="logo"
                     width={84}
                     height={51}
                     className="mx-auto"
                  />
               </div>
            </div>
            <main className="container mx-auto max-h-screen">{children}</main>
         </div>
      </>
   )
}

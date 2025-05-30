import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
import Footer from './_components/Footer'
import AuthLayout from '@/components/layouts/AuthLayout'

export const metadata: Metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app'
}

export default function Layout({
   children
}: Readonly<{ children: React.ReactNode }>) {
   return (
      <AuthLayout>
         <div className="bg-auth fixed z-[-1] h-screen w-screen dark:bg-primary-black"></div>
         <div className="flex h-full w-full flex-col text-primary-black dark:text-primary-white">
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
            <main className="container mx-auto max-h-screen pb-12">
               {children}
            </main>
            <Footer />
         </div>
      </AuthLayout>
   )
}

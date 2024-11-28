import { Metadata } from 'next'
import React from 'react'
import Header from './_components/layout/Header'
import RootLayout from '@/components/layouts/RootLayout'

export const metadata: Metadata = {
   title: 'vietqtran',
   description: 'vietqtran'
}

export default function Layout({
   children
}: Readonly<{ children: React.ReactNode }>) {
   return (
      <RootLayout>
         <div className="size-full relative">
            <Header />
            <main className="px-4 mx-auto">{children}</main>
         </div>
      </RootLayout>
   )
}

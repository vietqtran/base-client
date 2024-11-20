import { Metadata } from 'next'
import React from 'react'
import Header from './_components/layout/Header'

export const metadata: Metadata = {
   title: 'vietqtran',
   description: 'vietqtran'
}

export default function AuthLayout({
   children
}: Readonly<{ children: React.ReactNode }>) {
   return (
      <div className="size-full relative">
         <Header />
         <main className="px-4 mx-auto">{children}</main>
      </div>
   )
}

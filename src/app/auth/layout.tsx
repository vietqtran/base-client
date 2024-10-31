import Image from 'next/image';
import React from 'react';

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
     <div className="bg-auth h-screen w-screen">
        <div className='mx-auto my-5 w-full'>
          <div className='pb-8 pt-5'>
            <Image
              src="/images/aws-logo.png"
              alt="logo"
              width={84}
              height={51}
              className="mx-auto"
            />
          </div>
        </div>
        <main className='max-h-screen overflow-y-auto ~px-5/3'>{children}</main>
     </div>
  )
}
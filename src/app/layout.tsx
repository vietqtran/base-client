import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import NextIntlProvider from '@/components/providers/NextIntlProvider'
import { Suspense } from 'react'
import ProtectedRoute from '@/components/providers/ProtectedRoute'
import ReduxProvider from '@/components/providers/ReduxProvider'

const emberBd = localFont({
   src: './fonts/Ember_Bd.ttf',
   variable: '--font-ember-bd',
   weight: '100 900'
})

const emberHe = localFont({
   src: './fonts/Ember_He.ttf',
   variable: '--font-ember-he',
   weight: '100 900'
})

const emberLt = localFont({
   src: './fonts/Ember_Lt.ttf',
   variable: '--font-ember-lt',
   weight: '100 900'
})

const emberRg = localFont({
   src: './fonts/Ember_Rg.ttf',
   variable: '--font-ember-rg',
   weight: '100 900'
})

const emberTh = localFont({
   src: './fonts/Ember_Th.ttf',
   variable: '--font-ember-th',
   weight: '100 900'
})

const emberMedium = localFont({
   src: './fonts/Ember-Medium.ttf',
   variable: '--font-ember-medium',
   weight: '100 900'
})

export const metadata: Metadata = {
   title: 'vietqtran',
   description: 'vietqtran'
}

export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body
            className={`${emberBd.variable} ${emberHe.variable} ${emberLt.variable} ${emberRg.variable} ${emberTh.variable} ${emberMedium.variable} antialiased font-regular`}
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               <ReduxProvider>
                  <ProtectedRoute>
                     <Suspense fallback={null}>
                        <NextIntlProvider>{children}</NextIntlProvider>
                     </Suspense>
                  </ProtectedRoute>
               </ReduxProvider>
            </ThemeProvider>
         </body>
      </html>
   )
}

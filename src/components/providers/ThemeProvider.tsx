'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

export function ThemeProvider({
   children,
   ...props
}: Readonly<ThemeProviderProps>) {
   return (
      <React.Suspense>
         <NextThemesProvider {...props}>{children}</NextThemesProvider>
      </React.Suspense>
   )
}

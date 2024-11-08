import { ThemeProvider } from '@/components/providers/ThemeProvider'

export default function Layout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
      >
         {children}
      </ThemeProvider>
   )
}

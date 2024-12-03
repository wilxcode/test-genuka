import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { SidebarProvider } from '@/components/ui/sidebar'
import AppSidebar from './_components/AppSidebar'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Test-Genuka',
  description: 'My technical test',
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <main className='w-full'>
            {props.children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}

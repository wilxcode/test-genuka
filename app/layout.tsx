import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

import MenuMobile from '@/components/ui/mobile-menu'
import Sidebar from '@/components/ui/sidebar'

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
        <div className="grid grid-rows-[4rem_1fr] md:grid-cols-[16rem_1fr] min-h-screen">
          <Sidebar className="hidden md:flex md:min-h-screen" />
          <MenuMobile className="md:hidden" />
          <main className="w-full md:min-h-screen overflow-auto bg-[#f9f9f9]">
            {props.children}
          </main>
        </div>
      </body>
    </html>
  )
}

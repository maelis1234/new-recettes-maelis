import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Recettes de Maëlis',
  description: 'My best recipes sweet and salty.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='fr'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className='min-h-screen bg-pink-200 text-black dark:bg-neutral-900 dark:text-white px-4 py-10 font-mono'>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}

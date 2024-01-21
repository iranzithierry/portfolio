import { Toaster } from 'react-hot-toast'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Suspense } from "react";

import '@/app/globals.css'
import { Analytics } from '@vercel/analytics/react';
import { cn } from '@/lib/utils'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'
import Footer from "@/components/footer";

export const metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  title: {
    default: process.env.APP_NAME,
    template: `%s - ${process.env.APP_NAME}`
  },
  description: `${process.env.APP_DESCRIPTION}`,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-sans antialiased', GeistSans.variable, GeistMono.variable)}>
        <div className='fixed h-screen w-full z-10 bg-gradient-to-br from-indigo-50  via-white  to-cyan-100' />
        <Toaster />
        <Providers attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* @ts-ignore */}
          <div className='relative z-40'>
          <Suspense fallback="...">
            <Header />
          </Suspense>
            <main className="flex flex-col flex-1">
              {children}
              <Analytics />
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

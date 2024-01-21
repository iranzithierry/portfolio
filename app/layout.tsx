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
        <div className='fixed min-h-[110vh] w-full z-10 bg-gradient-to-br from-indigo-50  via-white  to-cyan-100' />
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
              <div className="sticky bottom-0 mb-4 sm:mb-0 left-0 right-0 z-50 flex h-12 w-full flex-wrap justify-center 2xl:h-14 active animation">
                <div className="relative mx-auto flex h-10 shrink flex-wrap items-center justify-center rounded-full border-1/2 border-slate-200 bg-primary px-5 py-1 text-sm  text-white shadow-xl 2xl:h-14">
                  <a href="https://www.buymeacoffee.com/iranzithierry" target="_blank" rel="noopener noreferrer" className="mx-auto flex max-w-fit items-center justify-center rounded-lg transition-all duration-75 hover:scale-105">
                    <img className='h-8' src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=iranzithierry&button_colour=0069ff&font_colour=ffffff&font_family=Inter&outline_colour=ffffff&coffee_colour=FFDD00" />
                  </a>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

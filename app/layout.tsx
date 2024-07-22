import "@/styles/globals.css";
import { Toaster } from 'sonner'
import { cn } from "@/lib/utils";
import { Suspense } from 'react';
import Header from "@/components/header";
import type { Metadata, Viewport } from "next";
import { displayFont, monoFont } from "@/lib/fonts";
import { GlobalProvider } from "@/contexts/global-context";
import { ThemeProvider } from "@/components/providers"
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: 'Iranzi Thierry',
    template: `%s | Software Engineer`
  },
  description: "I'm Thierry, a software engineer based in Rwanda. I'm the founder and CEO of Movo+, where we help vendors to sell their products online.",
  keywords: "iranzi thierry, thierry, iranzi, iranzithierry, thierry iranzi, thierryiranzi",
  icons: {
    icon: '/images/favicon.ico',

  },
}
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFF' },
    { media: '(prefers-color-scheme: dark)', color: '#000' }
  ],
  colorScheme: "light"
}


export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-background font-sans antialiased", displayFont.variable, monoFont.variable)}>
        <Suspense fallback={<div>Loading...</div>}>
          <GlobalProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
              <Toaster closeButton richColors position="top-right" duration={2000} />
              {
                process.env.MAINTENANCE == "true" ?
                  (<div>
                    The Site Is Under Maintainence
                  </div>) :
                  (<>
                    <Header />
                    {children}
                    <Footer/>
                  </>
                  )
              }
            </ThemeProvider>
          </GlobalProvider>
        </Suspense>
        {/* <Analytics /> */}
      </body>
    </html>
  );
}

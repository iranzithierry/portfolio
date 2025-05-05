import "@/styles/globals.css";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import Header from "@/components/header";
import type { Metadata, Viewport } from "next";
import { fontSans } from "@/lib/fonts";
import { GlobalProvider } from "@/contexts/global-context";
import { ThemeProvider } from "@/components/providers";
import Footer from "@/components/footer";
import Container from "@/components/container";
// import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: {
    default: "Iranzi Thierry",
    template: `%s | Iranzi Thierry`,
  },
  description: "Iranzi Thierry a software engineer",
  keywords: "iranzi thierry, thierry, iranzi, iranzithierry, thierry iranzi, thierryiranzi",
  icons: {
    icon: "/favicon.ico",
  },
};
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFF" },
    { media: "(prefers-color-scheme: dark)", color: "#000" },
  ],
  colorScheme: "light",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // const LazyGamePanel = dynamic(() => import("@/components/game-panel"), { ssr: false });
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-bg font-sans antialiased", fontSans.variable)}>
        <Suspense fallback={<div>Loading...</div>}>
          <GlobalProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange>
              <Toaster closeButton richColors position="top-right" duration={2000} />
              <Header />
              <Container>
                {children}
                <Footer />
                {/* <div className="hidden sm:block">
                  <Suspense fallback={<div>Loading...</div>}>
                    <LazyGamePanel />
                  </Suspense>
                </div> */}
              </Container>
            </ThemeProvider>
          </GlobalProvider>
        </Suspense>
      </body>
    </html>
  );
}

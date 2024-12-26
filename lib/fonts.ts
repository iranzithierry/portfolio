import localFont from "next/font/local";

export const fontSans = localFont({
  src: [{ path: "../public/fonts/Inter.woff2" }],
  variable: "--font-sans",
});


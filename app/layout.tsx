import type React from "react"
import { LanguageProvider } from "@/components/language-context"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ishan Learning",
  description: "Learn Smart, Stay Confident",
  generator: "v0.app",
  robots: "index, follow",
  alternates: {
    canonical: "https://ishanlearning.com",
  },
  openGraph: {
    title: "Ishan Learning",
    description: "Learn Smart, Stay Confident",
    type: "website",
    url: "https://ishanlearning.com",
    images: [
      {
        url: "https://ishanlearning.com/logonev.jpg",
        width: 800,
        height: 600,
        alt: "Ishan Learning Logo",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/logonev.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logonev.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logonev.jpg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logonev.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NRB756NMQ4" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-NRB756NMQ4');`}
        </Script>
      </head>
      <body className={`${_geist.className} antialiased`}>
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}

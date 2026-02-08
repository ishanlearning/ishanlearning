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
  title: "Ishan Learning - Free Learning Support Platform for Classes 6-12",
  description: "Ishan Learning is a free learning support platform for students of Classes 6-12, offering structured video lessons and clear study notes along with self-reflection tools, practice resources, career awareness, guidance and exam-stress support. The platform also encourages learning beyond textbooks through real-life awareness, mini learning challenges, inspiring stories, yoga and mind discipline, Indian roots and values, thoughtful “think and learn” activities, smart digital life skills, learning myths and facts and opportunities for art and creative expression, helping students learn clearly, grow confidently and develop holistically.",
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
        alt: "Ishan Learning",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/icon.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.jpg",
        type: "image/jpg",
      },
      {
        url: "/icon.jpeg",
        type: "image/jpeg",
      },
      {
        url: "/icon.svg",
        type: "image/svg",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: "/icon.svg",
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

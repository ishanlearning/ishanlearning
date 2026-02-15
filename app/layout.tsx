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
  metadataBase: new URL("https://ishanlearning.com"),
viewport: {
  width: "device-width",
  initialScale: 1,
},

  title: {
    default: "Ishan Learning - Free Learning Support Platform for Classes 6-12",
    template: "%s | Ishan Learning",
  },
  applicationName: "ISHAN LEARNING",
  description: "Ishan Learning is a free learning support platform for students of Classes 6-12, offering structured video lessons and clear study notes along with self-reflection tools, practice resources, career awareness, guidance and exam-stress support. The platform also encourages learning beyond textbooks through real-life awareness, mini learning challenges, inspiring stories, yoga and mind discipline, Indian roots and values, thoughtful “think and learn” activities, smart digital life skills, learning myths and facts and opportunities for art and creative expression, helping students learn clearly, grow confidently and develop holistically.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ishanlearning.com",
  },
  openGraph: {
    title: "Ishan Learning",
    siteName: "ISHAN LEARNING",
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
  twitter: {
  card: "summary_large_image",
  title: "ISHAN LEARNING",
  description: "Learn Smart, Stay Confident",
  images: ["https://ishanlearning.com/logonev.jpg"],
},
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
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
    <html lang="en-IN">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NRB756NMQ4" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-NRB756NMQ4');`}
        </Script>
        <Script
  id="organization-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "ISHAN LEARNING",
      alternateName: "Ishan Learning",
      url: "https://ishanlearning.com",
      logo: "https://ishanlearning.com/logonev.jpg",
      sameAs: [
        "https://www.youtube.com/@ishanlearning",
        "https://www.instagram.com/ishanlearning",
        "https://www.facebook.com/ishanlearnings",
        "https://x.com/ishanlearning",
        "https://www.linkedin.com/company/ishanlearning/",
        "https://www.threads.net/@ishanlearning",   
        "https://t.me/ishanlearning"               
      ]
    }),
  }}
/>     
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



import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Classes from "@/components/classes"
import WhyChoose from "@/components/why-choose"
import Guidance from "@/components/guidance"
import Link from "next/link"
// import AppDownload from "@/components/app-download"
import Footer from "@/components/footer"
import "@/styles/main.css"

export const metadata: Metadata = {
  title: "Ishan Learning - Free Learning Support Platform for Classes 6-12",
  description:
    "Ishan Learning provides structured video lessons, clear study notes, self-reflection tools and academic guidance for students of Classes 6-12. Learn with clarity, confidence and emotional balance.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <main className="app" title="Ishan Learning - Online Learning Platform for Classes 6-12">
      <Header />
      <Hero />
      <Features />
      <Classes />
      <WhyChoose />
      <Guidance />
      {/* <AppDownload /> */}
      <Footer />
      
    </main>
  )
}

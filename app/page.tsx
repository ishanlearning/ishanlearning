"use client"

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

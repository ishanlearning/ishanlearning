"use client"

import Link from "next/link"
import "@/styles/home-button.css"

export default function HomeButton() {
  return (
    <Link href="/" className="home-button">
      <span className="home-icon">🏠</span>
    </Link>
  )
}

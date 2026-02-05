"use client"

import Link from "next/link"
import "@/styles/home-button.css"

export default function Backtotest() {
  return (
    <Link href="/wellbeing" className="BTT">
      <span className="BTTT"> ← Back</span>
    </Link>
  )
}

import { Metadata } from "next"
import ClientFAQ from "./ClientFAQ"

export const metadata: Metadata = {
  title: "FAQ | Ishan Learning",
  description: "Frequently asked questions about courses, learning system and support at Ishan Learning.",
}

export default function Page() {
  return <ClientFAQ />
}

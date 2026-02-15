import { Metadata } from "next"
import ClientTermsOfService from "./ClientTermsOfService"

export const metadata: Metadata = {
  title: "Terms of Service | Ishan Learning",
  description:
    "Read the terms and conditions for using Ishan Learning educational resources, services and academic support platform.",
}

export default function Page() {
  return <ClientTermsOfService />
}

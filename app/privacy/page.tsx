import { Metadata } from "next"
import ClientPrivacyPolicy from "./ClientPrivacyPolicy"

export const metadata: Metadata = {
  title: "Privacy Policy | Ishan Learning",
  description:
    "Read the Privacy Policy of Ishan Learning to understand how we collect, use and protect your information.",
}

export default function Page() {
  return <ClientPrivacyPolicy />
}

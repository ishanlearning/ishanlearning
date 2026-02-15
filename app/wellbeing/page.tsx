import { Metadata } from "next"
import ClientWellBeing from "./ClientWellBeing"

export const metadata: Metadata = {
  title: "Student Mental Wellbeing Reflections | Ishan Learning",
  description:
    "Self-reflection tools for students to understand stress, motivation, focus, emotional balance and academic wellbeing.",
}

export default function Page() {
  return <ClientWellBeing />
}

import { Metadata } from "next"
import ClientTeachers from "./ClientTeachers"

export const metadata: Metadata = {
  title: "Our Teachers | Ishan Learning",
  description:
    "Meet the teaching team of Ishan Learning and explore our educational philosophy focused on clarity, conceptual learning and student well-being.",
}

export default function Page() {
  return <ClientTeachers />
}

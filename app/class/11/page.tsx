import ClientClass11 from "./ClientClass11"

export const metadata = {
  title: "Class 11 Study Material & Video Lessons | Ishan Learning",
  description:
    "Free structured study material, video lessons, practice questions and revision resources for Class 11 Science, Commerce and Humanities students.",
  alternates: {
    canonical: "https://ishanlearning.com/class/11",
  },
};

export default function Page() {
  return <ClientClass11 params={{ classNumber: "11" }} />
}

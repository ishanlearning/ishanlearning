import ClientClass12 from "./ClientClass12"

export const metadata = {
  title: "Class 12 Study Material & Video Lessons | Ishan Learning",
  description:
    "Free structured study material, video lessons, practice questions and revision resources for Class 12 Science, Commerce and Humanities students.",
  alternates: {
    canonical: "https://ishanlearning.com/class/12",
  },
};

export default function Page() {
  return <ClientClass12 params={{ classNumber: "12" }} />
}

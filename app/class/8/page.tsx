import ClientClass8 from "./ClientClass8"

export const metadata = {
  title: "Class 8 Study Material & Video Lessons | Ishan Learning",
  description:
    "Free structured study material, video lessons, practice questions and revision resources for Class 8 students. Learn Science, Mathematics, Social Science and more.",
  alternates: {
    canonical: "https://ishanlearning.com/class/8",
  },
};

export default function Page() {
  return <ClientClass8 params={{ classNumber: "8" }} />
}

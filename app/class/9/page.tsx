import ClientClass9 from "./ClientClass9"

export const metadata = {
  title: "Class 9 Study Material & Video Lessons | Ishan Learning",
  description:
    "Free structured study material, video lessons, practice questions and revision resources for Class 9 students. Learn Science, Mathematics, Social Science and more.",
  alternates: {
    canonical: "https://ishanlearning.com/class/9",
  },
};

export default function Page() {
  return <ClientClass9 params={{ classNumber: "9" }} />
}

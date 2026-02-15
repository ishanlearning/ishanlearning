import ClientClass7 from "./ClientClass7"

export const metadata = {
  title: "Class 7 Study Material & Video Lessons | Ishan Learning",
  description:
    "Free structured study material, video lessons, practice questions and revision resources for Class 7 students. Learn Science, Mathematics, Social Science and more.",
  alternates: {
    canonical: "https://ishanlearning.com/class/7",
  },
};

export default function Page() {
  return <ClientClass7 params={{ classNumber: "7" }} />
}

import ClientClass6 from "./ClientClass6"

export const metadata = {
  title: "Class 6 Study Material & Video Lessons | Ishan Learning",
  description:
    "Free structured study material, video lessons, practice questions and revision resources for Class 6 students. Learn Science, Mathematics, Social Science and more.",
  alternates: {
    canonical: "https://ishanlearning.com/class/6",
  },
};

export default function Page() {
  return <ClientClass6 params={{ classNumber: "6" }} />
}

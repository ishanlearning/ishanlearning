import ClientClass10 from "./ClientClass10"

export const metadata = {
  title: "Class 10 Study Material & Video Lessons | Ishan Learning",
  description:
    "Free structured study material, video lessons, practice questions and revision resources for Class 10 students. Learn Science, Mathematics, Social Science and more.",
  alternates: {
    canonical: "https://ishanlearning.com/class/10",
  },
};

export default function Page() {
  return <ClientClass10 params={{ classNumber: "10" }} />
}

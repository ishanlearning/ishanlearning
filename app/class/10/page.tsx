"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import { useLanguage } from "@/components/language-context"
import "@/styles/class-details.css"

export default function ClassPage({ params }: { params: { classNumber: string } }) {
  const { t } = useLanguage()
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null)

  const subjectsData = [
    { name: t("science"), options: [{ name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/18wm-J3UMA_C0LtHFC1vOttu5N4hsi4-6" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-q0tll4XBqNkMU7q4T-IGwq" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1VW505ZwGmyhnYKXPGUTr_gkK77Rl1SJi" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/186cgayfFcUvkP77En2MvE3fhTIICTXjX" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-rpuLZwriqWaz4E1C-9EWhC" }, { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-rLym-DyApQvyf0n0GM6Y3o" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" }] },
    { name: t("mathematics"), options: [{ name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1mSGaGFg86QP2XNrOWz2PZ0RXcIJxyFT8" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-oyfdD4HY89WOqjKbfY51wO" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1ceJH5RXt9cFTVryLWKzOQZMyO5BaF2OY" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1ujd3Phtl9PpsjbljL92l-Kw34bUDbiHq" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-oEF2iW9fDepxRxpZY3dmGU" }, { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-rK4hOyBnjP7-sdF0VsR0_q" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" }] },
    { name: t("socialScience"), options: [{ name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/18OHGBAAz13IdUXXfM5YeutnnkS4xXfk8" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-q77TYfLGbtWD5fja-j86dn" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1CTMpSiBv_DCTa-AhlAWmKn4MeKTXK9Wv" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1mmfjGxNvc1AWHOXZ4esTBLWUCraaZwOe" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-q3CdCreS4WQDXfcqcgOpH4" }, { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-oby6nvBIMOITF0IavtN5_T" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" }] },
    { name: t("computer"), options: [{ name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1JDR2HqgE-sx45Oc-DaCKHG2IkBwePQII" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-pWSigNz54oXsAHEgXZEKh1" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/19DLQVs0-Lzkg858hPHh2j887jpB7LCGE" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1jgXJFJvngBmJgNdCUmVM-MQiDtQaR7Lx" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-rsO5gxjj26aeg-nqwxgXJh" }, { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-rxqXaPA0UV7-TIbNqHoDf1" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" }] },
    { name: t("drawing"), options: [{ name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/19cLmzl1kFQIOEjRnaU63KNVT31FRCTEe" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-payesPa6FvWkvAz9NMRRSW" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1pd0EnfsjloDmuPFdGk695H3X0PLhKM8r" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1_3Wc4bB6oplzxFNGZLA6gq9t243hKvLy" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-pMtLDlMI8qMyMQkqB-sFgw" }, { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-p-iCWn6FOOQdgBo26xq823" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" }] },
    { name: t("hindi"), options: [{ name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1zHUw9itS1ejwUd_Tnaf_RQ_-n-PUl_DF" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-q8zgH8ueNlXWRouvxwWNyq" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/12T81BGSVqh8MYoov-4m_maLyIbNRFcQA" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1ipd81tsh_8c9DI5hW-ktj0FSdbvQIBi3" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-oUoiFFnVY18BJS_1P9L26Z" }, { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qIu2d2mKicBemCZm8cJxhW" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" }] },
    { name: t("english"), options: [{ name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1Q0wEJ9Mrb7MOJq01qFIwrUNSWohJ-fpA" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-o_jYtyC_krXO3_UPRGf7Wh" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1sPxHwTl-CoJEYl4C_z6XSVAuBGEB5ApZ" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1oAu4rPp6ZfL3bmyo8_JFKS2mwU1VB5Po" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-pHzQVrWerIi06p3ZFiLxdh" }, { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-pwU3w6nuocmHdkt9DQOpAv" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" }] },
    { name: t("sanskrit"), options: [{ name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1Cfueryza8R263Tnzx5R1WD2HGo_jGH_X" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-rKvFhamQ4ixMb2i-hzyGIg" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1EInU0f-qdYKAeC8BW8foodM8YGY4kU3g" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1K3qeUBp5YNc_X1IVhufQ1IlZKG3PEEHU" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qj8EcuR2OAFWauuNdQEe1R" }, { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-p_Ai11XHhu_G2IJN2UO9Yk" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" }] },
  ]

  const toggleSubject = (subject: string) => {
    setExpandedSubject(expandedSubject === subject ? null : subject)
  }

  return (
    <div title="Class 10 Courses and Learning Resources - Science, Mathematics, Social Science and More">
      <Header />
      <main className="class-details-container" title="Class 10 subject courses and study materials">
        <div className="class-details-header" title="Class 10 page header with course overview">
          <h1 title="Class 10 courses and subjects">{t("class10")}</h1>
          <p title="Explore all available subjects for Class 10">{t("exploreAllSubjects")}</p>
        </div>

        <div className="subjects-container" title="Grid of Class 10 subjects with expandable options">
          {subjectsData.map((subject) => (
            <div key={subject.name} className="subject-card">
              <button
                className="subject-header"
                onClick={() => toggleSubject(subject.name)}
              >
                <span className="subject-name">{subject.name}</span>
                <span className={`subject-toggle ${expandedSubject === subject.name ? "open" : ""}`}>
                  ▼
                </span>
              </button>

              {expandedSubject === subject.name && (
                <div className="subject-options">
                  {subject.options.map((option, index) => (
                    <Link href={option.link} key={index} className="option-link" target="_blank" rel="noopener noreferrer">
                      <div className="option-card">
                        <img src={option.icon} alt={option.name} className="option-icon" />
                        <div className="option-name">{option.name}</div>
                        <div className="option-arrow">→</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      <HomeButton />
      <Footer />
    </div>
  )
}


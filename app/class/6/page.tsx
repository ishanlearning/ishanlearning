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
    {
      name: t("science"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1cfbdp1qDniXPjFsr5hgc0ikXjZP8OQ0f" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qCbpcTlFFjYi9g8aUPcFXR" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1PubdIfXPX2XvSQsybNg2AiPwz587dhvm" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1KFqhzFEo0hKF7RvL4n_vZmHXoaO-uc6U" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-pDSRZJVQLRQa08Vt6k2uAC" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-rqpj0KnXDcGtX30d02BEct" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" },
      ]
    },
    {
      name: t("mathematics"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/10mMRuTPEehjp3y7vWwYZ5E05eGiLKH2A" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qmnTFLwiNT9H3TjN3epLNh" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1OiRBTVUdrKldGrwYXpNd3rQtjNOzqIqq" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/14akxhz2CxitqePywlcsDGgMGaYEvw7et" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-rMTZbFPG4IBXT5f8VSKYQS" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-rdpN9er0qV1QdQL0qqYkHO" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" },
      ]
    },
    {
      name: t("socialScience"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1u-1lSNxx3AKw6eiMbOKbaDBK-u5nRNRt" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qjfyudhsiqa5xGRp9DrpLM" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1agSRiwwJ7a1qfQAZv-cgcYlf3d1KaLnq" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1f5N3HkPXdtMnTfa7VRb8R8dlh9bCwraA" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-r3cCdKjrPfHI54Ud8WCsDh" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-osCJtCIugihlH2qDxCNsXQ" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" },
      ]
    },
    {
      name: t("computer"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1H-UFVJvfYh-U8cHX6BFOt_9aYzHMlKmZ" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-rWUnQWovlsX6iiQ4Lxv823" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1Im7AYp5RpsWrIHJgGIfMHALkhcItbo-e" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1HIwMUHAi7_Pms08xenKRgSiBMuDb3nk-" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qIIU5QQCU1WHwO75J1mVcx" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-o7QITT4HuHo2JeYnTWovTu" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" },
      ]
    },
    {
      name: t("drawing"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1ifV_bwyijJwzAnH3HIgNmFWD63em4vdE" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qUzyIoUOqesgvOUYS810VM" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/14vaHrDLOYa_InLBG7TxQ_hO2ejTAS80w" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1YkiXCo2NSLIZzga1515NgYKvbKhZ0oi7" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-onL-nBKPLYlxJ7ERrFWGuX" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-omGhZXz4FKWLAcVPM4MbhD" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" },
      ]
    },
    {
      name: t("hindi"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1l5f9ELqaP3ljPBvg6T6GwcSsWoqdblIV" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-q2flp8VImYd4hApJyqvY_j" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1RWUtXvANRD7An9EKvSuUsffQTFIzFynI" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/17JAazY8Pd9W65XWsoEK5672W3F6A1W1D" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-psg5GmSc4AMwLFPZC_ZnkI" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-p6c5bGgmHkyz90CP-Lz9Pv" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" },
      ]
    },
    {
      name: t("english"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/13HPoBu23EhITs-CagsN3tnxB9HbG11bu" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-quqapSJTVeWHunqnsjl4Kv" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1VrG0wvncSmrqXyjh1YjBNFBrnLU4emQ_" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1ff5JCqOr3unaQaoPwjBxJMapOmlzih1q" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-rc-rKucm3BgOzWdKAePWZL" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qOalGKcyFvL4PxMh2tU2ri" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" },
      ]
    },
    {
      name: t("sanskrit"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1_3QGetGh-Mxa6iciZPaajAAHRAj7fNtP" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-oHbGxXejIwYlyWWIek6RuN" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1bt2-jxijXwmjYZjftmd67auBRnjzhFrS" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1NjknTjDiEWLT110VOwm_bHkkorPZPIRS" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qpqUQbWTtOuIKDMy4NXKdE" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-p8pPRVIy4Km9E-KSSzGGc3" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" },
      ]
    },
  ]

  const toggleSubject = (subject: string) => {
    setExpandedSubject(expandedSubject === subject ? null : subject)
  }

  return (
    <div title="Class 6 Courses and Learning Resources - Science, Mathematics, Social Science and More">
      <Header />
      <main className="class-details-container" title="Class 6 subject courses and study materials">
        <div className="class-details-header" title="Class 6 page header with course overview">
          <h1 title="Class 6 courses and subjects">{t("class6")}</h1>
          <p title="Explore all available subjects for Class 6">{t("exploreAllSubjects")}</p>
        </div>

        <div className="subjects-container" title="Grid of Class 6 subjects with expandable options">
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

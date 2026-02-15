"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import { useLanguage } from "@/components/language-context"
import "@/styles/class-details.css"

export default function ClientClass7({ params }: { params: { classNumber: string } }) {
  const { t } = useLanguage()
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null)

  const subjectsData = [
    {
      name: t("science"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1TVDVY0fh_cujQYhHP9e2KEWqE1gmIU5V" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-pqRg30A1at33978SRo3yMg" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1HL5TO9NSke8idLgpUEyI8zI42SgtdU5e" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/10g9tydTBdZANq-sAIjpbaOaCknpRFEbO" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-pKHkzE0lD8Bl1zzlsL4re4" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-o8KhcOUElupfvPdnHZQoSq" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" },
      ]
    },
    {
      name: t("mathematics"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1ScE2x8u51Zb3X6UX2pBq0KT68kpRE2v4" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qUOMJ--DqFhqTihh_jdH0K" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1d80muSrLhSwLCJ4rv8ofhgnnoBfyAc8A" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1sOtuXXmETMoSv2BKoXuW3qV9KNKoPyXO" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qZVuK3zGb7s8pB2cYLVKca" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-oLtK-KKqrFDwPl9tfnyh-u" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" },
      ]
    },
    {
      name: t("socialScience"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1kNzDkNiKnhb4zFO5v8v25_AX4VFRi5vB" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qke1B3HiGkDIrfszVUidWd" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1QDzsi042n2fUmbAMJ_i4GBpcsX1HphfO" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1gBHwoFAqon2DJbZYsVZ5NAyKh8SRAUBc" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-pca42KjqpyxvEFS9JF8_jQ" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-oHLU7krYFJHEzvFWD7o1_U" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" },
      ]
    },
    {
      name: t("computer"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1czC99pJqxMhg49TOxYMfxoxjHb-Yt3en" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-oFijoE5F_HKWiq5A5BioUu" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1MLnlBiZZ5EBYtoBWq7ieZS7Q4dTVLk2V" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1-xlOwmeKklygp_Ws70FKqAGI6YoEaV3Q" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-rEYFUM8SGS0u0yQCZTDY7i" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-pkoUBzZevb3yPyTtbZXGsN" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" },
      ]
    },
    {
      name: t("drawing"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1BFx15dbPQKADG66Q4mFbxcNLhxSwd5PB" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-oNaW1Ekdpu5OU20n5kTcAE" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1onuWgdXjwmeiWJZowxVQQUA7NOCGqJIz" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1QLMujtKjE7QJs8phA2Cwf9iof7gTH1kL" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qQskz9vYs9l-56VwIOLBRF" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-oYgmmRdly1LUp9t5xOVgF-" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" },
      ]
    },
    {
      name: t("hindi"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1w-ia7CD_VO7PMw-wl1focuunxxZ8BHM-" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-oqeqk5g2CMxBPxD4NzivEq" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1IFXZeuE0UZ_NqxjJipGl8QFZHqU9NBYd" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/19wpMgslB7WBxbaSuudWacogzf33Ok4E5" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-psqcfyzsrc3DALzlbneKpQ" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-pWHoBd6A1gJJRfmTp2PtM9" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" },
      ]
    },
    {
      name: t("english"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1MPd77OLP0gH3gjNTF-S4jzU7PTqzUsA9" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-rvskPfL56fLgIolldYihhp" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1TGvks5HBj9Ux8HIEOisFK4JMMoA3xkRX" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1eE7YmknIrpuDlQ6v-wgEP9giTU0FNbRu" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qBfHviAWf0HOJmJjknuMcK" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-q8JSfiMAcP8hXJn282-Vy3" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" },
      ]
    },
    {
      name: t("sanskrit"),
      options: [
        { name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1mm73LaPwqMZ8WlWQMNpeJ12kMaOvTOAe" },
        { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-rYrH6MUcI3vXt8ZyJD-ShY" },
        { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/18sKC1tTRDa6LqR3KxvNV6RYd_IXWL117" },
        { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1G7EQ8jS463YkkXg33fc6W_Gy44FeewHn" },
        { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qTn5wi6a73gBo49GIDeRqA" },
        { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qdeqJG9QCXid2YmHS6XsrY" },
        { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" },
      ]
    },
  ]

  const toggleSubject = (subject: string) => {
    setExpandedSubject(expandedSubject === subject ? null : subject)
  }

  return (
    <div title="Class 7 Courses and Learning Resources - Science, Mathematics, Social Science and More">
      <Header />
      <main className="class-details-container" title="Class 7 subject courses and study materials">
        <div className="class-details-header" title="Class 7 page header with course overview">
          <h1 title="Class 7 courses and subjects">{t("class7")}</h1>
          <p title="Explore all available subjects for Class 7">{t("exploreAllSubjects")}</p>
        </div>

        <div className="subjects-container" title="Grid of Class 7 subjects with expandable options">
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

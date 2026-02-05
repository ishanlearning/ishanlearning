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
    { name: t("science"), options: [{ name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1cYH3w1Jj1XloNBmDRqkJqEaYpKMUKjR-" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-robRC9sVvuyKZib_ztZuE8" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1ezh_nAmB-bFPntNTJBVvpK_lbQzjjol8" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/14A5NFPKB8-3l2q8kjFtrBxQSBudWhuyB" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-robRC9sVvuyKZib_ztZuE8" }, { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-prcqtyEpdKoo8xQfFgq0qJ" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" }] },
    { name: t("mathematics"), options: [{ name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1N28YpR7WW_3ILzidBwzR-kh1v3E5k8jU" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-rvYRjAdAs7LUPM5WOsih1O" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1SsFtxJK8-nV7mjvsispJknVL7UXdZNjh" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1Jw-drre7nDYOVHU_RQtSi6CSZN-Hs4Qj" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-ovpDRhsaSvPWrSgGvorK-5" }, { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-pCeBNGkfQ1oqQ4ZBXQmSqk" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" }] },
    { name: t("socialScience"), options: [{ name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/10QuvAFpWDQZkirE9l-nwbM288NCFbwX-" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-pbygXWzPwR1mIOmOgY3ZDH" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1Se50WARu5RM4iPtph8GXCdDSLk9-kqNx" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/18Bc3ugu3puvE6dYKTXQ87Blipt45zs55" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-r0WqiiwVpnMgVyEynATxmw" }, { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-pLO18s3zAH_zo2UFlSS-6j" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" }] },
    { name: t("computer"), options: [{ name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1lkC9FkBwxEO6GOq32bkRlIiV1dxJjz9z" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qFREPfWqpf54OG1hkRNLHj" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/19krv9cxG2mltQlwl49NMjYEktXes76eU" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1pca7lZUC-98ULTdgTf1rO-rF5hpDXwKZ" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-oeRb2hUkoVqHo2vwbuQjMm" }, { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-oQXpo8vkJUKDqzSR-xgTAq" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" }] },
    { name: t("drawing"), options: [{ name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1Uy1uLbNqSkC6iPSoRB4Ry5ZUBHGCxk7m" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qFqWujAgSVucVu9Ku-871z" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1Rapu9QZEDLNZUTHMmLdcF4MCq_Ynh88n" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1mfGBju2zLLlvCnwaAFTH4pLvVodIRc3l" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qXCuuRn3Fn62GYNURCeNk3" }, { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-rLnPTN8j3Mjnyki6dz-AS3" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" }] },
    { name: t("hindi"), options: [{ name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/1gPEFmWq3jhr2tcUjivRvj5IMlTommzc9" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-ogn_lDkKRN7o8pTQnwCn3p" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1po6TxIaOOIEXADRAE5Z6GLy-rtoegSkz" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1DzcWY3iMv4LGdLXjIb6z65w4YADKyk1D" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-p11Ke-f7ZSCRfz0_DFceGg" }, { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-pw0n0RHrycnJOGvfPATMZe" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" }] },
    { name: t("english"), options: [{ name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/17vUfg0jXp1bcHSQA8xXIRD4f8OPRjelO" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-pgZI1D0jYJu5KQXZAFm6CL" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1Xb9XOunBI1lyt16M6bwOgVBG_tpGueGS" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/16zsQ48IWp4n_nNDzQF3oo_wrHvSrDFOH" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-oZOaSxkWbAGpovZ1hE_XLX" }, { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-ow9_SLZQhKDVd9kse1Fqas" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" }] },
    { name: t("sanskrit"), options: [{ name: t("syllabus"), icon: "/7.jpg", link: "https://drive.google.com/drive/folders/10frSv1RXfkCFD-7rmdXT6a8ip2TYi0nk" }, { name: t("watchVideoLesson"), icon: "/9.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-oILO3zzzx5cgjoZAlC_llF" }, { name: t("studyMaterial"), icon: "/8.jpg", link: "https://drive.google.com/drive/folders/1p3lBuhZBYe7KPboHvCtgzrLyPKHAejdY" }, { name: t("practiceQuestions"), icon: "/10.jpg", link: "https://drive.google.com/drive/folders/1IZwna-IeSpB-JteKUpU5S33Y7MyGMkAg" }, { name: t("quickRevisionVideos"), icon: "/13.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-pjhwHohdnsIHuT9pcoM0Jr" }, { name: t("doubtSession"), icon: "/12.jpg", link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-q7AtGV7pRXRl5Tk-xOeqUI" }, { name: t("askYourDoubt"), icon: "/11.jpg", link: "https://forms.gle/GGemXkdjXmcDvzZKA" }] },
  ]

  const toggleSubject = (subject: string) => {
    setExpandedSubject(expandedSubject === subject ? null : subject)
  }

  return (
    <div title="Class 9 Courses and Learning Resources - Science, Mathematics, Social Science and More">
      <Header />
      <main className="class-details-container" title="Class 9 subject courses and study materials">
        <div className="class-details-header" title="Class 9 page header with course overview">
          <h1 title="Class 9 courses and subjects">{t("class9")}</h1>
          <p title="Explore all available subjects for Class 9">{t("exploreAllSubjects")}</p>
        </div>

        <div className="subjects-container" title="Grid of Class 9 subjects with expandable options">
          {subjectsData.map((subject) => (
            <div key={subject.name} className="subject-card" title={`${subject.name} subject courses and resources`}>
              <button
                className="subject-header"
                onClick={() => toggleSubject(subject.name)}
                title={`Expand or collapse ${subject.name} subject options`}
              >
                <span className="subject-name" title={`Subject: ${subject.name}`}>{subject.name}</span>
                <span className={`subject-toggle ${expandedSubject === subject.name ? "open" : ""}`} title="Toggle to view options">
                  ▼
                </span>
              </button>

              {expandedSubject === subject.name && (
                <div className="subject-options" title={`Learning resources for ${subject.name}`}>
                  {subject.options.map((option, index) => (
                    <Link href={option.link} key={index} className="option-link" target="_blank" rel="noopener noreferrer" title={`Access ${option.name} for ${subject.name}`}>
                      <div className="option-card" title={`${option.name} resource card`}>
                        <img src={option.icon} alt={`${option.name} for ${subject.name}`} className="option-icon" title={`Icon for ${option.name}`} />
                        <div className="option-name" title={`Resource type: ${option.name}`}>{option.name}</div>
                        <div className="option-arrow" title="Open resource">→</div>
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


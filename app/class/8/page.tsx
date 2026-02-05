"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HomeButton from "@/components/home-button";
import { useLanguage } from "@/components/language-context";
import "@/styles/class-details.css";

export default function ClassPage({
  params,
}: {
  params: { classNumber: string };
}) {
  const { t } = useLanguage();
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);

  const subjectsData = [
    {
      name: t("science"),
      options: [
        {
          name: t("syllabus"),
          icon: "/7.jpg",
          link: "https://drive.google.com/drive/folders/1bQotrSnNVtYV11NNKmUpomRmi5oUL-l6",
        },
        {
          name: t("watchVideoLesson"),
          icon: "/9.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-obply5R0Bkd6Vo1GOOe9ZA",
        },
        {
          name: t("studyMaterial"),
          icon: "/8.jpg",
          link: "https://drive.google.com/drive/folders/1WZt2Eh9nzBLRfYsholsd1lYq31t-veMJ",
        },
        {
          name: t("practiceQuestions"),
          icon: "/10.jpg",
          link: "https://drive.google.com/drive/folders/1mdbt44D_SwnIQclHbMQN7WU5FTf-viBx",
        },
        {
          name: t("quickRevisionVideos"),
          icon: "/13.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qIlcjN_FoBcJA3asI32TV0",
        },
        {
          name: t("doubtSession"),
          icon: "/12.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-oExFNYVTHAFHZHAMbKY77N",
        },
        {
          name: t("askYourDoubt"),
          icon: "/11.jpg",
          link: "https://forms.gle/GGemXkdjXmcDvzZKA",
        },
      ],
    },
    {
      name: t("mathematics"),
      options: [
        {
          name: t("syllabus"),
          icon: "/7.jpg",
          link: "https://drive.google.com/drive/folders/1g7SH2keaEDB8MRd2-qnk_5Q4aaJ6WOKS",
        },
        {
          name: t("watchVideoLesson"),
          icon: "/9.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-r1qrRf0vrEyec_lDF7eBcl",
        },
        {
          name: t("studyMaterial"),
          icon: "/8.jpg",
          link: "https://drive.google.com/drive/folders/1Q-JNd_ApvRW8_BLCqaELIREO4vZLbPsg",
        },
        {
          name: t("practiceQuestions"),
          icon: "/10.jpg",
          link: "https://drive.google.com/drive/folders/1fUOWLAYq6JHmpnxfdB7xT39q9VRUE4s6",
        },
        {
          name: t("quickRevisionVideos"),
          icon: "/13.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-pXfo6YscxYOR7pHh3_ilBQ",
        },
        {
          name: t("doubtSession"),
          icon: "/12.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qZqOtOhE6p6N-6ilDRXWjN",
        },
        {
          name: t("askYourDoubt"),
          icon: "/11.jpg",
          link: "https://forms.gle/GGemXkdjXmcDvzZKA",
        },
      ],
    },
    {
      name: t("socialScience"),
      options: [
        {
          name: t("syllabus"),
          icon: "/7.jpg",
          link: "https://drive.google.com/drive/folders/1g32GsJV4qtcDy2NMTbWs7_G3dU1pwJej",
        },
        {
          name: t("watchVideoLesson"),
          icon: "/9.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-rHjyncsGIhug85JBe9fUTC",
        },
        {
          name: t("studyMaterial"),
          icon: "/8.jpg",
          link: "https://drive.google.com/drive/folders/1NwjdBTKDTACKNzGJpum69zQz-Xi_T7uP",
        },
        {
          name: t("practiceQuestions"),
          icon: "/10.jpg",
          link: "https://drive.google.com/drive/folders/1qWx_Lc8vtvxLUvOT1-2wQ94BPTkiHp1b",
        },
        {
          name: t("quickRevisionVideos"),
          icon: "/13.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-pxSqo1wjS4AjEk0jAUd8hm",
        },
        {
          name: t("doubtSession"),
          icon: "/12.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qmsD-F7R1DfMkZdJbCCxME",
        },
        {
          name: t("askYourDoubt"),
          icon: "/11.jpg",
          link: "https://forms.gle/GGemXkdjXmcDvzZKA",
        },
      ],
    },
    {
      name: t("computer"),
      options: [
        {
          name: t("syllabus"),
          icon: "/7.jpg",
          link: "https://drive.google.com/drive/folders/12fKnmflxaizVkmfso6fj0TxtSG1VLcPc",
        },
        {
          name: t("watchVideoLesson"),
          icon: "/9.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-ps0tkDtrxJT9OlWEwMWdC5",
        },
        {
          name: t("studyMaterial"),
          icon: "/8.jpg",
          link: "https://drive.google.com/drive/folders/1lB2MSqJ24B_l4YTPIDGonN_N8KdM8IZ1",
        },
        {
          name: t("practiceQuestions"),
          icon: "/10.jpg",
          link: "https://drive.google.com/drive/folders/1CCd9Q5jHCx7Owi6XVNkI-kON0dcDz2xk",
        },
        {
          name: t("quickRevisionVideos"),
          icon: "/13.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-q-QqZn4FHfTTrXCOBelMNU",
        },
        {
          name: t("doubtSession"),
          icon: "/12.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qdQT3P1l-LSfqZvmGxJ1GQ",
        },
        {
          name: t("askYourDoubt"),
          icon: "/11.jpg",
          link: "https://forms.gle/GGemXkdjXmcDvzZKA",
        },
      ],
    },
    {
      name: t("drawing"),
      options: [
        {
          name: t("syllabus"),
          icon: "/7.jpg",
          link: "https://drive.google.com/drive/folders/1F1j5_vt8p8a6WE84HD3yQn40IvJRyqNY",
        },
        {
          name: t("watchVideoLesson"),
          icon: "/9.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-q-Dwk0DIgYBaLuSffY4Rp1",
        },
        {
          name: t("studyMaterial"),
          icon: "/8.jpg",
          link: "https://drive.google.com/drive/folders/1Lpl7lMkgDLnUdvUWE7M95tYFk_VJzHff",
        },
        {
          name: t("practiceQuestions"),
          icon: "/10.jpg",
          link: "https://drive.google.com/drive/folders/1tqeffO7eVGLQsZf_nOPFLYQjv_Vko4aJ",
        },
        {
          name: t("quickRevisionVideos"),
          icon: "/13.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-oPcdgrJKFT8Z-2aoSezYMx",
        },
        {
          name: t("doubtSession"),
          icon: "/12.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-p9l7f7ju-mg3enTjhmHJxc",
        },
        {
          name: t("askYourDoubt"),
          icon: "/11.jpg",
          link: "https://forms.gle/GGemXkdjXmcDvzZKA",
        },
      ],
    },
    {
      name: t("hindi"),
      options: [
        {
          name: t("syllabus"),
          icon: "/7.jpg",
          link: "https://drive.google.com/drive/folders/10lfW-vre2ylspI5QPDLGjnzo9zve88IO",
        },
        {
          name: t("watchVideoLesson"),
          icon: "/9.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qRGtzXPo-aSTQGbm8FI8Vn",
        },
        {
          name: t("studyMaterial"),
          icon: "/8.jpg",
          link: "https://drive.google.com/drive/folders/1zLdXKd3SS_76pN0deTDXxH1HpXq7-gcz",
        },
        {
          name: t("practiceQuestions"),
          icon: "/10.jpg",
          link: "https://drive.google.com/drive/folders/1O6AqpP_W8Rj8H4cr3EOWUnWHsqNxNxlq",
        },
        {
          name: t("quickRevisionVideos"),
          icon: "/13.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qcZAq_zE_-SYnSC-BmHWL9",
        },
        {
          name: t("doubtSession"),
          icon: "/12.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-oijNUnFHqLYazK2GThS1Nw",
        },
        {
          name: t("askYourDoubt"),
          icon: "/11.jpg",
          link: "https://forms.gle/GGemXkdjXmcDvzZKA",
        },
      ],
    },
    {
      name: t("english"),
      options: [
        {
          name: t("syllabus"),
          icon: "/7.jpg",
          link: "https://drive.google.com/drive/folders/1tHK45XBLrgBRGhj3JwBnKk5He7YRDkzT",
        },
        {
          name: t("watchVideoLesson"),
          icon: "/9.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qjOMi2a5qP0J1ahvDhl7XE",
        },
        {
          name: t("studyMaterial"),
          icon: "/8.jpg",
          link: "https://drive.google.com/drive/folders/1nEys3yx03fDwdW_62GbF5WM82nLZbKTS",
        },
        {
          name: t("practiceQuestions"),
          icon: "/10.jpg",
          link: "https://drive.google.com/drive/folders/1EKph-Hg3Zic0bg7qWSsXr6aMH0CGC_yg",
        },
        {
          name: t("quickRevisionVideos"),
          icon: "/13.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qLRGuRV550x8w9yNG53rjf",
        },
        {
          name: t("doubtSession"),
          icon: "/12.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-pK37uJF0rxenl52LCfgLp1",
        },
        {
          name: t("askYourDoubt"),
          icon: "/11.jpg",
          link: "https://forms.gle/GGemXkdjXmcDvzZKA",
        },
      ],
    },
    {
      name: t("sanskrit"),
      options: [
        {
          name: t("syllabus"),
          icon: "/7.jpg",
          link: "https://drive.google.com/drive/folders/1Phis_DpkRdBMMjOPcZW3EykRz3bS3bKN",
        },
        {
          name: t("watchVideoLesson"),
          icon: "/9.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-o5IZ4lh7ibLFcEm4fElyQj",
        },
        {
          name: t("studyMaterial"),
          icon: "/8.jpg",
          link: "https://drive.google.com/drive/folders/1_suMFagRrnKUAz6p_8sgxOuo2577vGGa",
        },
        {
          name: t("practiceQuestions"),
          icon: "/10.jpg",
          link: "https://drive.google.com/drive/folders/16QbRJ5i-0NL7xH9qSneP9pUuKYsjb_uF",
        },
        {
          name: t("quickRevisionVideos"),
          icon: "/13.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-piIDbcAd5tfhsX1iDaeNrO",
        },
        {
          name: t("doubtSession"),
          icon: "/12.jpg",
          link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-pK6ITfGaCGjD9tCytd2vLn",
        },
        {
          name: t("askYourDoubt"),
          icon: "/11.jpg",
          link: "https://forms.gle/GGemXkdjXmcDvzZKA",
        },
      ],
    },
  ];

  const toggleSubject = (subject: string) => {
    setExpandedSubject(expandedSubject === subject ? null : subject);
  };

  return (
    <div title="Class 8 Courses and Learning Resources - Science, Mathematics, Social Science, Computer, Drawing, Hindi, English, Sanskrit">
      <Header />
      <main className="class-details-container" title="Class 8 subject courses and study materials">
        <div className="class-details-header" title="Class 8 page header with course overview">
          <h1 title="Class 8 courses and subjects">{t("class8")}</h1>
          <p title="Explore all available subjects for Class 8">{t("exploreAllSubjects")}</p>
        </div>

        <div className="subjects-container" title="Grid of Class 8 subjects with expandable options">
          {subjectsData.map((subject) => (
            <div key={subject.name} className="subject-card" title={`${subject.name} subject courses and resources`}>
              <button
                className="subject-header"
                title={`Expand or collapse ${subject.name} subject options`}
                onClick={() => toggleSubject(subject.name)}
              >
                <span className="subject-name" title={`Subject: ${subject.name}`}>{subject.name}</span>
                <span
                  className={`subject-toggle ${expandedSubject === subject.name ? "open" : ""}`}
                  title="Toggle to view options"
                >
                  ▼
                </span>
              </button>

              {expandedSubject === subject.name && (
                <div className="subject-options" title={`Learning resources for ${subject.name}`}>
                  {subject.options.map((option, index) => (
                    <Link
                      href={option.link}
                      key={index}
                      className="option-link"
                      title={`Access ${option.name} for ${subject.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="option-card" title={`${option.name} resource card`}>
                        <img
                          src={option.icon}
                          alt={`${option.name} for ${subject.name}`}
                          className="option-icon"
                          title={`Icon for ${option.name}`}
                        />
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
  );
}


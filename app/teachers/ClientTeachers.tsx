"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import { useLanguage } from "@/components/language-context"
import "@/styles/teachers.css"
import { useRef, useState } from "react"

export default function ClientTeachers() {
  const { t } = useLanguage()
  // const teachers = [
  //   {
  //     id: 1,
  //     name: "Abhishek Saini",
  //     position: "Founder & Principal Mentor",
  //     qualification: "M.A. Psychology, M.A. Sociology, Gold Medalist",
  //     image: "/teacher1.jpg",
  //     bio: "With Master's degrees in Psychology and Sociology, Abhishek brings a unique perspective to education. He emphasizes clarity-based learning and student well-being.",
  //     expertise: ["Psychology", "Student Guidance", "Conceptual Learning"],
  //     quote: "When students are given conceptual clarity and patience, learning becomes meaningful rather than stressful."
  //   },
  //   {
  //     id: 2,
  //     name: "Savan Kumar",
  //     position: "Computer Science/Coding head Mentor",
  //     qualification: "MCA (AIML,JAVA,Python,MERN,SPring Boot),BCA (Java)",
  //     image: "/teacher2.jpg",
  //     bio: "An experienced educator dedicated to making complex scientific concepts simple and understandable through real-world examples and interactive teaching.",
  //     expertise: ["Computer Science","HTML", "CSS", "Python", "Java", "MERN Stack"],
  //     quote: "Coding is the language of the future. Learning to code empowers students to create, innovate, and solve problems effectively."
  //   },
  //   {
  //     id: 3,
  //     name: "Language Expert",
  //     position: "English & Language Arts Mentor",
  //     qualification: "M.A. English, B.Ed.",
  //     image: "/teacher3.jpg",
  //     bio: "Passionate about helping students develop strong communication skills and a love for literature. Focuses on building confidence in language learning.",
  //     expertise: ["English Grammar", "Literature", "Writing Skills"],
  //     quote: "Language is the bridge between minds. Clear communication is the foundation of all learning."
  //   },
  //   {
  //     id: 4,
  //     name: "Social Studies Guide",
  //     position: "History & Social Science Mentor",
  //     qualification: "M.A. History, B.Ed.",
  //     image: "/teacher4.jpg",
  //     bio: "Believes that understanding history and society helps students become responsible citizens. Makes learning engaging through storytelling and critical thinking.",
  //     expertise: ["History", "Geography", "Civics", "Social Studies"],
  //     quote: "History teaches us where we come from; social studies teach us where we're going."
  //   },
  //    {
  //     id: 5,
  //     name: "Language Expert",
  //     position: "English & Language Arts Mentor",
  //     qualification: "M.A. English, B.Ed.",
  //     image: "/teacher3.jpg",
  //     bio: "Passionate about helping students develop strong communication skills and a love for literature. Focuses on building confidence in language learning.",
  //     expertise: ["English Grammar", "Literature", "Writing Skills"],
  //     quote: "Language is the bridge between minds. Clear communication is the foundation of all learning."
  //   },
  //    {
  //     id: 6,
  //     name: "Language Expert",
  //     position: "English & Language Arts Mentor",
  //     qualification: "M.A. English, B.Ed.",
  //     image: "/teacher3.jpg",
  //     bio: "Passionate about helping students develop strong communication skills and a love for literature. Focuses on building confidence in language learning.",
  //     expertise: ["English Grammar", "Literature", "Writing Skills"],
  //     quote: "Language is the bridge between minds. Clear communication is the foundation of all learning."
  //   },
  //    {
  //     id: 7,
  //     name: "Language Expert",
  //     position: "English & Language Arts Mentor",
  //     qualification: "M.A. English, B.Ed.",
  //     image: "/teacher3.jpg",
  //     bio: "Passionate about helping students develop strong communication skills and a love for literature. Focuses on building confidence in language learning.",
  //     expertise: ["English Grammar", "Literature", "Writing Skills"],
  //     quote: "Language is the bridge between minds. Clear communication is the foundation of all learning."
  //   },
  //    {
  //     id: 8,
  //     name: "Language Expert",
  //     position: "English & Language Arts Mentor",
  //     qualification: "M.A. English, B.Ed.",
  //     image: "/teacher3.jpg",
  //     bio: "Passionate about helping students develop strong communication skills and a love for literature. Focuses on building confidence in language learning.",
  //     expertise: ["English Grammar", "Literature", "Writing Skills"],
  //     quote: "Language is the bridge between minds. Clear communication is the foundation of all learning."
  //   },
  //    {
  //     id: 9,
  //     name: "Language Expert",
  //     position: "English & Language Arts Mentor",
  //     qualification: "M.A. English, B.Ed.",
  //     image: "/teacher3.jpg",
  //     bio: "Passionate about helping students develop strong communication skills and a love for literature. Focuses on building confidence in language learning.",
  //     expertise: ["English Grammar", "Literature", "Writing Skills"],
  //     quote: "Language is the bridge between minds. Clear communication is the foundation of all learning."
  //   }
  // ]

  const [selectedTeacher, setSelectedTeacher] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)
  const teachersGridRef = useRef<HTMLDivElement>(null)

  const handleViewTeachers = (e: React.MouseEvent) => {
    e.preventDefault()
    teachersGridRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleMeetTeacher = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowModal(true)
  }

  const closeModal = () => setShowModal(false)

  return (
    <div className="app">
      <Header />

      <main className="teachers-container">
        {/* <section className="teachers-hero">
          <h1>Meet Our Teachers</h1>
          <p>Experienced educators dedicated to your success</p>
        </section> */}

        <section className="teachers-intro teachers-hero">
          <div className="intro-content">
            <h2>{t("aboutTeachingTeam")}</h2>
            <p>
              {t("greatTeachersBackbone")}
            </p>
            <p>
              {t("uniqueExpertise")}
            </p>
          </div>
        </section>

        {/* Teachers Grid Section - interactive */}
        {/* <div ref={teachersGridRef} id="your-teacher">
          <section className="teachers-grid">
            <h2>Our Teaching Faculty</h2>
            <div className="teachers-list">
              {teachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className={`teacher-card${selectedTeacher === teacher.id ? " expanded" : ""}`}
                  onClick={() => setSelectedTeacher(selectedTeacher === teacher.id ? null : teacher.id)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="teacher-image-wrapper">
                    <div className="teacher-image-placeholder">{teacher.name.charAt(0)}</div>
                  </div>
                  <div className="teacher-content">
                    <h3>{teacher.name}</h3>
                    <p className="teacher-position">{teacher.position}</p>
                    <p className="teacher-qualification">{teacher.qualification}</p>
                    <p className="teacher-bio">{teacher.bio}</p>
                    {selectedTeacher === teacher.id && (
                      <>
                        <div className="teacher-expertise">
                          <h4>Expertise:</h4>
                          <div className="expertise-tags">
                            {teacher.expertise.map((skill, index) => (
                              <span key={index} className="expertise-tag">{skill}</span>
                            ))}
                          </div>
                        </div>
                        <div className="teacher-quote">
                          <p>"{teacher.quote}"</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section> */}
        {/* </div> */}

        {/* //add two buttons here one is View your teacer and meet your teacher */}
        <div className="teacher-buttons">
          <a href="https://drive.google.com/drive/folders/1uKc2095ZOh2dUBwfq1qCYrv9MJebcxX0" className="teacher-btn" target="_blank">{t("viewYourTeacher")}</a>
          <a href="https://www.youtube.com/playlist?list=PL8LuoZnQO2-r_zLbYIVhwhtqqHZNkyTwX" className="teacher-btn secondary" target="_blank">{t("meetYourTeacher")}</a>
        </div>

        {/* Meet Your Teacher Modal */}

        <section className="teaching-philosophy">
          <h2>{t("ourTeachingPhilosophy")}</h2>
          <div className="philosophy-grid">
            <div className="philosophy-card">
              <div className="philosophy-icon">🎯</div>
              <h3>{t("clarityFirst")}</h3>
              <p>{t("clarityRote")}</p>
            </div>
            
            <div className="philosophy-card">
              <div className="philosophy-icon">🤝</div>
              <h3>{t("studentCentered")}</h3>
              <p>{t("studentCenteredDesc")}</p>
            </div>
            
            <div className="philosophy-card">
              <div className="philosophy-icon">💡</div>
              <h3>{t("conceptualLearning")}</h3>
              <p>{t("conceptualLearningDesc")}</p>
            </div>
            
            <div className="philosophy-card">
              <div className="philosophy-icon">❤️</div>
              <h3>{t("emotionalSafety")}</h3>
              <p>{t("emotionalSafetyDesc")}</p>
            </div>
          </div>
        </section>
        
        <section className="teacher-cta">
          <h2>{t("readyToLearn")}</h2>
          <p>{t("startYourJourney")}</p>
          <a href="/#classes" className="cta-button">{t("exploreClasses")}</a>
        </section>
      </main>

      <HomeButton />
      <Footer />
    </div>
  )
}

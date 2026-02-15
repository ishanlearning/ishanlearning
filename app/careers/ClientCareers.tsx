"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import "@/styles/careers.css"

export default function ClientCareers() {
  const { t } = useLanguage()
  
  return (
    <div className="app" title="Career Awareness - Explore career paths and guidance for students">
      <Header />

      <main className="careers-container" title="Career awareness and guidance content">
        <section className="careers-hero" title="Career awareness hero section">
          <h1 title="Career awareness main heading">{t("careerAwareness")}</h1>
          <p title="Importance of thinking clearly about careers">{t("careerThinkingClearly")}</p>
        </section>

        {/* Opening Section */}
        <section className="careers-section" title="Introduction to career awareness">
          <div className="section-content" title="Opening thoughts on career planning">
            <p className="intro-text" title="Career is not certainty statement">
              {t("careerNotCertainty")}
            </p>
            <p className="intro-text" title="Career as a supportive process">
              {t("careerSupportiveProcess")}
            </p>
          </div>
        </section>

        {/* Why Difficult */}
        <section className="careers-section highlight-section" title="Why career planning is difficult">
          <div className="section-content" title="Challenges in career decision-making">
            <h2 title="Why career planning is difficult heading">{t("whyCareerDifficult")}</h2>
            <p title="Career anxiety and pressure">
              {t("careerAnxiety")}
            </p>
            <p title="Early pressure for career choices">
              {t("careerEarlyPressure")}
            </p>
            <p className="emphasis" title="Interrupting pressure message">
              {t("careerInterruptPressure")}
            </p>
          </div>
        </section>

        {/* Career as Process */}
        <section className="careers-section" title="Career development as a process">
          <div className="section-content" title="Understanding career as a developing journey">
            <h2 title="Career as developing process heading">{t("careerDevelopingProcess")}</h2>
            <p title="Careers are rarely fixed">
              {t("careerRarelyFixed")}
            </p>
            <p title="Trying different career options">
              {t("careerTryingDifferent")}
            </p>
            <p className="emphasis" title="Accepting uncertainty in careers">
              {t("careerAcceptUncertainty")}
            </p>
          </div>
        </section>

        {/* Class 10 */}
        <section className="careers-section highlight-section" title="Career options after Class 10">
          <div className="section-content" title="What happens after 10th grade">
            <h2 title="After Class 10 heading">{t("careerAfterClass10")}</h2>
            <p title="Explanation of Class 10 decisions">
              {t("careerClass10Explanation")}
            </p>
            <p title="Focus areas for Class 10 students">
              {t("careerClass10Focus")}
            </p>
          </div>
        </section>

        {/* Class 12 */}
        <section className="careers-section" title="Career considerations after Class 12">
          <div className="section-content" title="Post 12th grade career planning">
            <h2 title="After Class 12 heading">{t("careerAfterClass12")}</h2>
            <p title="Explanation of Class 12 decisions">
              {t("careerClass12Explanation")}
            </p>
            <p title="Pressure at Class 12 level">
              {t("careerClass12Pressure")}
            </p>
          </div>
        </section>

        {/* Self Understanding */}
        <section className="careers-section highlight-section" title="Understanding yourself for career choices">
          <div className="section-content" title="Self-awareness for career planning">
            <h2 title="Understand yourself heading">{t("careerUnderstandYourself")}</h2>
            <p className="emphasis" title="Clarity begins with self-understanding">
              {t("careerClarityBegins")}
            </p>
            <p title="Learning styles and preferences">
              {t("careerLearningStyles")}
            </p>
            <p title="Accepting that not everyone is perfect">
              {t("careerNotPerfect")}
            </p>
          </div>
        </section>

        {/* How Interests Develop */}
        <section className="careers-section" title="How interests develop over time">
          <div className="section-content" title="Development of career interests">
            <h2 title="How interests develop heading">{t("careerHowInterestsDevelop")}</h2>
            <p title="Belief about interest discovery">
              {t("careerBelieveInterest")}
            </p>
            <p title="Interest development process">
              {t("careerInterestDevelops")}
            </p>
            <p className="emphasis" title="No immediate passion message">
              {t("careerNoPassion")}
            </p>
          </div>
        </section>

        {/* Pressure and Reality */}
        <section className="careers-section highlight-section" title="Pressure, marks, and reality in careers">
          <div className="section-content" title="Balancing marks with career planning">
            <h2 title="Pressure and marks heading">{t("careerPressureMarks")}</h2>
            <p title="Importance of marks in career">
              {t("careerMarksImportant")}
            </p>
            <p title="Clarity vs panic in decision-making">
              {t("careerClarityPanic")}
            </p>
          </div>
        </section>

        {/* What Career Path Means */}
        <section className="careers-section" title="Understanding what career path means">
          <div className="section-content" title="Definition and meaning of career path">
            <h2 title="Career path meaning heading">{t("careerPathMeans")}</h2>
            <p title="Career paths are not fixed">
              {t("careerPathNotFixed")}
            </p>
            <p title="Career paths can change">
              {t("careerPathChanges")}
            </p>
            <p className="emphasis" title="Not locked into one career">
              {t("careerNotLocked")}
            </p>
          </div>
        </section>

        {/* Timing and Readiness */}
        <section className="careers-section highlight-section" title="Timing and readiness for career decisions">
          <div className="section-content" title="Understanding when you are ready">
            <h2 title="Timing and readiness heading">{t("careerTiming")}</h2>
            <p title="Clarity happens at different times">
              {t("careerClarityDifferent")}
            </p>
            <p title="Exposure to different careers">
              {t("careerExposure")}
            </p>
            <p className="emphasis" title="Allow yourself time to decide">
              {t("careerAllowedTime")}
            </p>
          </div>
        </section>

        {/* Notes */}
        <section className="careers-notes" title="Voices and perspectives on careers">
          <h2 title="Voices and perspectives heading">{t("careerVoices")}</h2>
          <div className="notes-grid" title="Grid of perspectives from different stakeholders">
            <div className="note-card note-card-students" title="Message for students">
              <div className="note-icon" title="Students icon">📚</div>
              <h3 title="Note for students">{t("careerNoteStudents")}</h3>
              <p title="Advice for students on career">
                {t("careerNoteStudentsText")}
              </p>
            </div>

            <div className="note-card note-card-parents" title="Message for parents">
              <div className="note-icon" title="Parents icon">👨‍👩‍👧</div>
              <h3 title="Note for parents">{t("careerNoteParents")}</h3>
              <p title="Advice for parents on careers">
                {t("careerNoteParentsText")}
              </p>
            </div>

            <div className="note-card note-card-teachers" title="Message for teachers">
              <div className="note-icon" title="Teachers icon">🏫</div>
              <h3 title="Note for teachers">{t("careerNoteTeachers")}</h3>
              <p title="Advice for teachers on careers">
                {t("careerNoteTeachersText")}
              </p>
            </div>
          </div>
        </section>

        {/* Psychology Perspective */}
        <section className="careers-section highlight-section" title="Psychology perspective on career development">
          <div className="section-content" title="Psychological insights about careers">
            <h2 title="Psychology perspective heading">{t("careerPsychologyPerspective")}</h2>
            <p title="Psychology perspective on career">
              {t("careerPsychologyText")}
            </p>
          </div>
        </section>

        {/* Boundary */}
        <section className="careers-section" title="Important boundary and disclaimer">
          <div className="section-content" title="Clarifying the role of career guidance">
            <div className="boundary-box" title="Boundary disclaimer">
              <h3 title="Boundary heading">⚠️ {t("careerBoundary")}</h3>
              <p title="Boundary explanation">
                {t("careerBoundaryText")}
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="careers-closing" title="Closing thoughts on career planning">
          <div className="section-content" title="Final message about career journey">
            <h2 title="Closing heading">{t("careerClosing")}</h2>
            <p className="closing-emphasis" title="Closing emphasis message">
              {t("careerClosingEmphasis")}
            </p>
            <p className="closing-text" title="Closing text paragraph 1">
              {t("careerClosingText1")}
            </p>
            <p className="closing-text" title="Closing text paragraph 2">
              {t("careerClosingText2")}
            </p>
          </div>
        </section>
<br />
        {/* CTA */}
        <section className="careers-cta" title="Call-to-action to explore classes">
          <h2 title="CTA heading">{t("careerCTA")}</h2>
          <p title="CTA description">{t("careerCTAText")}</p>
          <Link href="/#classes" className="cta-button" title="Go to classes section">
            {t("careerCTAButton")}
          </Link>
        </section>
      </main>

<br />
      <HomeButton />
      <Footer />
    </div>
  )
}

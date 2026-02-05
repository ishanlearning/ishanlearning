"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import { useLanguage } from "@/components/language-context"
import "@/styles/about.css"

export default function AboutUs() {
  const { t } = useLanguage()
  
  return (
    <div className="app" title="About Ishan Learning - Our story, mission, and values">
      <Header />
      
      <main className="about-container" title="About Us - Learn about Ishan Learning platform">
        <section className="about-hero" title="About page hero section with introduction">
          <h1 title="About Ishan Learning page title">{t("aboutPageTitle")}</h1>
          <p title="Core values of clarity, confidence and support">{t("clarityConfidenceSupport")}</p>
        </section>

        {/* Ishan Learning */}
        <section className="about-section" title="Ishan Learning introduction and background">
          <div className="section-content" title="Company background and history">
            <h2 title="Ishan Learning heading">{t("ishanLearning")}</h2>
            <p title="Ishan Learning description paragraph 1">
              {t("ishanDesc1")}
            </p>
            <p title="Ishan Learning description paragraph 2">
              {t("ishanDesc2")}
            </p>
            <p title="Ishan Learning key message">
              <strong title="Ishan Learning mission statement">{t("ishanDesc3")}</strong>
            </p>
          </div>
        </section>

        {/* Core Belief */}
        <section className="about-section highlight-section" title="Core beliefs and educational philosophy">
          <div className="section-content" title="Our core beliefs about education">
            <h2 title="Core beliefs heading">{t("coreBeliefs")}</h2>
            <div className="belief-box" title="Education as a right, not a privilege">
              <h3 title="Education is a right heading">{t("educationRight")}</h3>
              <p title="Statement about student deserving">{t("everyStudentDeserves")}</p>
              <ul className="belief-list" title="List of core beliefs">
                <li title="Clear explanations belief">{t("clearExplanations")}</li>
                <li title="Patient guidance belief">{t("patientGuidance")}</li>
                <li title="Supportive environment belief">{t("supportiveEnvironment")}</li>
              </ul>
              <p className="belief-note" title="Pressure vs fear philosophy">
                {t("pressureVsFear")}
              </p>
            </div>
          </div>
        </section>

        {/* Why Created */}
        <section className="about-section" title="Why Ishan Learning was created">
          <div className="section-content" title="Reasons and motivation for creating Ishan Learning">
            <h2 title="Why created heading">{t("whyCreated")}</h2>
            <p title="Introduction to why Ishan Learning was created">
              {t("whyCreatedIntro")}
            </p>
            <p title="Problem statement about capable students"><strong title="Many students capability statement">{t("manyStudentsCapable")}</strong></p>
            <ul className="reason-list" title="List of challenges students face">
              <li title="Fast lessons challenge">{t("lessonsMoveFast")}</li>
              <li title="Unanswered doubts challenge">{t("doubtsUnanswered")}</li>
              <li title="Exam pressure challenge">{t("examsMoreImportant")}</li>
              <li title="Increasing pressure challenge">{t("pressureIncreases")}</li>
            </ul>
            <p title="Solution provided by Ishan Learning">
              {t("createdAsSupport")}
            </p>
          </div>
        </section>

        {/* Learning & Mental Well-Being */}
        <section className="about-section highlight-section" title="Learning outcomes and mental well-being focus">
          <div className="section-content" title="Meaningful learning and wellbeing approach">
            <h2 title="Learning and wellbeing heading">{t("learningWellbeing")}</h2>
            <p title="Statement about meaningful learning">
              {t("meaningfulLearning")}
            </p>
            <div className="wellbeing-grid" title="Grid of wellbeing principles">
              <div className="wellbeing-item" title="No labels principle">
                <h4 title="No labels for students">{t("noLabels")}</h4>
                <p title="Description of no labels approach">{t("noLabelsDesc")}</p>
              </div>
              <div className="wellbeing-item" title="Respected pace principle">
                <h4 title="Respected pace for learning">{t("respectedPace")}</h4>
                <p title="Description of paced learning">{t("respectedPaceDesc")}</p>
              </div>
              <div className="wellbeing-item" title="Fear-free environment principle">
                <h4 title="Fear-free learning environment">{t("fearFree")}</h4>
                <p title="Description of fear-free approach">{t("fearFreeDesc")}</p>
              </div>
              <div className="wellbeing-item" title="Clarity first principle">
                <h4 title="Clarity-first approach">{t("clarityFirst")}</h4>
                <p title="Description of clarity approach">{t("clarityFirstDesc")}</p>
              </div>
            </div>
            <p className="note" title="Clinical note about learning approach">
              <em title="Clinical research note">{t("clinicalNote")}</em>
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="about-section" title="Our vision and mission for education">
          <div className="vision-mission-grid" title="Vision and mission cards">
            <div className="vision-card" title="Ishan Learning vision">
              <h3 title="Vision heading">{t("ourVision")}</h3>
              <p title="Vision description">{t("visionDesc")}</p>
              <ul title="Vision points list">
                <li title="Vision point 1">{t("visionPoint1")}</li>
                <li title="Vision point 2">{t("visionPoint2")}</li>
                <li title="Vision point 3">{t("visionPoint3")}</li>
                <li title="Vision point 4">{t("visionPoint4")}</li>
              </ul>
            </div>
            <div className="mission-card" title="Ishan Learning mission">
              <h3 title="Mission heading">{t("ourMission")}</h3>
              <p title="Mission description">{t("missionDesc")}</p>
              <ul title="Mission points list">
                <li title="Mission point 1">{t("missionPoint1")}</li>
                <li title="Mission point 2">{t("missionPoint2")}</li>
                <li title="Mission point 3">{t("missionPoint3")}</li>
                <li title="Mission point 4">{t("missionPoint4")}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What Makes Different */}
        <section className="about-section" title="What makes Ishan Learning different">
          <div className="section-content" title="Unique features and differentiation">
            <h2 title="What makes us different heading">{t("whatMakesDifferent")}</h2>
            <div className="difference-grid" title="Grid of differentiation factors">
              <div className="difference-card" title="School support feature">
                <h4 title="School curriculum support">{t("schoolSupport")}</h4>
                <p title="Description of school support">{t("schoolSupportDesc")}</p>
              </div>
              <div className="difference-card" title="Conceptual clarity feature">
                <h4 title="Conceptual clarity focus">{t("conceptualClarity")}</h4>
                <p title="Description of conceptual clarity">{t("conceptualClarityDesc")}</p>
              </div>
              <div className="difference-card" title="Psychology-informed approach feature">
                <h4 title="Psychology-informed methods">{t("psychologyInformed")}</h4>
                <p title="Description of psychology approach">{t("psychologyInformedDesc")}</p>
              </div>
              <div className="difference-card" title="Student-centered approach feature">
                <h4 title="Student-centered focus">{t("studentCentred")}</h4>
                <p title="Description of student-centered approach">{t("studentCentredDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="about-section highlight-section" title="Target audience and who we serve">
          <div className="section-content" title="Information about our students and users">
            <h2 title="Who we serve heading">{t("whoServe")}</h2>
            <p title="Introduction to our audience">{t("whoServeIntro")}</p>
            <ul className="serve-list" title="Categories of students we serve">
              <li title="Student category 1">{t("servePoint1")}</li>
              <li title="Student category 2">{t("servePoint2")}</li>
              <li title="Student category 3">{t("servePoint3")}</li>
              <li title="Student category 4">{t("servePoint4")}</li>
            </ul>
          </div>
        </section>

        {/* Founder */}
        <section className="about-section founder-section" title="About the founder">
          <div className="section-content" title="Founder information and background">
            <h2 title="Founder section heading">{t("founder")}</h2>
            <div className="founder-card" title="Founder details and bio">
              <h3 title="Founder name">{t("founderName")}</h3>
              <p className="founder-title" title="Founder professional title">{t("founderTitle")}</p>
              <p title="Founder biography paragraph 1">
                {t("founderDesc1")}
              </p>
              <p title="Founder biography paragraph 2">
                {t("founderDesc2")}
              </p>
              <p title="Founder biography paragraph 3">
                {t("founderDesc3")}
              </p>
              <div className="founder-quote" title="Founder quote">
                <blockquote title="Inspirational quote from founder">
                  "{t("founderQuote")}"
                </blockquote>
                <p title="Quote attribution">- {t("founderName")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Role & Responsibility */}
        <section className="about-section highlight-section" title="Role and responsibility of Ishan Learning">
          <div className="section-content" title="What Ishan Learning is and is not">
            <h2 title="Role and responsibility heading">{t("roleResponsibility")}</h2>
            <div className="responsibility-box" title="Disclaimer and role clarification">
              <p title="What Ishan Learning is"><strong title="Academic platform statement">{t("academicPlatform")}</strong></p>
              <p title="What Ishan Learning does not replace">{t("doesNotReplace")}</p>
              <p title="How Ishan Learning supports students">
                {t("roleSupport")}
              </p>
            </div>
          </div>
        </section>

        {/* Join Journey */}
        <section className="about-section cta-section" title="Call-to-action to join Ishan Learning">
          <div className="section-content" title="Invitation to join our platform">
            <h2 title="Join journey heading">{t("joinJourney")}</h2>
            <p title="Schools foundation message">
              {t("schoolsFoundation")}
            </p>
            <p title="Invitation to join Ishan Learning">
              {t("joinInvite")}
            </p>
            <div className="journey-tagline" title="Key promises and taglines">
              <p title="Learn clearly tagline"><strong title="First tagline">{t("learnClearly")}</strong></p>
              <p title="Strengthen foundations tagline"><strong title="Second tagline">{t("strengthenFoundations")}</strong></p>
              <p title="Grow confidence tagline"><strong title="Third tagline">{t("growConfidence")}</strong></p>
            </div>
          </div>
        </section>
      </main>

      <HomeButton />
      <Footer />
    </div>
  )
}

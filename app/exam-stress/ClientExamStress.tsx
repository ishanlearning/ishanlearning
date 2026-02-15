"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import { useLanguage } from "@/components/language-context"
import "@/styles/exam-stress.css"

export default function ClientExamStress() {
  const { t } = useLanguage()

  return (
    <>
      <Header />
      <HomeButton />

      <main className="exam-stress-page" title="Exam Stress - Understanding and Managing Exam Anxiety">
        {/* Hero Section */}
        <section className="exam-stress-hero" title="Exam stress awareness and support section">
          <div className="hero-content" title="Main hero content about exam stress">
            <h1 title="Exam stress is not a weakness">{t("examStressPageTitle")}</h1>
            <p className="hero-subtitle" title="Understanding exam stress">
              {t("notWeakness")}
            </p>
            <p className="hero-description" title="Information about managing exam stress">
              {t("notEliminatingCompletely")}
            </p>
          </div>
        </section>

        {/* Understanding Exam Stress */}
        <section className="exam-stress-section" title="Why exam stress happens">
          <h2 title="Understanding causes of exam stress">{t("whyExamStressHappens")}</h2>
          <p title="Exams carry higher stakes">
            {t("examsCarryMore")}
          </p>
          <p title="Fear of failure and its impact">
            {t("fearOfFailure")}
          </p>
          <p title="Support and resources available">
            {t("pageExistsHelp")}
          </p>
        </section>

        <section className="exam-stress-section" title="Understanding exam stress symptoms">
          <h2 title="What is exam stress">{t("understandingExamStress")}</h2>
          <p title="Normal level of stress">
            {t("someLevelNormal")}
          </p>
          <p title="Problems when stress becomes excessive">
            {t("problemsWhenStress")}
          </p>
          <p title="Stress is not about lack of knowledge">
            {t("notAboutLack")}
          </p>
        </section>

        <section className="exam-stress-section" title="Stress during heavy studying">
          <h2 title="Studying with heavy syllabus">{t("whenStudyingHeavy")}</h2>
          <p title="Students often feel overwhelmed">
            {t("studentsOften")}
          </p>
          <p title="Continuous pressure from preparation">
            {t("continuousPressure")}
          </p>
          <p title="Understanding different stress phases">
            {t("understandingHelps")}
          </p>
        </section>

        <section className="exam-stress-section" title="Stress before exams">
          <h2 title="Pre-examination stress">{t("beforeExam")}</h2>
          <p title="As exams approach">
            {t("asExamsApproach")}
          </p>
          <p title="Stress at this stage">
            {t("atThisStage")}
          </p>
          <p title="Stress reduction techniques">
            {t("stressReduces")}
          </p>
        </section>

        <section className="exam-stress-section" title="Stress during exams">
          <h2 title="During examination">{t("duringExam")}</h2>
          <p title="Worry during the exam">
            {t("manyWorry")}
          </p>
          <p title="When mind is overwhelmed">
            {t("whenMindOverwhelmed")}
          </p>
          <p title="What exams actually test">
            {t("examsTestUnderstanding")}
          </p>
        </section>

        <section className="exam-stress-section" title="Stress after exams">
          <h2 title="Post-examination period">{t("afterExam")}</h2>
          <p title="Stress after exam is over">
            {t("stressDoesNot")}
          </p>
          <p title="Once exam is finished">
            {t("onceExamOver")}
          </p>
          <p title="Recovery time needed">
            {t("recoveryTime")}
          </p>
        </section>

        {/* Notes for Different Groups */}
        <section className="exam-stress-notes" title="Support messages for students, parents, and teachers">
          <h2 title="Voices of support">{t("voicesOfSupport")}</h2>
          <div className="notes-container" title="Cards with support messages for different stakeholders">
            <div className="note-card note-card-students" title="Support message for students experiencing exam stress">
              <div className="note-icon" title="Student icon">🎓</div>
              <h3 title="Note for students">{t("noteForStudents")}</h3>
              <p title="It is okay to feel stressed">
                {t("feelingStressed")}
              </p>
              <p title="Your feelings are valid">
                {t("allowedFeel")}
              </p>
            </div>

            <div className="note-card note-card-parents" title="Support message for parents of exam students">
              <div className="note-icon" title="Family icon">👨‍👩‍👧‍👦</div>
              <h3 title="Note for parents">{t("noteForParents")}</h3>
              <p title="Students absorb parental anxiety">
                {t("studentsOftenAbsorb")}
              </p>
              <p title="Supportive listening techniques">
                {t("listeningWithout")}
              </p>
            </div>

            <div className="note-card note-card-teachers" title="Support message for teachers">
              <div className="note-icon" title="Teacher icon">👨‍🏫</div>
              <h3 title="Note for teachers">{t("noteForTeachers")}</h3>
              <p title="Teachers influence student stress">
                {t("teachersInfluence")}
              </p>
              <p title="Creating supportive classroom environment">
                {t("whenClassrooms")}
              </p>
            </div>
          </div>
        </section>

        {/* Psychology Perspective */}
        <section className="exam-stress-section highlight-section" title="Psychology perspective on exam stress">
          <h2 title="Psychology and exam stress">{t("psychologyPerspective")}</h2>
          <p title="Psychology research on stress">
            {t("psychologyShows")}
          </p>
          <p title="Importance of calmness">
            {t("calmnessSup")}
          </p>
        </section>

        {/* Boundary */}
        <section className="exam-stress-section boundary-box" title="Important boundary and disclaimer">
          <h3 title="Important disclaimer">{t("importantBoundary")}</h3>
          <p title="Ishan Learning scope and limitations">
            {t("ishanDoesNot")}
          </p>
          <p title="When to seek professional help">
            {t("studentExperiencing")}
          </p>
        </section>

        {/* Closing Reflection */}
        <section className="exam-stress-section highlight-section" title="Gentle closing thoughts">
          <h2 title="Closing reflection">{t("gentleClosing")}</h2>
          <p title="Importance of exams">
            {t("examsAreImportant")}
          </p>
          <p title="Self-care during exam period">
            {t("takingCare")}
          </p>
        </section>

        {/* Practical Techniques */}
        <section className="exam-stress-techniques" title="Practical techniques for managing exam stress">
          <h2 title="Techniques to reduce exam stress">{t("practicalTechniques")}</h2>
          <p className="intro-text" title="Intro to exam stress management">
            {t("examStressUsually")}
          </p>
          <p className="intro-text" title="How techniques can help">
            {t("techniquesNot")}
          </p>

          <ol className="techniques-grid" title="Grid of practical stress management techniques">
            <li className="technique-card" title="Technique 1: Strengthen conceptual understanding">
              <h3 title="Strengthen foundation">{t("strengthen")}</h3>
              <p title="Biggest source of exam anxiety">
                {t("oneOfBiggest")}
              </p>
              <p title="How to begin building strong foundation">
                {t("insteadBegin")}
              </p>
              <p title="How understanding reduces stress">
                {t("whenMindRec")}
              </p>
            </li>

            <li className="technique-card" title="Technique 2: Break down syllabus">
              <h3 title="Break syllabus into manageable parts">{t("breakSyllabus")}</h3>
              <p title="Problem of looking at entire syllabus">
                {t("lookingAtEntire")}
              </p>
              <p title="During each study session">
                {t("duringEachStudy")}
              </p>
              <p title="How mind copes better">
                {t("mindCopes")}
              </p>
            </li>

            <li className="technique-card" title="Technique 3: Use active recall">
              <h3 title="Use active recall for studying">{t("useActiveRecall")}</h3>
              <p title="Problem of passive reading">
                {t("readingSame")}
              </p>
              <p title="After studying use recall">
                {t("afterStudying")}
              </p>
              <p title="How confidence grows">
                {t("confidenceGrows")}
              </p>
            </li>

            <li className="technique-card" title="Technique 4: Practice with time limits">
              <h3 title="Timed practice questions">{t("practiceWithTime")}</h3>
              <p title="Benefits of timed practice">
                {t("timedPractice")}
              </p>
              <p title="How to practice occasionally">
                {t("occasionallyPractise")}
              </p>
              <p title="How brain learns under time pressure">
                {t("whenBrain")}
              </p>
            </li>

            <li className="technique-card" title="Technique 5: Create simple revision notes">
              <h3 title="Simple revision notes in final days">{t("createSimple")}</h3>
              <p title="In final preparation days">
                {t("inFinalDays")}
              </p>
              <p title="Simple revision notes approach">
                {t("simpleRevision")}
              </p>
              <p title="What revision does not need">
                {t("revisionDoesNot")}
              </p>
            </li>

            <li className="technique-card" title="Technique 6: Calm your body">
              <h3 title="Calming techniques for body">{t("calmBody")}</h3>
              <p title="Stress is physical">
                {t("stressNot")}
              </p>
              <p title="Between study sessions">
                {t("betweenStudy")}
              </p>
              <p title="Slow breathing technique">
                {t("slowBreathing")}
              </p>
            </li>

            <li className="technique-card" title="Technique 7: Stop studying when exhausted">
              <h3 title="Stop studying when tired">{t("stopStudying")}</h3>
              <p title="Problem of studying exhausted">
                {t("studyingExhausted")}
              </p>
              <p title="When mental fatigue sets in">
                {t("whenMentalFatigue")}
              </p>
              <p title="Benefits of taking breaks">
                {t("takingBreaks")}
              </p>
            </li>

            <li className="technique-card" title="Technique 8: Reduce comparison">
              <h3 title="Reduce comparison with others">{t("reduceComparison")}</h3>
              <p title="Comparing with others preparation">
                {t("comparingPreparation")}
              </p>
              <p title="Seeing someone more prepared">
                {t("seeingSomeone")}
              </p>
              <p title="During your preparation phase">
                {t("duringPhase")}
              </p>
            </li>
          </ol>

          <div className="reminder-box" title="Gentle reminder about exam stress">
            <h3 title="Gentle reminder">{t("gentleReminder")}</h3>
            <p title="Feeling stressed is normal">
              {t("feelingStressedNot")}
            </p>
            <p title="Your goal during exams">
              {t("yourGoalNot")}
            </p>
          </div>
        </section>

        {/* Exam Day Calm Routine */}
        <section className="exam-stress-routine" title="Exam day calm routine and strategies">
          <h2 title="Exam day calm routine">{t("examDayCalm")}</h2>
          <p className="intro-text" title="Goal on exam day">
            {t("goalOnExam")}
          </p>
          <p className="intro-text" title="Routine coverage">
            {t("routineCov")}
          </p>

          <ol className="routine-cards" title="Exam day routine cards">
            <li className="routine-card" title="Before leaving home on exam day">
              <h3 title="Before leaving for exam">{t("beforeLeavingFor")}</h3>
              <p title="On exam morning">
                {t("onExamMorning")}
              </p>
              <p title="Limit revision to familiar material">
                {t("limitRevisionFamiliar")}
              </p>
              <p title="Breathing before leaving home">
                {t("beforeLeavingHome")}
              </p>
            </li>

            <li className="routine-card" title="Just before entering exam hall">
              <h3 title="Just before entering exam">{t("justBeforeEntering")}</h3>
              <p title="Anxiety peaks before exam">
                {t("anxietyOftenPeaks")}
              </p>
              <p title="Avoid last minute revision">
                {t("avoidLastMinute")}
              </p>
              <p title="Bring attention to senses">
                {t("bringYourAttention")}
              </p>
            </li>

            <li className="routine-card" title="During exam day">
              <h3 title="During examination">{t("duringExamDay")}</h3>
              <p title="When you receive exam paper">
                {t("whenYouReceive")}
              </p>
              <p title="If question is difficult">
                {t("ifQuestion")}
              </p>
              <p title="If anxious thoughts arise">
                {t("ifYourThoughts")}
              </p>
            </li>

            <li className="routine-card" title="If you feel blank during exam">
              <h3 title="Feeling blank during exam">{t("ifYouFeel")}</h3>
              <p title="Feeling blank about topics">
                {t("feelingBlank")}
              </p>
              <p title="What to do when blank">
                {t("ifThisHappens")}
              </p>
            </li>

            <li className="routine-card" title="After finishing exam">
              <h3 title="After finishing exam">{t("afterFinishing")}</h3>
              <p title="Once exam is finished">
                {t("onceExamFinished")}
              </p>
              <p title="What is done is done">
                {t("whatIsDone")}
              </p>
              <p title="Allow your mind to relax">
                {t("allowYourMind")}
              </p>
            </li>

            <li className="routine-card" title="Between multiple exams">
              <h3 title="Between exams">{t("betweenExams")}</h3>
              <p title="If exams are spread over days">
                {t("ifExamsSpread")}
              </p>
              <p title="Carrying stress between exams">
                {t("carryingStress")}
              </p>
            </li>
          </ol>

          <div className="closing-reminder" title="Final closing reminder">
            <p title="Closing reminder about exams">
              <strong>{t("closingReminder")}</strong> {t("examsWithMeasure")}
            </p>
            <p title="Your responsibility during exams">
              {t("yourResponsibility")}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

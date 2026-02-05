"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import "@/styles/wellbeing.css"

export default function WellBeing() {
  const [responses, setResponses] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const statements = [
    "I feel mentally tired or drained because of academic demands",
    "I feel anxious when I think about exams, tests or results",
    "I find it difficult to concentrate even when I want to study",
    "I feel pressure to perform beyond what feels manageable for me",
    "I worry about disappointing parents, teachers or myself",
    "I feel stressed even during breaks or rest time",
    "I compare my academic performance with others and feel inadequate",
    "I feel confused or mentally blank despite putting effort into studying",
    "I feel less confident about my abilities than I used to",
    "I avoid studying at times because it feels emotionally heavy",
    "I feel tense or restless when expectations are high",
    "I feel that academic pressure affects my mood or motivation"
  ]

  const handleResponse = (index: number, response: string) => {
    setResponses({
      ...responses,
      [index]: response
    })
  }

  const handleSubmit = () => {
    if (Object.keys(responses).length === statements.length) {
      setShowResults(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const getResponseSummary = () => {
    const counts = {
      often: 0,
      sometimes: 0,
      rarely: 0
    }
    
    Object.values(responses).forEach(response => {
      if (response === "often") counts.often++
      else if (response === "sometimes") counts.sometimes++
      else if (response === "rarely") counts.rarely++
    })
    
    return counts
  }

  const getRecommendation = () => {
    const summary = getResponseSummary()
    
    if (summary.often > summary.rarely && summary.often > summary.sometimes) {
      return "often"
    } else if (summary.sometimes > summary.rarely && summary.sometimes >= summary.often) {
      return "sometimes"
    } else {
      return "rarely"
    }
  }

  return (
    <div className="app">
      <Header />

      <main className="wellbeing-container">
        {!showResults ? (
          <>
            <section className="wellbeing-hero">
              <h1>Mental Well-Being Self-Reflection</h1>
              <p className="subtitle">Psychology-Informed | Reflective | Non-Clinical</p>
              <p className="tagline">Because learning works best when the mind feels supported, not pressured.</p>
            </section>

            <section className="wellbeing-intro">
              <div className="intro-content">
                <p className="intro-text">
                  This reflection is designed using principles from psychology related to stress, learning and emotional regulation, without applying diagnostic labels.
                </p>
                <div className="disclaimer-box">
                  <h3>⚠️ Important</h3>
                  <p>This is not a diagnosis, counselling session or treatment. It is a psychology-informed awareness tool intended to support reflection, balance and responsible learning.</p>
                </div>
              </div>
            </section>

            <section className="wellbeing-why">
              <div className="why-content">
                <h2>Why This Self-Reflection Exists</h2>
                <p>
                  Academic life often focuses on marks, speed and results. What is discussed less is how students feel internally while trying to learn.
                </p>
                <p>
                  Many students continue studying despite feeling anxious, mentally tired, confused, or emotionally overloaded. Over time, these experiences can affect concentration, confidence, motivation and interest in learning even when the student is capable.
                </p>
                <div className="why-list">
                  <h3>This self-reflection exists to:</h3>
                  <ul>
                    <li>Encourage awareness of mental and emotional experiences related to learning</li>
                    <li>Normalise academic stress without minimising it</li>
                    <li>Help students reflect without fear, judgement or labels</li>
                    <li>Gently indicate when additional support may be helpful</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="wellbeing-reflection">
              <div className="reflection-header">
                <h2>Self-Reflection Statements</h2>
                <p className="instruction">
                  Choose the option that feels most true overall. There is no need to overthink. There are no right or wrong answers. Respond based on your recent experience.
                </p>
              </div>

              <div className="statements-container">
                {statements.map((statement, index) => (
                  <div key={index} className="statement-card">
                    <div className="statement-number">{index + 1}</div>
                    <div className="statement-content">
                      <p className="statement-text">{statement}</p>
                      <div className="response-options">
                        <button
                          className={`response-btn ${responses[index] === "often" ? "active often" : ""}`}
                          onClick={() => handleResponse(index, "often")}
                        >
                          Often
                        </button>
                        <button
                          className={`response-btn ${responses[index] === "sometimes" ? "active sometimes" : ""}`}
                          onClick={() => handleResponse(index, "sometimes")}
                        >
                          Sometimes
                        </button>
                        <button
                          className={`response-btn ${responses[index] === "rarely" ? "active rarely" : ""}`}
                          onClick={() => handleResponse(index, "rarely")}
                        >
                          Rarely
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="submit-section">
                <button 
                  className="submit-btn" 
                  onClick={handleSubmit}
                  disabled={Object.keys(responses).length !== statements.length}
                >
                  {Object.keys(responses).length === statements.length 
                    ? "See My Reflection" 
                    : `Complete all statements (${Object.keys(responses).length}/${statements.length})`}
                </button>
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="wellbeing-results">
              <h2>Understanding Your Responses</h2>
              
              {getRecommendation() === "rarely" && (
                <div className="result-card rarely">
                  <h3>✨ You appear to be managing well</h3>
                  <p>
                    You appear to be managing academic demands reasonably well at the moment. Feeling balanced does not mean challenges will never arise-it suggests that your current coping patterns are helping you handle pressure.
                  </p>
                  <div className="result-note">Keep maintaining what's working for you and remember to take care of yourself.</div>
                </div>
              )}

              {getRecommendation() === "sometimes" && (
                <div className="result-card sometimes">
                  <h3>🌤️ Academic pressure affects you at times</h3>
                  <p>
                    Academic pressure affects you at times, which is very common-especially during busy or exam-related phases. Paying attention to rest, understanding and supportive guidance can help prevent stress from becoming overwhelming.
                  </p>
                  <div className="result-note">Notice when stress increases and reach out early if needed.</div>
                </div>
              )}

              {getRecommendation() === "often" && (
                <div className="result-card often">
                  <h3>🌧️ Academic pressure may be affecting you consistently</h3>
                  <p>
                    Academic pressure may be affecting you more consistently. When stress feels frequent or emotionally heavy, it is important not to manage it alone. Reaching out for support can help restore balance.
                  </p>
                  <div className="result-note">Seeking support is a sign of awareness and self-respect-not weakness.</div>
                </div>
              )}
            </section>

            <section className="wellbeing-support">
              <h2>When Seeking Support Can Be Helpful</h2>
              <p className="support-intro">You may consider reaching out for support if:</p>
              <div className="support-indicators">
                <div className="indicator">
                  <span className="indicator-icon">✓</span>
                  <p>Stress feels constant rather than temporary</p>
                </div>
                <div className="indicator">
                  <span className="indicator-icon">✓</span>
                  <p>You feel emotionally exhausted most days</p>
                </div>
                <div className="indicator">
                  <span className="indicator-icon">✓</span>
                  <p>Academic pressure affects sleep, appetite or daily functioning</p>
                </div>
                <div className="indicator">
                  <span className="indicator-icon">✓</span>
                  <p>You feel stuck or unable to cope on your own</p>
                </div>
              </div>
              <p className="support-note">Seeking support is a sign of awareness and self-respect-not weakness.</p>
            </section>

            <section className="wellbeing-boundaries">
              <h2>Important Boundaries</h2>
              <div className="boundaries-content">
                <p>
                  <strong>Ishan Learning does not provide counselling, therapy or clinical mental health services.</strong> This self-reflection is intended for awareness and learning support only.
                </p>
                <p>If emotional distress feels intense or long-lasting, students are encouraged to seek support from:</p>
                <div className="support-resources">
                  <div className="resource">
                    <span className="resource-icon">👨‍👩‍👧</span>
                    <p>Parents or trusted family members</p>
                  </div>
                  <div className="resource">
                    <span className="resource-icon">🏫</span>
                    <p>Teachers or school counsellors</p>
                  </div>
                  <div className="resource">
                    <span className="resource-icon">🏥</span>
                    <p>Qualified mental health professionals</p>
                  </div>
                  <div className="resource">
                    <span className="resource-icon">📞</span>
                    <p>Appropriate local support services or helplines</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="wellbeing-closing">
              <h2>A Closing Thought</h2>
              <p className="closing-main">
                Your mental well-being is not separate from learning. It shapes how you understand, remember and grow.
              </p>
              <p className="closing-sub">
                Taking time to reflect on how you feel is not a distraction from studies-it is part of learning responsibly.
              </p>
            </section>

            <div className="results-actions">
              <button 
                className="retake-btn"
                onClick={() => {
                  setResponses({})
                  setShowResults(false)
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
              >
                Retake Reflection
              </button>
            </div>
          </>
        )}
      </main>

      <HomeButton />
      <Footer />
    </div>
  )
}

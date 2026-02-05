"use client"

import { useState } from "react"
import "@/styles/faq.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import { useLanguage } from "@/components/language-context"

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      questionKey: "faqQ1",
      answerKey: "faqA1"
    },
    {
      questionKey: "faqQ2",
      answerKey: "faqA2"
    },
    {
      questionKey: "faqQ3",
      answerKey: "faqA3"
    },
    {
      questionKey: "faqQ4",
      answerKey: "faqA4"
    },
    {
      questionKey: "faqQ5",
      answerKey: "faqA5"
    },
    {
      questionKey: "faqQ6",
      answerKey: "faqA6"
    },
    {
      questionKey: "faqQ7",
      answerKey: "faqA7"
    },
    {
      questionKey: "faqQ8",
      answerKey: "faqA8"
    },
    {
      questionKey: "faqQ9",
      answerKey: "faqA9"
    },
    {
      questionKey: "faqQ10",
      answerKey: "faqA10"
    },
    {
      questionKey: "faqQ11",
      answerKey: "faqA11"
    },
    {
      questionKey: "faqQ12",
      answerKey: "faqA12"
    },
    {
      questionKey: "faqQ13",
      answerKey: "faqA13"
    },
    {
      questionKey: "faqQ14",
      answerKey: "faqA14"
    },
    {
      questionKey: "faqQ15",
      answerKey: "faqA15"
    }
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq-page" title="Frequently Asked Questions - Get Answers">
        <Header />
    <div className="faq-container" title="FAQ container with all questions and answers">
      <div className="faq-header" title="FAQ page header">
        <h1 title="Frequently Asked Questions">{t("faq")}</h1>
        <p title="Find answers to common questions">{t("findAnswers")}</p>
      </div>

      <main className="faq-content" title="Main FAQ content section">
        <div className="faq-accordion" title="Accordion with expandable FAQ items">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item" title={`FAQ item ${index + 1}`}>
              <button
                className={`faq-question ${openIndex === index ? "active" : ""}`}
                title={`Click to ${openIndex === index ? "collapse" : "expand"} answer for question ${index + 1}`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="faq-question-text" title="Question text">{t(faq.questionKey)}</span>
                <span className="faq-icon" title="Expand/collapse icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="faq-answer" title="Answer to the question">
                  <p title="Answer text">{t(faq.answerKey)}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <div className="faq-footer" title="FAQ footer with contact information">
        <p title="Message if answer not found">{t("didntFind")}</p>
        <p title="Contact suggestion">
          <a href="/contact" title="Navigate to contact page">{t("contact")}</a> {t("contactUsQuery")}
        </p>
      </div>
          <HomeButton />
    </div>
    <Footer />
    </div>
  )
}

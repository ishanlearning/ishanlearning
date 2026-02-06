"use client"

import "@/styles/contact.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import { useLanguage } from "@/components/language-context"

export default function Contact() {
  const { t } = useLanguage()

  return (
    <div className="contact" title="Contact Ishan Learning - Get in Touch">
      <Header />
      <main className="contact-container" title="Main contact page content">
        <div className="contact-header" title="Contact page header">
          <h1 title="Get in touch with us">{t("getInTouch")}</h1>
          <h2 title="Contact with Ishan Learning">{t("withUs")}</h2>
          <p title="We are here to help">{t("weAreHere")}</p>
        </div>

        <div className="contact-content" title="Contact options and cards">
          <div className="contact-card" title="Academic queries contact card">
            <div className="card-icon" title="Academic icon">📚</div>
            <h3 title="Academic queries section">{t("academicQueries")}</h3>
            <h1>hii this is testing time</h1>
            <p title="For academic questions and support">{t("queriesFor")}</p>

            <div className="contact-actions" title="Action buttons for academic support">
              <a href="https://forms.gle/8fhKYyaFgNyHrG99A" className="contact-button query-button" title="Submit academic query form" target="_blank" rel="noopener noreferrer">
                <span className="button-icon" title="Email icon">✉️</span>
                {t("askQuery")}
              </a>
              <a href="https://forms.gle/KwyZ2Cz2wTqjoYgv6" className="contact-button session-button" title="Request a doubt clearing session" target="_blank" rel="noopener noreferrer">
                <span className="button-icon" title="Calendar icon">📅</span>
                {t("requestSession")}
              </a>
            </div>

            <div className="contact-note" title="Information about academic support">
              <p title="Quick response time">{t("quickResponse")}</p>
              <p title="Personal guidance offered">{t("personalGuidance")}</p>
              <p title="Support for all classes">{t("supportAllClasses")}</p>
            </div>
          </div>

          <div className="contact-card" title="Phone contact card">
            <div className="displayfordex">
            <h3 title="Call us section">{t("callUs")}</h3>
            <div className="card-icon" title="Phone icon">📞</div>
            <div className="phone-section" title="Phone number section">
              <a href="tel:+918006247231" className="phone-link" title="Call Ishan Learning">
                {t("phoneNumber")}
              </a>
            </div>
            </div>
            <p title="Contact by phone">{t("phoneContact")}</p>
            <div className="contact-note" title="Information about phone support">
              <p title="Quick response for urgent queries">{t("callAvailability")}</p>
              <p title="Direct communication">{t("callDirect")}</p>
              <p title="Support for all academic needs">{t("callSupport")}</p>
            </div>
          </div>

          <div className="contact-card" title="Email contact card">
            <div className="card-icon" title="Email icon">✉️</div>
            <h3 title="Email contact section">{t("emailUs")}</h3>
            <p title="Reach out with inquiries">{t("reachOutInquiries")}</p>

            <div className="email-section" title="Email address section">
              <a href="mailto:contactishanlearning@gmail.com" className="email-link" title="Send email to Ishan Learning">
                contactishanlearning@gmail.com
              </a>
            </div>

            <div className="contact-note" title="Information about email support">
              <p title="Response time for emails">{t("responseTime")}</p>
              <p title="Professional support">{t("professional")}</p>
              <p title="All questions welcome">{t("allQuestions")}</p>
            </div>
          </div>
        </div>

        <div className="contact-footer" title="Contact page footer">
          <div className="footer-note" title="Parental awareness notice">
            <p className="note-icon" title="Warning icon">⚠️</p>
            <p title="Parental consent information">{t("parentalAwareness")}</p>
          </div>
        </div>
      </main>
      <HomeButton />
      <Footer />
    </div>
  )
}

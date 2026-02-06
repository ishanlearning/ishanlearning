import "@/styles/why-choose.css"
import { useLanguage } from "@/components/language-context"

export default function WhyChoose() {
  const { t } = useLanguage()
  
  return (
    <section className="why-choose" title="Learn why Ishan Learning is the best choice for online education">
      <div className="why-choose-container" title="Why choose Ishan Learning section">
        <div className="why-choose-content" title="Key reasons and features of choosing Ishan Learning">
          <h2 title="Why choose Ishan Learning heading">{t("whyChooseHeading")}</h2>
          <p title="Description of reasons to choose Ishan Learning">
            {t("whyChooseDesc")}
          </p>

          <div className="features-list" title="List of key features and benefits">
            <div className="feature-item" title="Interactive videos feature">
              <input type="checkbox" checked readOnly title="Feature included" />
              <span title="Interactive videos title">{t("interactiveVideos")}</span>
              <p title="Description of interactive videos feature">{t("interactiveDesc")}</p>
            </div>
            <div className="feature-item" title="NCERT notes feature">
              <input type="checkbox" checked readOnly title="Feature included" />
              <span title="NCERT notes title">{t("ncertNotes")}</span>
              <p title="Description of NCERT notes feature">{t("ncertDesc")}</p>
            </div>
            <div className="feature-item" title="Guidance and wellbeing feature">
              <input type="checkbox" checked readOnly title="Feature included" />
              <span title="Guidance and wellbeing title">{t("guidanceWellbeing")}</span>
              <p title="Description of guidance and wellbeing feature">{t("guidanceDesc")}</p>
            </div>
          </div>
        </div>

        <div className="why-choose-image" title="Query form and submission section">
          <div className="query-form-container" title="Submit your questions container">
            <h2 className="qrtxt" title="Have questions heading">{t("haveQuestions")}</h2>
            <img className="whyimg" src="/qr.jpeg" alt="Query Illustration" width={380} height={380} title="QR code for query submission" />
              <div className="query-instructions" title="Query submission instructions">
              <h2 className="qrtxt" title="Submit your query heading">{t("submitYourQuery")}</h2>
              <a href="https://forms.gle/8fhKYyaFgNyHrG99A" target="_blank" title="Open query form">
              <button className="submit-query-btn" title="Click to submit your questions">{t("submitBtn")}</button>
              </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import "@/styles/terms.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import { useLanguage } from "@/components/language-context"

export default function TermsOfService() {
  const { t } = useLanguage()
  return (
    <div className="terms">
      <Header />
    <div className="terms-container">
      <div className="terms-content">
        <h1>{t("termsOfServices")}</h1>
        <p className="effective-date">{t("effectiveDate")} 01/01/2026</p>

        <p className="intro">
          {t("welcomeToIshan")}
        </p>

        <section>
          <h2>{t("natureAndScope")}</h2>
          <p>
            {t("ishanAcademic")}
          </p>
          <ul>
            <li>{t("conceptualUnderstanding")}</li>
            <li>{t("academicReinforcement")}</li>
            <li>{t("learningGuidance")}</li>
          </ul>
          <p>{t("psychologyContentEduc")}</p>
        </section>

        <section>
          <h2>{t("noClinical")}</h2>
          <p>{t("ishanDoesNotProvide")}</p>
          <ul>
            <li>{t("medicalHealthcare")}</li>
            <li>{t("psychoCounselling")}</li>
            <li>{t("diagnosisTreatment")}</li>
            <li>{t("clinicalAssessment")}</li>
          </ul>
          <p>{t("allGuidanceOffered")}</p>
        </section>

        <section>
          <h2>{t("accessContent")}</h2>
          <ul>
            <li>{t("noUserRegistration")}</li>
            <li>{t("learningResourcesProvided")}
              <ul>
                <li>{t("externalYoutube")}</li>
                <li>{t("downloadablePDF")}</li>
              </ul>
            </li>
            <li>{t("allContentIntended")}</li>
          </ul>
        </section>

        <section>
          <h2>{t("askQueryRequest")}</h2>
          <p>{t("usersVoluntarily")}</p>
          <ul>
            <li>{t("academicQueries")}</li>
            <li>{t("requestsLearning")}</li>
          </ul>
          <p>{t("bySubmittingForm")}</p>
          <ul>
            <li>{t("informationProvided")}</li>
            <li>{t("communicationMay")}</li>
            <li>{t("submissionForm")}</li>
            <li>{t("ishanReserves")}</li>
          </ul>
        </section>

        <section>
          <h2>{t("userResponsibilities")}</h2>
          <p>{t("usersAgree")}</p>
          <ul>
            <li>{t("useWebsite")}</li>
            <li>{t("refrainfromMisuse")}</li>
            <li>{t("notReproduce")}</li>
          </ul>
        </section>

        <section>
          <h2>{t("intellectualProperty")}</h2>
          <ul>
            <li>{t("allOriginal")}</li>
            <li>{t("contentAccessed")}</li>
            <li>{t("pdfResources")}</li>
            <li>{t("unauthorizedCopying")}</li>
          </ul>
        </section>

        <section>
          <h2>{t("thirdPartyPlatforms")}</h2>
          <p>{t("websiteContains")}</p>
          <ul>
            <li>{t("youTube")}</li>
            <li>{t("googleForms")}</li>
          </ul>
          <p>{t("ishanDoesNotControl")}</p>
        </section>

        <section>
          <h2>{t("limitationResponsibility")}</h2>
          <p>{t("ishanShallNot")}</p>
          <ul>
            <li>{t("academicPerformance")}</li>
            <li>{t("emotionalResponses")}</li>
            <li>{t("technicalIssues")}</li>
          </ul>
          <p>{t("useWebsiteAt")}</p>
        </section>

        <section>
          <h2>{t("modificationDiscontinuation")}</h2>
          <p>{t("ishanReservesRight")}</p>
          <ul>
            <li>{t("modifyUpdate")}</li>
            <li>{t("introduceNew")}</li>
            <li>{t("changeWebsite")}</li>
          </ul>
          <p>{t("withoutNotice")}</p>
        </section>

        <section>
          <h2>{t("amendmentsTerms")}</h2>
          <p>{t("termsServices")}</p>
          <p>{t("continuedUse")}</p>
        </section>

        <section>
          <h2>{t("governingLaw")}</h2>
          <p>{t("termsShallGoverned")}</p>
        </section>

        <section>
          <h2>{t("contactInformation")}</h2>
          <p>{t("forAnyQuestions")}</p>
          <ul className="contact-list">
            <li>{t("emailAddress")}</li>
            <li>{t("websiteIshan")}</li>
          </ul>
        </section>
      </div>
    </div>
        <HomeButton />
        <Footer />
    </div>
  )
}

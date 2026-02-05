"use client";

import "@/styles/privacy.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HomeButton from "@/components/home-button";
import { useLanguage } from "@/components/language-context";

export default function PrivacyPolicy() {
  const { t } = useLanguage()
  
  return (
    <div>
      <Header />
      <div className="privacy-container">
        <div className="privacy-content">
          <h1>{t("privacyPolicy")}</h1>
          <p className="effective-date">{t("effectiveDate")} 01/01/2026</p>

          <p className="intro">
            {t("respects")}
          </p>

          <section>
            <h2>{t("accessContent")}</h2>
            <ul>
              <li>
                {t("canAccess")}
              </li>
              <li>{t("noAccount")}</li>
              <li>
                {t("materials")}
                <ul>
                  <li>{t("youtube")}</li>
                  <li>{t("pdf")}</li>
                </ul>
              </li>
              <li>
                {t("notStore")}
              </li>
            </ul>
          </section>

          <section>
            <h2>{t("infoCollect")}</h2>
            <p>
              {t("personalInfo")}
            </p>
            <p>{t("mayInclude")}</p>
            <ul>
              <li>{t("name")}</li>
              <li>{t("email")}</li>
              <li>{t("classDetails")}</li>
              <li>{t("queryMessage")}</li>
            </ul>
            <p>
              {t("collectedOnly")}
            </p>
          </section>

          <section>
            <h2>{t("usedInfo")}</h2>
            <p>{t("receivedUsed")}</p>
            <ul>
              <li>{t("respondQueries")}</li>
              <li>
                {t("provideGuidance")}
              </li>
              <li>{t("improveClarity")}</li>
            </ul>
            <p>
              {t("noSell")}
            </p>
          </section>

          <section>
            <h2>{t("storage")}</h2>
            <ul>
              <li>
                {t("storedSecurely")}
              </li>
              <li>
                {t("noMaintain")}
              </li>
              <li>
                {t("accessedOnly")}
              </li>
            </ul>
          </section>

          <section>
            <h2>{t("cookies")}</h2>
            <ul>
              <li>
                {t("doesNotUse")}
              </li>
              <li>
                {t("externalPlatforms")}
              </li>
            </ul>
          </section>

          <section>
            <h2>{t("thirdParty")}</h2>
            <p>{t("mayLink")}</p>
            <ul>
              <li>{t("googleForms")}</li>
              <li>{t("youtube")}</li>
              <li>{t("otherResources")}</li>
            </ul>
            <p>
              {t("subjectTo")}
            </p>
            <p>
              {t("notResponsible")}
            </p>
          </section>

          <section>
            <h2>{t("childrenPrivacy")}</h2>
            <ul>
              <li>{t("schoolLevel")}</li>
              <li>{t("noAutomatic")}</li>
              <li>
                {t("parentalAware")}
              </li>
            </ul>
          </section>

          <section>
            <h2>{t("clinicalServices")}</h2>
            <ul>
              <li>{t("academicPlatform")}</li>
              <li>
                {t("noMedical")}
              </li>
            </ul>
          </section>

          <section>
            <h2>{t("dataSecurity")}</h2>
            <ul>
              <li>
                {t("reasonableCare")}
              </li>
              <li>
                {t("completeSecurity")}
              </li>
            </ul>
          </section>

          <section>
            <h2>{t("changes")}</h2>
            <p>
              {t("mayUpdated")}
            </p>
            <p>{t("updatesReflected")}</p>
          </section>

          <section>
            <h2>{t("contactInfo")}</h2>
            <p>{t("queriesRelated")}</p>
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
  );
}

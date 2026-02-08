"use client"

import "@/styles/footer.css"
import { useLanguage } from "@/components/language-context"

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <a href="/"><img src="/logonev.jpg" alt="Ishan Learning" width={150} height={100} /></a>
            {/* <h4>Ishan Learning</h4> */}
          </div>
          <p>
           {t("footerTagline")}
          </p>
        </div>

        <div className="footer-section">
          <h4>{t("Explore")}</h4>
          <ul>
            <li>
              <a href="\#classes">{t("footerClass6to8")}</a>
            </li>
            <li>
              <a href="\#classes">{t("footerClass9to10")}</a>
            </li>
            <li>
              <a href="\#classes">{t("footerClass11to12")}</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t("Support")}</h4>
          <ul>
            <li>
              <a href="https://forms.gle/8fhKYyaFgNyHrG99A" target="_blank">{t("footerHelpCenter")}</a>
            </li>
            <li>
              <a href="/faq">{t("footerFAQ")}</a>
            </li>
            <li>
              <a href="/contact">{t("footerContactUs")}</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t("Legal")}</h4>
          <ul>
            <li>
              <a href="/privacy">{t("footerPrivacy")}</a>
            </li>
            <li>
              <a href="/terms">{t("footerTerms")}</a>
            </li>
            {/* <li>
              <a href="#cookies">Cookie Settings</a>
            </li> */}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t("footerCopyright")}</p>
        <div className="footer-socials">
          <a href="https://www.facebook.com/ishanlearning" target="_blank" title="Facebook"><img src="\fb.png" alt="facebook" /></a>
          <a className="linkimg" href="https://x.com/ishanlearning" target="_blank" title="Twitter"><img src="\tw.png" alt="twitter" height={20} width={20} /></a>
          <a href="https://www.instagram.com/ishanlearning/" target="_blank" title="Instagram"><img src="\ins.png" alt="instagrem" /></a>
           <a href="https://www.threads.net/@ishanlearning" target="_blank" title="Theard"><img src="\th.png" alt="Theard" height={32} width={32} /></a>
          <a href="https://t.me/ishanlearning" target="_blank" title="Telegram"><img src="\tel.png" alt="telegram" /></a>
          <a href="https://www.linkedin.com/company/ishanlearning/" target="_blank" title="LinkedIn"><img src="\i.png" alt="linkedin" /></a>
          <a href="https://whatsapp.com/channel/0029VbBxn9r4dTnCnjumby2d" target="_blank" title="WhatsApp"><img src="\w.png" alt="whatsapp" /></a>
          <a href="https://www.youtube.com/@ishanlearning" target="_blank" title="YouTube"><img src="\yt.png" alt="youtube" /></a>
        </div>
      </div>
    </footer>
  )
}

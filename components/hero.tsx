import "@/styles/hero.css";
import { useLanguage } from "@/components/language-context";
import SearchClass from "@/components/search"
// import Image from "@/components/optimized-image"
export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero" title="Ishan Learning - Learn Smart, Stay Confident">
      <div className="hero-container">
        <div className="hero-content">
          {/* <div className="hero-badge">✨ ENROLLMENT OPEN FOR 2024-25</div> */}
          <h1 className="hero-title" title="Class 6 to 12 Online Learning Platform">
            <div className="hero-txt" title="Learn smart with Ishan Learning"> {t("class6to12")}</div>
            <span className="highlight" title="Stay confident in your studies">{t("stayConfident")}</span>
          </h1>
          <a href="https://www.youtube.com/@IshanLearningyt" className="youtubeican" title="Visit Ishan Learning YouTube Channel" target="_blank">
            <div className="socialyt" title="YouTube Play Icon" >
              ▶
            </div>
            <div className="youtubetxt " title="Subscribe to Ishan Learning on YouTube">@IshanLearning</div>
          </a>
          {/* <SearchClass/> */}
          <div className="education-right" title="Education is a right, not a privilege">{t("education_right")}</div>
        </div>

        <div className="hero-right-section" title="Hero section promotional content">
          {/* Search bar */}
          {/* <div className="search-bar">
            <input type="text" placeholder="Search courses..." className="search-input" />
            <button className="search-btn">🔍</button>
          </div> */}
          {/* Logo */}
          <div className="hero-logo" title="Ishan Learning brand logo">
            <div className="logo-placeholder">
              <img src="logo.png" alt="Ishan Learning" className="logo-image" title="Ishan Learning" />
            </div>
          </div>

          {/* Social media icons */}
          <div className="social-icons" title="Connect with Ishan Learning on social media">
            <a href="https://www.facebook.com/ishanlearnings/" className="social-icon" title="Follow Ishan Learning on Facebook" target="_blank">
              <img src="/face.png" alt="Facebook Icon" width={65} height={65} title="Facebook" />
            </a>
            <a href="https://x.com/ishanlearning" className="social-icon" title="Follow Ishan Learning on Twitter" target="_blank">
              <img src="/x.png" alt="Twitter Icon" width={65} height={65} title="Twitter" />
            </a>
            <a href="https://www.instagram.com/learningishan" className="social-icon" title="Follow Ishan Learning on Instagram" target="_blank">
              <img src="/insta.png" alt="Instagram Icon" width={64} height={64} title="Instagram" />
            </a>
            <a href="https://www.threads.net/@ishanlearning" className="social-icon whatsapp" title="Follow Ishan Learning on Thread" target="_blank">
              <img src="/thread.png" alt="Thread Icon" width={50} height={50} title="Thread" />
            </a>
            <a href="https://t.me/ishanlearning" className="social-icon" title="Connect on Telegram" target="_blank">
              <img src="/tele.png" alt="Telegram Icon" width={54} height={54} title="Telegram" />
            </a>
            <a href="https://www.linkedin.com/company/ishanlearning/" className="social-icon whatsapp" title="Connect on LinkedIn" target="_blank">
              <img src="/in.png" alt="LinkedIn Icon" width={45} height={45} title="LinkedIn" />
            </a>
            <a href="https://whatsapp.com/channel/0029VbBxn9r4dTnCnjumby2d" className="social-icon1 whatsapp" title="Chat on WhatsApp" target="_blank">
              <img src="/what.png" alt="WhatsApp Icon" width={45} height={45} title="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

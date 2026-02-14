import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import "@/styles/guidance.css"

export default function Guidance() {
  const { t } = useLanguage()
  
  const cards = [
    {
      icon: "🧘",
      title: t("examStressSupport"),
      description: t("examStressDesc"),
      link: t("readGuide"),
      href: "/exam-stress"
    },
    {
      icon: "🎯",
      title: t("careerAwareness"),
      description: t("careerDesc"),
      link: t("exploreCareers"),
      href: "/careers"
    },
    {
      icon: "❤️",
      title: t("mentalWellbeing"),
      description: t("wellbeingDesc"),
      link: t("startCheck"),
      href: "/wellbeing"
    },
  ]

  return (
    <section className="guidance" id="guidance" title="Guidance and wellbeing support section">
      <div className="guidance-container" title="Guidance and counselling resources">
        <div className="guidance-header" title="Guidance and wellbeing information">
          <h2 title="Guidance and wellbeing corner heading">{t("guidanceWellbeingCorner")}</h2>
          <p title="Motivational message about learning with a calm mind">{t("calmMindLearns")}</p>
        </div>

        <div className="guidance-cards" title="Collection of guidance support cards">
          {cards.map((card, index) => (
            <div key={index} className="guidance-card" title={`${card.title} guidance card`}>
              <div className="card-icon" title={`Icon for ${card.title}`}>{card.icon}</div>
             <h3 className="text1" title={`${card.title} heading`}>{card.title}</h3>
              <p title={`Description of ${card.title} support`}>{card.description}</p>
              {card.href ? (
                <Link href={card.href} className="card-link" title={`Navigate to ${card.title} page`}>
                  {card.link}
                </Link>
              ) : (
                <a href="#" className="card-link" title={card.link}>
                  {card.link}
                </a>
              )}
            </div>
          ))}
        </div>
        <a className="request-a-session" href="https://forms.gle/KwyZ2Cz2wTqjoYgv6" target="_blank" title="Request counselling session from Ishan Learning"> 
          <button className="session-btn" title="Click to request a counselling session">{t("requestCounselling")}</button>
        </a>
      <Link href="\tdy" className="home-button1" target="_blank" title="View today's schedule">
      {/* <span className="home-icon-txt">Today's Class Schedule </span> */}
      </Link>
      </div>
    </section>
  )
}

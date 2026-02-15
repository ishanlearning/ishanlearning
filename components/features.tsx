"use client"
import "@/styles/features.css"
import { useLanguage } from "@/components/language-context"

export default function Features() {
  const { t } = useLanguage()
  
  const features = [
    {
      icon: "🎓",
      title: t("strongConceptual"),
      description: t("conceptDesc"),
    },
    {
      icon: "🌱",
      title: t("holisticGrowthTitle"),
      description: t("holisticDesc"),
    },
    {
      icon: "👥",
      title: t("studentSupportTitle"),
      description: t("studentSupportDesc"),
    },
  ]

  return (
    <section className="features classes-container" title="Learn about our key learning features and approach">
      <h2 title="Our learning approach and philosophy">{t("ourLearningApproach")}</h2>
      <div className="features-container" title="Display of main features and benefits">
        {features.map((feature, index) => (
          <div key={index} className="feature-card" title={`Feature: ${feature.title}`}>
            <div className="feature-icon" title={`Icon for ${feature.title}`}>{feature.icon}</div>
            <h3 title={`${feature.title} feature heading`}>{feature.title}</h3>
            <p title={`Description of ${feature.title}`}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

"use client";

import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HomeButton from "@/components/home-button";
import { useLanguage } from "@/components/language-context";
import "@/styles/beyond.css";

export default function Beyond() {
  const { t } = useLanguage();
  
  const classes = [
    {
      image: "/1.jpg",
      name: t("storiesInspire"),
      button: t("storiesInspireBtn"),
      link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-p9sqQxAqmj0O9BgJgZRRl0",
    },
    {
      image: "/2.jpg",
      name: t("thinkExplore"),
      button: t("thinkExploreBtn"),
      link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-pnBTGJzrjSpErGkZYelMkV",
    },
    {
      image: "/3.jpg",
      name: t("learningMyths"),
      button: t("learningMythsBtn"),
      link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-oBkB3vR8J75fuusBSj9QYK",
    },
    {
      image: "/4.jpg",
      name: t("miniChallenges"),
      button: t("miniChallengesBtn"),
      link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-p32pSgaEVMICYEL1iKCsj1",
    },
    {
      image: "/5.jpg",
      name: t("artCreative"),
      button: t("artCreativeBtn"),
      link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-oKluJose6MvfXnbiVPq-JL",
    },
    {
      image: "/6.jpg",
      name: t("yogaMind"),
      button: t("yogaMindBtn"),
      link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qJwcg285ONy9k8sFp4NXRt",
    },
    {
      image: "/14.jpeg",
       name: t("AroundUs"),
      button: t("AroundUsBtn"),
      link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-qw3lTknYcfqXJh7WPZzPpB",
    },
    {
      image: "/15.jpeg",
      name: t("IndianRoots"),
      button: t("IndianRootsBtn"),
      link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-ry6AS-44k1YiWEPEFAfEhd",
    },
    {
      image: "/16.jpeg",
      name: t("SmartDigitalLife"),
      button: t("SmartDigitalLifeBtn"),
      link: "https://www.youtube.com/playlist?list=PL8LuoZnQO2-pe3U_KepamfIWZv0MBSHNJ",
    },
  ];

  return (
    <div className="app" title="Beyond the Classroom - Explore special learning programs and experiences">
      <Header />

      <main className="beyond-container" title="Beyond the Classroom programs and opportunities">
        <section className="beyond-hero" title="Hero section introducing beyond classroom learning">
          <h1 title="Beyond the Classroom main heading">{t("beyondTheClassroom")}</h1>
          <p title="Description of learning experiences and creativity focus">{t("learningExperienceCreativity")}</p>
        </section>
        <section className="beyond-content" title="Beyond classroom programs and courses">
          {/* <p className="beyond-description">
            Discover unique learning experiences that go beyond traditional textbooks. 
            Each class offers specialized programs designed to unlock creativity and practical skills.
          </p> */}

          <div className="beyond-grid" title="Grid of specialized learning programs">
            {classes.map((cls, index) => (
              <div key={index} className="beyond-card" title={`${cls.name} program card`}>
                <div className="card-image" title={`Image for ${cls.name} program`}>
                  <Image
                    src={cls.image}
                    alt={cls.name}
                    width={180}
                    height={180}
                    title={`${cls.name} program thumbnail`}
                  />
                </div>
                <div className="card-name" title={`Program name: ${cls.name}`}>{cls.name}</div>
                {/* <div className="card-subtitle">Special Programs</div> */}
                <a className="card-button" href={cls.link} target="_blank" title={`Open ${cls.name} playlist on YouTube`}>
                  <button className="card-bt" title={`${cls.button} - Access ${cls.name}`}>{cls.button}</button></a>
              </div>
            ))}
          </div>
        </section>

        {/* <section className="beyond-cta">
          <h2>Ready to Explore Beyond the Classroom?</h2>
          <p>Join our specialized programs and unlock your true potential</p>
          <button className="cta-button">Get Started</button>
        </section> */}
      </main>

      <HomeButton />
      <Footer />
    </div>
  );
}

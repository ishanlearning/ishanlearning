"use client";
import "@/styles/classes.css";
import Link from "next/link";
import { useLanguage } from "@/components/language-context";

export default function Classes() {
  const { t } = useLanguage();
  
  const classes = [
    { path: "/class/6", number: "06", nameKey: "class6" },
    { path: "/class/7", number: "07", nameKey: "class7" },
    { path: "/class/8", number: "08", nameKey: "class8" },
    { path: "/class/9", number: "09", nameKey: "class9" },
    { path: "/class/10", number: "10", nameKey: "class10" },
    { path: "/class/11", number: "11", nameKey: "class11" },
    { path: "/class/12", number: "12", nameKey: "class12" },
  ];

  return (
    <section className="classes" id="classes" title="Browse and select your class level from Class 6 to Class 12">
      <div className="classes-container">
        <h2 title="Explore courses available for your class">{t("exploreYourClass")}</h2>
        <div className="classes-grid" title="Class selection grid showing all available classes">
          {classes.map((cls, index) => (
            <Link href={cls.path} key={index} title={`View courses and content for Class ${cls.number}`}>
              <div className="class-card1" title={`Class ${cls.number} courses`}>
                <div className="class-number" title={`Class number ${cls.number}`}>{cls.number}</div>
                <div className="class-name" title={`Class ${cls.number} name`}>{t(cls.nameKey)}</div>
                <div className="class-courses" title={`View all courses for Class ${cls.number}`}>{t("viewCourses")}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="note" title="Important learning resources message">
        {t("learningResourcesMsg")}
      </div>
      <div className="Schedule" title="Access today's class schedule">
        <div className="Schedule-placeholder">
          <a href="https://drive.google.com/drive/folders/1ld0tHroFusFZ-dJQeeAI3zMh_4o5f2Y6" target="_blank" rel="noopener noreferrer" title="Open today's class schedule in Google Drive">
            <img src="Schedule.jpeg" alt="Today's Class Schedule" className="Schedule-image" title="Today's class schedule" />
            <div className="TDYC" title="View schedule of today's classes">{t("todayClassSchedule")}</div>
          </a>
        </div>
      </div>
      <div className="request-a-session" title="Explore beyond classroom learning opportunities">
        <Link href="/beyond" title="Go to Beyond Classroom page">
          <button className="classbtn" title="Explore learning opportunities beyond the classroom">{t("beyondClassroom")}
            <h5 className="bytxt" title="Description of beyond classroom programs">{t("beyondDesc")}</h5>
          </button>
        </Link>
      </div>
    </section>
  );
}

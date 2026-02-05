"use client"

import { createContext, useState, useContext, type ReactNode, useEffect } from "react"

type Language = "en" | "hi"
type Theme = "light" | "dark"

interface Translations {
  [key: string]: {
    en: string
    hi: string
  }
}

const translations: Translations = {
  home: { en: "Home", hi: "होम" },
  about: { en: "About US", hi: "हमारे बारे में" },
  classes: { en: "Classes", hi: "कक्षाएं" },
  guidance: { en: "Guidance", hi: "मार्गदर्शन" },
  KnowYourTeacher: { en: "Know Your Teacher", hi: "अपने शिक्षक को जानें" },
  continueGoogle: { en: "Continue with Google", hi: "Google के साथ जारी रखें" },
  classHeading: { en: "Class 6 to 12", hi: "कक्षा 6 से 12" },
  learnSmart: { en: "Learn Smart,", hi: "समझ के साथ सीखें," },
  stayConfident: { en: "Stay Confident", hi: "आत्मविश्वास के साथ आगे बढ़ें" },
  academicExcellence: { en: "Academic Excellence", hi: "शैक्षणिक उत्कृष्टता" },
  holisticGrowth: { en: "Holistic Growth", hi: "समग्र विकास" },
  studentSupport: { en: "Student Support", hi: "छात्र सहायता" },
  exploreClass: { en: "Explore Your Class", hi: "अपनी कक्षा चुनें" },
  whyChoose: { en: "Why Indian Students Choose Ishan", hi: "भारतीय छात्र ईशान को क्यों चुनते हैं" },
  guidance_title: { en: "Guidance & Well-Being Corner", hi: "मार्गदर्शन और मानसिक स्वास्थ्य कॉर्नर" },
  learnOnGo: { en: "Learn on the Go", hi: "कहीं भी, कभी भी सीखें" },
  //
  class6: { en: "Class 6", hi: "कक्षा 6" },
  class7: { en: "Class 7", hi: "कक्षा 7" },
  class8: { en: "Class 8", hi: "कक्षा 8" },
  class9: { en: "Class 9", hi: "कक्षा 9" },
  class10: { en: "Class 10", hi: "कक्षा 10" },
  class11: { en: "Class 11", hi: "कक्षा 11" },
  class12: { en: "Class 12", hi: "कक्षा 12" },
  // Hero section
  class6to12: { en: "Class 6 to 12 - Learn Smart,", hi: "कक्षा 6 से 12 - समझ के साथ सीखें," },
  education_right: { en: "Education is a right, not a privilege.", hi: "शिक्षा एक अधिकार है, विशेषाधिकार नहीं।" },
  // Features section
  ourLearningApproach: { en: "Our Learning Approach", hi: "हमारी शिक्षण पद्धति" },
  strongConceptual: { en: "Strong Conceptual Foundation", hi: "मजबूत वैचारिक नींव" },
  conceptDesc: { en: "Clear and structured aligned with CBSC and state boards curricula, helping students understand concepts deeply and learn with confidence without unnecessary stress.", hi: "CBSE और राज्य बोर्ड के पाठ्यक्रम के अनुसार स्पष्ट और व्यवस्थित पढ़ाई, जिससे छात्र गहराई से समझ पाते हैं और बिना अनावश्यक दबाव के आत्मविश्वास के साथ सीखते हैं।" },
  holisticGrowthTitle: { en: "Holistic Growth", hi: "समग्र विकास" },
  holisticDesc: { en: "Focusing on emotional intelligence, confidence building and personality development.", hi: "भावनात्मक समझ, आत्मविश्वास बढ़ाने और व्यक्तित्व विकास पर ध्यान।" },
  studentSupportTitle: { en: "Student Support", hi: "छात्र सहायता" },
  studentSupportDesc: { en: "24/7 access to dedicated mentors who guide you through every academic and personal hurdle.", hi: "शैक्षणिक और व्यक्तिगत चुनौतियों में मार्गदर्शन देने वाले समर्पित मेंटर्स की 24/7 सहायता।" },
  // Classes section
  exploreYourClass: { en: "Explore Your Class", hi: "अपनी कक्षा चुनें" },
  viewCourses: { en: "View Courses →", hi: "कोर्स देखें →" },
  learningResourcesMsg: { en: "Learning resources are being added progressively.", hi: "पढ़ाई से जुड़े संसाधन धीरे-धीरे जोड़े जा रहे हैं।" },
  todayClassSchedule: { en: "Today's Class Schedule", hi: "आज की कक्षाओं की समय-सारणी" },
  beyondClassroom: { en: "Beyond the Classroom", hi: "किताबों से आगे की दुनिया" },
  beyondDesc: { en: "learning through experience, creativity and inspiration", hi: "अनुभव, रचनात्मकता और प्रेरणा के माध्यम से सीखना" },
  // Why Choose section
  whyChooseHeading: { en: "Why Indian Students Choose Ishan", hi: "भारतीय छात्र ईशान को क्यों चुनते हैं" },
  whyChooseDesc: { en: "We understand the unique pressures of the Indian education system. Our approach is designed to produce results while maintaining peace of mind.", hi: "हम भारतीय शिक्षा प्रणाली के दबाव को समझते हैं, हमारा तरीका बेहतर परिणामों के साथ मानसिक शांति बनाए रखने पर भी ध्यान देता है।" },
  interactiveVideos: { en: "Interactive Video Lessons", hi: "इंटरैक्टिव वीडियो पाठ" },
  interactiveDesc: { en: "Engaging content delivered by expert educators.", hi: "विशेषज्ञ शिक्षकों द्वारा प्रदान की गई आकर्षक सामग्री।" },
  ncertNotes: { en: "NCERT Integrated Notes", hi: "एनसीईआरटी एकीकृत नोट्स" },
  ncertDesc: { en: "Comprehensive notes aligned with NCERT textbooks.", hi: "एनसीईआरटी पाठ्यपुस्तकों के अनुरूप विस्तृत नोट्स।" },
  guidanceWellbeing: { en: "Guidance and Mental Wellbeing", hi: "मार्गदर्शन और मानसिक कल्याण" },
  guidanceDesc: { en: "Support that helps you stay confident, focused and consistent.", hi: "सहायता जो आपको आत्मविश्वासी, केंद्रित और सुसंगत रहने में मदद करती है।" },
  haveQuestions: { en: "Have Questions?", hi: "क्या आपके मन में कोई प्रश्न है?" },
  submitYourQuery: { en: "Submit Your Query....", hi: "अपना प्रश्न भेजें...." },
  submitBtn: { en: "Submit", hi: "जमा करें" },
  // Guidance section
  guidanceWellbeingCorner: { en: "Guidance & Well-Being Corner", hi: "मार्गदर्शन और मानसिक स्वास्थ्य कॉर्नर" },
  calmMindLearns: { en: "Because a calm mind learns better. Access curated health resources designed for students.", hi: "क्योंकि शांत मन बेहतर सीखता है। छात्रों के लिए खास तौर पर चुने गए स्वास्थ्य संसाधनों तक पहुँच पाएं।" },
  examStressSupport: { en: "Exam Stress Support", hi: "परीक्षा तनाव सहायता" },
  examStressDesc: { en: "This reflection helps students understand exam stress, recognize its causes and learn simple ways to manage it.", hi: "यह आत्म-चिंतन छात्रों को परीक्षा तनाव को समझने, उसके कारण पहचानने और तनाव प्रबंधन के प्रभावी तरीके विकसित करने में मदद करता है।" },
  readGuide: { en: "Read Guide", hi: "मार्गदर्शिका पढ़ें" },
  careerAwareness: { en: "Career Awareness", hi: "करियर जागरूकता" },
  careerDesc: { en: "Discover your passion. Navigate your way to success.", hi: "अपने जुनून को पहचानें। अपनी सफलता की राह खुद बनाएं।" },
  exploreCareers: { en: "Explore Careers", hi: "करियर के विकल्प देखें" },
  mentalWellbeing: { en: "Mental Well-Being Self-Reflection", hi: "मानसिक कल्याण आत्म-चिंतन" },
  wellbeingDesc: { en: "Because learning works best when the mind feels supported, not pressured.", hi: "क्योंकि सीखना सबसे अच्छा तब होता है, जब मन सुरक्षित महसूस करे और उसे सहारा मिले, न कि दबाव।" },
  startCheck: { en: "Start Check", hi: "जाँच शुरू करें" },
  requestCounseling: { en: "Request a Counseling Session", hi: "परामर्श सत्र का अनुरोध करें" },
  // About Us section
  aboutPageTitle: { en: "About Ishan Learning", hi: "ईशान लर्निंग के बारे में" },
  clarityConfidenceSupport: { en: "Clarity, Confidence and Supportive Learning", hi: "स्पष्टता, आत्मविश्वास और सहायक शिक्षा" },
  ishanLearning: { en: "Ishan Learning", hi: "ईशान लर्निंग" },
  ishanDesc1: { en: "Ishan Learning is a learning support platform designed to work alongside the school education system, not to replace it.", hi: "ईशान लर्निंग एक सहयोगी शिक्षण मंच है, जो स्कूल शिक्षा प्रणाली के साथ मिलकर काम करता है, न कि उसे प्रतिस्थापित करता है।" },
  ishanDesc2: { en: "Schools play a central role in shaping a student's academic foundation. However, due to limited classroom time, syllabus pressure and large class sizes, many students are unable to fully understand what is taught in school. Over time, doubts remain unresolved and learning begins to feel stressful rather than meaningful.", hi: "स्कूल एक छात्र की शैक्षणिक नींव बनाने में महत्वपूर्ण भूमिका निभाते हैं। लेकिन सीमित कक्षा समय, पाठ्यक्रम का दबाव और बड़ी कक्षाओं के कारण कई छात्र स्कूल में पढ़ाई गई बातों को पूरी तरह समझ नहीं पाते। समय के साथ उनके संदेह बने रहते हैं और पढ़ाई सार्थक होने के बजाय तनावपूर्ण लगने लगती है।" },
  ishanDesc3: { en: "Ishan Learning exists to support students in understanding school subjects clearly, strengthening their conceptual foundations and studying with confidence in a calm and supportive learning environment.", hi: "ईशान लर्निंग का उद्देश्य छात्रों को स्कूल के विषयों को स्पष्ट रूप से समझने में सहायता करना, उनकी वैचारिक नींव को मजबूत बनाना और शांत व सहायक शिक्षा वातावरण में आत्मविश्वास के साथ पढ़ाई करने में मदद करना है।" },
  coreBeliefs: { en: "Our Core Belief", hi: "हमारा मूल विश्वास" },
  educationRight: { en: "Education is a right, not a privilege.", hi: "शिक्षा एक अधिकार है, विशेषाधिकार नहीं।" },
  everyStudentDeserves: { en: "We believe every student deserves:", hi: "हम मानते हैं कि प्रत्येक छात्र का अधिकार है:" },
  clearExplanations: { en: "✓ Clear explanations", hi: "✓ स्पष्ट व्याख्या" },
  patientGuidance: { en: "✓ Patient and respectful guidance", hi: "✓ धैर्यपूर्ण और सम्मानजनक मार्गदर्शन" },
  supportiveEnvironment: { en: "✓ A supportive learning environment free from fear and unnecessary pressure", hi: "✓ डर और अनावश्यक दबाव से मुक्त एक सहायक शिक्षा वातावरण" },
  pressureVsFear: { en: "While pressure and fear may push short-term performance, clarity, confidence and emotional safety support long-term learning and growth.", hi: "दबाव और डर भले ही कुछ समय के लिए प्रदर्शन बढ़ा दें, लेकिन लंबे समय की सीख और विकास, स्पष्टता, आत्मविश्वास और भावनात्मक सुरक्षा से ही संभव होता है।" },
  whyCreated: {
  en: "Why Ishan Learning Was Created",
  hi: "ईशान लर्निंग क्यों बनाया गया"
},

whyCreatedIntro: {
  en: "While observing students and common classroom learning patterns, one concern consistently stood out:",
  hi: "छात्रों और कक्षा में पढ़ाई के सामान्य तरीकों को देखते हुए, एक बात बार-बार सामने आई:"
},

manyStudentsCapable: {
  en: "Many students are capable and genuinely interested in learning, yet struggle because:",
  hi: "कई छात्र सक्षम होते हैं और सीखने में सचमुच रुचि रखते हैं, फिर भी उन्हें कठिनाइयों का सामना करना पड़ता है क्योंकि:"
},

lessonsMoveFast: {
  en: "Lessons move too quickly",
  hi: "पाठ बहुत तेज़ी से आगे बढ़ जाते हैं"
},

doubtsUnanswered: {
  en: "Doubts remain unanswered",
  hi: "सवाल और संदेह अनसुलझे रह जाते हैं"
},

examsMoreImportant: {
  en: "Exams become more important than understanding",
  hi: "समझ से ज़्यादा ज़ोर परीक्षाओं पर हो जाता है"
},

pressureIncreases: {
  en: "Academic pressure continues to increase",
  hi: "शैक्षणिक दबाव लगातार बढ़ता जाता है"
},

createdAsSupport: {
  en: "Ishan Learning was created as a learning support system to help students revisit concepts, clear doubts and build confidence-without fear, comparison or unnecessary stress.",
  hi: "ईशान लर्निंग को एक सहयोगी शिक्षण प्रणाली के रूप में बनाया गया है, ताकि छात्र विषयों को दोबारा समझ सकें, अपने संदेह दूर कर सकें और बिना डर, तुलना या अनावश्यक तनाव के आत्मविश्वास बना सकें।"
},

learningWellbeing: {
  en: "Learning and Mental Well-Being",
  hi: "शिक्षा और मानसिक कल्याण"
},

meaningfulLearning: {
  en: "We believe meaningful learning is closely connected to mental calmness and emotional safety.",
  hi: "हम मानते हैं कि सार्थक सीख मानसिक शांति और भावनात्मक सुरक्षा से गहराई से जुड़ी होती है।"
},

noLabels: {
  en: "No Labels or Judgment",
  hi: "कोई लेबल या आकलन नहीं"
},

noLabelsDesc: {
  en: "Students are not labeled or judged",
  hi: "छात्रों को न तो लेबल किया जाता है और न ही परखा जाता है"
},

respectedPace: {
  en: "Respected Pace",
  hi: "सीखने की गति का सम्मान"
},

respectedPaceDesc: {
  en: "Learning pace is respected",
  hi: "हर छात्र की सीखने की गति का सम्मान किया जाता है"
},

fearFree: {
  en: "Fear-Free Learning",
  hi: "डर-मुक्त शिक्षा"
},

fearFreeDesc: {
  en: "Fear-based motivation is avoided",
  hi: "डर पर आधारित पढ़ाई से बचा जाता है"
},

clarityFirst: {
  en: "Clarity First",
  hi: "पहले स्पष्टता"
},

clarityFirstDesc: {
  en: "Clarity and reassurance are prioritised",
  hi: "स्पष्टता और भरोसा सबसे पहले रखा जाता है"
},

clinicalNote: {
  en: "This platform does not provide clinical, counselling or therapeutic services. However, learning is guided with psychological sensitivity, recognising attention span, learning pace and emotional readiness.",
  hi: "यह प्लेटफॉर्म किसी प्रकार की चिकित्सीय या परामर्श सेवाएँ प्रदान नहीं करता। हालांकि, पढ़ाई को मनोवैज्ञानिक समझ के साथ दिशा दी जाती है, जिसमें ध्यान अवधि, सीखने की गति और भावनात्मक स्थिति का ध्यान रखा जाता है।"
},

ourVision: {
  en: "Our Vision",
  hi: "हमारी दृष्टि"
},

visionDesc: {
  en: "To build a supportive learning ecosystem that works in coordination with schools and helps students:",
  hi: "एक ऐसा सहयोगी शिक्षा वातावरण बनाना जो स्कूलों के साथ मिलकर काम करे और छात्रों को:"
},

visionPoint1: {
  en: "Develop strong conceptual understanding",
  hi: "मजबूत वैचारिक समझ विकसित करने में मदद करे"
},

visionPoint2: {
  en: "Reduce academic stress",
  hi: "शैक्षणिक तनाव को कम करे"
},

visionPoint3: {
  en: "Maintain balance between learning and well-being",
  hi: "पढ़ाई और मानसिक कल्याण के बीच संतुलन बनाए रखने में सहायक हो"
},

visionPoint4: {
  en: "Grow into confident and independent learners",
  hi: "आत्मविश्वासी और आत्मनिर्भर शिक्षार्थी बनने में मदद करे"
},

  ourMission: {
  en: "Our Mission",
  hi: "हमारा मिशन"
},

missionDesc: {
  en: "To simplify school-level concepts through clear and structured teaching:",
  hi: "स्पष्ट और व्यवस्थित शिक्षण के माध्यम से स्कूल स्तर की अवधारणाओं को सरल बनाना:"
},

missionPoint1: {
  en: "Reinforce classroom learning rather than compete with schools",
  hi: "स्कूलों से प्रतिस्पर्धा करने के बजाय कक्षा में होने वाली पढ़ाई को मजबूत करना"
},

missionPoint2: {
  en: "Encourage understanding instead of rote memorisation",
  hi: "रटने के बजाय समझ को बढ़ावा देना"
},

missionPoint3: {
  en: "Apply psychology-informed principles related to attention, understanding and learning pace",
  hi: "ध्यान, समझ और सीखने की गति से जुड़े मनोवैज्ञानिक सिद्धांतों को अपनाना"
},

missionPoint4: {
  en: "Support students with responsibility, care and academic integrity",
  hi: "जिम्मेदारी, संवेदनशीलता और शैक्षणिक ईमानदारी के साथ छात्रों का सहयोग करना"
},

whatMakesDifferent: {
  en: "What Makes Ishan Learning Different",
  hi: "ईशान लर्निंग को अलग क्या बनाता है"
},

schoolSupport: {
  en: "School-Supportive Approach",
  hi: "स्कूल के साथ सहयोगी दृष्टिकोण"
},

schoolSupportDesc: {
  en: "We strengthen what students learn in school rather than replacing formal education.",
  hi: "हम औपचारिक शिक्षा को बदलने के बजाय, स्कूल में सीखी गई बातों को और मजबूत करते हैं।"
},

conceptualClarity: {
  en: "Focus on Conceptual Clarity",
  hi: "वैचारिक स्पष्टता पर विशेष ध्यान"
},

conceptualClarityDesc: {
  en: "Priority is given to understanding, revision and doubt resolution.",
  hi: "समझ, दोहराव और संदेह दूर करने को प्राथमिकता दी जाती है।"
},

psychologyInformed: {
  en: "Psychology-Informed Learning",
  hi: "मनोविज्ञान आधारित सीख"
},

psychologyInformedDesc: {
  en: "Teaching is guided by attention span, learning pace and emotional comfort.",
  hi: "पढ़ाई को ध्यान अवधि, सीखने की गति और भावनात्मक सहजता को ध्यान में रखकर आगे बढ़ाया जाता है।"
},

studentCentred: {
  en: "Student-Centred Guidance",
  hi: "छात्र-केंद्रित मार्गदर्शन"
},

studentCentredDesc: {
  en: "Students are supported without comparison, fear or pressure.",
  hi: "छात्रों को बिना तुलना, डर या दबाव के सहयोग दिया जाता है।"
},

whoServe: {
  en: "Who We Serve",
  hi: "हम किनके लिए हैं"
},

  whoServeIntro: {
  en: "Ishan Learning supports:",
  hi: "ईशान लर्निंग इनका सहयोग करता है:"
},

servePoint1: {
  en: "School students seeking clearer understanding of concepts",
  hi: "वे स्कूली छात्र जो विषयों को साफ़ और बेहतर तरीके से समझना चाहते हैं"
},

servePoint2: {
  en: "Learners who need reinforcement beyond classrooms",
  hi: "वे विद्यार्थी जिन्हें कक्षा से आगे अतिरिक्त सहयोग की आवश्यकता होती है"
},

servePoint3: {
  en: "Students experiencing academic pressure or confusion",
  hi: "वे छात्र जो शैक्षणिक दबाव या उलझन का सामना कर रहे हैं"
},

servePoint4: {
  en: "Families looking for balanced and stress-aware learning support",
  hi: "वे परिवार जो संतुलित और तनाव को समझने वाली शिक्षा सहायता चाहते हैं"
},

founder: {
  en: "Founder",
  hi: "संस्थापक"
},

founderName: {
  en: "Abhishek Saini",
  hi: "अभिषेक सैनी"
},

founderTitle: {
  en: "Founder, Ishan Learning",
  hi: "संस्थापक, ईशान लर्निंग"
},

founderDesc1: {
  en: "Ishan Learning was created to support school students in understanding their subjects clearly and studying with confidence.",
  hi: "ईशान लर्निंग को स्कूली छात्रों को विषयों की स्पष्ट समझ देने और आत्मविश्वास के साथ पढ़ाई में सहयोग करने के लिए बनाया गया है।"
},

founderDesc2: {
  en: "The platform is guided by Abhishek Saini, who holds Master's degrees in Psychology and Sociology. He is a Gold Medalist in Psychology, has qualified UGC-NET with JRF in Sociology and is currently pursuing a PhD in Sociology.",
  hi: "यह मंच अभिषेक सैनी के मार्गदर्शन में संचालित है, जिनके पास मनोविज्ञान और समाजशास्त्र में मास्टर डिग्री है। वे मनोविज्ञान में गोल्ड मेडलिस्ट हैं, समाजशास्त्र में JRF के साथ UGC-NET उत्तीर्ण कर चुके हैं और वर्तमान में समाजशास्त्र में पीएचडी कर रहे हैं।"
},

founderDesc3: {
  en: "Drawing from his academic training, Abhishek focuses on clarity-based learning, balanced academic expectations and responsible student guidance.",
  hi: "अपने शैक्षणिक अनुभव के आधार पर, अभिषेक स्पष्टता-आधारित सीख, संतुलित शैक्षणिक अपेक्षाओं और जिम्मेदार छात्र मार्गदर्शन पर ध्यान देते हैं।"
},

founderQuote: {
  en: "When students are given conceptual clarity and patience, learning becomes meaningful rather than stressful.",
  hi: "जब छात्रों को वैचारिक स्पष्टता और धैर्य मिलता है, तब पढ़ाई तनाव नहीं बल्कि एक सार्थक अनुभव बन जाती है।"
},

roleResponsibility: {
  en: "Our Role & Responsibility",
  hi: "हमारी भूमिका और जिम्मेदारी"
},

academicPlatform: {
  en: "Ishan Learning is an academic learning support platform.",
  hi: "ईशान लर्निंग एक शैक्षणिक सहयोगी शिक्षण मंच है।"
},

doesNotReplace: {
  en: "We do not replace schools, formal education systems or clinical or therapeutic services.",
  hi: "हम स्कूलों, औपचारिक शिक्षा प्रणालियों या किसी भी प्रकार की चिकित्सीय या परामर्श सेवाओं का स्थान नहीं लेते।"
},

roleSupport: {
  en: "Our role is to support learning, reinforce understanding and promote a healthy and balanced academic approach.",
  hi: "हमारी भूमिका सीखने में सहयोग करना, समझ को मजबूत करना और एक स्वस्थ व संतुलित शैक्षणिक दृष्टिकोण को बढ़ावा देना है।"
},

joinJourney: {
  en: "Join Our Learning Journey",
  hi: "हमारी सीखने की यात्रा में शामिल हों"
},

schoolsFoundation: {
  en: "We believe schools build the foundation and supportive learning helps strengthen it.",
  hi: "हम मानते हैं कि स्कूल मजबूत नींव बनाते हैं और सहयोगी सीख उसे और सुदृढ़ करती है।"
},

joinInvite: {
  en: "At Ishan Learning, we invite students and parents to be part of a learning journey based on clarity, balance and understanding.",
  hi: "ईशान लर्निंग में हम छात्रों और अभिभावकों को स्पष्टता, संतुलन और समझ पर आधारित सीखने की यात्रा का हिस्सा बनने के लिए आमंत्रित करते हैं।"
},

learnClearly: {
  en: "Learn clearly.",
  hi: "स्पष्ट समझ के साथ सीखें।"
},

 strengthenFoundations: {
  en: "Strengthen foundations.",
  hi: "अपनी नींव मजबूत करें।"
},

growConfidence: {
  en: "Grow with confidence.",
  hi: "आत्मविश्वास के साथ आगे बढ़ें।"
},

// Beyond the Classroom section
beyondTheClassroom: {
  en: "Beyond the Classroom",
  hi: "किताबों से आगे की दुनिया"
},

learningExperienceCreativity: {
  en: "Learning through experience, creativity and inspiration",
  hi: "अनुभव, रचनात्मकता और प्रेरणा के माध्यम से सीखना"
},

storiesInspire: {
  en: "Real stories that spark dreams, build confidence and shape strong values.",
  hi: "असली कहानियाँ जो सपनों को जगाती हैं, आत्मविश्वास बढ़ाती हैं और मजबूत मूल्यों को गढ़ती हैं।"
},

storiesInspireBtn: {
  en: "Stories That Inspire",
  hi: "प्रेरक कहानियाँ"
},

thinkExplore: {
  en: "Ask questions, explore ideas and learn how to think, not just memorize.",
  hi: "सवाल पूछें, नए विचारों को तलाशें और रटने के बजाय सोचने की कला सीखें।"
},

thinkExploreBtn: {
  en: "Think & Explore",
  hi: "सोचें और खोजें"
},

learningMyths: {
  en: "Break learning myths, discover the truth and grow with the right mindset.",
  hi: "पढ़ाई से जुड़े भ्रम तोड़ें, सच्चाई समझें और सही सोच के साथ आगे बढ़ें।"
},

learningMythsBtn: {
  en: "Learning Myths & Facts",
  hi: "पढ़ाई के मिथक और तथ्य"
},

miniChallenges: {
  en: "Fun, bite-sized challenges that turn learning into an exciting habit.",
  hi: "मजेदार और छोटे-छोटे चैलेंज, जो सीखने को एक रोमांचक आदत बना देते हैं।"
},

miniChallengesBtn: {
  en: "Mini Challenges",
  hi: "मिनी चैलेंज"
},

artCreative: {
  en: "Create, express and share thoughts through art and imagination.",
  hi: "कला और कल्पना के ज़रिए अपने विचारों को रचें, व्यक्त करें और साझा करें।"
},

artCreativeBtn: {
  en: "Art & Creative Expression",
  hi: "कला और रचनात्मक अभिव्यक्ति"
},

yogaMind: {
  en: "Calm the mind, sharpen focus and build inner strength every day.",
  hi: "मन को शांत करें, ध्यान को तेज़ करें और हर दिन आंतरिक शक्ति विकसित करें।"
},

yogaMindBtn: {
  en: "Yoga & Mind Discipline",
  hi: "योग और मन का अनुशासन"
},
SmartDigitalLife: {
  en: "Learn to use technology wisely for learning, balance and growth.",
  hi: "सीखने, संतुलन बनाए रखने और आगे बढ़ने के लिए तकनीक का समझदारी से उपयोग करें।"
},

AroundUsBtn: {
  en: "Around Us",
  hi: "हमारे चारों ओर"
},
AroundUs: {
  en: "Understand what’s happening around us and how it connects to our lives.",
  hi: "हमारे आसपास हो रही घटनाओं को समझें और जानें कि उनका हमारे जीवन से क्या संबंध है।"
},

IndianRootsBtn: {
  en: "Indian Roots",
  hi: "भारत की जड़ें"
},
IndianRoots: {
  en: "Explore India’s knowledge, culture and timeless ideas in a simple, meaningful way.",
  hi: "भारत के ज्ञान, संस्कृति और कालजयी विचारों को सरल और अर्थपूर्ण रूप में समझें।"
},

SmartDigitalLifeBtn: {
  en: "Smart Digital Life",
  hi: "डिजिटल समझदारी"
},

  // Careers page
  careerAwareness1: {
  en: "Career Awareness",
  hi: "करियर जागरूकता"
},

careerThinkingClearly: {
  en: "Thinking clearly about your future without panic, pressure or comparison",
  hi: "बिना घबराहट, दबाव या तुलना के अपने भविष्य के बारे में स्पष्ट रूप से सोचना"
},

careerNotCertainty: {
  en: "Career awareness is not about reaching certainty early. It is about learning to think clearly about the future without panic, pressure or comparison.",
  hi: "करियर जागरूकता का मतलब जल्दी किसी नतीजे पर पहुँचना नहीं है। इसका मतलब है बिना घबराहट, दबाव या तुलना के भविष्य के बारे में साफ़ सोच पाना सीखना।"
},

careerSupportiveProcess: {
  en: "At Ishan Learning, career awareness is treated as a supportive process. This space exists to help students slow down, reflect and understand that career development happens gradually, not in a single moment.",
  hi: "ईशान लर्निंग में करियर जागरूकता को एक सहयोगी प्रक्रिया के रूप में देखा जाता है। यह स्थान छात्रों को रुककर सोचने, आत्मचिंतन करने और यह समझने में मदद करता है कि करियर का विकास धीरे-धीरे होता है, एक ही पल में नहीं।"
},

whyCareerDifficult: {
  en: "Why Career Conversations Feel Difficult",
  hi: "करियर से जुड़ी बातचीत मुश्किल क्यों लगती है"
},

careerAnxiety: {
  en: "For many students, the word \"career\" brings anxiety. This anxiety usually comes from the idea that one decision will decide everything that follows.",
  hi: "कई छात्रों के लिए \"करियर\" शब्द चिंता पैदा करता है। यह चिंता अक्सर इस सोच से आती है कि एक ही फैसला आगे की पूरी ज़िंदगी तय कर देगा।"
},

careerProcess: {
  en: "Career as a Developing Process",
  hi: "एक विकसित होती प्रक्रिया के रूप में करियर"
},

careersRarely: {
  en: "Careers rarely follow a straight or fixed path. For most people, interests change, skills develop and opportunities appear only after time and exposure.",
  hi: "करियर अक्सर किसी सीधे या तय रास्ते पर नहीं चलते। ज़्यादातर लोगों में समय के साथ रुचियाँ बदलती हैं, कौशल विकसित होते हैं और अवसर अनुभव के बाद सामने आते हैं।"
},

careerAccepting: {
  en: "Career awareness begins with accepting that not knowing everything yet is part of the process.",
  hi: "करियर जागरूकता की शुरुआत इस बात को स्वीकार करने से होती है कि अभी सब कुछ न जानना भी इस प्रक्रिया का हिस्सा है।"
},

// Contact page
getInTouch: {
  en: "Get in Touch",
  hi: "संपर्क में रहें"
},

withUs: {
  en: "With Us",
  hi: "हमसे जुड़ें"
},

weAreHere: {
  en: "We're here to help with your academic journey",
  hi: "हम आपकी शैक्षणिक यात्रा में आपकी मदद के लिए यहाँ हैं"
},

academicQueries: {
  en: "Academic Queries & Guidance",
  hi: "शैक्षणिक प्रश्न और मार्गदर्शन"
},

queriesFor: {
  en: "For questions related to learning, concepts or guidance requests, please use:",
  hi: "पढ़ाई, विषयों या मार्गदर्शन से जुड़े प्रश्नों के लिए कृपया इसका उपयोग करें:"
},

askQuery: {
  en: "Ask Query",
  hi: "प्रश्न पूछें"
},

  requestSession: {
  en: "Request a Session",
  hi: "सत्र के लिए अनुरोध करें"
},

quickResponse: {
  en: "✓ Quick response to your learning questions",
  hi: "✓ आपके पढ़ाई से जुड़े सवालों का तेज़ी से जवाब"
},

personalGuidance: {
  en: "✓ Personalized guidance sessions available",
  hi: "✓ व्यक्तिगत मार्गदर्शन सत्र उपलब्ध"
},

supportAllClasses: {
  en: "✓ Support for all classes (6-12)",
  hi: "✓ कक्षा 6 से 12 तक सभी के लिए सहयोग"
},

callUs: {
  en: "Call Us",
  hi: "हमें कॉल करें"
},

phoneContact: {
  en: "Contact us by phone for quick assistance:",
  hi: "जल्दी सहायता के लिए फोन पर हमसे संपर्क करें:"
},

phoneNumber: {
  en: "+91-8006247231",
  hi: "+91-8006247231"
},

callAvailability: {
  en: " Quick response for urgent queries",
  hi: " जरूरी सवालों के लिए जल्दी जवाब"
},

callDirect: {
  en: " Direct communication with support team",
  hi: " सहायता टीम से सीधा संवाद"
},

callSupport: {
  en: " Available for all academic support needs",
  hi: " सभी शैक्षणिक सहायता के लिए उपलब्ध"
},

emailUs: {
  en: "Email Us",
  hi: "हमें ईमेल करें"
},

reachOutInquiries: {
  en: "Reach out to us directly for any inquiries:",
  hi: "किसी भी जानकारी या सवाल के लिए सीधे हमसे संपर्क करें:"
},

responseTime: {
  en: "✓ We typically respond within 24-48 hours",
  hi: "✓ हम आमतौर पर 24-48 घंटों के भीतर जवाब देते हैं"
},

professional: {
  en: "✓ Professional and supportive communication",
  hi: "✓ पेशेवर और सहयोगपूर्ण संवाद"
},

allQuestions: {
  en: "✓ All your questions are welcome",
  hi: "✓ आपके सभी सवालों का स्वागत है"
},

parentalAwareness: {
  en: "Students below 18 are advised to connect with parental awareness.",
  hi: "18 वर्ष से कम आयु के छात्रों को माता-पिता की जानकारी और सहमति के साथ जुड़ने की सलाह दी जाती है।"
},

// FAQ page
faq: {
  en: "Frequently Asked Questions",
  hi: "अक्सर पूछे जाने वाले प्रश्न"
},

  findAnswers: {
  en: "Find answers to common questions about Ishan Learning",
  hi: "ईशान लर्निंग से जुड़े सामान्य सवालों के जवाब यहाँ पाएँ"
},

didntFind: {
  en: "Didn't find what you're looking for?",
  hi: "जो आप ढूँढ रहे थे, वह नहीं मिला?"
},

contactUsQuery: {
  en: "Contact us or submit your query through our Ask Query form",
  hi: "हमसे संपर्क करें या हमारे ‘प्रश्न पूछें’ फ़ॉर्म के माध्यम से अपना सवाल भेजें"
},

// Privacy page
privacyPolicy: {
  en: "Privacy Policy",
  hi: "गोपनीयता नीति"
},

effectiveDate: {
  en: "Effective Date:",
  hi: "प्रभावी तिथि:"
},

respectsPrivacy: {
  en: "Ishan Learning respects the privacy of all visitors and users. This website is designed to share educational resources and academic guidance. We are committed to transparency and responsible handling of limited information that users may voluntarily share.",
  hi: "ईशान लर्निंग अपने सभी आगंतुकों और उपयोगकर्ताओं की गोपनीयता का सम्मान करता है। यह वेबसाइट शैक्षणिक संसाधन और अकादमिक मार्गदर्शन साझा करने के उद्देश्य से बनाई गई है। हम उन सीमित जानकारियों को पारदर्शिता और जिम्मेदारी के साथ संभालने के लिए प्रतिबद्ध हैं, जिन्हें उपयोगकर्ता स्वेच्छा से साझा करते हैं।"
},

// Terms page
  welcomeToIshan: { en: "Welcome to Ishan Learning. By accessing or using this website, you acknowledge that you have read, understood and agree to be bound by these Terms of Services. If you do not agree with any part of these terms, you are advised to discontinue use of the website.", hi: "ईशान लर्निंग में आपका स्वागत है। इस वेबसाइट का उपयोग या इसे एक्सेस करके, आप यह स्वीकार करते हैं कि आपने इन सेवा की शर्तों को पढ़ लिया है, समझ लिया है और इनके पालन के लिए सहमत हैं। यदि आप इन शर्तों के किसी भी भाग से सहमत नहीं हैं, तो आपको सलाह दी जाती है कि आप इस वेबसाइट का उपयोग बंद कर दें।" },
  natureAndScope: { en: "1. Nature and Scope of the Platform", hi: "1. प्लेटफॉर्म की प्रकृति और दायरा" },
  ishanAcademic: { en: "Ishan Learning is an academic learning support platform created to complement and reinforce the school education system. The platform focuses on:", hi: "ईशान लर्निंग एक शैक्षणिक शिक्षण-सहायता मंच है, जिसे विद्यालयी शिक्षा प्रणाली को पूरक और सुदृढ़ बनाने के उद्देश्य से बनाया गया है। यह मंच निम्नलिखित पर केंद्रित है:" },
  conceptualUnderstanding: { en: "Conceptual understanding of school-level subjects", hi: "स्कूल स्तर के विषयों की वैचारिक समझ" },
  academicReinforcement: { en: "Academic reinforcement and revision", hi: "शैक्षणिक सुदृढ़ीकरण और संशोधन" },
  learningGuidance: { en: "Learning guidance informed by principles of psychology such as attention, motivation, stress awareness and emotional regulation", hi: "ध्यान, प्रेरणा, तनाव जागरूकता और भावनात्मक विनियमन जैसे मनोविज्ञान के सिद्धांतों से सूचित शिक्षण मार्गदर्शन" },
  psychologyContentEduc: { en: "Psychology-related content is provided solely for educational and awareness purposes and does not constitute professional mental health services.", hi: "मनोविज्ञान से संबंधित सामग्री केवल शैक्षणिक और जागरूकता उद्देश्यों के लिए प्रदान की जाती है और पेशेवर मानसिक स्वास्थ्य सेवाओं का गठन नहीं करती है।" },
  noClinical: { en: "2. No Clinical, Counselling or Therapeutic Services", hi: "2. कोई नैदानिक, परामर्श या चिकित्सा सेवाएं नहीं" },
  ishanDoesNotProvide: { en: "Ishan Learning does not provide:", hi: "ईशान लर्निंग प्रदान नहीं करता है:" },
termsOfServices: {
  en: "Terms of Services",
  hi: "सेवा की शर्तें"
},
medicalHealthcare: {
  en: "Medical, clinical, counselling or therapeutic services",
  hi: "चिकित्सीय, नैदानिक, परामर्श या चिकित्सा सेवाएं" 
},
welcomeIshan: {
  en: "Welcome to Ishan Learning. By accessing or using this website, you acknowledge that you have read, understood and agree to be bound by these Terms of Services. If you do not agree with any part of these terms, you are advised to discontinue use of the website.",
  hi: "ईशान लर्निंग में आपका स्वागत है। इस वेबसाइट का उपयोग या इसे एक्सेस करके, आप यह स्वीकार करते हैं कि आपने इन सेवा की शर्तों को पढ़ लिया है, समझ लिया है और इनके पालन के लिए सहमत हैं। यदि आप इन शर्तों के किसी भी भाग से सहमत नहीं हैं, तो आपको सलाह दी जाती है कि आप इस वेबसाइट का उपयोग बंद कर दें।"
},

// Teachers page
meetOurTeachers: {
  en: "Meet Our Teachers",
  hi: "हमारे शिक्षकों से मिलें"
},

  experiencedEducators: {
  en: "Experienced educators dedicated to your success",
  hi: "आपकी सफलता के लिए समर्पित अनुभवी शिक्षक"
},

aboutTeachingTeam: {
  en: "About Our Teaching Team",
  hi: "हमारी शिक्षण टीम के बारे में"
},

greatTeachersBackbone: {
  en: "At Ishan Learning, we believe that great teachers are the backbone of meaningful education. Our team consists of experienced educators who are passionate about helping students understand concepts clearly and develop a genuine love for learning.",
  hi: "ईशान लर्निंग में हमारा मानना है कि अच्छे शिक्षक ही सार्थक शिक्षा की नींव होते हैं। हमारी टीम अनुभवी शिक्षकों से बनी है, जो छात्रों को विषयों को स्पष्ट रूप से समझाने और सीखने के प्रति सच्चा लगाव विकसित करने के लिए समर्पित हैं।"
},

uniqueExpertise: {
  en: "Each teacher brings unique expertise and a student-centered approach to ensure that every learner feels supported, valued and confident in their academic journey.",
  hi: "हर शिक्षक अपनी विशेष विशेषज्ञता और छात्र-केंद्रित दृष्टिकोण के साथ पढ़ाते हैं, ताकि हर विद्यार्थी अपनी शैक्षणिक यात्रा में सहयोग, सम्मान और आत्मविश्वास महसूस कर सके।"
},

ourTeachingPhilosophy: {
  en: "Our Teaching Philosophy",
  hi: "हमारी शिक्षण सोच"
},

clarityFirst1: {
  en: "Clarity First",
  hi: "पहले स्पष्टता"
},

clarityRote: {
  en: "We prioritize clear explanations over rote memorization, ensuring students truly understand concepts.",
  hi: "हम रटने के बजाय साफ़ और समझ में आने वाली व्याख्या को प्राथमिकता देते हैं, ताकि छात्र सचमुच विषय को समझ सकें।"
},

studentCentered: {
  en: "Student-Centered",
  hi: "छात्र-केंद्रित"
},

studentCenteredDesc: {
  en: "Every student is unique. We adapt our teaching methods to individual learning styles and pace.",
  hi: "हर छात्र अलग होता है। इसलिए हम अपनी पढ़ाने की विधि को प्रत्येक छात्र की सीखने की शैली और गति के अनुसार ढालते हैं।"
},

conceptualLearning: {
  en: "Conceptual Learning",
  hi: "वैचारिक सीख"
},

conceptualLearningDesc: {
  en: "We focus on building strong conceptual foundations that students can apply across different contexts.",
  hi: "हम ऐसी मजबूत वैचारिक नींव बनाने पर ध्यान देते हैं, जिन्हें छात्र अलग-अलग परिस्थितियों में भी लागू कर सकें।"
},

emotionalSafety: {
  en: "Emotional Safety",
  hi: "भावनात्मक सुरक्षा"
},

emotionalSafetyDesc: {
  en: "A fear-free, supportive environment where students feel confident asking questions and learning.",
  hi: "एक ऐसा भय-मुक्त और सहयोगी माहौल, जहाँ छात्र निसंकोच सवाल पूछ सकें और आत्मविश्वास के साथ सीख सकें।"
},

viewYourTeacher: {
  en: "View Your Teacher",
  hi: "अपने शिक्षक को देखें"
},

meetYourTeacher: {
  en: "Meet Your Teacher",
  hi: "अपने शिक्षक से मिलें"
},

readyToLearn: {
  en: "Ready to Learn?",
  hi: "सीखने के लिए तैयार हैं?"
},

startYourJourney: {
  en: "Start your learning journey with our experienced teachers",
  hi: "हमारे अनुभवी शिक्षकों के साथ अपनी सीखने की यात्रा शुरू करें"
},

exploreClasses: {
  en: "Explore Classes",
  hi: "कक्षाएँ देखें"
},

  // Wellbeing page
  examStressReflection: {
  en: "Exam Stress Reflection",
  hi: "परीक्षा तनाव पर आत्मचिंतन"
},

examinations: {
  en: "Examinations are meant to assess learning, but for many students they also become a major source of pressure. Fear of results, expectations from others and self-doubt can silently affect focus, confidence and emotional balance even when preparation is sincere. This reflection helps students notice how exam-related stress is experienced internally, without judgement or labels.",
  hi: "परीक्षाएँ सीखने का आकलन करने के लिए होती हैं, लेकिन कई छात्रों के लिए वे दबाव का बड़ा कारण भी बन जाती हैं। परिणामों का डर, दूसरों की अपेक्षाएँ और आत्म-संदेह चुपचाप ध्यान, आत्मविश्वास और भावनात्मक संतुलन को प्रभावित कर सकते हैं—यहाँ तक कि जब तैयारी ईमानदारी से की गई हो। यह आत्मचिंतन छात्रों को बिना किसी निर्णय या लेबल के यह समझने में मदद करता है कि परीक्षा से जुड़ा तनाव भीतर कैसे महसूस होता है।"
},

contact: {
  en: "Contact",
  hi: "संपर्क"
},

// Privacy Policy
privacyPolicy1: {
  en: "Privacy Policy",
  hi: "गोपनीयता नीति"
},

effectiveDate1: {
  en: "Effective Date:",
  hi: "प्रभावी तिथि:"
},

respects: {
  en: "Ishan Learning respects the privacy of all visitors and users. This website is designed to share educational resources and academic guidance. We are committed to transparency and responsible handling of limited information that users may voluntarily share.",
  hi: "ईशान लर्निंग अपने सभी आगंतुकों और उपयोगकर्ताओं की गोपनीयता का सम्मान करता है। यह वेबसाइट शैक्षणिक संसाधन और अकादमिक मार्गदर्शन साझा करने के उद्देश्य से बनाई गई है। हम उन सीमित जानकारियों को पारदर्शिता और जिम्मेदारी के साथ संभालने के लिए प्रतिबद्ध हैं, जिन्हें उपयोगकर्ता स्वेच्छा से साझा करते हैं।"
},

accessContent: {
  en: "1. Access to Learning Content",
  hi: "1. शिक्षण सामग्री तक पहुँच"
},

canAccess: {
  en: "Users can access learning content without login or registration",
  hi: "उपयोगकर्ता बिना लॉग-इन या पंजीकरण के शिक्षण सामग्री देख सकते हैं"
},

noAccount: {
  en: "No account creation is required",
  hi: "खाता बनाना आवश्यक नहीं है"
},

materials: {
  en: "Learning materials are shared through:",
  hi: "शिक्षण सामग्री निम्न माध्यमों से साझा की जाती है:"
},

youtube: {
  en: "YouTube playlist links",
  hi: "यूट्यूब प्लेलिस्ट लिंक"
},

pdf: {
  en: "PDF resources",
  hi: "पीडीएफ संसाधन"
},

notStore: {
  en: "Ishan Learning does not store user profiles or learning history.",
  hi: "ईशान लर्निंग उपयोगकर्ता प्रोफ़ाइल या सीखने का इतिहास संग्रहीत नहीं करता।"
},

infoCollect: {
  en: "2. Information We Collect (Only Through Google Forms)",
  hi: "2. हम कौन-सी जानकारी एकत्र करते हैं (केवल गूगल फ़ॉर्म के माध्यम से)"
},

personalInfo: {
  en: "Personal information is collected only when users voluntarily submit a query or request a guidance session through Google Forms linked on this website.",
  hi: "व्यक्तिगत जानकारी केवल तभी एकत्र की जाती है, जब उपयोगकर्ता इस वेबसाइट से जुड़े गूगल फ़ॉर्म के माध्यम से स्वेच्छा से कोई प्रश्न भेजते हैं या मार्गदर्शन सत्र का अनुरोध करते हैं।"
},

mayInclude: {
  en: "The information may include:",
  hi: "इस जानकारी में शामिल हो सकता है:"
},

  name: {
  en: "Name",
  hi: "नाम"
},

email: {
  en: "Email address or contact number",
  hi: "ईमेल पता या संपर्क नंबर"
},

classDetails: {
  en: "Class or academic details",
  hi: "कक्षा या शैक्षणिक विवरण"
},

queryMessage: {
  en: "Query or request message",
  hi: "प्रश्न या अनुरोध संदेश"
},

collectedOnly: {
  en: "This data is collected only for the purpose of responding to the submitted request.",
  hi: "यह जानकारी केवल भेजे गए अनुरोध का उत्तर देने के उद्देश्य से ही एकत्र की जाती है।"
},

usedInfo: {
  en: "3. How Submitted Information Is Used",
  hi: "3. जमा की गई जानकारी का उपयोग कैसे किया जाता है"
},

receivedUsed: {
  en: "Information received through Google Forms is used solely to:",
  hi: "गूगल फ़ॉर्म के माध्यम से प्राप्त जानकारी का उपयोग केवल निम्न उद्देश्यों के लिए किया जाता है:"
},

respondQueries: {
  en: "Respond to user queries",
  hi: "उपयोगकर्ताओं के प्रश्नों का उत्तर देने के लिए"
},

provideGuidance: {
  en: "Provide academic guidance or session-related communication",
  hi: "शैक्षणिक मार्गदर्शन या सत्र से संबंधित संवाद के लिए"
},

improveClarity: {
  en: "Improve clarity and relevance of learning support",
  hi: "शिक्षा सहयोग की स्पष्टता और प्रासंगिकता को बेहतर बनाने के लिए"
},

noSell: {
  en: "We do not sell, rent or share this information with third parties.",
  hi: "हम इस जानकारी को किसी भी तीसरे पक्ष के साथ न तो बेचते हैं, न किराए पर देते हैं और न ही साझा करते हैं।"
},

storage: {
  en: "4. Data Storage and Handling",
  hi: "4. डेटा संग्रह और प्रबंधन"
},

storedSecurely: {
  en: "Submitted information is stored securely within Google Forms",
  hi: "जमा की गई जानकारी गूगल फ़ॉर्म के भीतर सुरक्षित रूप से संग्रहीत रहती है।"
},

noMaintain: {
  en: "Ishan Learning does not maintain a separate cloud database or user management system",
  hi: "ईशान लर्निंग कोई अलग क्लाउड डेटाबेस या उपयोगकर्ता प्रबंधन प्रणाली संचालित नहीं करता है।"
},

accessedOnly: {
  en: "Data is accessed only when required for response or guidance purposes",
  hi: "डेटा को केवल तभी एक्सेस किया जाता है जब उत्तर देने या मार्गदर्शन के लिए आवश्यकता हो।"
},

cookies: {
  en: "5. Cookies and Tracking",
  hi: "5. कुकीज़ और ट्रैकिंग"
},

doesNotUse: {
  en: "Ishan Learning does not use cookies or tracking tools to monitor individual users.",
  hi: "ईशान लर्निंग व्यक्तिगत उपयोगकर्ताओं की निगरानी के लिए किसी भी प्रकार की कुकीज़ या ट्रैकिंग टूल्स का उपयोग नहीं करता है।"
},

externalPlatforms: {
  en: "However, external platforms such as Google or YouTube may apply their own cookies and data practices when accessed through links.",
  hi: "हालाँकि, गूगल या यूट्यूब जैसे बाहरी प्लेटफ़ॉर्म लिंक के माध्यम से एक्सेस किए जाने पर अपनी अलग कुकीज़ और डेटा नीतियाँ लागू कर सकते हैं।"
},

thirdParty: {
  en: "6. Third-Party Platforms",
  hi: "6. तृतीय-पक्ष प्लेटफ़ॉर्म"
},

mayLink: {
  en: "This website may link to:",
  hi: "यह वेबसाइट निम्न प्लेटफ़ॉर्म से जुड़ी हो सकती है:"
},

googleForms: {
  en: "Google Forms",
  hi: "गूगल फ़ॉर्म"
},

otherResources: {
  en: "Other educational resources",
  hi: "अन्य शैक्षणिक संसाधन"
},

subjectTo: {
  en: "Users are subject to the privacy policies of these third-party platforms.",
  hi: "उपयोगकर्ता इन तृतीय-पक्ष प्लेटफ़ॉर्म की गोपनीयता नीतियों के अधीन होते हैं।"
},

notResponsible: {
  en: "Ishan Learning is not responsible for their data collection or practices.",
  hi: "ईशान लर्निंग उनके डेटा संग्रह या कार्यप्रणालियों के लिए जिम्मेदार नहीं है।"
},

childrenPrivacy: {
  en: "7. Children's Privacy",
  hi: "7. बच्चों की गोपनीयता"
},

  schoolLevel: {
  en: "Ishan Learning supports school-level education.",
  hi: "ईशान लर्निंग स्कूल स्तर की शिक्षा का समर्थन करता है।"
},

noAutomatic: {
  en: "No personal data is collected automatically from children",
  hi: "बच्चों से कोई भी व्यक्तिगत जानकारी स्वचालित रूप से एकत्र नहीं की जाती।"
},

parentalAware: {
  en: "Any information submitted through forms should be done with parental or guardian awareness",
  hi: "फ़ॉर्म के माध्यम से दी जाने वाली किसी भी जानकारी में माता-पिता या अभिभावक की जानकारी और सहमति होनी चाहिए।"
},

clinicalServices: {
  en: "8. No Clinical or Counselling Services",
  hi: "8. कोई नैदानिक या परामर्श सेवाएँ नहीं"
},

academicPlatform1: {
  en: "Ishan Learning is an academic learning support platform.",
  hi: "ईशान लर्निंग एक शैक्षणिक सहयोगी शिक्षण मंच है।"
},

noMedical: {
  en: "We do not provide medical, psychological, counselling or therapeutic services and no data is used for diagnosis or treatment.",
  hi: "हम किसी भी प्रकार की चिकित्सीय, मनोवैज्ञानिक, परामर्श या उपचार संबंधी सेवाएँ प्रदान नहीं करते हैं और किसी भी जानकारी का उपयोग निदान या उपचार के लिए नहीं किया जाता।"
},

dataSecurity: {
  en: "9. Data Security",
  hi: "9. डेटा सुरक्षा"
},

reasonableCare: {
  en: "We take reasonable care to handle submitted information responsibly.",
  hi: "हम प्राप्त जानकारी को जिम्मेदारी से संभालने के लिए उचित सावधानी बरतते हैं।"
},

completeSecurity: {
  en: "However, since data transmission occurs online, complete security cannot be guaranteed.",
  hi: "हालाँकि, चूँकि डेटा का आदान-प्रदान ऑनलाइन होता है, इसलिए पूर्ण सुरक्षा की गारंटी नहीं दी जा सकती।"
},

changes: {
  en: "10. Changes to This Privacy Policy",
  hi: "10. इस गोपनीयता नीति में परिवर्तन"
},

mayUpdated: {
  en: "This Privacy Policy may be updated if website features or data practices change.",
  hi: "वेबसाइट की सुविधाओं या डेटा प्रथाओं में बदलाव होने पर इस गोपनीयता नीति को अपडेट किया जा सकता है।"
},

updatesReflected: {
  en: "Any updates will be reflected on this page.",
  hi: "किसी भी अपडेट को इसी पृष्ठ पर दर्शाया जाएगा।"
},

contactInfo: {
  en: "11. Contact Information",
  hi: "11. संपर्क जानकारी"
},

queriesRelated: {
  en: "For queries related to learning support or privacy:",
  hi: "शिक्षा सहयोग या गोपनीयता से जुड़े प्रश्नों के लिए:"
},

// Exam Stress page
examStressPageTitle: {
  en: "Exam Stress Support",
  hi: "परीक्षा तनाव सहायता"
},

notWeakness: {
  en: "Exam stress is not a sign of weakness. It is a common response to pressure, expectations and uncertainty.",
  hi: "परीक्षा का तनाव कमजोरी का संकेत नहीं है। यह दबाव, अपेक्षाओं और अनिश्चितता के प्रति एक सामान्य प्रतिक्रिया है।"
},

notEliminatingCompletely: {
  en: "At Ishan Learning, exam stress support is not about eliminating stress completely. It is about helping students understand what they are experiencing and learning how to manage it in healthier ways.",
  hi: "ईशान लर्निंग में परीक्षा-तनाव सहायता का उद्देश्य तनाव को पूरी तरह खत्म करना नहीं है। इसका उद्देश्य छात्रों को यह समझने में मदद करना है कि वे क्या महसूस कर रहे हैं और उसे स्वस्थ तरीकों से कैसे संभालें।"
},

whyExamStressHappens: {
  en: "Why Exam Stress Happens",
  hi: "परीक्षा का तनाव क्यों होता है"
},

examsCarryMore: {
  en: "Exams carry more than just questions. They often carry expectations from parents, teachers, peers and sometimes from the student themselves.",
  hi: "परीक्षाएँ केवल सवाल ही नहीं लातीं, बल्कि माता-पिता, शिक्षकों, साथियों और कभी-कभी स्वयं छात्र की अपेक्षाएँ भी साथ लाती हैं।"
},

fearOfFailure: {
  en: "Fear of failure, pressure to perform, comparison with others and limited time can make even well-prepared students feel anxious. When stress increases, the mind starts focusing more on outcomes than understanding, which makes learning harder.",
  hi: "असफलता का डर, प्रदर्शन का दबाव, दूसरों से तुलना और समय की कमी अच्छी तैयारी वाले छात्रों को भी चिंतित कर सकती है। जब तनाव बढ़ता है, तो मन समझ के बजाय परिणामों पर अधिक ध्यान देने लगता है, जिससे सीखना कठिन हो जाता है।"
},

pageExistsHelp: {
  en: "This page exists to help students recognise exam stress and respond to it with awareness rather than fear.",
  hi: "यह पृष्ठ छात्रों को परीक्षा-तनाव पहचानने और डर के बजाय जागरूकता के साथ उससे निपटने में मदद करने के लिए है।"
},

understandingExamStress: {
  en: "Understanding Exam Stress",
  hi: "परीक्षा तनाव को समझना"
},

someLevelNormal: {
  en: "Some level of stress before exams is normal. It can increase alertness and motivation.",
  hi: "परीक्षाओं से पहले कुछ स्तर का तनाव सामान्य होता है। यह सतर्कता और प्रेरणा बढ़ा सकता है।"
},

problemsWhenStress: {
  en: "Problems begin when stress becomes excessive or constant. At that point, students may experience difficulty concentrating, mental fatigue, self-doubt or fear of blanking out during exams.",
  hi: "समस्याएँ तब शुरू होती हैं जब तनाव बहुत अधिक या लगातार हो जाता है। ऐसे में एकाग्रता में कठिनाई, मानसिक थकान, आत्म-संदेह या परीक्षा के दौरान ‘ब्लैंक’ हो जाने का डर हो सकता है।"
},

notAboutLack: {
  en: "Exam stress is not always about lack of preparation. Many times, it is about how the mind reacts to pressure.",
  hi: "परीक्षा-तनाव हमेशा तैयारी की कमी का संकेत नहीं होता; कई बार यह इस बात से जुड़ा होता है कि मन दबाव पर कैसे प्रतिक्रिया करता है।"
},

whenStudyingHeavy: {
  en: "When Studying Starts Feeling Heavy",
  hi: "जब पढ़ाई बोझिल लगने लगे"
},

studentsOften: {
  en: "Students often say that despite studying, they feel restless, tired or stuck. This happens when the mind is overloaded and does not get enough space to recover.",
  hi: "छात्र अक्सर कहते हैं कि पढ़ने के बावजूद उन्हें बेचैनी, थकान या अटकाव महसूस होता है। ऐसा तब होता है जब मन पर अधिक बोझ पड़ जाता है और उसे संभलने का समय नहीं मिलता।"
},

continuousPressure: {
  en: "Continuous pressure without rest can reduce efficiency. Studying longer hours does not always mean studying better. Learning becomes more effective when the mind feels calm enough to process information.",
  hi: "आराम के बिना लगातार दबाव कार्यक्षमता घटा सकता है। लंबे समय तक पढ़ना हमेशा बेहतर पढ़ाई नहीं होता। जब मन पर्याप्त रूप से शांत होता है, तब सीखना अधिक प्रभावी होता है।"
},

understandingHelps: {
  en: "Understanding this helps students stop blaming themselves unnecessarily.",
  hi: "यह समझ छात्रों को अनावश्यक रूप से खुद को दोष देने से रोकने में मदद करती है।"
},

beforeExam: {
  en: "Before the Exam: Managing the Build-Up",
  hi: "परीक्षा से पहले: बढ़ते दबाव को संभालना"
},

asExamsApproach: {
  en: "As exams approach, thoughts about results and performance often increase. This can make students feel rushed or panicked.",
  hi: "जैसे-जैसे परीक्षाएँ पास आती हैं, परिणाम और प्रदर्शन को लेकर विचार बढ़ने लगते हैं, जिससे जल्दबाज़ी या घबराहट महसूस हो सकती है।"
},

atThisStage: {
  en: "At this stage, it is important to slow down mentally, focus on what is within control and avoid last-minute comparison. Calm routines, realistic expectations and clarity about revision help reduce anxiety.",
  hi: "इस समय मानसिक रूप से धीमा होना, अपने नियंत्रण में मौजूद बातों पर ध्यान देना और आख़िरी समय की तुलना से बचना ज़रूरी है। शांत दिनचर्या, यथार्थवादी अपेक्षाएँ और दोहराव की स्पष्ट योजना चिंता कम करती है।"
},

stressReduces: {
  en: "Stress reduces when the mind feels prepared and supported, not when it is pushed harder.",
  hi: "तनाव तब कम होता है जब मन तैयार और समर्थित महसूस करता है, न कि जब उस पर और दबाव डाला जाए।"
},

duringExam: {
  en: "During the Exam: Staying Grounded",
  hi: "परीक्षा के दौरान: स्थिर बने रहना"
},

manyWorry: {
  en: "Many students worry about blanking out or losing control during exams. This fear itself can increase anxiety.",
  hi: "कई छात्रों को परीक्षा के दौरान ‘ब्लैंक’ हो जाने या नियंत्रण खोने की चिंता रहती है। यही डर चिंता को और बढ़ा सकता है।"
},

whenMindOverwhelmed: {
  en: "When the mind feels overwhelmed, grounding attention back to the present moment helps. Taking a few calm breaths, reading questions slowly and reminding oneself that stress does not mean failure can bring stability.",
  hi: "जब मन बहुत भारी लगे, तो ध्यान को वर्तमान क्षण में लौटाना मदद करता है। कुछ शांत साँसें लेना, प्रश्न धीरे-धीरे पढ़ना और खुद को याद दिलाना कि तनाव का मतलब असफलता नहीं है, स्थिरता लाता है।"
},

examsTestUnderstanding: {
  en: "Exams test understanding and recall, not perfection.",
  hi: "परीक्षाएँ समझ और याददाश्त को परखती हैं, पूर्णता को नहीं।"
},

afterExam: {
  en: "After the Exam: Letting Go",
  hi: "परीक्षा के बाद: छोड़ पाना सीखना"
},

stressDoesNot: {
  en: "Stress does not always end when the exam ends. Some students continue replaying mistakes or worrying about outcomes.",
  hi: "परीक्षा खत्म होते ही तनाव हमेशा खत्म नहीं होता। कुछ छात्र गलतियों को बार-बार याद करते रहते हैं या परिणामों की चिंता करते रहते हैं।"
},

onceExamOver: {
  en: "Once an exam is over, repeatedly analysing it often increases anxiety without changing results. Learning to let go after effort is an important part of emotional balance.",
  hi: "परीक्षा के बाद बार-बार उसका विश्लेषण करना अक्सर बिना परिणाम बदले चिंता बढ़ाता है। प्रयास के बाद छोड़ पाना सीखना भावनात्मक संतुलन का महत्वपूर्ण हिस्सा है।"
},

recoveryTime: {
  en: "Recovery time is not wasted time. It helps the mind reset for what comes next.",
  hi: "रिकवरी का समय बर्बाद नहीं होता; यह मन को आगे की तैयारी के लिए रीसेट करता है।"
},

voicesOfSupport: {
  en: "Voices of Support",
  hi: "सहयोग की आवाज़ें"
},

  noteForStudents: {
  en: "A Note for Students",
  hi: "छात्रों के लिए एक संदेश"
},

feelingStressed: {
  en: "Feeling stressed during exams does not mean you are weak or incapable. It usually means you care and want to do well.",
  hi: "परीक्षा के दौरान तनाव महसूस होना इस बात का संकेत नहीं है कि आप कमजोर या अक्षम हैं। अक्सर इसका मतलब यही होता है कि आप परवाह करते हैं और अच्छा करना चाहते हैं।"
},

allowedFeel: {
  en: "You are allowed to feel nervous. You are also allowed to rest. Exam stress does not define your intelligence or your future. Learning to manage pressure is a skill that develops with time and practice.",
  hi: "घबराहट महसूस करना भी ठीक है और आराम करना भी पूरी तरह ठीक है। परीक्षा का तनाव आपकी बुद्धिमत्ता या आपके भविष्य को तय नहीं करता। दबाव को संभालना एक ऐसा कौशल है, जो समय और अभ्यास के साथ विकसित होता है।"
},

noteForParents: {
  en: "A Note for Parents",
  hi: "माता-पिता के लिए एक संदेश"
},

studentsOftenAbsorb: {
  en: "Students often absorb stress from the environment around them. Support becomes most helpful when it focuses on reassurance rather than constant reminders.",
  hi: "छात्र अपने आसपास के माहौल से तनाव को आसानी से महसूस कर लेते हैं। जब सहयोग लगातार याद दिलाने के बजाय भरोसा और आश्वासन देता है, तब वह सबसे अधिक सहायक होता है।"
},

listeningWithout: {
  en: "Listening without judgement, avoiding comparison and acknowledging effort can reduce anxiety significantly. When students feel safe, they perform better emotionally and academically.",
  hi: "बिना निर्णय के सुनना, तुलना से बचना और प्रयास को पहचान देना चिंता को काफी हद तक कम कर सकता है। जब छात्र सुरक्षित महसूस करते हैं, तो वे भावनात्मक और शैक्षणिक दोनों रूप से बेहतर प्रदर्शन करते हैं।"
},

noteForTeachers: {
  en: "A Note for Teachers",
  hi: "शिक्षकों के लिए एक संदेश"
},

teachersInfluence: {
  en: "Teachers influence how students perceive exams and failure. Calm communication, realistic expectations and balanced feedback help students manage stress more effectively.",
  hi: "शिक्षक यह तय करने में बड़ी भूमिका निभाते हैं कि छात्र परीक्षा और असफलता को कैसे देखते हैं। शांत संवाद, यथार्थवादी अपेक्षाएँ और संतुलित प्रतिक्रिया छात्रों को तनाव बेहतर ढंग से संभालने में मदद करती हैं।"
},

whenClassrooms: {
  en: "When classrooms emphasise understanding over fear, students develop healthier attitudes toward exams and learning.",
  hi: "जब कक्षा में डर के बजाय समझ को महत्व दिया जाता है, तो छात्र परीक्षाओं और सीखने के प्रति अधिक स्वस्थ दृष्टिकोण विकसित करते हैं।"
},

psychologyPerspective: {
  en: "A Psychology-Informed Perspective",
  hi: "मनोविज्ञान आधारित दृष्टिकोण"
},

psychologyShows: {
  en: "Psychology shows that excessive anxiety interferes with attention, memory and recall. When the nervous system feels threatened, the brain focuses on survival rather than thinking clearly.",
  hi: "मनोविज्ञान बताता है कि अत्यधिक चिंता ध्यान, स्मृति और याददाश्त को बाधित करती है। जब तंत्रिका तंत्र को खतरा महसूस होता है, तो मस्तिष्क स्पष्ट सोच के बजाय केवल बचाव पर केंद्रित हो जाता है।"
},

calmnessSup: {
  en: "Calmness supports learning. Reassurance, structure and emotional safety help students perform closer to their actual ability.",
  hi: "शांति सीखने का सहारा बनती है। भरोसा, संरचना और भावनात्मक सुरक्षा छात्रों को उनकी वास्तविक क्षमता के अधिक करीब प्रदर्शन करने में मदद करती है।"
},

examStressSupport1: {
  en: "Exam stress support focuses on restoring balance, not removing responsibility.",
  hi: "परीक्षा-तनाव सहायता का उद्देश्य जिम्मेदारी हटाना नहीं, बल्कि संतुलन को वापस लाना है।"
},

importantBoundary: {
  en: "Important Boundary",
  hi: "एक महत्वपूर्ण स्पष्टता"
},

ishanDoesNot: {
  en: "Ishan Learning does not provide clinical counselling or therapeutic services through this section. This page offers academic and psychological awareness only.",
  hi: "ईशान लर्निंग इस खंड के माध्यम से किसी भी प्रकार की चिकित्सीय या क्लिनिकल परामर्श सेवाएँ प्रदान नहीं करता। यह पृष्ठ केवल शैक्षणिक और मनोवैज्ञानिक समझ बढ़ाने के उद्देश्य से है।"
},

studentExperiencing: {
  en: "Students experiencing severe or persistent distress are encouraged to seek support from trusted adults, school counsellors or qualified professionals.",
  hi: "जो छात्र गंभीर या लगातार मानसिक परेशानी महसूस कर रहे हों, उन्हें विश्वसनीय वयस्कों, स्कूल काउंसलर या योग्य पेशेवरों से सहायता लेने के लिए प्रोत्साहित किया जाता है।"
},

gentleClosing: {
  en: "A Gentle Closing",
  hi: "एक शांत समापन"
},

examsAreImportant: {
  en: "Exams are important, but they are not everything. They measure performance in a moment, not potential over a lifetime.",
  hi: "परीक्षाएँ महत्वपूर्ण हैं, लेकिन वे सब कुछ नहीं हैं। वे एक क्षण के प्रदर्शन को मापती हैं, जीवनभर की क्षमता को नहीं।"
},

takingCare: {
  en: "Taking care of your mental well-being during exams is not a distraction from success. It is part of learning responsibly.",
  hi: "परीक्षा के दौरान अपने मानसिक स्वास्थ्य का ध्यान रखना सफलता से भटकना नहीं है, बल्कि जिम्मेदारी के साथ सीखने का ही हिस्सा है।"
},

practicalTechniques: {
  en: "Practical Techniques to Reduce Exam Stress",
  hi: "परीक्षा तनाव कम करने की व्यावहारिक तकनीकें"
},

examStressUsually: {
  en: "Exam stress usually increases when the mind feels that everything has to be handled at once. Stress reduces when the mind starts feeling control, clarity and structure.",
  hi: "परीक्षा का तनाव तब बढ़ता है जब मन को लगता है कि सब कुछ एक साथ संभालना है। जब मन को नियंत्रण, स्पष्टता और व्यवस्था महसूस होती है, तो तनाव अपने-आप कम होने लगता है।"
},

techniquesNot: {
  en: "These techniques are not meant to eliminate stress completely. They are meant to lower mental overload and help the mind function more steadily during exam periods.",
  hi: "इन तकनीकों का उद्देश्य तनाव को पूरी तरह खत्म करना नहीं है, बल्कि मानसिक बोझ को कम करना और परीक्षा के समय मन को अधिक स्थिर रखना है।"
},

strengthen: {
  en: "Strengthen What You Already Know",
  hi: "जो आप पहले से जानते हैं, उसे मजबूत करें"
},

oneOfBiggest: {
  en: "One of the biggest sources of exam stress is focusing too much on what is not yet clear.",
  hi: "परीक्षा-तनाव का एक बड़ा कारण उन बातों पर अत्यधिक ध्यान देना होता है, जो अभी स्पष्ट नहीं हैं।"
},

insteadBegin: {
  en: "Instead, begin by identifying topics that you already understand reasonably well. Revising and strengthening these topics builds confidence.",
  hi: "इसके बजाय, उन विषयों से शुरुआत करें जिन्हें आप पहले से ठीक-ठाक समझते हैं। इन्हें दोहराने और मजबूत करने से आत्मविश्वास बढ़ता है।"
},

whenMindRec: {
  en: "When the mind recognises that some areas are already under control, anxiety naturally reduces. Revising strong topics is not avoidance - it is psychological grounding.",
  hi: "जब मन समझ लेता है कि कुछ हिस्से पहले से नियंत्रण में हैं, तो चिंता स्वाभाविक रूप से कम हो जाती है। मजबूत विषयों की पुनरावृत्ति टालना नहीं, बल्कि मानसिक आधार बनाना है।"
},

breakSyllabus: {
  en: "Break the Syllabus Into Manageable Units",
  hi: "पाठ्यक्रम को छोटे और प्रबंधनीय हिस्सों में बाँटें"
},

lookingAtEntire: {
  en: "Looking at the entire syllabus at once often overwhelms the mind. A more effective approach is to divide the syllabus into small, manageable parts.",
  hi: "पूरे पाठ्यक्रम को एक साथ देखने से मन पर बोझ पड़ता है। बेहतर यह है कि उसे छोटे-छोटे, संभालने योग्य हिस्सों में बाँट दिया जाए।"
},

duringEachStudy: {
  en: "During each study session, focus only on a short and realistic target. Instead of thinking about finishing everything, focus on handling the next 40-60 minutes.",
  hi: "हर अध्ययन सत्र में केवल एक छोटे और यथार्थवादी लक्ष्य पर ध्यान दें। सब कुछ खत्म करने के बजाय अगले 40-60 मिनट को अच्छे से संभालने पर ध्यान केंद्रित करें।"
},

mindCopes: {
  en: "The mind copes better with present tasks than future pressure.",
  hi: "मन भविष्य के दबाव की तुलना में वर्तमान कामों को बेहतर तरीके से संभाल पाता है।"
},

useActiveRecall: {
  en: "Use Active Recall Instead of Repeated Reading",
  hi: "बार-बार पढ़ने के बजाय सक्रिय याद का उपयोग करें"
},

readingSame: {
  en: "Reading the same material again and again may create familiarity, but it does not always create confidence.",
  hi: "एक ही सामग्री को बार-बार पढ़ना परिचित तो बना सकता है, लेकिन यह हमेशा आत्मविश्वास नहीं देता।"
},

afterStudying: {
  en: "After studying a topic, pause and try to recall the key ideas without looking at the book. This process strengthens memory and reduces fear related to forgetting during exams.",
  hi: "किसी विषय को पढ़ने के बाद थोड़ी देर रुकें और बिना किताब देखे मुख्य बिंदुओं को याद करने की कोशिश करें। इससे स्मृति मजबूत होती है और परीक्षा में भूल जाने का डर कम होता है।"
},

confidenceGrows: {
  en: "Confidence grows from recall, not from repeated reading.",
  hi: "आत्मविश्वास बार-बार पढ़ने से नहीं, बल्कि याद कर पाने से बढ़ता है।"
},

practiceWithTime: {
  en: "Practice With Time, Without Judging Yourself",
  hi: "समय के साथ अभ्यास करें, खुद को कठोरता से आँके बिना"
},

timedPractice: {
  en: "Timed practice is often seen as stressful, but when used correctly, it reduces exam fear.",
  hi: "समयबद्ध अभ्यास को अक्सर तनावपूर्ण माना जाता है, लेकिन सही तरीके से किया जाए तो यह परीक्षा के डर को कम करता है।"
},

occasionallyPractise: {
  en: "Occasionally practise answering questions within a time limit, without judging your performance harshly. The goal is not perfection, but familiarity with time pressure.",
  hi: "कभी-कभी समय सीमा में प्रश्न हल करने का अभ्यास करें, बिना अपने प्रदर्शन को कठोरता से परखे। उद्देश्य पूर्णता नहीं, बल्कि समय के दबाव से परिचित होना है।"
},

whenBrain: {
  en: "When the brain experiences exam-like situations calmly, stress reduces.",
  hi: "जब मस्तिष्क परीक्षा जैसी स्थितियों को शांत तरीके से अनुभव करता है, तो तनाव धीरे-धीरे कम हो जाता है।"
},

createSimple: {
  en: "Create a Simple and Realistic Revision Loop",
  hi: "एक सरल और व्यावहारिक पुनरावृत्ति योजना बनाएँ"
},

inFinalDays: {
  en: "In the final days before exams, trying to learn new topics often increases stress.",
  hi: "परीक्षा से ठीक पहले के दिनों में नए विषय सीखने की कोशिश अक्सर तनाव बढ़ा देती है।"
},

simpleRevision: {
  en: "A simple revision loop works better. Begin with topics you are confident in, then review moderately difficult areas and finally take a brief overview of remaining content.",
  hi: "एक सरल पुनरावृत्ति क्रम अधिक प्रभावी होता है। पहले उन विषयों को दोहराएँ जिनमें आप आत्मविश्वासी हैं, फिर मध्यम कठिन विषयों पर जाएँ और अंत में बाकी हिस्सों का हल्का-सा अवलोकन करें।"
},

revisionDoesNot: {
  en: "Revision does not mean making everything perfect. It means keeping concepts familiar and accessible.",
  hi: "पुनरावृत्ति का मतलब सब कुछ परिपूर्ण बनाना नहीं है, बल्कि अवधारणाओं को परिचित और सुलभ बनाए रखना है।"
},

calmBody: {
  en: "Calm the Body to Calm the Mind",
  hi: "मन को शांत करने के लिए शरीर को शांत करें"
},

  stressNot: {
  en: "Stress is not only mental; it is physical as well. If the body feels tense or restless, the mind cannot stay calm.",
  hi: "तनाव केवल मानसिक नहीं होता, यह शारीरिक भी होता है। यदि शरीर तनावग्रस्त या बेचैन महसूस करता है, तो मन भी शांत नहीं रह पाता।"
},

betweenStudy: {
  en: "Between study sessions, take short breaks. Walk a little, drink water, stretch lightly or practise slow breathing.",
  hi: "अध्ययन सत्रों के बीच छोटे ब्रेक लें। थोड़ा टहलें, पानी पिएँ, हल्का स्ट्रेच करें या धीमी साँस लेने का अभ्यास करें।"
},

slowBreathing: {
  en: "Slow breathing sends a signal to the nervous system that the situation is safe.",
  hi: "धीमी साँसें तंत्रिका तंत्र को यह संकेत देती हैं कि स्थिति सुरक्षित है।"
},

stopStudying: {
  en: "Stop Studying When the Mind Is Exhausted",
  hi: "जब मन थक जाए, तो पढ़ाई रोक दें"
},

studyingExhausted: {
  en: "Studying with an exhausted mind often feels unproductive and increases frustration.",
  hi: "थके हुए मन से पढ़ाई करना अक्सर प्रभावी नहीं होता और निराशा बढ़ा देता है।"
},

whenMentalFatigue: {
  en: "When mental fatigue sets in, continuing to study becomes punishment rather than learning. Rest at the right time improves retention and recall later.",
  hi: "जब मानसिक थकान बढ़ जाती है, तो पढ़ाई सीखने के बजाय बोझ लगने लगती है। सही समय पर आराम करने से बाद में समझ और याददाश्त बेहतर होती है।"
},

takingBreaks: {
  en: "Taking breaks is not lazinessTaking breaks is not laziness. It is a learning strategy.",
  hi: "ब्रेक लेना आलस नहीं है, बल्कि एक प्रभावी सीखने की रणनीति है।"
},

reduceComparison: {
  en: "Reduce Comparison During Exam Periods",
  hi: "परीक्षा के समय तुलना कम करें"
},

comparingPreparation: {
  en: "Comparing preparation levels with others during exam time increases stress rapidly.",
  hi: "परीक्षा के दौरान दूसरों की तैयारी से अपनी तुलना करना तनाव को तेज़ी से बढ़ा देता है।"
},

seeingSomeone: {
  en: "Seeing someone else's progress can make your own preparation feel insufficient, even when it is not. Exam preparation is personal.",
  hi: "किसी और की प्रगति देखकर अपनी तैयारी कम लगने लगती है, जबकि वास्तव में ऐसा नहीं भी हो सकता। परीक्षा की तैयारी हर छात्र के लिए व्यक्तिगत होती है।"
},

duringPhase: {
  en: "During this phase, focus on your clarity and progress rather than others'.",
  hi: "इस समय दूसरों की बजाय अपनी समझ और प्रगति पर ध्यान देना ज़्यादा मददगार होता है।"
},

gentleReminder: {
  en: "A Gentle Reminder for Students",
  hi: "छात्रों के लिए एक सौम्य संदेश"
},

feelingStressedNot: {
  en: "Feeling stressed does not mean you are weak. It often means you care and are putting in effort.",
  hi: "तनाव महसूस करना कमजोरी का संकेत नहीं है। अक्सर इसका मतलब यही होता है कि आप मेहनत कर रहे हैं और आपको परिणाम की परवाह है।"
},

yourGoalNot: {
  en: "Your goal is not perfection. Your goal is to give your best possible effort with a calm and stable mind.",
  hi: "आपका लक्ष्य पूर्णता नहीं है, बल्कि शांत और स्थिर मन के साथ अपना सर्वश्रेष्ठ प्रयास देना है।"
},

examDayCalm: {
  en: "Exam Day Calm Routine",
  hi: "परीक्षा दिवस की शांत दिनचर्या"
},

goalOnExam: {
  en: "The goal on exam day is not to feel completely calm. Some nervousness is normal and expected. The goal is to keep anxiety manageable, so the mind stays stable and functional.",
  hi: "परीक्षा के दिन पूरी तरह शांत महसूस करना लक्ष्य नहीं है। थोड़ी घबराहट सामान्य होती है। लक्ष्य यह है कि चिंता नियंत्रण में रहे ताकि मन स्थिर और कार्यशील बना रहे।"
},

routineCov: {
  en: "This routine covers what to do before the exam, during the exam and after the exam.",
  hi: "यह दिनचर्या परीक्षा से पहले, दौरान और बाद में क्या करना है, इस पर मार्गदर्शन देती है।"
},

beforeLeavingFor: {
  en: "Before Leaving for the Exam",
  hi: "परीक्षा के लिए निकलने से पहले"
},

onExamMorning: {
  en: "On exam morning, the mind often jumps ahead to results, mistakes or difficult questions. Trying to study new topics at this stage usually increases anxiety.",
  hi: "परीक्षा की सुबह मन अक्सर परिणामों, गलतियों या कठिन प्रश्नों के बारे में सोचने लगता है। इस समय नए विषय पढ़ने की कोशिश करना आमतौर पर चिंता बढ़ा देता है।"
},

limitRevisionFamiliar: {
  en: "Limit revision to familiar points only. Focus on what you already know rather than what you have not covered perfectly. Confidence comes from familiarity, not last-minute pressure.",
  hi: "दोहराव को केवल परिचित विषयों तक सीमित रखें। जो आप जानते हैं उस पर ध्यान दें, न कि उस पर जो पूरी तरह तैयार नहीं है। आत्मविश्वास परिचितता से आता है, आख़िरी समय के दबाव से नहीं।"
},

beforeLeavingHome: {
  en: "Before leaving home, take three or four slow, deep breaths. Slow breathing signals safety to the nervous system and helps reduce physical tension.",
  hi: "घर से निकलने से पहले तीन-चार गहरी और धीमी साँसें लें। इससे शरीर का तनाव कम होता है और मन को शांति का संकेत मिलता है।"
},

justBeforeEntering: {
  en: "Just Before Entering the Exam Hall",
  hi: "परीक्षा हॉल में प्रवेश से ठीक पहले"
},

anxietyOftenPeaks: {
  en: "Anxiety often peaks just before entering the exam hall. This is normal.",
  hi: "परीक्षा हॉल में जाने से ठीक पहले चिंता बढ़ जाना सामान्य बात है।"
},

avoidLastMinute: {
  en: "Avoid last-minute discussions, question predictions, or comparison with others. These conversations usually increase confusion and panic.",
  hi: "आख़िरी समय की चर्चाओं, अनुमान लगाने या दूसरों से तुलना करने से बचें। ये बातें अक्सर घबराहट बढ़ाती हैं।"
},

bringYourAttention: {
  en: "Bring your attention to simple physical sensations. Stand comfortably, feel your feet on the ground, and keep your breathing steady. Grounding attention in the present moment helps calm the mind.",
  hi: "अपना ध्यान साधारण शारीरिक अनुभवों पर लाएँ, पैरों को ज़मीन पर महसूस करें, शरीर को ढीला छोड़ें और साँस को सामान्य रखें। इससे मन वर्तमान में टिकता है और शांत होता है।"
},

duringExamDay: {
  en: "During the Exam",
  hi: "परीक्षा के दौरान"
},

whenYouReceive: {
  en: "When you receive the question paper, do not rush. Take one or two minutes to look through the paper calmly.",
  hi: "प्रश्न पत्र मिलते ही जल्दबाज़ी न करें। एक-दो मिनट शांति से पूरे पेपर को देखें।"
},

ifQuestion: {
  en: "If a question increases anxiety, skip it temporarily and move to another one. Stress blocks thinking and forcing yourself to solve a difficult question immediately often increases panic.",
  hi: "यदि कोई प्रश्न घबराहट बढ़ा दे, तो उसे कुछ समय के लिए छोड़कर दूसरे प्रश्न पर जाएँ। तनाव सोचने की क्षमता को रोक देता है।"
},

ifYourThoughts: {
  en: "If your thoughts start racing, pause briefly and slow your breathing for a few seconds. Anxiety does not mean you are blank; it usually means the mind is overloaded.",
  hi: "यदि विचार बहुत तेज़ चलने लगें, तो कुछ सेकंड रुककर साँस को धीमा करें। चिंता का मतलब यह नहीं कि आप भूल गए हैं, बल्कि यह संकेत है कि मन पर अधिक बोझ है।"
},

ifYouFeel: {
  en: "If You Feel Stuck or Blank",
  hi: "यदि आप अटक जाएँ या खाली महसूस करें"
},

feelingBlank: {
  en: "Feeling blank during an exam is a very common experience. It does not reflect your intelligence or preparation.",
  hi: "परीक्षा के दौरान खाली महसूस करना बहुत सामान्य अनुभव है। इसका आपकी बुद्धिमत्ता या तैयारी से सीधा संबंध नहीं होता।"
},

ifThisHappens: {
  en: "If this happens, take your eyes off the paper for a few seconds, relax your shoulders and slow your breathing. Giving the mind a short pause often helps recall return naturally.",
  hi: "ऐसा होने पर कुछ क्षणों के लिए नज़र पेपर से हटाएँ, कंधों को ढीला करें और साँस को धीमा करें। थोड़ी देर का विराम अक्सर याददाश्त को वापस लाने में मदद करता है।"
},

afterFinishing: {
  en: "After Finishing the Exam",
  hi: "परीक्षा पूरी होने के बाद"
},

onceExamFinished: {
  en: "Once the exam is over, many students replay mistakes or compare answers. This usually increases anxiety without changing anything.",
  hi: "परीक्षा के बाद बार-बार उत्तरों की तुलना या गलतियों पर सोचना अक्सर बेवजह चिंता बढ़ाता है।"
},

whatIsDone: {
  en: "What is done cannot be changed. Repeated analysis after the exam does not improve outcomes and only adds mental strain.",
  hi: "जो हो चुका है उसे बदला नहीं जा सकता। परीक्षा के बाद बार-बार विश्लेषण करने से परिणाम नहीं बदलते, केवल मानसिक बोझ बढ़ता है।"
},

allowYourMind: {
  en: "Allow your mind to rest before moving on to the next task.",
  hi: "अगली गतिविधि शुरू करने से पहले अपने मन को थोड़ा आराम करने दें।"
},

betweenExams: {
  en: "Between Exams",
  hi: "परीक्षाओं के बीच"
},

ifExamsSpread: {
  en: "If exams are spread across multiple days, mental recovery between papers is important.",
  hi: "यदि परीक्षाएँ कई दिनों में हों, तो हर पेपर के बीच मानसिक विश्राम बहुत ज़रूरी होता है।"
},

carryingStress: {
  en: "Carrying stress from one exam into the next increases overall anxiety. Treat each exam as a separate event and allow yourself to reset mentally after each one.",
  hi: "एक परीक्षा का तनाव अगली परीक्षा तक ले जाना चिंता बढ़ा देता है। हर परीक्षा को अलग मानें और हर पेपर के बाद खुद को मानसिक रूप से रीसेट करने दें।"
},
reflectionOnlyForAwareness: {
  en: "Reflection is only for awareness, not for judgment.",
  hi: "आत्म-चिंतन केवल जागरूकता के लिए है, न कि निर्णय के लिए।"
},
closingReminder: {
  en: "A Simple Reminder:",
  hi: "एक सहज स्मरण:"
},

examsWithMeasure: {
  en: "Exams measure performance in a moment, not your ability or future.",
  hi: "परीक्षाएँ केवल एक क्षण के प्रदर्शन को मापती हैं, आपकी क्षमता या भविष्य को नहीं।"
},

yourResponsibility: {
  en: "Your responsibility is to give sincere effort with a calm and steady mind, not to be perfect. A calmer mind often performs closer to its actual ability.",
  hi: "आपकी जिम्मेदारी शांत और स्थिर मन के साथ ईमानदार प्रयास करना है, पूर्ण होना नहीं। शांत मन अपनी वास्तविक क्षमता के अधिक करीब प्रदर्शन करता है।"
},

  psychoCounselling: {
  en: "Psychological counselling or psychotherapy",
  hi: "मनोवैज्ञानिक परामर्श या मनोचिकित्सा"
},

diagnosisTreatment: {
  en: "Diagnosis or treatment of mental health conditions",
  hi: "मानसिक स्वास्थ्य से जुड़ी समस्याओं का निदान या उपचार"
},

clinicalAssessment: {
  en: "Clinical assessment of intelligence (IQ), emotional intelligence (EI), personality or psychological disorders",
  hi: "बुद्धिमत्ता (IQ), भावनात्मक बुद्धिमत्ता (EI), व्यक्तित्व या मनोवैज्ञानिक विकारों का नैदानिक मूल्यांकन"
},

allGuidanceOffered: {
  en: "All guidance offered through the platform is non-clinical, non-diagnostic and academic in nature.",
  hi: "इस मंच के माध्यम से दिया जाने वाला पूरा मार्गदर्शन गैर-नैदानिक, गैर-निदानात्मक और शैक्षणिक प्रकृति का है।"
},

accessContent1: {
  en: "3. Access to Content",
  hi: "3. सामग्री तक पहुँच"
},

noUserRegistration: {
  en: "No user registration or login is required to access the website content",
  hi: "वेबसाइट की सामग्री देखने के लिए किसी भी प्रकार का पंजीकरण या लॉग-इन आवश्यक नहीं है।"
},

learningResourcesProvided: {
  en: "Learning resources are provided through:",
  hi: "शिक्षण संसाधन निम्न माध्यमों से उपलब्ध कराए जाते हैं:"
},

externalYoutube: {
  en: "External YouTube playlist links",
  hi: "बाहरी यूट्यूब प्लेलिस्ट के लिंक"
},

downloadablePDF: {
  en: "Downloadable or viewable PDF materials",
  hi: "डाउनलोड या देखने योग्य पीडीएफ सामग्री"
},

allContentIntended: {
  en: "All content is intended for personal and non-commercial educational use only.",
  hi: "सभी सामग्री केवल व्यक्तिगत और गैर-व्यावसायिक शैक्षणिक उपयोग के लिए है।"
},

askQueryRequest: {
  en: "4. Ask Query and Request a Session (Google Forms)",
  hi: "4. प्रश्न पूछें और सत्र का अनुरोध करें (गूगल फ़ॉर्म)"
},

usersVoluntarily: {
  en: "Users may voluntarily submit information through Google Forms made available on the website for:",
  hi: "उपयोगकर्ता वेबसाइट पर उपलब्ध गूगल फ़ॉर्म के माध्यम से स्वेच्छा से जानकारी भेज सकते हैं, जैसे:"
},

academicQueries1: {
  en: "Academic queries",
  hi: "शैक्षणिक प्रश्नों के लिए"
},

  requestsLearning: {
  en: "Requests for learning-related guidance or sessions",
  hi: "शिक्षण से जुड़े मार्गदर्शन या सत्रों के लिए अनुरोध"
},

bySubmittingForm: {
  en: "By submitting a form, users agree that:",
  hi: "फ़ॉर्म जमा करने के साथ उपयोगकर्ता इस बात से सहमत होते हैं कि:"
},

informationProvided: {
  en: "The information provided is accurate and submitted voluntarily",
  hi: "दी गई जानकारी सही है और स्वेच्छा से साझा की गई है"
},

communicationMay: {
  en: "Communication may occur solely to address the submitted request",
  hi: "संचार केवल जमा किए गए अनुरोध से संबंधित उद्देश्य के लिए ही किया जाएगा"
},

submissionForm: {
  en: "Submission of a form does not guarantee a response, session or outcome",
  hi: "फ़ॉर्म जमा करने से किसी प्रतिक्रिया, सत्र या परिणाम की गारंटी नहीं मिलती"
},

ishanReserves: {
  en: "Ishan Learning reserves the right to review, accept or decline requests at its discretion.",
  hi: "ईशान लर्निंग अपने विवेक अनुसार अनुरोधों की समीक्षा करने, स्वीकार करने या अस्वीकार करने का अधिकार सुरक्षित रखता है।"
},

userResponsibilities: {
  en: "5. User Responsibilities",
  hi: "5. उपयोगकर्ता की ज़िम्मेदारियाँ"
},

usersAgree: {
  en: "Users agree to:",
  hi: "उपयोगकर्ता इस बात से सहमत होते हैं कि वे:"
},

useWebsite: {
  en: "Use the website only for lawful, ethical and educational purposes",
  hi: "वेबसाइट का उपयोग केवल वैध, नैतिक और शैक्षणिक उद्देश्यों के लिए करेंगे"
},

refrainfromMisuse: {
  en: "Refrain from misuse, disruption or unauthorized use of content",
  hi: "सामग्री के दुरुपयोग, बाधा उत्पन्न करने या अनधिकृत उपयोग से बचेंगे"
},

notReproduce: {
  en: "Not reproduce, distribute or commercially exploit materials without prior permission",
  hi: "बिना पूर्व अनुमति के सामग्री की नकल, वितरण या व्यावसायिक उपयोग नहीं करेंगे"
},

intellectualProperty: {
  en: "6. Intellectual Property Rights",
  hi: "6. बौद्धिक संपदा अधिकार"
},

allOriginal: {
  en: "All original website content, text, structure and learning materials are the intellectual property of Ishan Learning",
  hi: "वेबसाइट की सभी मूल सामग्री, पाठ, संरचना और शिक्षण सामग्री ईशान लर्निंग की बौद्धिक संपत्ति हैं।"
},

contentAccessed: {
  en: "Content accessed through third-party platforms (such as YouTube) remains subject to their respective terms and policies",
  hi: "तीसरे पक्ष के प्लेटफ़ॉर्म (जैसे यूट्यूब) के माध्यम से देखी गई सामग्री उनकी संबंधित शर्तों और नीतियों के अधीन रहती है।"
},

pdfResources: {
  en: "PDFs and resources are provided exclusively for individual educational use",
  hi: "पीडीएफ और अन्य संसाधन केवल व्यक्तिगत शैक्षणिक उपयोग के लिए उपलब्ध कराए जाते हैं"
},

unauthorizedCopying: {
  en: "Unauthorized copying, redistribution or commercial use is strictly prohibited.",
  hi: "अनधिकृत नकल, पुनर्वितरण या व्यावसायिक उपयोग सख़्त रूप से प्रतिबंधित है।"
},

thirdPartyPlatforms: {
  en: "7. Third-Party Platforms and External Links",
  hi: "7. तीसरे पक्ष के प्लेटफ़ॉर्म और बाहरी लिंक"
},

websiteContains: {
  en: "The website may contain links to third-party services including, but not limited to:",
  hi: "वेबसाइट में तीसरे पक्ष की सेवाओं के लिंक हो सकते हैं, जिनमें शामिल हैं:"
},

youTube: {
  en: "YouTube",
  hi: "यूट्यूब"
},

googleForms1: {
  en: "Google Forms",
  hi: "गूगल फ़ॉर्म"
},

ishanDoesNotControl: {
  en: "Ishan Learning does not control and is not responsible for the content, availability or data practices of these external platforms.",
  hi: "ईशान लर्निंग इन बाहरी प्लेटफ़ॉर्म की सामग्री, उपलब्धता या डेटा प्रथाओं को नियंत्रित नहीं करता और उनके लिए ज़िम्मेदार नहीं है।"
},

limitationResponsibility: {
  en: "8. Limitation of Responsibility",
  hi: "8. ज़िम्मेदारी की सीमा"
},

ishanShallNot: {
  en: "Ishan Learning shall not be held responsible for:",
  hi: "ईशान लर्निंग निम्नलिखित के लिए ज़िम्मेदार नहीं माना जाएगा:"
},

  academicPerformance: {
  en: "Academic performance, examination results or learning outcomes",
  hi: "शैक्षणिक प्रदर्शन, परीक्षा परिणाम या सीखने से जुड़े परिणाम"
},

emotionalResponses: {
  en: "Emotional responses, stress levels or personal decisions of users",
  hi: "उपयोगकर्ताओं की भावनात्मक प्रतिक्रियाएँ, तनाव का स्तर या व्यक्तिगत निर्णय"
},

technicalIssues: {
  en: "Technical issues, interruptions or errors arising from third-party platforms",
  hi: "तीसरे पक्ष के प्लेटफ़ॉर्म से उत्पन्न तकनीकी समस्याएँ, रुकावटें या त्रुटियाँ"
},

useWebsiteAt: {
  en: "Use of the website and its resources is at the user's own discretion.",
  hi: "वेबसाइट और इसके संसाधनों का उपयोग पूरी तरह उपयोगकर्ता के अपने विवेक पर निर्भर करता है।"
},

modificationDiscontinuation: {
  en: "9. Modification or Discontinuation of Services",
  hi: "9. सेवाओं में संशोधन या समाप्ति"
},

ishanReservesRight: {
  en: "Ishan Learning reserves the right to:",
  hi: "ईशान लर्निंग के पास यह अधिकार सुरक्षित है कि वह:"
},

modifyUpdate: {
  en: "Modify, update, or remove content",
  hi: "सामग्री को संशोधित, अपडेट या हटाए"
},

introduceNew: {
  en: "Introduce new features or discontinue existing services",
  hi: "नई सुविधाएँ शुरू करे या मौजूदा सेवाएँ बंद करे"
},

changeWebsite: {
  en: "Change website structure or offerings",
  hi: "वेबसाइट की संरचना या उपलब्ध सेवाओं में बदलाव करे"
},

withoutNotice: {
  en: "without prior notice.",
  hi: "बिना किसी पूर्व सूचना के।"
},

amendmentsTerms: {
  en: "10. Amendments to These Terms",
  hi: "10. इन शर्तों में परिवर्तन"
},

termsServices: {
  en: "These Terms of Services may be updated periodically.",
  hi: "ये सेवा की शर्तें समय-समय पर अपडेट की जा सकती हैं।"
},

continuedUse: {
  en: "Continued use of the website after changes are posted constitutes acceptance of the revised terms.",
  hi: "परिवर्तन प्रकाशित होने के बाद वेबसाइट का उपयोग जारी रखना संशोधित शर्तों की स्वीकृति माना जाएगा।"
},

governingLaw: {
  en: "11. Governing Law",
  hi: "11. लागू कानून"
},

termsShallGoverned: {
  en: "These Terms of Services shall be governed by and interpreted in accordance with the applicable laws of India.",
  hi: "ये सेवा की शर्तें भारत के लागू कानूनों के अनुसार शासित और व्याख्यायित की जाएँगी।"
},

contactInformation: {
  en: "12. Contact Information",
  hi: "12. संपर्क जानकारी"
},

forAnyQuestions: {
  en: "For any questions or concerns regarding these Terms of Services, please contact:",
  hi: "इन सेवा शर्तों से संबंधित किसी भी प्रश्न या चिंता के लिए कृपया संपर्क करें:"
},

emailAddress: {
  en: "📧 Email: contactishanlearning@gmail.com",
  hi: "📧 ईमेल: contactishanlearning@gmail.com"
},

websiteIshan: {
  en: "🌐 Website: www.ishanlearning.com",
  hi: "🌐 वेबसाइट: www.ishanlearning.com"
},

  // FAQ page
  // faq: { en: "Frequently Asked Questions", hi: "अक्सर पूछे जाने वाले प्रश्न" },
  // findAnswers: { en: "Find answers to common questions", hi: "सामान्य प्रश्नों के उत्तर खोजें" },
  // didntFind: { en: "Didn't find what you're looking for?", hi: "आप जो ढूंढ रहे हैं वह नहीं मिला?" },
  // contact: { en: "Contact us", hi: "हमसे संपर्क करें" },
  // contactUsQuery: { en: "directly with your query.", hi: "सीधे अपनी क्वेरी के साथ।" },
  // FAQ Q&A
  faqQ1: {
  en: "What is Ishan Learning?",
  hi: "ईशान लर्निंग क्या है?"
},

faqA1: {
  en: "Ishan Learning is an academic learning support platform designed to work alongside the school education system. It helps students strengthen conceptual understanding, revise topics and study with clarity and confidence.",
  hi: "ईशान लर्निंग एक शैक्षणिक सीखने का सहायक मंच है, जिसे स्कूल शिक्षा प्रणाली के साथ मिलकर काम करने के लिए बनाया गया है। यह छात्रों को विषयों की बेहतर समझ विकसित करने, पुनरावृत्ति करने और स्पष्टता व आत्मविश्वास के साथ पढ़ाई करने में मदद करता है।"
},

faqQ2: {
  en: "Is Ishan Learning a coaching institute or a replacement for schools?",
  hi: "क्या ईशान लर्निंग एक कोचिंग संस्थान है या स्कूलों का विकल्प है?"
},

faqA2: {
  en: "No. Ishan Learning does not replace schools, boards or formal education. It supports classroom learning by helping students understand concepts more clearly and reduce academic confusion.",
  hi: "नहीं। ईशान लर्निंग स्कूलों, बोर्डों या औपचारिक शिक्षा का विकल्प नहीं है। यह कक्षा में होने वाली पढ़ाई को सहयोग देता है, ताकि छात्र विषयों को ज़्यादा स्पष्ट रूप से समझ सकें और शैक्षणिक भ्रम कम हो।"
},

faqQ3: {
  en: "Which classes does Ishan Learning support?",
  hi: "ईशान लर्निंग किन कक्षाओं के छात्रों का समर्थन करता है?"
},

faqA3: {
  en: "Ishan Learning primarily supports school-level students (Classes 6 to 12) across subjects aligned with the school curriculum.",
  hi: "ईशान लर्निंग मुख्य रूप से स्कूल स्तर के छात्रों (कक्षा 6 से 12) का समर्थन करता है और सामग्री स्कूल पाठ्यक्रम के अनुरूप होती है।"
},

faqQ4: {
  en: "Do students need to create an account or log in?",
  hi: "क्या छात्रों को खाता बनाना या लॉग-इन करना ज़रूरी है?"
},

faqA4: {
  en: "No. There is no login or registration required. Students can freely access learning content through YouTube playlists and PDFs.",
  hi: "नहीं। किसी भी प्रकार का लॉग-इन या पंजीकरण आवश्यक नहीं है। छात्र यूट्यूब प्लेलिस्ट और पीडीएफ के माध्यम से सामग्री को आसानी से देख सकते हैं।"
},

faqQ5: {
  en: "How is the learning content provided?",
  hi: "शिक्षण सामग्री कैसे उपलब्ध कराई जाती है?"
},

faqA5: {
  en: "Learning materials are shared through: Curated YouTube playlist links and PDF study resources. These are meant to support school learning in a clear and structured way.",
  hi: "शिक्षण सामग्री मुख्य रूप से क्यूरेटेड यूट्यूब प्लेलिस्ट और पीडीएफ अध्ययन संसाधनों के माध्यम से साझा की जाती है। इन्हें स्कूल की पढ़ाई को स्पष्ट और व्यवस्थित तरीके से सहयोग देने के लिए तैयार किया गया है।"
},

faqQ6: {
  en: "What is the 'Ask Query' or 'Request a Session' option?",
  hi: "'प्रश्न पूछें' या 'सत्र का अनुरोध करें' विकल्प क्या है?"
},

faqA6: {
  en: "Students or parents can submit questions or learning-related requests through a Google Form. The information shared is used only to respond to that specific request.",
  hi: "छात्र या माता-पिता गूगल फ़ॉर्म के माध्यम से अपने प्रश्न या पढ़ाई से जुड़े अनुरोध भेज सकते हैं। साझा की गई जानकारी का उपयोग केवल उसी अनुरोध का उत्तर देने के लिए किया जाता है।"
},

faqQ7: {
  en: "Is Ishan Learning suitable for students below 18 years of age?",
  hi: "क्या ईशान लर्निंग 18 वर्ष से कम उम्र के छात्रों के लिए उपयुक्त है?"
},

faqA7: {
  en: "Yes. Ishan Learning supports school students, including those below 18. Parents are encouraged to stay aware and involved, especially when queries or session requests are submitted.",
  hi: "हाँ। ईशान लर्निंग स्कूल के छात्रों का समर्थन करता है, जिनमें 18 वर्ष से कम उम्र के छात्र भी शामिल हैं। ऐसे मामलों में माता-पिता की जानकारी और सहभागिता को प्रोत्साहित किया जाता है।"
},

faqQ8: {
  en: "How does Ishan Learning help students who feel stressed or confused about studies?",
  hi: "जो छात्र पढ़ाई को लेकर तनाव या भ्रम महसूस करते हैं, उनकी ईशान लर्निंग कैसे मदद करता है?"
},

faqA8: {
  en: "By focusing on: Conceptual clarity, Step-by-step explanations and A calm and supportive learning approach. Better understanding naturally reduces academic pressure.",
  hi: "ईशान लर्निंग वैचारिक स्पष्टता, चरण-दर-चरण समझाने की शैली और एक शांत व सहयोगी सीखने के वातावरण पर ध्यान देता है। जब समझ बेहतर होती है, तो शैक्षणिक दबाव अपने-आप कम होने लगता है।"
},

faqQ9: {
  en: "Does Ishan Learning provide counselling or therapy?",
  hi: "क्या ईशान लर्निंग परामर्श या थेरेपी प्रदान करता है?"
},

faqA9: {
  en: "No. Ishan Learning provides academic learning support. Psychology-related concepts are used only to support learning and understanding.",
  hi: "नहीं। ईशान लर्निंग केवल शैक्षणिक सीखने का समर्थन प्रदान करता है। मनोविज्ञान से जुड़े विचारों का उपयोग सिर्फ पढ़ाई को बेहतर समझने में मदद के लिए किया जाता है।"
},

faqQ10: {
  en: "Are topics like stress, attention or Emotional Intelligence discussed?",
  hi: "क्या तनाव, ध्यान या भावनात्मक बुद्धिमत्ता जैसे विषयों पर चर्चा होती है?"
},

faqA10: {
  en: "Yes, these topics are discussed in relation to learning, study habits and academic confidence, not as professional mental health services.",
  hi: "हाँ। इन विषयों पर चर्चा पढ़ाई, अध्ययन की आदतों और शैक्षणिक आत्मविश्वास के संदर्भ में की जाती है, न कि पेशेवर मानसिक स्वास्थ्य सेवाओं के रूप में।"
},

faqQ11: {
  en: "Is any personal data collected?",
  hi: "क्या कोई व्यक्तिगत जानकारी एकत्र की जाती है?"
},

faqA11: {
  en: "No personal data is collected for accessing content. Information is shared only if a user voluntarily fills out a Google Form.",
  hi: "सामग्री देखने के लिए कोई व्यक्तिगत जानकारी एकत्र नहीं की जाती। जानकारी केवल तभी ली जाती है जब उपयोगकर्ता स्वेच्छा से गूगल फ़ॉर्म भरता है।"
},

faqQ12: {
  en: "Does Ishan Learning guarantee marks or exam results?",
  hi: "क्या ईशान लर्निंग अंक या परीक्षा परिणाम की गारंटी देता है?"
},

faqA12: {
  en: "No. The platform focuses on understanding and learning consistency, not guarantees of marks or ranks.",
  hi: "नहीं। यह मंच समझ विकसित करने और नियमित सीखने पर केंद्रित है, न कि अंकों या रैंक की गारंटी पर।"
},

faqQ13: {
  en: "Can parents use this platform?",
  hi: "क्या माता-पिता इस मंच का उपयोग कर सकते हैं?"
},

  faqA13: {
  en: "Yes. Parents can explore content, understand the learning approach and guide their children in a balanced and supportive way.",
  hi: "हाँ। माता-पिता इस मंच की सामग्री देख सकते हैं, शिक्षण के दृष्टिकोण को समझ सकते हैं और अपने बच्चों को संतुलित, शांत और सहायक तरीके से मार्गदर्शन दे सकते हैं।"
},

faqQ14: {
  en: "Is Ishan Learning suitable for students who struggle with basics?",
  hi: "क्या ईशान लर्निंग उन छात्रों के लिए उपयुक्त है जिन्हें बुनियादी अवधारणाओं में कठिनाई होती है?"
},

faqA14: {
  en: "Yes. The platform is especially helpful for students who want to strengthen foundations and clear doubts at their own pace.",
  hi: "हाँ। यह मंच विशेष रूप से उन छात्रों के लिए उपयोगी है जो अपनी नींव को मजबूत करना चाहते हैं और बिना दबाव के, अपनी गति से संदेहों को स्पष्ट करना चाहते हैं।"
},

faqQ15: {
  en: "How can we contact Ishan Learning?",
  hi: "हम ईशान लर्निंग से संपर्क कैसे कर सकते हैं?"
},

faqA15: {
  en: "You can use the Ask Query / Request a Session form or contact through the official email provided on the website.",
  hi: "आप ‘प्रश्न पूछें’ या ‘सत्र का अनुरोध करें’ फ़ॉर्म के माध्यम से संपर्क कर सकते हैं, या वेबसाइट पर दिए गए आधिकारिक ईमेल के ज़रिये हमसे जुड़ सकते हैं।"
},

  // Wellbeing page
  mentalWellbeingTitle: {
  en: "Mental Well-Being Self-Reflection",
  hi: "मानसिक कल्याण : आत्म-चिंतन"
},

reflectionSubtitle: {
  en: "Psychology-Informed | Reflective | Non-Clinical",
  hi: "मनोविज्ञान-आधारित | आत्म-चिंतनात्मक | गैर-नैदानिक"
},

supportedNotPressured: {
  en: "Because learning works best when the mind feels supported, not pressured.",
  hi: "क्योंकि सीखना सबसे बेहतर तब होता है जब मन को दबाव नहीं, बल्कि सहारा महसूस होता है।"
},

reflectionDesigned: {
  en: "These reflections are designed using principles from psychology related to stress, learning and emotional regulation, without applying diagnostic labels.",
  hi: "ये आत्म-चिंतन तनाव, सीखने और भावनात्मक संतुलन से जुड़े मनोवैज्ञानिक सिद्धांतों पर आधारित हैं, बिना किसी नैदानिक लेबल के।"
},

important: {
  en: "⚠️ Important",
  hi: "⚠️ महत्वपूर्ण सूचना"
},

notDiagnosis: {
  en: "These are not diagnoses, counselling sessions or treatment. They are psychology-informed awareness tools intended to support reflection, balance and responsible learning.",
  hi: "ये न तो निदान हैं, न परामर्श सत्र और न ही उपचार। ये मनोविज्ञान-आधारित जागरूकता उपकरण हैं, जो आत्म-चिंतन, संतुलन और जिम्मेदार सीखने में सहायता के लिए बनाए गए हैं।"
},

chooseReflection: {
  en: "Choose a Reflection to Explore",
  hi: "किसी आत्म-चिंतन का चयन करें"
},

selectionIntro: {
  en: "Select the area you would like to reflect on. Each reflection takes about 5-10 minutes.",
  hi: "उस क्षेत्र को चुनें जिस पर आप सोच-विचार करना चाहते हैं। प्रत्येक आत्म-चिंतन में लगभग 5-10 मिनट लगते हैं।"
},

startReflection: {
  en: "Start Reflection →",
  hi: "आत्म-चिंतन शुरू करें →"
},

whyThisReflection: {
  en: "Why This Self-Reflection Exists",
  hi: "यह आत्म-चिंतन क्यों बनाया गया है"
},

selfReflectionStatements: {
  en: "Self-Reflection Statements",
  hi: "आत्म-चिंतन कथन"
},

instruction: {
  en: "Choose the option that feels most true overall. There is no need to overthink. There are no right or wrong answers. Respond based on your recent experience.",
  hi: "वह विकल्प चुनें जो आपको समग्र रूप से सबसे अधिक सही लगता हो। ज़्यादा सोचने की आवश्यकता नहीं है। कोई सही या गलत उत्तर नहीं हैं। अपने हाल के अनुभव के आधार पर उत्तर दें।"
},

often: { en: "Often", hi: "अक्सर" },
sometimes: { en: "Sometimes", hi: "कभी-कभी" },
rarely: { en: "Rarely", hi: "बहुत कम" },

seeReflection: {
  en: "See My Reflection",
  hi: "मेरा आत्म-चिंतन देखें"
},

completeStatements: {
  en: "Complete all statements",
  hi: "कृपया सभी कथन पूरे करें"
},

understandingResponses: {
  en: "Understanding Your Responses",
  hi: "अपनी प्रतिक्रियाओं को समझना"
},

whenSeeking: {
  en: "When Seeking Support Can Be Helpful",
  hi: "कब समर्थन लेना सहायक हो सकता है"
},

supportIntro: {
  en: "You may consider reaching out if you experience any of these:",
  hi: "यदि आप इनमें से कुछ अनुभव कर रहे हों, तो समर्थन लेने पर विचार किया जा सकता है:"
},

feelingsConstant: {
  en: "Feelings feel constant rather than temporary",
  hi: "भावनाएँ अस्थायी के बजाय लगातार बनी रहती हैं"
},

stressAffects: {
  en: "Stress affects daily functioning or well-being",
  hi: "तनाव आपके दैनिक जीवन या मानसिक संतुलन को प्रभावित करने लगता है"
},

emotionallyExhausted: {
  en: "You feel emotionally exhausted most days",
  hi: "आप अधिकांश दिनों में भावनात्मक रूप से थका हुआ महसूस करते हैं"
},

feelStuck: {
  en: "You feel stuck or unable to cope on your own",
  hi: "आप खुद से स्थिति संभाल पाने में असमर्थ या फँसा हुआ महसूस करते हैं"
},

supportNote: {
  en: "Seeking support is a sign of awareness and self-respect-not weakness.",
  hi: "समर्थन लेना जागरूकता और आत्म-सम्मान का संकेत है, कमजोरी का नहीं।"
},

importantBoundaries: {
  en: "Important Boundaries",
  hi: "महत्वपूर्ण सीमाएँ"
},

ishanDoesNotProvide2: {
  en: "Ishan Learning does not provide counselling, therapy or clinical mental health services. This self-reflection is intended for awareness and learning support only.",
  hi: "ईशान लर्निंग किसी भी प्रकार की परामर्श, थेरेपी या नैदानिक मानसिक स्वास्थ्य सेवाएँ प्रदान नहीं करता। यह आत्म-चिंतन केवल जागरूकता और शिक्षण सहयोग के लिए है।"
},

ifEmotional: {
  en: "If emotional distress feels intense or long-lasting, students are encouraged to seek support from:",
  hi: "यदि भावनात्मक कठिनाई तीव्र या लंबे समय तक बनी रहे, तो छात्रों को निम्नलिखित से सहायता लेने के लिए प्रोत्साहित किया जाता है:"
},

parents: { en: "Parents or trusted family members", hi: "माता-पिता या विश्वसनीय पारिवारिक सदस्य" },
teachersSchoolCounselors: { en: "Teachers or school counsellors", hi: "शिक्षक या स्कूल परामर्शदाता" },
qualifiedMental: { en: "Qualified mental health professionals", hi: "योग्य मानसिक स्वास्थ्य पेशेवर" },
appropriateSupport: { en: "Appropriate local support services or helplines", hi: "उपयुक्त स्थानीय सहायता सेवाएँ या हेल्पलाइन" },

closingThought: {
  en: "A Closing Thought",
  hi: "एक अंतिम विचार"
},

yourMental: {
  en: "Your mental and emotional experiences shape how you learn, grow and persist.",
  hi: "आपके मानसिक और भावनात्मक अनुभव यह तय करते हैं कि आप कैसे सीखते हैं, आगे बढ़ते हैं और टिके रहते हैं।"
},

takingTime: {
  en: "Taking time to reflect is not a distraction from learning-it is part of learning responsibly.",
  hi: "आत्म-चिंतन के लिए समय निकालना सीखने से ध्यान हटाना नहीं है, यह जिम्मेदारी से सीखने का ही हिस्सा है।"
},

retakeReflection: {
  en: "Retake This Reflection",
  hi: "इस आत्म-चिंतन को दोबारा करें"
},

exploreOther: {
  en: "Explore Other Reflections",
  hi: "अन्य आत्म-चिंतन देखें"
},

back: { en: "Back", hi: "वापस जाएँ" },

  // Class pages
  exploreAllSubjects: {
  en: "Explore all subjects and learning resources",
  hi: "सभी विषयों और सीखने के संसाधनों को देखें"
},

syllabus: { en: "Syllabus", hi: "पाठ्यक्रम" },

watchVideoLesson: {
  en: "Watch Video Lesson",
  hi: "वीडियो के माध्यम से पढ़ें"
},

studyMaterial: {
  en: "Study Material",
  hi: "पढ़ाई की सामग्री"
},

practiceQuestions: {
  en: "Practice Questions",
  hi: "अभ्यास के लिए प्रश्न"
},

quickRevisionVideos: {
  en: "Quick Revision Videos",
  hi: "शॉर्ट रिविजन वीडियो"
},

doubtSession: {
  en: "Doubt Session",
  hi: "संदेह समाधान सत्र"
},

askYourDoubt: {
  en: "Ask Your Doubt",
  hi: "अपना सवाल पूछें"
},

science: { en: "Science", hi: "विज्ञान" },
mathematics: { en: "Mathematics", hi: "गणित" },
socialScience: { en: "Social Science", hi: "सामाजिक विज्ञान" },
computer: { en: "Computer", hi: "कंप्यूटर" },
drawing: { en: "Drawing", hi: "चित्रकला" },
hindi: { en: "Hindi", hi: "हिंदी" },
english: { en: "English", hi: "अंग्रेज़ी" },
sanskrit: { en: "Sanskrit", hi: "संस्कृत" },
//11th and 12th subjects
accountancy: { en: "Accountancy", hi: "लेखांकन" },
businessStudies: { en: "Business Studies", hi: "व्यवसाय अध्ययन" },
economics: { en: "Economics", hi: "अर्थशास्त्र" },
Physics: { en: "Physics", hi: "भौतिक विज्ञान" },
Chemistry: { en: "Chemistry", hi: "रसायन विज्ञान" },
biology: { en: "Biology", hi: "जीव विज्ञान" },
history: { en: "History", hi: "इतिहास" },
geography: { en: "Geography", hi: "भूगोल" },
politicalScience: { en: "Political Science", hi: "राजनीति विज्ञान" },
Civics: { en: "Civics", hi: "नागरिक शास्त्र" },
education: { en: "Education", hi: "शिक्षा" },
Sociology: { en: "Sociology", hi: "समाजशास्त्र" },
Psychology: { en: "Psychology", hi: "मनोविज्ञान" },
GeneralHindi: { en: "General Hindi", hi: "सामान्य हिंदी" },



// Well-being reflection titles
examStressTitle: {
  en: "Exam Stress Reflection",
  hi: "परीक्षा तनाव पर आत्म-चिंतन"
},

learningEnergyTitle: {
  en: "Learning Energy & Mental Fatigue Reflection",
  hi: "सीखने की ऊर्जा और मानसिक थकान पर आत्म-चिंतन"
},

focusDistractionTitle: {
  en: "Focus & Distraction Awareness Reflection",
  hi: "एकाग्रता और ध्यान भटकने पर आत्म-चिंतन"
},

studyRestTitle: {
  en: "Study-Rest Balance Reflection",
  hi: "पढ़ाई और विश्राम के संतुलन पर आत्म-चिंतन"
},

emotionalBalanceTitle: {
  en: "Emotional Balance Reflection",
  hi: "भावनात्मक संतुलन पर आत्म-चिंतन"
},

moodMotivationTitle: {
  en: "Mood & Motivation Reflection",
  hi: "मनोदशा और प्रेरणा पर आत्म-चिंतन"
},

academicAnxietyTitle: {
  en: "Academic Anxiety Awareness Reflection",
  hi: "शैक्षणिक चिंता पर जागरूकता आत्म-चिंतन"
},

gritPersistenceTitle: {
  en: "Grit & Persistence Reflection",
  hi: "धैर्य और निरंतरता पर आत्म-चिंतन"
},

learningConfidenceTitle: {
  en: "Learning Self-Confidence Reflection",
  hi: "सीखने में आत्मविश्वास पर आत्म-चिंतन"
},

growthMindsetTitle: {
  en: "Growth Mindset Reflection",
  hi: "विकासशील सोच पर आत्म-चिंतन"
},

homeAdjustmentTitle: {
  en: "Home-Study Adjustment Reflection",
  hi: "घर पर पढ़ाई के समायोजन पर आत्म-चिंतन"
},

schoolAdjustmentTitle: {
  en: "School Adjustment Reflection",
  hi: "स्कूल से तालमेल पर आत्म-चिंतन"
},

socialSupportTitle: {
  en: "Social Support Awareness Reflection",
  hi: "सामाजिक सहयोग पर जागरूकता आत्म-चिंतन"
},

selfDisciplineTitle: {
  en: "Self-Discipline & Routine Reflection",
  hi: "आत्म-अनुशासन और दिनचर्या पर आत्म-चिंतन"
},

emotionalRegulationTitle: {
  en: "Emotional Regulation Reflection",
  hi: "भावनाओं को संभालने पर आत्म-चिंतन"
},

purposeDirectionTitle: {
  en: "Purpose & Learning Direction Reflection",
  hi: "उद्देश्य और सीखने की दिशा पर आत्म-चिंतन"
},

// Categories
academicLoadCategory: {
  en: "Academic Load & Learning Energy Reflections",
  hi: "पढ़ाई का भार और सीखने की ऊर्जा"
},

emotionalExperienceCategory: {
  en: "Emotional Experience in Learning",
  hi: "सीखने से जुड़ा भावनात्मक अनुभव"
},

learningStrengthsCategory: {
  en: "Learning Strengths & Inner Skills",
  hi: "सीखने की ताकत और आंतरिक कौशल"
},

adjustmentSupportCategory: {
  en: "Adjustment & Support Environment",
  hi: "समायोजन और सहयोग का वातावरण"
},

selfManagementCategory: {
  en: "Self-Management & Direction",
  hi: "आत्म-प्रबंधन और दिशा"
},

  // Wellbeing test statements - Exam Stress
  examStress1: {
  en: "I feel tense or uneasy when exams or tests are approaching",
  hi: "जब परीक्षा या टेस्ट पास आते हैं, तो मुझे तनाव या घबराहट महसूस होती है"
},

examStress2: {
  en: "Thoughts about results distract me while studying",
  hi: "पढ़ाई करते समय परिणामों के बारे में सोचकर मेरा ध्यान भटक जाता है"
},

examStress3: {
  en: "I worry about disappointing parents, teachers or myself",
  hi: "मुझे माता-पिता, शिक्षकों या खुद को निराश कर देने की चिंता रहती है"
},

examStress4: {
  en: "My body feels restless or uncomfortable before or during exams",
  hi: "परीक्षा से पहले या दौरान मेरा शरीर बेचैन या असहज महसूस करता है"
},

examStress5: {
  en: "Even after preparing, I feel unsure about my performance",
  hi: "अच्छी तैयारी के बाद भी मुझे अपने प्रदर्शन को लेकर भरोसा नहीं रहता"
},

examStress6: {
  en: "I replay exam mistakes in my mind repeatedly",
  hi: "मैं परीक्षा में हुई गलतियों को मन में बार-बार दोहराता रहता हूँ"
},

examStress7: {
  en: "I feel pressure to perform beyond what feels manageable",
  hi: "मुझे ऐसा दबाव महसूस होता है कि मुझे अपनी क्षमता से ज़्यादा करना चाहिए"
},

examStress8: {
  en: "I struggle to relax when exams are near",
  hi: "परीक्षा पास होने पर मुझे खुद को शांत रखना मुश्किल लगता है"
},

examStress9: {
  en: "My confidence drops around exam periods",
  hi: "परीक्षा के समय मेरा आत्मविश्वास कम हो जाता है"
},

examStress10: {
  en: "Exam expectations affect my mood or motivation",
  hi: "परीक्षा से जुड़ी उम्मीदें मेरी मनोदशा या पढ़ने की इच्छा को प्रभावित करती हैं"
},

  // Wellbeing test descriptions
  learningEnergyDesc: {
  en: "Learning requires mental energy. When students continue studying despite feeling mentally exhausted, overloaded or drained, learning can slowly feel heavier even without obvious reasons. This reflection focuses on learning energy and mental fatigue, not medical burnout or diagnosis.",
  hi: "सीखने के लिए मानसिक ऊर्जा ज़रूरी होती है। जब छात्र मानसिक रूप से थके हुए या बोझ महसूस करने के बावजूद लगातार पढ़ते रहते हैं, तो पढ़ाई धीरे-धीरे बिना किसी साफ वजह के भारी लगने लगती है। यह आत्म-चिंतन सीखने की ऊर्जा और मानसिक थकान को समझने पर केंद्रित है।"
},

focusDistractionDesc: {
  en: "Many students want to study sincerely, yet find their attention drifting repeatedly. Distraction is not always about lack of effort-it is often linked to mental load, fatigue, stress or overstimulation. This reflection helps students notice how focus and distraction are showing up in their learning, without blame or judgement.",
  hi: "कई छात्र मन लगाकर पढ़ना चाहते हैं, फिर भी उनका ध्यान बार-बार भटक जाता है। ध्यान भटकना हमेशा मेहनत की कमी नहीं होता—यह अक्सर मानसिक बोझ, थकान या तनाव से जुड़ा होता है। यह आत्म-चिंतन बिना किसी दोष या निर्णय के यह समझने में मदद करता है कि पढ़ाई के दौरान ध्यान और विचलन कैसे सामने आते हैं।"
},

studyRestDesc: {
  en: "Consistent learning requires both effort and recovery. When rest is ignored or associated with guilt, the mind may remain stressed even during breaks-reducing learning effectiveness over time. This reflection helps students become aware of how well study and rest are balanced.",
  hi: "लगातार और प्रभावी सीखने के लिए मेहनत के साथ-साथ आराम भी ज़रूरी होता है। जब आराम को नज़रअंदाज़ किया जाता है या उससे अपराधबोध जुड़ जाता है, तो मन ब्रेक के समय भी तनाव में रह सकता है। यह आत्म-चिंतन पढ़ाई और आराम के संतुलन को समझने में मदद करता है।"
},

emotionalBalanceDesc: {
  en: "Academic life can influence emotions in subtle ways. Even capable students may feel emotionally overloaded, irritable or unsettled without fully understanding why. This reflection supports awareness of emotional balance related to learning experiences, without labels or diagnosis.",
  hi: "पढ़ाई का जीवन भावनाओं को धीरे-धीरे प्रभावित कर सकता है। सक्षम छात्र भी कभी-कभी बिना स्पष्ट वजह के भावनात्मक रूप से थके, चिड़चिड़े या अस्थिर महसूस कर सकते हैं। यह आत्म-चिंतन सीखने से जुड़े भावनात्मक संतुलन को समझने में सहायता करता है।"
},

moodMotivationDesc: {
  en: "Motivation does not remain constant. Academic pressure, repeated effort and emotional load can slowly affect interest, energy and enthusiasm for learning even when students want to do well. This reflection helps students notice patterns in mood and motivation related to learning, without judgement or labels.",
  hi: "प्रेरणा हमेशा एक-सी नहीं रहती। पढ़ाई का दबाव, लगातार कोशिश और भावनात्मक बोझ धीरे-धीरे सीखने की रुचि, ऊर्जा और उत्साह को प्रभावित कर सकते हैं। यह आत्म-चिंतन सीखने से जुड़ी मनोदशा और प्रेरणा के पैटर्न को समझने में मदद करता है।"
},

academicAnxietyDesc: {
  en: "Academic anxiety can appear as constant worry, physical uneasiness or fear of outcomes. This reflection focuses only on anxiety related to academic experiences, not clinical anxiety or diagnosis. The purpose is to support awareness-not to label or define.",
  hi: "शैक्षणिक चिंता लगातार चिंता, शारीरिक बेचैनी या परिणामों के डर के रूप में महसूस हो सकती है। यह आत्म-चिंतन केवल पढ़ाई से जुड़ी चिंता को समझने पर केंद्रित है, किसी भी तरह के नैदानिक निष्कर्ष के लिए नहीं। इसका उद्देश्य केवल जागरूकता बढ़ाना है।"
},

gritPersistenceDesc: {
  en: "Learning involves effort, mistakes and setbacks. Grit and persistence influence how students respond to difficulty-not how 'smart' they are. This reflection supports awareness of how consistently effort is maintained when challenges arise.",
  hi: "सीखने की प्रक्रिया में मेहनत, गलतियाँ और रुकावटें आती हैं। धैर्य और निरंतरता यह तय करती हैं कि छात्र कठिन परिस्थितियों में कैसे आगे बढ़ते हैं, न कि वे कितने ‘तेज़’ हैं। यह आत्म-चिंतन यह समझने में मदद करता है कि चुनौतियों के समय प्रयास कितना लगातार बना रहता है।"
},

learningConfidenceDesc: {
  en: "Confidence in learning is not about being perfect-it is about trusting one's ability to understand, improve and cope with challenges. Academic pressure, comparison and repeated difficulty can quietly reduce self-confidence over time. This reflection helps students notice how confident they currently feel in their learning abilities, without judgement or labels.",
  hi: "सीखने में आत्मविश्वास का मतलब परफेक्ट होना नहीं, बल्कि यह भरोसा होना है कि आप समझ सकते हैं, सुधार कर सकते हैं और कठिनाइयों से निपट सकते हैं। पढ़ाई का दबाव और तुलना समय के साथ आत्मविश्वास को कम कर सकती है। यह आत्म-चिंतन यह समझने में मदद करता है कि आप अपनी सीखने की क्षमता को लेकर कैसा महसूस करते हैं।"
},

growthMindsetDesc: {
  en: "A growth mindset involves viewing mistakes and challenges as part of learning rather than signs of failure. Pressure, fear of judgement or repeated setbacks can make mistakes feel threatening instead of useful. This reflection supports awareness of how students currently relate to mistakes, effort and improvement.",
  hi: "विकासशील सोच का मतलब है गलतियों और चुनौतियों को सीखने का हिस्सा मानना, न कि असफलता का संकेत। दबाव या आलोचना का डर गलतियों को सीखने के बजाय डरावना बना सकता है। यह आत्म-चिंतन यह समझने में मदद करता है कि आप गलतियों, प्रयास और सुधार को कैसे देखते हैं।"
},

homeAdjustmentDesc: {
  en: "A student's learning experience is shaped not only by effort, but also by the home environment. Family expectations, space, noise, routines and communication can support or unintentionally strain learning. This reflection helps students notice how home-related factors influence their studies, without placing blame.",
  hi: "छात्र की पढ़ाई केवल मेहनत से ही नहीं, बल्कि घर के माहौल से भी प्रभावित होती है। परिवार की अपेक्षाएँ, जगह, शोर और दिनचर्या पढ़ाई को सहारा दे सकती हैं या अनजाने में मुश्किल बना सकती हैं। यह आत्म-चिंतन बिना किसी दोष के यह समझने में मदद करता है कि घर का वातावरण पढ़ाई को कैसे प्रभावित करता है।"
},

schoolAdjustmentDesc: {
  en: "Learning is influenced by the academic environment-teaching pace, expectations, interaction style and perceived support. Even motivated students may struggle when the learning environment does not fully align with their needs. This reflection helps students understand how well they are adjusting to school environments, without blame or judgement.",
  hi: "पढ़ाई का अनुभव स्कूल के माहौल से भी प्रभावित होता है; जैसे पढ़ाने की गति, अपेक्षाएँ और मिलने वाला सहयोग। कभी-कभी मेहनती छात्र भी तब कठिनाई महसूस करते हैं जब माहौल उनकी ज़रूरतों से मेल नहीं खाता। यह आत्म-चिंतन स्कूल के साथ तालमेल को समझने में मदद करता है।"
},

socialSupportDesc: {
  en: "Support from friends, teachers and trusted adults can reduce academic stress and emotional burden. When students feel alone with pressure, learning can feel heavier, even when they are capable. This reflection supports awareness of how supported a student currently feels, without judgement.",
  hi: "दोस्तों, शिक्षकों और भरोसेमंद बड़ों का सहयोग पढ़ाई का तनाव और भावनात्मक बोझ कम कर सकता है। जब छात्र दबाव में अकेला महसूस करता है, तो पढ़ाई ज़्यादा भारी लगने लगती है। यह आत्म-चिंतन यह समझने में मदद करता है कि छात्र खुद को कितना समर्थित महसूस करता है।"
},

selfDisciplineDesc: {
  en: "Self-discipline supports consistency, but it is influenced by motivation, emotional state and structure, not just willpower. Academic pressure can disrupt routines, making consistency difficult. This reflection helps students notice patterns in discipline and routine, without labelling or judgement.",
  hi: "आत्म-अनुशासन पढ़ाई में निरंतरता लाने में मदद करता है, लेकिन यह केवल इच्छाशक्ति पर निर्भर नहीं होता। प्रेरणा, भावनात्मक स्थिति और सही ढांचा भी इसमें भूमिका निभाते हैं। यह आत्म-चिंतन दिनचर्या और अनुशासन के पैटर्न को समझने में मदद करता है।"
},

emotionalRegulationDesc: {
  en: "Emotions are a natural part of learning. Stress, frustration, disappointment or pressure can affect how students think, react and continue their efforts. Emotional regulation does not mean suppressing feelings-it means understanding and managing them in healthy ways. This reflection supports awareness of how emotions are currently handled during academic experiences, without judgement or labels.",
  hi: "भावनाएँ सीखने का स्वाभाविक हिस्सा हैं। तनाव, निराशा या दबाव यह तय कर सकते हैं कि छात्र कैसे सोचते हैं और प्रतिक्रिया देते हैं। भावनाओं को सँभालना उन्हें दबाने का नाम नहीं है, बल्कि उन्हें समझकर स्वस्थ तरीके से संभालने का है। यह आत्म-चिंतन इस प्रक्रिया को समझने में मदद करता है।"
},

purposeDirectionDesc: {
  en: "Having a sense of purpose helps students stay motivated during effort and difficulty. When learning feels directionless or driven only by pressure, motivation can weaken even when ability is present. This reflection supports awareness of how connected a student feels to purpose and direction in learning, without judgment or expectation.",
  hi: "सीखने में उद्देश्य की भावना होने से कठिन समय में भी प्रेरणा बनी रहती है। जब पढ़ाई केवल दबाव के कारण की जाए और दिशा स्पष्ट न हो, तो उत्साह कम हो सकता है। यह आत्म-चिंतन यह समझने में मदद करता है कि आप सीखने के उद्देश्य और दिशा से कितना जुड़ाव महसूस करते हैं।"
},
  // Exam Stress results
  examStressRarelyTitle: {
  en: "You appear to be handling exam-related pressure reasonably well",
  hi: "आप फिलहाल परीक्षा के दबाव को ठीक तरह से संभाल पा रहे हैं"
},

examStressRarelyDesc: {
  en: "You appear to be handling exam-related pressure reasonably well at present. Feeling some stress before exams is normal, but your current patterns suggest that pressure is not overwhelming your emotional balance.",
  hi: "फिलहाल आप परीक्षा से जुड़े दबाव को संतुलित तरीके से संभाल पा रहे हैं। परीक्षा से पहले थोड़ा तनाव होना सामान्य है, और आपके जवाब बताते हैं कि यह दबाव आपके भावनात्मक संतुलन पर हावी नहीं हो रहा।"
},

examStressRarelyNote: {
  en: "Keep maintaining what's working for you and remember to take care of yourself.",
  hi: "जो तरीके आपके लिए काम कर रहे हैं, उन्हें जारी रखें और अपने आराम का भी ध्यान रखें।"
},

examStressSometimesTitle: {
  en: "Exam stress affects you at certain times",
  hi: "कभी-कभी परीक्षा का तनाव आपको प्रभावित करता है"
},

examStressSometimesDesc: {
  en: "Exam stress affects you at certain times, which is very common-especially during busy or high-expectation phases. Awareness, rest and supportive guidance can help prevent stress from becoming heavier.",
  hi: "कुछ समय पर परीक्षा का तनाव महसूस होना बहुत आम है, खासकर जब पढ़ाई का दबाव या अपेक्षाएँ ज़्यादा हों। सही समय पर जागरूकता, आराम और सहयोग इस तनाव को बढ़ने से रोक सकते हैं।"
},

examStressSometimesNote: {
  en: "Notice when it increases and reach out early if needed.",
  hi: "ध्यान दें कि तनाव कब बढ़ता है, और ज़रूरत हो तो समय रहते सहारा लें।"
},

examStressOftenTitle: {
  en: "Exam-related pressure may be affecting you more consistently",
  hi: "परीक्षा का दबाव आपको लगातार प्रभावित कर रहा हो सकता है"
},

examStressOftenDesc: {
  en: "Exam-related pressure may be affecting you more consistently. When worry or tension feels frequent, it is important not to manage it alone. Support can help restore confidence and balance.",
  hi: "अगर चिंता या तनाव बार-बार महसूस हो रहा है, तो इसे अकेले संभालना ज़रूरी नहीं है। सही सहयोग आत्मविश्वास और मानसिक संतुलन वापस लाने में मदद कर सकता है।"
},

examStressOftenNote: {
  en: "Seeking support reflects responsibility and self-awareness-not weakness.",
  hi: "सहायता लेना कमजोरी नहीं, बल्कि समझदारी और आत्म-जागरूकता का संकेत है।"
},
  // Learning Energy
learningEnergyTitle1: {
  en: "Learning Energy & Mental Fatigue Reflection",
  hi: "सीखने की ऊर्जा और मानसिक थकान पर आत्म-चिंतन"
},

learningEnergy1: {
  en: "I feel mentally tired after study sessions",
  hi: "अध्ययन सत्र के बाद मुझे मानसिक थकान महसूस होती है"
},

learningEnergy2: {
  en: "Starting study feels harder than it used to",
  hi: "अब पढ़ाई शुरू करना पहले की तुलना में ज़्यादा मुश्किल लगता है"
},

learningEnergy3: {
  en: "My mind feels exhausted even with moderate workload",
  hi: "मध्यम पढ़ाई होने पर भी मेरा मन जल्दी थक जाता है"
},

learningEnergy4: {
  en: "I continue studying despite feeling drained",
  hi: "थकान महसूस होने के बावजूद मैं पढ़ाई जारी रखता/रखती हूँ"
},

learningEnergy5: {
  en: "Breaks do not always help me feel refreshed",
  hi: "ब्रेक लेने के बाद भी मुझे हमेशा ताज़गी महसूस नहीं होती"
},

learningEnergy6: {
  en: "I feel overloaded by academic demands",
  hi: "मुझे पढ़ाई की अपेक्षाओं से बोझ महसूस होता है"
},

learningEnergy7: {
  en: "My motivation drops when I feel mentally tired",
  hi: "मानसिक थकान होने पर मेरी प्रेरणा कम हो जाती है"
},

learningEnergy8: {
  en: "I struggle to maintain energy throughout the day",
  hi: "पूरे दिन ऊर्जा बनाए रखना मेरे लिए कठिन हो जाता है"
},

learningEnergy9: {
  en: "Learning feels more tiring than interesting at times",
  hi: "कभी-कभी पढ़ाई रोचक होने की बजाय थकाने वाली लगती है"
},

learningEnergy10: {
  en: "Mental fatigue affects how much I understand or remember",
  hi: "मानसिक थकान मेरी समझ और याद रखने की क्षमता को प्रभावित करती है"
},

learningEnergyRarelyTitle: {
  en: "Your learning energy appears fairly balanced",
  hi: "आपकी सीखने की ऊर्जा फिलहाल संतुलित दिखाई देती है"
},

learningEnergyRarelyDesc: {
  en: "Your learning energy appears fairly balanced. Occasional tiredness is normal, but overall your mind seems able to recover and engage.",
  hi: "आपकी सीखने की ऊर्जा अभी संतुलित लगती है। कभी-कभार थकान सामान्य है, लेकिन आपका मन फिर से सक्रिय होने और ध्यान लगाने में सक्षम दिखाई देता है।"
},

learningEnergyRarelyNote: {
  en: "Keep maintaining healthy study rhythms and recovery patterns.",
  hi: "अपनी पढ़ाई और विश्राम के संतुलन को इसी तरह बनाए रखें।"
},

learningEnergySometimesTitle: {
  en: "Mental fatigue affects you during certain periods",
  hi: "कुछ समय पर मानसिक थकान आपको प्रभावित करती है"
},

learningEnergySometimesDesc: {
  en: "Mental fatigue affects you during certain periods. This is common during heavy academic phases. Paying attention to rest and pacing may help maintain balance.",
  hi: "कुछ चरणों में मानसिक थकान महसूस होना आम बात है, खासकर जब पढ़ाई का दबाव अधिक हो। सही समय पर आराम और गति का ध्यान रखने से संतुलन बना रह सकता है।"
},

learningEnergySometimesNote: {
  en: "Notice patterns in when fatigue increases and adjust your routine accordingly.",
  hi: "यह देखें कि थकान कब बढ़ती है और उसी अनुसार अपनी दिनचर्या में बदलाव करें।"
},

learningEnergyOftenTitle: {
  en: "Learning energy may be consistently low at present",
  hi: "इस समय आपकी सीखने की ऊर्जा लगातार कम हो सकती है"
},

learningEnergyOftenDesc: {
  en: "Learning energy may be consistently low at present. When mental exhaustion feels frequent, additional support and adjustment can help prevent overload.",
  hi: "अगर मानसिक थकान बार-बार महसूस हो रही है, तो इसका मतलब है कि आपकी ऊर्जा फिलहाल कम चल रही है। ऐसे समय में सहयोग और छोटे बदलाव मानसिक बोझ को कम करने में मदद कर सकते हैं।"
},

learningEnergyOftenNote: {
  en: "Reaching out for guidance about study habits and recovery can make a real difference.",
  hi: "पढ़ाई की आदतों और आराम से जुड़ी मार्गदर्शन लेने से सच में फर्क पड़ सकता है।"
},
  // Focus & Distraction
focusDistractionTitle1: {
  en: "Focus & Distraction Awareness Reflection",
  hi: "फोकस और विचलन पर आत्म-जागरूकता चिंतन"
},

focusDistraction1: {
  en: "My mind wanders even when I try to concentrate",
  hi: "ध्यान लगाने की कोशिश करने पर भी मेरा मन भटक जाता है"
},

focusDistraction2: {
  en: "I get distracted by my phone or other thoughts while studying",
  hi: "पढ़ाई के दौरान मेरा ध्यान फोन या अन्य विचारों की ओर चला जाता है"
},

focusDistraction3: {
  en: "I reread the same content multiple times to understand it",
  hi: "समझने के लिए मुझे एक ही सामग्री बार-बार पढ़नी पड़ती है"
},

focusDistraction4: {
  en: "Small noises or interruptions disturb my focus",
  hi: "छोटी आवाज़ें या बीच में होने वाली रुकावटें मेरा फोकस तोड़ देती हैं"
},

focusDistraction5: {
  en: "I struggle to stay focused for long periods",
  hi: "मुझे लंबे समय तक ध्यान बनाए रखना कठिन लगता है"
},

focusDistraction6: {
  en: "I start thinking about unrelated things during study time",
  hi: "पढ़ाई के समय मेरा मन अक्सर असंबंधित बातों में चला जाता है"
},

focusDistraction7: {
  en: "I feel mentally present only for short durations",
  hi: "मैं थोड़े समय के लिए ही मानसिक रूप से उपस्थित महसूस करता/करती हूँ"
},

focusDistraction8: {
  en: "Distraction makes studying feel frustrating",
  hi: "विचलन की वजह से पढ़ाई झुंझलाहट भरी लगने लगती है"
},

focusDistraction9: {
  en: "I lose track of what I am studying easily",
  hi: "मैं आसानी से यह भूल जाता/जाती हूँ कि मैं क्या पढ़ रहा/रही हूँ"
},

focusDistraction10: {
  en: "Difficulty focusing affects my confidence",
  hi: "फोकस करने में कठिनाई मेरे आत्मविश्वास को प्रभावित करती है"
},

focusDistractionRarelyTitle: {
  en: "Your focus appears reasonably steady",
  hi: "आपका फोकस सामान्य रूप से स्थिर दिखाई देता है"
},

focusDistractionRarelyDesc: {
  en: "Your focus appears reasonably steady. Occasional distraction is normal, but overall attention does not seem to interfere significantly with learning.",
  hi: "आपका ध्यान सामान्य रूप से स्थिर लगता है। कभी-कभार ध्यान भटकना सामान्य है, लेकिन कुल मिलाकर यह आपकी सीखने की प्रक्रिया में बड़ी बाधा नहीं बन रहा है।"
},

focusDistractionRarelyNote: {
  en: "Continue practicing the habits that keep you focused and present.",
  hi: "जो आदतें आपको ध्यान में बनाए रखती हैं, उन्हें आगे भी जारी रखें।"
},

focusDistractionSometimesTitle: {
  en: "Distraction affects you at times",
  hi: "कभी-कभी विचलन आपको प्रभावित करता है"
},

focusDistractionSometimesDesc: {
  en: "Distraction affects you at times, especially during mentally demanding periods. With small adjustments, focus can improve.",
  hi: "कुछ समय पर, खासकर जब मानसिक दबाव अधिक हो, विचलन महसूस होना आम बात है। छोटे बदलावों से फोकस बेहतर हो सकता है।"
},

focusDistractionSometimesNote: {
  en: "Notice when distraction increases and explore what helps you refocus.",
  hi: "यह समझने की कोशिश करें कि ध्यान कब ज़्यादा भटकता है और क्या चीज़ आपको दोबारा फोकस करने में मदद करती है।"
},

focusDistractionOftenTitle: {
  en: "Difficulty maintaining focus may be affecting learning consistently",
  hi: "फोकस बनाए रखने में कठिनाई लगातार सीखने को प्रभावित कर सकती है"
},

focusDistractionOftenDesc: {
  en: "Difficulty maintaining focus may be affecting learning consistently. When distraction feels frequent, additional support and structure can help restore clarity.",
  hi: "अगर ध्यान बार-बार भटकता महसूस हो रहा है, तो यह आपकी पढ़ाई पर लगातार असर डाल सकता है। ऐसे में अतिरिक्त सहारा और बेहतर संरचना स्पष्टता लौटाने में मदद कर सकती है।"
},

focusDistractionOftenNote: {
  en: "Talking to a teacher or counselor about focus strategies can help significantly.",
  hi: "फोकस से जुड़ी रणनीतियों पर किसी शिक्षक या परामर्शदाता से बात करना काफ़ी मददगार हो सकता है।"
},
  // Study-Rest Balance
studyRestTitle1: {
  en: "Study-Rest Balance Reflection",
  hi: "अध्ययन और विश्राम संतुलन पर आत्म-चिंतन"
},

studyRest1: {
  en: "My sleep is affected because of academic demands",
  hi: "शैक्षणिक दबाव की वजह से मेरी नींद प्रभावित होती है"
},

studyRest2: {
  en: "I study for long hours without sufficient breaks",
  hi: "मैं पर्याप्त ब्रेक लिए बिना लंबे समय तक पढ़ाई करता/करती हूँ"
},

studyRest3: {
  en: "I feel guilty when I take rest",
  hi: "जब मैं आराम करता/करती हूँ, तो मुझे अपराधबोध महसूस होता है"
},

studyRest4: {
  en: "I continue studying even when my body feels exhausted",
  hi: "शरीर थका हुआ महसूस करने पर भी मैं पढ़ाई जारी रखता/रखती हूँ"
},

studyRest5: {
  en: "I struggle to relax fully during breaks",
  hi: "ब्रेक के दौरान भी मुझे पूरी तरह से आराम महसूस नहीं हो पाता"
},

studyRest6: {
  en: "Rest feels unproductive to me",
  hi: "मुझे लगता है कि आराम करना समय की बर्बादी है"
},

studyRest7: {
  en: "I push myself even when mentally tired",
  hi: "मानसिक थकान होने पर भी मैं खुद पर दबाव डालता/डालती हूँ"
},

studyRest8: {
  en: "My schedule leaves little time to recover",
  hi: "मेरी दिनचर्या में ठीक से उबरने के लिए बहुत कम समय बचता है"
},

studyRest9: {
  en: "I feel physically or mentally worn out",
  hi: "मुझे शारीरिक या मानसिक रूप से बहुत थका हुआ महसूस होता है"
},

studyRest10: {
  en: "Lack of rest affects my concentration or mood",
  hi: "आराम की कमी मेरी एकाग्रता या मनोदशा को प्रभावित करती है"
},

studyRestRarelyTitle: {
  en: "Your study-rest balance appears relatively healthy",
  hi: "आपका अध्ययन और विश्राम संतुलन काफ़ी हद तक स्वस्थ दिखता है"
},

studyRestRarelyDesc: {
  en: "Your study-rest balance appears relatively healthy. You seem able to study while also allowing recovery.",
  hi: "आप पढ़ाई के साथ-साथ खुद को आराम देने में भी सक्षम दिखाई देते हैं। यह संतुलन सीखने के लिए सहायक होता है।"
},

studyRestRarelyNote: {
  en: "Keep honoring your need for rest-it's essential for effective learning.",
  hi: "आराम की ज़रूरत को महत्व देते रहें, यह प्रभावी सीखने के लिए ज़रूरी है।"
},

studyRestSometimesTitle: {
  en: "Balance may be inconsistent",
  hi: "कभी-कभी संतुलन बिगड़ सकता है"
},

studyRestSometimesDesc: {
  en: "Balance may be inconsistent. During demanding phases, rest may need more attention to prevent overload.",
  hi: "कुछ समय पर पढ़ाई और आराम का संतुलन बिगड़ सकता है। ज़्यादा दबाव वाले दौर में विश्राम पर अतिरिक्त ध्यान देना ज़रूरी हो जाता है।"
},

studyRestSometimesNote: {
  en: "During busy periods, make rest a priority, not an afterthought.",
  hi: "व्यस्त समय में आराम को बाद की बात न बनाएं, उसे प्राथमिकता दें।"
},

studyRestOftenTitle: {
  en: "Rest may be getting overlooked",
  hi: "शायद आराम को लगातार नज़रअंदाज़ किया जा रहा है"
},

studyRestOftenDesc: {
  en: "Rest may be getting overlooked. When recovery is limited, learning can feel heavier and less effective. Supportive adjustments may help restore balance.",
  hi: "अगर आराम लगातार कम हो रहा है, तो पढ़ाई बोझिल और कम प्रभावी लग सकती है। कुछ सहायक बदलाव संतुलन वापस लाने में मदद कर सकते हैं।"
},

studyRestOftenNote: {
  en: "Reaching out about balancing study and rest can help you feel better.",
  hi: "पढ़ाई और आराम के संतुलन को लेकर किसी से बात करना आपको बेहतर महसूस कराने में मदद कर सकता है।"
},
  // Emotional Balance
emotionalBalanceTitle1: {
  en: "Emotional Balance Reflection",
  hi: "भावनात्मक संतुलन पर आत्म-चिंतन"
},

emotionalBalance1: {
  en: "My emotions feel mostly stable during academic routines",
  hi: "पढ़ाई से जुड़ी दिनचर्या के दौरान मेरी भावनाएं अधिकतर संतुलित रहती हैं"
},

emotionalBalance2: {
  en: "Small academic issues affect my mood strongly",
  hi: "छोटी-छोटी शैक्षणिक बातें भी मेरी मनोदशा को काफ़ी प्रभावित करती हैं"
},

emotionalBalance3: {
  en: "I feel emotionally overwhelmed at times",
  hi: "कभी-कभी मैं भावनात्मक रूप से बहुत भारी महसूस करता/करती हूँ"
},

emotionalBalance4: {
  en: "I can calm myself after feeling stressed",
  hi: "तनाव महसूस करने के बाद मैं खुद को धीरे-धीरे शांत कर पाता/पाती हूँ"
},

emotionalBalance5: {
  en: "My mood changes with academic pressure",
  hi: "शैक्षणिक दबाव के साथ मेरी मनोदशा बदलने लगती है"
},

emotionalBalance6: {
  en: "I feel emotionally drained after study sessions",
  hi: "पढ़ाई के सत्रों के बाद मैं भावनात्मक रूप से थका हुआ महसूस करता/करती हूँ"
},

emotionalBalance7: {
  en: "I recover emotionally after setbacks",
  hi: "नुकसान या असफलता के बाद मैं भावनात्मक रूप से संभल पाता/पाती हूँ"
},

emotionalBalance8: {
  en: "Stress affects how I feel about learning",
  hi: "तनाव इस बात को प्रभावित करता है कि मैं पढ़ाई के बारे में कैसा महसूस करता/करती हूँ"
},

emotionalBalance9: {
  en: "I feel emotionally balanced most days",
  hi: "अधिकतर दिनों में मैं भावनात्मक रूप से संतुलित महसूस करता/करती हूँ"
},

emotionalBalance10: {
  en: "Emotional strain affects my motivation",
  hi: "भावनात्मक दबाव मेरी प्रेरणा को प्रभावित करता है"
},

emotionalBalanceRarelyTitle: {
  en: "Your emotional balance appears relatively stable",
  hi: "आपका भावनात्मक संतुलन काफ़ी हद तक स्थिर दिखाई देता है"
},

emotionalBalanceRarelyDesc: {
  en: "Your emotional balance appears relatively stable. Challenges may arise, but emotions do not seem to overwhelm your learning experience.",
  hi: "चुनौतियाँ आ सकती हैं, लेकिन आपकी भावनाएं पढ़ाई के अनुभव को पूरी तरह से भारी नहीं बना रहीं। यह एक स्वस्थ संकेत है।"
},

emotionalBalanceRarelyNote: {
  en: "Keep maintaining practices that keep you emotionally steady.",
  hi: "जो चीज़ें आपको भावनात्मक रूप से स्थिर रखती हैं, उन्हें जारी रखें।"
},

emotionalBalanceSometimesTitle: {
  en: "Emotional ups and downs are present",
  hi: "भावनात्मक उतार-चढ़ाव दिखाई देते हैं"
},

emotionalBalanceSometimesDesc: {
  en: "Emotional ups and downs are present, which is common during academic pressure. Awareness and support can help maintain balance.",
  hi: "पढ़ाई के दबाव में भावनात्मक उतार-चढ़ाव होना सामान्य है। इन्हें पहचानना और सही समर्थन लेना संतुलन बनाए रखने में मदद करता है।"
},

emotionalBalanceSometimesNote: {
  en: "Notice patterns in your emotions and what helps you feel steadier.",
  hi: "यह ध्यान दें कि आपकी भावनाएं कब बदलती हैं और क्या चीज़ें आपको संतुलित महसूस कराने में मदद करती हैं।"
},

emotionalBalanceOftenTitle: {
  en: "Emotional load may be affecting learning more consistently",
  hi: "भावनात्मक बोझ लगातार आपकी पढ़ाई को प्रभावित कर सकता है"
},

emotionalBalanceOftenDesc: {
  en: "Emotional load may be affecting learning more consistently. When emotions feel heavy or persistent, reaching out for support can help restore steadiness.",
  hi: "अगर भावनात्मक बोझ बार-बार या लंबे समय तक बना रहता है, तो पढ़ाई पर उसका असर पड़ सकता है। ऐसे समय पर समर्थन लेना संतुलन वापस लाने में सहायक हो सकता है।"
},

emotionalBalanceOftenNote: {
  en: "You deserve support-sharing how you feel is an important first step.",
  hi: "आप समर्थन के हक़दार हैं, अपनी भावनाओं को साझा करना एक महत्वपूर्ण पहला कदम है।"
},
  // Mood & Motivation
moodMotivationTitle1: {
  en: "Mood & Motivation Reflection",
  hi: "मनोदशा और प्रेरणा पर आत्म-चिंतन"
},

moodMotivation1: {
  en: "I feel interested in what I am studying",
  hi: "जो मैं पढ़ रहा/रही हूँ, उसमें मुझे रुचि महसूस होती है"
},

moodMotivation2: {
  en: "I struggle to feel motivated even when work is important",
  hi: "काम महत्वपूर्ण होने पर भी मुझे प्रेरित महसूस करने में कठिनाई होती है"
},

moodMotivation3: {
  en: "My mood affects how willing I feel to study",
  hi: "मेरी मनोदशा इस बात को प्रभावित करती है कि मैं पढ़ाई के लिए कितना इच्छुक महसूस करता/करती हूँ"
},

moodMotivation4: {
  en: "I feel mentally dull or uninterested at times",
  hi: "कभी-कभी मैं मानसिक रूप से सुस्त या रुचिहीन महसूस करता/करती हूँ"
},

moodMotivation5: {
  en: "I enjoy learning moments occasionally",
  hi: "कभी-कभी मुझे सीखने के क्षणों में आनंद भी मिलता है"
},

moodMotivation6: {
  en: "Starting study feels harder than continuing it",
  hi: "पढ़ाई शुरू करना, उसे जारी रखने की तुलना में ज़्यादा कठिन लगता है"
},

moodMotivation7: {
  en: "My motivation drops when pressure increases",
  hi: "जब दबाव बढ़ता है, तो मेरी प्रेरणा कम हो जाती है"
},

moodMotivation8: {
  en: "I feel emotionally disconnected from studies sometimes",
  hi: "कभी-कभी मैं पढ़ाई से भावनात्मक रूप से अलग-सा महसूस करता/करती हूँ"
},

moodMotivation9: {
  en: "Encouragement helps improve my motivation",
  hi: "प्रोत्साहन मिलने से मेरी प्रेरणा बेहतर होती है"
},

moodMotivation10: {
  en: "Low mood affects my effort or consistency",
  hi: "कम मनोदशा मेरे प्रयास या नियमितता को प्रभावित करती है"
},

moodMotivationRarelyTitle: {
  en: "Your motivation and mood appear generally positive",
  hi: "आपकी प्रेरणा और मनोदशा सामान्यतः सकारात्मक दिखाई देती है"
},

moodMotivationRarelyDesc: {
  en: "Your motivation and mood appear generally positive. Interest in studying seems steady and low mood does not seem to consistently interfere.",
  hi: "आपकी प्रेरणा और मनोदशा सामान्य रूप से संतुलित लगती है। पढ़ाई में रुचि बनी हुई है और कम मनोदशा लगातार बाधा नहीं बन रही।"
},

moodMotivationRarelyNote: {
  en: "Keep connecting with what makes learning meaningful to you.",
  hi: "जो चीज़ें आपके लिए पढ़ाई को अर्थपूर्ण बनाती हैं, उनसे जुड़े रहना जारी रखें।"
},

moodMotivationSometimesTitle: {
  en: "Motivation and mood fluctuate at times",
  hi: "कभी-कभी प्रेरणा और मनोदशा में उतार-चढ़ाव होता है"
},

moodMotivationSometimesDesc: {
  en: "Motivation and mood fluctuate at times, especially during high-pressure periods. This is completely normal and very common.",
  hi: "खासतौर पर ज़्यादा दबाव के समय, प्रेरणा और मनोदशा में उतार-चढ़ाव होना बिल्कुल सामान्य और आम बात है।"
},

moodMotivationSometimesNote: {
  en: "Notice what activities or support help restore your motivation.",
  hi: "यह ध्यान दें कि कौन-सी गतिविधियाँ या कौन-सा समर्थन आपकी प्रेरणा को वापस लाने में मदद करता है।"
},

moodMotivationOftenTitle: {
  en: "Low motivation or mood may be affecting learning",
  hi: "कम प्रेरणा या मनोदशा आपकी पढ़ाई को प्रभावित कर सकती है"
},

moodMotivationOftenDesc: {
  en: "Low motivation or mood may be affecting learning more consistently. When disengagement feels frequent, exploring what's behind it or reaching out for support can help.",
  hi: "अगर कम प्रेरणा या मनोदशा बार-बार बनी रहती है, तो इसका असर पढ़ाई पर पड़ सकता है। इसके पीछे के कारणों को समझना या समर्थन लेना मददगार हो सकता है।"
},

moodMotivationOftenNote: {
  en: "Talking about what drains your motivation can help find practical solutions.",
  hi: "जो चीज़ें आपकी प्रेरणा को कम करती हैं, उनके बारे में बात करना व्यावहारिक समाधान खोजने में मदद कर सकता है।"
},
// Academic Anxiety
academicAnxietyTitle1: {
  en: "Academic Anxiety Awareness Reflection",
  hi: "शैक्षणिक चिंता जागरूकता चिंतन"
},

academicAnxiety1: {
  en: "Academic thoughts make me feel uneasy or tense",
  hi: "पढ़ाई से जुड़े विचार मुझे बेचैन या तनावग्रस्त महसूस कराते हैं"
},

academicAnxiety2: {
  en: "I experience physical signs of nervousness while studying",
  hi: "पढ़ाई करते समय मुझे घबराहट के शारीरिक संकेत महसूस होते हैं"
},

academicAnxiety3: {
  en: "I worry excessively about academic outcomes",
  hi: "मैं पढ़ाई के परिणामों को लेकर ज़रूरत से ज़्यादा चिंता करता/करती हूँ"
},

academicAnxiety4: {
  en: "I imagine negative results even after preparing",
  hi: "तैयारी के बाद भी मेरे मन में नकारात्मक परिणाम आने लगते हैं"
},

academicAnxiety5: {
  en: "Academic pressure stays on my mind",
  hi: "पढ़ाई का दबाव अक्सर मेरे दिमाग में बना रहता है"
},

academicAnxiety6: {
  en: "I feel relief only after tasks or exams are over",
  hi: "मुझे राहत तभी महसूस होती है जब काम या परीक्षाएँ पूरी हो जाती हैं"
},

academicAnxiety7: {
  en: "Anxiety affects how clearly I think",
  hi: "चिंता मेरी साफ़ और स्पष्ट सोच को प्रभावित करती है"
},

academicAnxiety8: {
  en: "I feel restless when expectations are high",
  hi: "जब मुझसे ज़्यादा अपेक्षाएँ होती हैं, तो मुझे बेचैनी महसूस होती है"
},

academicAnxiety9: {
  en: "Fear of failure affects my confidence",
  hi: "असफल होने का डर मेरे आत्मविश्वास को प्रभावित करता है"
},

academicAnxiety10: {
  en: "Academic worry interferes with my focus",
  hi: "पढ़ाई को लेकर चिंता मेरे ध्यान और फोकस में बाधा डालती है"
},

academicAnxietyRarelyTitle: {
  en: "Academic anxiety does not seem to be strongly present",
  hi: "शैक्षणिक चिंता ज़्यादा हावी नहीं दिखती"
},

academicAnxietyRarelyDesc: {
  en: "Academic anxiety does not seem to be strongly present. While some nervousness before exams is normal, it does not appear to affect you heavily.",
  hi: "परीक्षा से पहले थोड़ी घबराहट सामान्य है, लेकिन शैक्षणिक चिंता आपकी पढ़ाई या मानसिक संतुलन को ज़्यादा प्रभावित करती हुई नहीं दिखती।"
},

academicAnxietyRarelyNote: {
  en: "You appear to have a healthy and realistic attitude toward academic challenges.",
  hi: "शैक्षणिक चुनौतियों के प्रति आपका दृष्टिकोण संतुलित और यथार्थवादी लगता है।"
},

academicAnxietySometimesTitle: {
  en: "Academic anxiety appears during certain situations",
  hi: "कुछ परिस्थितियों में शैक्षणिक चिंता महसूस होती है"
},

academicAnxietySometimesDesc: {
  en: "Academic anxiety appears during certain situations, particularly during exams or high-stakes periods. This is extremely common among students.",
  hi: "खासतौर पर परीक्षाओं या अधिक दबाव वाले समय में शैक्षणिक चिंता महसूस होना छात्रों में बहुत आम बात है।"
},

academicAnxietySometimesNote: {
  en: "Notice what specific situations trigger anxiety and what helps you feel calmer.",
  hi: "यह समझने की कोशिश करें कि कौन-सी स्थितियाँ आपकी चिंता बढ़ाती हैं और क्या आपको शांत महसूस कराने में मदद करता है।"
},

academicAnxietyOftenTitle: {
  en: "Anxiety around academics may be affecting your wellbeing consistently",
  hi: "पढ़ाई से जुड़ी चिंता लगातार आपके मानसिक संतुलन को प्रभावित कर सकती है"
},

academicAnxietyOftenDesc: {
  en: "Anxiety around academics may be affecting your wellbeing consistently. When worry feels frequent or intense, reaching out for support can help build confidence.",
  hi: "अगर पढ़ाई को लेकर चिंता बार-बार या बहुत ज़्यादा महसूस होती है, तो यह आपके मानसिक संतुलन को प्रभावित कर सकती है। ऐसे समय में समर्थन लेना आत्मविश्वास दोबारा बनाने में मदद कर सकता है।"
},

academicAnxietyOftenNote: {
  en: "Many students experience this-you are not alone. Support can make a real difference.",
  hi: "कई छात्र ऐसा महसूस करते हैं, आप अकेले नहीं हैं। सही समर्थन वास्तव में फर्क ला सकता है।"
},

// Grit & Persistence
gritPersistenceTitle1: {
  en: "Grit & Persistence Reflection",
  hi: "दृढ़ता और निरंतर प्रयास आत्म-चिंतन"
},

gritPersistence1: {
  en: "I continue studying even after facing difficulties",
  hi: "कठिनाइयों के बावजूद मैं पढ़ाई जारी रखने की कोशिश करता/करती हूँ"
},

gritPersistence2: {
  en: "I feel discouraged easily when learning feels hard",
  hi: "जब पढ़ाई कठिन लगती है तो मैं जल्दी हतोत्साहित हो जाता/जाती हूँ"
},

gritPersistence3: {
  en: "I try again after making academic mistakes",
  hi: "पढ़ाई में गलती होने के बाद मैं दोबारा कोशिश करता/करती हूँ"
},

gritPersistence4: {
  en: "Setbacks reduce my willingness to continue",
  hi: "झटके मेरी आगे बढ़ने की इच्छा को कम कर देते हैं"
},

gritPersistence5: {
  en: "Long-term goals motivate my effort",
  hi: "लंबे समय के लक्ष्य मेरे प्रयास को प्रेरित करते हैं"
},

gritPersistence6: {
  en: "I give up faster than I would like",
  hi: "मैं जितना चाहता/चाहती हूँ उससे जल्दी हार मान लेता/लेती हूँ"
},

gritPersistence7: {
  en: "I believe effort can improve outcomes",
  hi: "मुझे विश्वास है कि निरंतर प्रयास से परिणाम बेहतर हो सकते हैं"
},

gritPersistence8: {
  en: "Challenges make me feel emotionally drained",
  hi: "लगातार चुनौतियाँ मुझे भावनात्मक रूप से थका हुआ महसूस कराती हैं"
},

gritPersistence9: {
  en: "I feel proud of persistence after difficulty",
  hi: "कठिनाई के बाद डटे रहने पर मुझे अपने आप पर गर्व महसूस होता है"
},

gritPersistence10: {
  en: "I stay committed even when progress feels slow",
  hi: "प्रगति धीमी लगने पर भी मैं प्रयास जारी रखने की कोशिश करता/करती हूँ"
},

gritPersistenceRarelyTitle: {
  en: "Your persistence appears reasonably strong",
  hi: "आपकी दृढ़ता और निरंतरता काफ़ी मजबूत दिखती है"
},

gritPersistenceRarelyDesc: {
  en: "Your persistence appears reasonably strong. Setbacks do not easily defeat you and you seem able to return to effort after difficulty.",
  hi: "झटकों के बावजूद आप आसानी से हार नहीं मानते और कठिनाई के बाद दोबारा प्रयास करने में सक्षम दिखते हैं।"
},

gritPersistenceRarelyNote: {
  en: "Keep nurturing the resilience and determination you clearly possess.",
  hi: "अपने भीतर मौजूद लचीलापन और दृढ़ संकल्प को आगे भी बनाए रखें।"
},

gritPersistenceSometimesTitle: {
  en: "Persistence fluctuates during challenges",
  hi: "कठिन समय में दृढ़ता कभी बढ़ती तो कभी कम होती है"
},

gritPersistenceSometimesDesc: {
  en: "Persistence fluctuates during challenges, especially when difficulty feels heavy. This is very normal-effort naturally feels harder during tough phases.",
  hi: "जब चुनौतियाँ ज़्यादा भारी लगती हैं, तब प्रयास बनाए रखना कठिन हो सकता है, यह बिल्कुल सामान्य बात है।"
},

gritPersistenceSometimesNote: {
  en: "Remembering past successes can help you persist through current struggles.",
  hi: "अपनी पिछली सफलताओं को याद करना वर्तमान कठिनाइयों में आगे बढ़ने में मदद कर सकता है।"
},

gritPersistenceOftenTitle: {
  en: "Difficulty sustaining effort may be affecting learning",
  hi: "लगातार प्रयास बनाए रखना सीखने को प्रभावित कर सकता है"
},

gritPersistenceOftenDesc: {
  en: "Difficulty sustaining effort may be affecting learning, especially when setbacks accumulate. Support in building confidence and breaking goals into smaller steps can help restore resilience.",
  hi: "अगर प्रयास बनाए रखना कठिन लग रहा है, तो सीखने पर असर पड़ सकता है। ऐसे समय में आत्मविश्वास बढ़ाने और लक्ष्यों को छोटे कदमों में बाँटने से मदद मिल सकती है।"
},

gritPersistenceOftenNote: {
  en: "Exploring what feels most draining and what kinds of support help can make a real difference.",
  hi: "यह समझना कि आपको सबसे ज़्यादा क्या थका देता है और किस तरह का समर्थन मदद करता है, वास्तव में फर्क ला सकता है।"
},
  // Learning Confidence
// Learning Confidence
learningConfidenceTitle1: {
  en: "Learning Self-Confidence Reflection",
  hi: "सीखने में आत्मविश्वास पर आत्म-चिंतन"
},

learningConfidence1: {
  en: "I believe I can understand difficult topics with effort",
  hi: "मुझे विश्वास है कि प्रयास करने पर मैं कठिन विषयों को भी समझ सकता/सकती हूँ"
},

learningConfidence2: {
  en: "I doubt my abilities while studying",
  hi: "पढ़ाई करते समय मुझे अपनी क्षमताओं पर संदेह होने लगता है"
},

learningConfidence3: {
  en: "I feel capable when I put in consistent effort",
  hi: "लगातार प्रयास करने पर मैं खुद को सक्षम महसूस करता/करती हूँ"
},

learningConfidence4: {
  en: "I compare my performance negatively with others",
  hi: "मैं अपनी प्रगति की तुलना दूसरों से करके खुद को कम आँकने लगता/लगती हूँ"
},

learningConfidence5: {
  en: "I trust my learning process",
  hi: "मुझे अपनी सीखने की प्रक्रिया पर भरोसा है"
},

learningConfidence6: {
  en: "Making mistakes reduces my confidence",
  hi: "गलतियाँ होने पर मेरा आत्मविश्वास कम हो जाता है"
},

learningConfidence7: {
  en: "I feel confident asking questions or seeking help",
  hi: "मुझे सवाल पूछने या मदद माँगने में झिझक नहीं होती"
},

learningConfidence8: {
  en: "I feel unsure about my academic abilities lately",
  hi: "हाल के समय में मुझे अपनी पढ़ाई की क्षमताओं को लेकर अनिश्चितता महसूस होती है"
},

learningConfidence9: {
  en: "Encouragement improves my confidence",
  hi: "प्रोत्साहन मिलने से मेरा आत्मविश्वास बढ़ता है"
},

learningConfidence10: {
  en: "Self-doubt affects how I approach learning",
  hi: "आत्म-संदेह मेरे सीखने के तरीके को प्रभावित करता है"
},

learningConfidenceRarelyTitle: {
  en: "Your learning confidence appears reasonably strong",
  hi: "आपका सीखने का आत्मविश्वास काफ़ी मजबूत दिखाई देता है"
},

learningConfidenceRarelyDesc: {
  en: "Your learning confidence appears reasonably strong. Setbacks do not seem to shake your belief that you can understand and improve.",
  hi: "छोटी-मोटी कठिनाइयाँ भी आपके इस विश्वास को नहीं डगमगातीं कि आप समझ सकते हैं और आगे बेहतर कर सकते हैं।"
},

learningConfidenceRarelyNote: {
  en: "Keep trusting your ability to learn and grow through effort.",
  hi: "प्रयास के माध्यम से सीखने और आगे बढ़ने की अपनी क्षमता पर भरोसा बनाए रखें।"
},

learningConfidenceSometimesTitle: {
  en: "Confidence fluctuates, especially during challenges",
  hi: "चुनौतियों के समय आत्मविश्वास में उतार-चढ़ाव आ सकता है"
},

learningConfidenceSometimesDesc: {
  en: "Confidence fluctuates, especially during challenging periods or after setbacks. This is very common-confidence naturally dips when learning feels hard.",
  hi: "कठिन समय या झटकों के बाद आत्मविश्वास का कम होना बहुत सामान्य है, जब सीखना कठिन लगता है, तो ऐसा होना स्वाभाविक है।"
},

learningConfidenceSometimesNote: {
  en: "Notice what builds your confidence back up and lean on that.",
  hi: "ध्यान दें कि कौन-सी चीज़ें आपका आत्मविश्वास फिर से बढ़ाती हैं और उन पर भरोसा करें।"
},

learningConfidenceOftenTitle: {
  en: "Self-doubt may be affecting your learning approach",
  hi: "आत्म-संदेह आपके सीखने के तरीके को प्रभावित कर रहा हो सकता है"
},

learningConfidenceOftenDesc: {
  en: "Self-doubt may be affecting your learning approach more consistently. When confidence feels persistently low, support in recognizing your strengths and reframing setbacks can help significantly.",
  hi: "अगर आत्मविश्वास लगातार कम महसूस हो रहा है, तो अपनी ताक़तों को पहचानना और कठिनाइयों को नए नज़रिये से देखना बहुत मददगार हो सकता है।"
},

learningConfidenceOftenNote: {
  en: "You are capable-sharing doubts with someone supportive can help restore belief in yourself.",
  hi: "आप सक्षम हैं, किसी भरोसेमंद व्यक्ति से अपने संदेह साझा करना खुद पर विश्वास लौटाने में मदद कर सकता है।"
},

// Growth Mindset
growthMindsetTitle1: {
  en: "Growth Mindset Reflection",
  hi: "विकास-मानसिकता पर आत्म-चिंतन"
},

growthMindset1: {
  en: "I see mistakes as opportunities to learn",
  hi: "मैं गलतियों को सीखने के अवसर के रूप में देखता/देखती हूँ"
},

growthMindset2: {
  en: "I fear making mistakes in academic settings",
  hi: "पढ़ाई के दौरान मुझसे गलती हो जाने का डर रहता है"
},

growthMindset3: {
  en: "Feedback helps me improve",
  hi: "मिली हुई प्रतिक्रिया मुझे बेहतर बनने में मदद करती है"
},

growthMindset4: {
  en: "I avoid challenges to prevent failure",
  hi: "असफल होने के डर से मैं कभी-कभी चुनौतियों से बचता/बचती हूँ"
},

growthMindset5: {
  en: "Effort matters more than immediate success",
  hi: "तुरंत सफलता से ज़्यादा प्रयास मेरे लिए मायने रखता है"
},

growthMindset6: {
  en: "I feel discouraged when I struggle",
  hi: "संघर्ष के समय मैं निराश महसूस करने लगता/लगती हूँ"
},

growthMindset7: {
  en: "I believe abilities can improve with practice",
  hi: "मुझे विश्वास है कि अभ्यास से क्षमताएँ बेहतर हो सकती हैं"
},

growthMindset8: {
  en: "I feel judged when I make mistakes",
  hi: "गलतियाँ करने पर मुझे ऐसा लगता है जैसे मुझे आँका जा रहा हो"
},

growthMindset9: {
  en: "Challenges help me grow",
  hi: "चुनौतियाँ मुझे आगे बढ़ने और सीखने में मदद करती हैं"
},

growthMindset10: {
  en: "Fear of mistakes affects my participation",
  hi: "गलती का डर मेरी भागीदारी को प्रभावित करता है"
},

growthMindsetRarelyTitle: {
  en: "Your approach to learning appears growth-oriented",
  hi: "आपका सीखने का दृष्टिकोण विकास-उन्मुख दिखाई देता है"
},

growthMindsetRarelyDesc: {
  en: "Your approach to learning appears growth-oriented. You seem comfortable with mistakes and view challenges as opportunities rather than threats.",
  hi: "आप गलतियों से घबराने की बजाय उन्हें सीखने का हिस्सा मानते हैं और चुनौतियों को अवसर की तरह देखते हैं।"
},

growthMindsetRarelyNote: {
  en: "Keep valuing effort and learning over immediate perfection.",
  hi: "तुरंत परफ़ेक्शन की बजाय प्रयास और सीखने को महत्व देते रहें।"
},

growthMindsetSometimesTitle: {
  en: "You sometimes view mistakes as learning opportunities",
  hi: "कभी-कभी आप गलतियों को सीखने के अवसर के रूप में देखते हैं"
},

growthMindsetSometimesDesc: {
  en: "You sometimes view mistakes as learning opportunities, but fear of failure does emerge at times. This is a normal balance.",
  hi: "आप कई बार गलतियों से सीखते हैं, लेकिन कभी-कभी असफलता का डर भी सामने आता है, यह एक सामान्य संतुलन है।"
},

growthMindsetSometimesNote: {
  en: "Notice when fear shows up and remind yourself that mistakes are how we grow.",
  hi: "जब डर महसूस हो, तो खुद को याद दिलाएँ कि गलतियाँ ही हमें आगे बढ़ाती हैं।"
},

growthMindsetOftenTitle: {
  en: "Fear of mistakes may be affecting your learning engagement",
  hi: "गलतियों का डर आपकी सीखने की सहभागिता को प्रभावित कर सकता है"
},

growthMindsetOftenDesc: {
  en: "Fear of mistakes may be affecting your learning engagement more consistently. When failure feels too risky, support in reframing mistakes can help restore confidence.",
  hi: "अगर गलती करने का डर ज़्यादा हावी हो रहा है, तो गलतियों को नए नज़रिये से देखना आत्मविश्वास लौटाने में मदद कर सकता है।"
},

growthMindsetOftenNote: {
  en: "Learning to see mistakes as valuable feedback (not judgment) can be transformative.",
  hi: "गलतियों को आलोचना नहीं बल्कि उपयोगी सीख के रूप में देखना सोच में बड़ा बदलाव ला सकता है।"
},
  // Home Adjustment
// Home Adjustment
homeAdjustmentTitle1: {
  en: "Home-Study Adjustment Reflection",
  hi: "घर और पढ़ाई के बीच संतुलन पर आत्म-चिंतन"
},

homeAdjustment1: {
  en: "My home environment supports my studies",
  hi: "मेरा घर का वातावरण मेरी पढ़ाई को सहयोग देता है"
},

homeAdjustment2: {
  en: "Family expectations feel manageable",
  hi: "परिवार की अपेक्षाएँ मुझे संभालने योग्य लगती हैं"
},

homeAdjustment3: {
  en: "Noise or space at home affects my concentration",
  hi: "घर में शोर या जगह की कमी मेरी एकाग्रता को प्रभावित करती है"
},

homeAdjustment4: {
  en: "I feel pressure to meet others' academic expectations",
  hi: "मुझे दूसरों की शैक्षणिक अपेक्षाएँ पूरी करने का दबाव महसूस होता है"
},

homeAdjustment5: {
  en: "I can communicate my study needs at home",
  hi: "मैं घर पर अपनी पढ़ाई से जुड़ी ज़रूरतें बता पाता/पाती हूँ"
},

homeAdjustment6: {
  en: "Home responsibilities interfere with study time",
  hi: "घर की ज़िम्मेदारियाँ कभी-कभी मेरी पढ़ाई के समय में बाधा बनती हैं"
},

homeAdjustment7: {
  en: "I feel emotionally supported at home",
  hi: "मैं घर पर भावनात्मक रूप से समर्थित महसूस करता/करती हूँ"
},

homeAdjustment8: {
  en: "Family discussions increase my academic stress",
  hi: "कभी-कभी पारिवारिक बातचीत से मेरी पढ़ाई का तनाव बढ़ जाता है"
},

homeAdjustment9: {
  en: "I feel comfortable studying at home",
  hi: "मैं घर पर पढ़ाई करते समय सहज महसूस करता/करती हूँ"
},

homeAdjustment10: {
  en: "Home-related pressure affects my motivation",
  hi: "घर से जुड़ा दबाव मेरी पढ़ाई की प्रेरणा को प्रभावित करता है"
},

homeAdjustmentRarelyTitle: {
  en: "Your home environment seems supportive of learning",
  hi: "आपका घर का वातावरण पढ़ाई के लिए सहयोगी दिखाई देता है"
},

homeAdjustmentRarelyDesc: {
  en: "Your home environment seems supportive of learning. You appear to have space and support to study effectively.",
  hi: "आपको घर पर पढ़ाई के लिए आवश्यक सहयोग और स्थान मिल रहा है, जिससे सीखना आसान बनता है।"
},

homeAdjustmentRarelyNote: {
  en: "Keep fostering open communication about your academic needs at home.",
  hi: "घर पर अपनी पढ़ाई से जुड़ी ज़रूरतों पर खुलकर बातचीत करते रहना उपयोगी रहेगा।"
},

homeAdjustmentSometimesTitle: {
  en: "Home factors affect your studies at times",
  hi: "कभी-कभी घर से जुड़े कारक आपकी पढ़ाई को प्रभावित करते हैं"
},

homeAdjustmentSometimesDesc: {
  en: "Home factors affect your studies at times. Finding ways to communicate your needs or create study space can help.",
  hi: "कभी-कभी घर की परिस्थितियाँ पढ़ाई में असर डाल सकती हैं। ऐसे में ज़रूरतों को साझा करना या पढ़ने की जगह तय करना मददगार हो सकता है।"
},

homeAdjustmentSometimesNote: {
  en: "Even small adjustments at home can improve focus and reduce stress.",
  hi: "घर में किए गए छोटे बदलाव भी एकाग्रता बढ़ाने और तनाव कम करने में सहायक हो सकते हैं।"
},

homeAdjustmentOftenTitle: {
  en: "Home-related challenges may be affecting learning",
  hi: "घर से जुड़ी चुनौतियाँ आपकी पढ़ाई को प्रभावित कर रही हो सकती हैं"
},

homeAdjustmentOftenDesc: {
  en: "Home-related challenges may be affecting learning more consistently. When home factors feel draining, talking to someone supportive about solutions can help.",
  hi: "अगर घर की परिस्थितियाँ लगातार भारी लग रही हैं, तो किसी भरोसेमंद व्यक्ति से समाधान पर बात करना मदद कर सकता है।"
},

homeAdjustmentOftenNote: {
  en: "Your struggles are valid-exploring practical adjustments or support can make a difference.",
  hi: "आपकी कठिनाइयाँ वास्तविक हैं, व्यावहारिक बदलाव या सहयोग तलाशना फर्क ला सकता है।"
},

// School Adjustment
schoolAdjustmentTitle1: {
  en: "School Adjustment Reflection",
  hi: "स्कूल के वातावरण से तालमेल पर आत्म-चिंतन"
},

schoolAdjustment1: {
  en: "The teaching pace suits my learning ability",
  hi: "पढ़ाने की गति मेरी समझ और सीखने की क्षमता के अनुसार है"
},

schoolAdjustment2: {
  en: "I feel comfortable asking questions or doubts",
  hi: "मैं सवाल या शंकाएँ पूछने में सहज महसूस करता/करती हूँ"
},

schoolAdjustment3: {
  en: "Academic expectations feel very high",
  hi: "शैक्षणिक अपेक्षाएँ कभी-कभी बहुत ज़्यादा लगती हैं"
},

schoolAdjustment4: {
  en: "I feel supported by teachers or instructors",
  hi: "मुझे शिक्षकों से सहयोग और समझ का अनुभव होता है"
},

schoolAdjustment5: {
  en: "I struggle to keep up with lessons at times",
  hi: "कभी-कभी मुझे पाठों के साथ तालमेल बिठाने में कठिनाई होती है"
},

schoolAdjustment6: {
  en: "The learning environment motivates me",
  hi: "स्कूल का सीखने का वातावरण मुझे आगे बढ़ने के लिए प्रेरित करता है"
},

schoolAdjustment7: {
  en: "I feel anxious in class settings",
  hi: "कक्षा में मुझे कभी-कभी घबराहट महसूस होती है"
},

schoolAdjustment8: {
  en: "Feedback from teachers helps me improve",
  hi: "शिक्षकों से मिली प्रतिक्रिया मुझे सुधार करने में मदद करती है"
},

schoolAdjustment9: {
  en: "I feel pressure to perform in front of others",
  hi: "दूसरों के सामने अच्छा प्रदर्शन करने का दबाव महसूस होता है"
},

schoolAdjustment10: {
  en: "The academic environment affects my confidence",
  hi: "शैक्षणिक माहौल मेरे आत्मविश्वास को प्रभावित करता है"
},

schoolAdjustmentRarelyTitle: {
  en: "You appear well-adjusted to the academic environment",
  hi: "आप स्कूल के शैक्षणिक वातावरण के साथ अच्छी तरह तालमेल में दिखते हैं"
},

schoolAdjustmentRarelyDesc: {
  en: "You appear well-adjusted to the academic environment. Pace and expectations seem manageable and you feel reasonably supported.",
  hi: "पढ़ाई की गति और अपेक्षाएँ आपको संभालने योग्य लगती हैं और आपको पर्याप्त सहयोग मिलता हुआ दिखाई देता है।"
},

schoolAdjustmentRarelyNote: {
  en: "Keep appreciating the environment that's working for you.",
  hi: "जो बातें आपके लिए काम कर रही हैं, उनकी सराहना करते रहना सहायक रहेगा।"
},

schoolAdjustmentSometimesTitle: {
  en: "Adjustment challenges appear at times",
  hi: "कभी-कभी तालमेल से जुड़ी चुनौतियाँ सामने आती हैं"
},

schoolAdjustmentSometimesDesc: {
  en: "Adjustment challenges appear at times, particularly around pace or performance pressure. Finding ways to communicate needs can help.",
  hi: "गति या प्रदर्शन के दबाव के कारण कभी-कभी कठिनाई हो सकती है। ज़रूरतों को साझा करने से स्थिति बेहतर हो सकती है।"
},

schoolAdjustmentSometimesNote: {
  en: "Reaching out to teachers about concerns can often lead to helpful adjustments.",
  hi: "अपनी चिंताओं को शिक्षकों से साझा करना अक्सर सकारात्मक बदलाव ला सकता है।"
},

schoolAdjustmentOftenTitle: {
  en: "Adjustment to the academic environment may be affecting learning",
  hi: "स्कूल के माहौल से तालमेल न बन पाना पढ़ाई को प्रभावित कर सकता है"
},

schoolAdjustmentOftenDesc: {
  en: "Adjustment to the academic environment may be affecting learning consistently. When the environment feels misaligned, support in problem-solving or finding alternatives can help.",
  hi: "अगर माहौल लंबे समय तक अनुकूल न लगे, तो समाधान तलाशने या विकल्पों पर बात करने से मदद मिल सकती है।"
},

schoolAdjustmentOftenNote: {
  en: "Speaking with teachers, counselors or parents about adjustments is an important step.",
  hi: "शिक्षकों, परामर्शदाताओं या माता-पिता से इस बारे में बात करना एक महत्वपूर्ण कदम हो सकता है।"
},

// Social Support
socialSupportTitle1: {
  en: "Social Support Awareness Reflection",
  hi: "सामाजिक सहयोग की जागरूकता पर आत्म-चिंतन"
},

socialSupport1: {
  en: "I have someone I can talk to about academic stress",
  hi: "मेरे पास कोई है जिससे मैं पढ़ाई के तनाव के बारे में बात कर सकता/सकती हूँ"
},

socialSupport2: {
  en: "I feel alone when dealing with study pressure",
  hi: "पढ़ाई के दबाव से जूझते समय मैं कभी-कभी अकेला महसूस करता/करती हूँ"
},

socialSupport3: {
  en: "Friends understand my academic challenges",
  hi: "मेरे दोस्त मेरी पढ़ाई से जुड़ी चुनौतियों को समझते हैं"
},

socialSupport4: {
  en: "Teachers or mentors feel approachable",
  hi: "शिक्षक या मार्गदर्शक मुझसे बात करने योग्य लगते हैं"
},

socialSupport5: {
  en: "Emotional support helps me feel lighter",
  hi: "भावनात्मक सहयोग मिलने से मन हल्का महसूस होता है"
},

socialSupport6: {
  en: "I hesitate to share academic struggles",
  hi: "मैं अपनी पढ़ाई की कठिनाइयों को साझा करने में हिचकिचाता/हिचकिचाती हूँ"
},

socialSupport7: {
  en: "I feel understood when I talk about learning stress",
  hi: "पढ़ाई के तनाव पर बात करने से मुझे समझा हुआ महसूस होता है"
},

socialSupport8: {
  en: "Support reduces my anxiety or worry",
  hi: "सहयोग मिलने से मेरी चिंता कम होती है"
},

socialSupport9: {
  en: "I know where to seek help if needed",
  hi: "ज़रूरत पड़ने पर मुझे पता है कि मदद कहाँ से लेनी है"
},

socialSupport10: {
  en: "Feeling supported affects my confidence in learning",
  hi: "समर्थन महसूस होने से पढ़ाई में मेरा आत्मविश्वास बढ़ता है"
},

socialSupportRarelyTitle: {
  en: "You appear to have good social support",
  hi: "आपके आसपास अच्छा सामाजिक सहयोग मौजूद दिखाई देता है"
},

socialSupportRarelyDesc: {
  en: "You appear to have good social support. People around you seem approachable and helpful when you face academic challenges.",
  hi: "जब आप पढ़ाई में कठिनाई महसूस करते हैं, तो आसपास के लोग मददगार और समझदार लगते हैं।"
},

socialSupportRarelyNote: {
  en: "Keep nurturing these supportive relationships-they are valuable.",
  hi: "इन सहायक रिश्तों को बनाए रखना और मज़बूत करना बहुत मूल्यवान है।"
},

socialSupportSometimesTitle: {
  en: "Support is available, but you sometimes feel alone",
  hi: "सहयोग मौजूद है, फिर भी कभी-कभी अकेलापन महसूस होता है"
},

socialSupportSometimesDesc: {
  en: "Support is available, but you sometimes feel alone with pressure. Finding even one trusted person to talk to can help significantly.",
  hi: "भले ही सहयोग उपलब्ध हो, दबाव के समय अकेलापन महसूस हो सकता है। किसी एक भरोसेमंद व्यक्ति से बात करना भी काफ़ी मददगार हो सकता है।"
},

socialSupportSometimesNote: {
  en: "Reaching out, even when it feels hard, often leads to helpful conversations.",
  hi: "भले ही बात करना मुश्किल लगे, संपर्क करना अक्सर राहत देने वाली बातचीत की ओर ले जाता है।"
},

socialSupportOftenTitle: {
  en: "Feeling unsupported may be affecting your wellbeing",
  hi: "समर्थन की कमी आपकी मानसिक भलाई को प्रभावित कर रही हो सकती है"
},

socialSupportOftenDesc: {
  en: "Feeling unsupported may be affecting your wellbeing. When academic stress feels isolating, reaching out to someone a teacher, counselor or trusted adult can help restore connection.",
  hi: "अगर पढ़ाई का तनाव आपको अकेला महसूस करा रहा है, तो किसी शिक्षक, परामर्शदाता या भरोसेमंद बड़े से बात करना सहायक हो सकता है।"
},

socialSupportOftenNote: {
  en: "Support exists-sometimes the hardest step is asking for it.",
  hi: "सहयोग मौजूद होता है, कई बार सबसे कठिन कदम उसे माँगना होता है।"
},
  // Self-Discipline
// Self-Discipline & Routine
selfDisciplineTitle1: {
  en: "Self-Discipline & Routine Reflection",
  hi: "आत्म-अनुशासन और दिनचर्या पर आत्म-चिंतन"
},

selfDiscipline1: {
  en: "I follow a regular study routine",
  hi: "मैं अपनी पढ़ाई के लिए एक नियमित दिनचर्या का पालन करता/करती हूँ"
},

selfDiscipline2: {
  en: "I delay tasks even when time is available",
  hi: "समय उपलब्ध होने पर भी मैं कभी-कभी काम टाल देता/देती हूँ"
},

selfDiscipline3: {
  en: "I can manage distractions effectively",
  hi: "मैं पढ़ाई के दौरान होने वाले विचलनों को संभाल पाता/पाती हूँ"
},

selfDiscipline4: {
  en: "I struggle to stay consistent",
  hi: "मुझे निरंतरता बनाए रखने में कभी-कभी कठिनाई होती है"
},

selfDiscipline5: {
  en: "Planning helps me study better",
  hi: "योजना बनाने से मेरी पढ़ाई बेहतर होती है"
},

selfDiscipline6: {
  en: "I feel overwhelmed by schedules",
  hi: "कभी-कभी समय-सारणी मुझे भारी लगती है"
},

selfDiscipline7: {
  en: "I complete tasks I set out to do",
  hi: "मैं जो काम तय करता/करती हूँ, उन्हें पूरा कर पाता/पाती हूँ"
},

selfDiscipline8: {
  en: "I find it hard to maintain routines",
  hi: "दिनचर्या बनाए रखना मुझे कभी-कभी मुश्किल लगता है"
},

selfDiscipline9: {
  en: "Structure improves my focus",
  hi: "स्पष्ट संरचना होने से मेरा ध्यान बेहतर रहता है"
},

selfDiscipline10: {
  en: "Lack of routine affects my learning",
  hi: "दिनचर्या की कमी मेरी पढ़ाई को प्रभावित करती है"
},

selfDisciplineRarelyTitle: {
  en: "Your discipline and routine appear well-established",
  hi: "आपका अनुशासन और दिनचर्या काफ़ी स्थिर दिखाई देती है"
},

selfDisciplineRarelyDesc: {
  en: "Your discipline and routine appear well-established. Consistency comes naturally to you and structure seems to support your learning.",
  hi: "आपके लिए निरंतरता स्वाभाविक लगती है और स्पष्ट दिनचर्या आपकी पढ़ाई को सहारा देती है।"
},

selfDisciplineRarelyNote: {
  en: "Keep valuing the routines that help you stay focused and productive.",
  hi: "जो दिनचर्या आपको केंद्रित और सक्रिय रखती है, उन्हें महत्व देते रहना उपयोगी रहेगा।"
},

selfDisciplineSometimesTitle: {
  en: "Discipline fluctuates, especially under pressure",
  hi: "दबाव के समय अनुशासन में उतार-चढ़ाव आ सकता है"
},

selfDisciplineSometimesDesc: {
  en: "Discipline fluctuates, especially under pressure or during demanding periods. This is very normal-maintaining routine becomes harder when stress increases.",
  hi: "दबाव या व्यस्त समय में दिनचर्या बनाए रखना कठिन हो सकता है, यह बिल्कुल सामान्य है।"
},

selfDisciplineSometimesNote: {
  en: "Notice when routines slip and gently rebuild them without self-judgment.",
  hi: "जब दिनचर्या बिगड़ने लगे तो उसे बिना खुद को दोष दिए, धीरे-धीरे दोबारा बनाना मददगार हो सकता है।"
},

selfDisciplineOftenTitle: {
  en: "Maintaining discipline and routine may be challenging",
  hi: "अनुशासन और दिनचर्या बनाए रखना चुनौतीपूर्ण हो सकता है"
},

selfDisciplineOftenDesc: {
  en: "Maintaining discipline and routine may be challenging more consistently. When consistency feels hard, exploring what gets in the way and creating simpler routines can help.",
  hi: "अगर निरंतरता लंबे समय तक कठिन लग रही है, तो यह समझना कि क्या बाधा बन रहा है और सरल दिनचर्या बनाना सहायक हो सकता है।"
},

selfDisciplineOftenNote: {
  en: "Small, achievable routines often work better than complicated schedules.",
  hi: "छोटी और आसानी से निभाई जा सकने वाली दिनचर्या अक्सर जटिल योजनाओं से ज़्यादा प्रभावी होती है।"
},

// Emotional Regulation
emotionalRegulationTitle1: {
  en: "Emotional Regulation Reflection",
  hi: "भावनाओं को संभालने पर आत्म-चिंतन"
},

emotionalRegulation1: {
  en: "I am able to calm myself when I feel stressed",
  hi: "तनाव महसूस होने पर मैं खुद को शांत कर पाता/पाती हूँ"
},

emotionalRegulation2: {
  en: "I feel stuck in frustration during academic challenges",
  hi: "शैक्षणिक कठिनाइयों के समय मैं कभी-कभी निराशा में फँसा हुआ महसूस करता/करती हूँ"
},

emotionalRegulation3: {
  en: "My emotions affect how well I study",
  hi: "मेरी भावनाएँ मेरी पढ़ाई पर असर डालती हैं"
},

emotionalRegulation4: {
  en: "I recover emotionally after setbacks",
  hi: "असफलताओं के बाद मैं भावनात्मक रूप से धीरे-धीरे संभल जाता/जाती हूँ"
},

emotionalRegulation5: {
  en: "I feel overwhelmed by academic pressure",
  hi: "शैक्षणिक दबाव मुझे कभी-कभी बहुत भारी लगने लगता है"
},

emotionalRegulation6: {
  en: "I can manage anger or irritation related to studies",
  hi: "पढ़ाई से जुड़ी झुँझलाहट या गुस्से को मैं संभाल पाता/पाती हूँ"
},

emotionalRegulation7: {
  en: "Stress affects my reactions toward others",
  hi: "तनाव दूसरों के प्रति मेरी प्रतिक्रिया को प्रभावित करता है"
},

emotionalRegulation8: {
  en: "I feel emotionally balanced most days",
  hi: "अधिकांश दिनों में मैं भावनात्मक रूप से संतुलित महसूस करता/करती हूँ"
},

emotionalRegulation9: {
  en: "I struggle to control emotions during pressure",
  hi: "दबाव के समय भावनाओं को संभालना मुझे कठिन लगता है"
},

emotionalRegulation10: {
  en: "Emotional strain affects my concentration",
  hi: "भावनात्मक तनाव मेरी एकाग्रता को प्रभावित करता है"
},

emotionalRegulationRarelyTitle: {
  en: "You appear to manage emotions well",
  hi: "आप भावनाओं को काफ़ी अच्छी तरह संभाल पा रहे हैं"
},

emotionalRegulationRarelyDesc: {
  en: "You appear to manage emotions well during academic challenges. You can calm yourself when stressed and recover after setbacks.",
  hi: "तनाव के समय खुद को शांत करना और कठिनाइयों के बाद संभल पाना आपकी एक ताक़त दिखाई देता है।"
},

emotionalRegulationRarelyNote: {
  en: "Keep practicing the emotional skills that help you stay steady.",
  hi: "जो भावनात्मक कौशल आपको संतुलित रखते हैं, उनका अभ्यास जारी रखना लाभकारी रहेगा।"
},

emotionalRegulationSometimesTitle: {
  en: "Emotions affect you during pressure",
  hi: "दबाव के समय भावनाएँ असर डालती हैं"
},

emotionalRegulationSometimesDesc: {
  en: "Emotions affect you during pressure, but you generally recover. Learning healthy ways to calm yourself can help even more.",
  hi: "दबाव के समय भावनाएँ असर डालती हैं, लेकिन आप आमतौर पर संभल जाते हैं। खुद को शांत करने के स्वस्थ तरीक़े सीखना और मददगार हो सकता है।"
},

emotionalRegulationSometimesNote: {
  en: "Notice what helps you feel calmer and use those strategies when intensity rises.",
  hi: "जो चीज़ें आपको शांत करती हैं, उन्हें पहचानें और ज़रूरत पड़ने पर उनका उपयोग करें।"
},

emotionalRegulationOftenTitle: {
  en: "Emotional overwhelm may be affecting your learning",
  hi: "भावनात्मक दबाव आपकी पढ़ाई को प्रभावित कर सकता है"
},

emotionalRegulationOftenDesc: {
  en: "Emotional overwhelm may be affecting your learning more consistently. When emotions feel hard to manage, learning coping strategies or reaching out for support can help significantly.",
  hi: "अगर भावनाएँ लंबे समय तक भारी लग रही हैं, तो उनसे निपटने के तरीक़े सीखना या किसी से बात करना काफ़ी मददगार हो सकता है।"
},

emotionalRegulationOftenNote: {
  en: "Emotional regulation is a skill-practice and support can help you build it.",
  hi: "भावनाओं को संभालना एक कौशल है, अभ्यास और सहयोग से इसे विकसित किया जा सकता है।"
},

// Purpose & Direction
purposeDirectionTitle1: {
  en: "Purpose & Learning Direction Reflection",
  hi: "उद्देश्य और सीखने की दिशा पर आत्म-चिंतन"
},

purposeDirection1: {
  en: "I understand why I am studying",
  hi: "मैं समझता/समझती हूँ कि मैं क्यों पढ़ाई कर रहा/रही हूँ"
},

purposeDirection2: {
  en: "My studies feel meaningful to me",
  hi: "मेरी पढ़ाई मुझे अर्थपूर्ण लगती है"
},

purposeDirection3: {
  en: "I study mainly due to external pressure",
  hi: "मैं ज़्यादातर बाहरी दबाव के कारण पढ़ाई करता/करती हूँ"
},

purposeDirection4: {
  en: "I feel connected to my future goals",
  hi: "मैं अपने भविष्य के लक्ष्यों से जुड़ा हुआ महसूस करता/करती हूँ"
},

purposeDirection5: {
  en: "I feel lost about my academic direction",
  hi: "मुझे अपनी शैक्षणिक दिशा को लेकर भ्रम महसूस होता है"
},

purposeDirection6: {
  en: "Purpose motivates my effort",
  hi: "उद्देश्य की भावना मेरे प्रयासों को प्रेरित करती है"
},

purposeDirection7: {
  en: "I question the value of what I am studying",
  hi: "मैं कभी-कभी यह सोचता/सोचती हूँ कि जो पढ़ रहा/रही हूँ, वह कितना उपयोगी है"
},

purposeDirection8: {
  en: "Long-term goals guide my decisions",
  hi: "दीर्घकालिक लक्ष्य मेरे निर्णयों को दिशा देते हैं"
},

purposeDirection9: {
  en: "Lack of clarity affects my motivation",
  hi: "स्पष्टता की कमी मेरी प्रेरणा को प्रभावित करती है"
},

purposeDirection10: {
  en: "I feel directionless at times",
  hi: "मैं कभी-कभी दिशाहीन सा महसूस करता/करती हूँ"
},

purposeDirectionRarelyTitle: {
  en: "Your sense of purpose appears clear",
  hi: "आपकी उद्देश्य की भावना काफ़ी स्पष्ट दिखाई देती है"
},

purposeDirectionRarelyDesc: {
  en: "Your sense of purpose appears clear. You understand why you are learning and feel connected to your direction.",
  hi: "आपको यह स्पष्ट है कि आप क्यों सीख रहे हैं और आप अपनी दिशा से जुड़े हुए महसूस करते हैं।"
},

purposeDirectionRarelyNote: {
  en: "Keep nurturing this sense of meaning-it's a powerful motivator.",
  hi: "इस उद्देश्य और अर्थ की भावना को बनाए रखना बहुत प्रेरणादायक हो सकता है।"
},

purposeDirectionSometimesTitle: {
  en: "Purpose wavers at times",
  hi: "कभी-कभी उद्देश्य की भावना डगमगा सकती है"
},

purposeDirectionSometimesDesc: {
  en: "Purpose wavers at times, especially when pressure or difficulty increases. Reconnecting with your longer-term goals can help restore clarity.",
  hi: "दबाव या कठिनाई बढ़ने पर उद्देश्य की भावना कमजोर पड़ सकती है। ऐसे समय में अपने दीर्घकालिक लक्ष्यों से जुड़ना स्पष्टता लौटा सकता है।"
},

purposeDirectionSometimesNote: {
  en: "It's normal to question direction sometimes-exploring your values can help.",
  hi: "कभी-कभी दिशा पर सवाल उठना सामान्य है, अपने मूल्यों को समझना मदद कर सकता है।"
},

purposeDirectionOftenTitle: {
  en: "Lack of clear purpose may be affecting motivation",
  hi: "स्पष्ट उद्देश्य की कमी प्रेरणा को प्रभावित कर सकती है"
},

purposeDirectionOftenDesc: {
  en: "Lack of clear purpose may be affecting motivation more consistently. When learning feels driven only by pressure, exploring what matters to you can help restore meaning.",
  hi: "अगर पढ़ाई केवल दबाव के कारण चल रही लगती है, तो यह समझना कि आपके लिए वास्तव में क्या मायने रखता है, प्रेरणा लौटाने में मदद कर सकता है।"
},

purposeDirectionOftenNote: {
  en: "Taking time to think about your goals and values can help reignite motivation.",
  hi: "अपने लक्ष्यों और मूल्यों पर समय देकर सोचना प्रेरणा को फिर से जगाने में सहायक हो सकता है।"
},
  // Test "why" descriptions
learningEnergyWhyDesc: {
  en: "Learning requires mental energy. When students continue studying despite feeling mentally exhausted, overloaded or drained, learning can slowly feel heavier even without obvious reasons. This reflection focuses on learning energy and mental fatigue, not medical burnout or diagnosis.",
  hi: "सीखने के लिए मानसिक ऊर्जा की आवश्यकता होती है। जब छात्र मानसिक रूप से थके या बोझिल महसूस करने के बावजूद पढ़ाई जारी रखते हैं, तो बिना किसी स्पष्ट कारण के भी सीखना धीरे-धीरे भारी लगने लग सकता है। यह आत्म-चिंतन सीखने की ऊर्जा और मानसिक थकान पर केंद्रित है, न कि किसी चिकित्सीय बर्नआउट या निदान पर।"
},

focusDistractionWhyDesc: {
  en: "Many students want to study sincerely, yet find their attention drifting repeatedly. Distraction is not always about lack of effort-it is often linked to mental load, fatigue, stress or overstimulation. This reflection helps students notice how focus and distraction are showing up in their learning, without blame or judgement.",
  hi: "कई छात्र मन लगाकर पढ़ना चाहते हैं, फिर भी उनका ध्यान बार-बार भटक जाता है। विचलन हमेशा प्रयास की कमी का संकेत नहीं होता, यह अक्सर मानसिक बोझ, थकान, तनाव या अधिक उत्तेजना से जुड़ा होता है। यह आत्म-चिंतन छात्रों को बिना किसी दोष या निर्णय के यह समझने में मदद करता है कि उनकी पढ़ाई में फोकस और विचलन कैसे दिखाई दे रहे हैं।"
},

studyRestWhyDesc: {
  en: "Consistent learning requires both effort and recovery. When rest is ignored or associated with guilt, the mind may remain stressed even during breaks-reducing learning effectiveness over time. This reflection helps students become aware of how well study and rest are balanced.",
  hi: "निरंतर और प्रभावी सीखने के लिए प्रयास के साथ-साथ विश्राम भी आवश्यक होता है। जब आराम को नज़रअंदाज़ किया जाता है या उससे अपराधबोध जुड़ जाता है, तो ब्रेक के दौरान भी मन तनाव में रह सकता है। यह आत्म-चिंतन छात्रों को यह समझने में मदद करता है कि उनकी पढ़ाई और विश्राम के बीच संतुलन कैसा है।"
},

emotionalBalanceWhyDesc: {
  en: "Academic life can influence emotions in subtle ways. Even capable students may feel emotionally overloaded, irritable or unsettled without fully understanding why. This reflection supports awareness of emotional balance related to learning experiences, without labels or diagnosis.",
  hi: "शैक्षणिक जीवन भावनाओं को धीरे-धीरे और सूक्ष्म रूप से प्रभावित कर सकता है। सक्षम छात्र भी कभी-कभी बिना स्पष्ट कारण समझे भावनात्मक रूप से बोझिल, चिड़चिड़े या अस्थिर महसूस कर सकते हैं। यह आत्म-चिंतन सीखने से जुड़ी भावनात्मक संतुलन की समझ विकसित करने में मदद करता है, बिना किसी लेबल या निदान के।"
},

moodMotivationWhyDesc: {
  en: "Motivation does not remain constant. Academic pressure, repeated effort and emotional load can slowly affect interest, energy and enthusiasm for learning even when students want to do well. This reflection helps students notice patterns in mood and motivation related to learning, without judgement or labels.",
  hi: "प्रेरणा हमेशा एक-सी नहीं रहती। शैक्षणिक दबाव, लगातार प्रयास और भावनात्मक बोझ समय के साथ सीखने की रुचि, ऊर्जा और उत्साह को प्रभावित कर सकते हैं, भले ही छात्र अच्छा करना चाहते हों। यह आत्म-चिंतन छात्रों को बिना किसी निर्णय के अपनी मनोदशा और प्रेरणा में आने वाले पैटर्न पहचानने में मदद करता है।"
},

academicAnxietyWhyDesc: {
  en: "Academic anxiety can appear as constant worry, physical uneasiness or fear of outcomes. This reflection focuses only on anxiety related to academic experiences, not clinical anxiety or diagnosis. The purpose is to support awareness-not to label or define.",
  hi: "शैक्षणिक चिंता लगातार चिंता, शारीरिक बेचैनी या परिणामों के डर के रूप में सामने आ सकती है। यह आत्म-चिंतन केवल पढ़ाई से जुड़े अनुभवों की चिंता पर केंद्रित है, न कि किसी चिकित्सीय चिंता या निदान पर। इसका उद्देश्य केवल जागरूकता बढ़ाना है, किसी को परिभाषित या लेबल करना नहीं।"
},

gritPersistenceWhyDesc: {
  en: "Learning involves effort, mistakes and setbacks. Grit and persistence influence how students respond to difficulty-not how 'smart' they are. This reflection supports awareness of how consistently effort is maintained when challenges arise.",
  hi: "सीखने की प्रक्रिया में प्रयास, गलतियाँ और असफलताएँ स्वाभाविक होती हैं। दृढ़ता और निष्ठा यह तय करती हैं कि छात्र कठिनाइयों का सामना कैसे करते हैं, न कि वे कितने ‘स्मार्ट’ हैं। यह आत्म-चिंतन इस बात पर ध्यान देने में मदद करता है कि चुनौतियों के समय प्रयास कितनी निरंतरता से बनाए रखा जा रहा है।"
},

learningConfidenceWhyDesc: {
  en: "Confidence in learning is not about being perfect-it is about trusting one's ability to understand, improve and cope with challenges. Academic pressure, comparison and repeated difficulty can quietly reduce self-confidence over time. This reflection helps students notice how confident they currently feel in their learning abilities, without judgement or labels.",
  hi: "सीखने में आत्मविश्वास का मतलब परिपूर्ण होना नहीं है, बल्कि अपनी समझने, सुधार करने और चुनौतियों से निपटने की क्षमता पर भरोसा करना है। शैक्षणिक दबाव, तुलना और बार-बार की कठिनाइयाँ समय के साथ आत्मविश्वास को धीरे-धीरे कम कर सकती हैं। यह आत्म-चिंतन छात्रों को बिना किसी निर्णय के यह महसूस करने में मदद करता है कि वे अपनी सीखने की क्षमताओं को लेकर अभी कैसा महसूस कर रहे हैं।"
},

growthMindsetWhyDesc: {
  en: "A growth mindset involves viewing mistakes and challenges as part of learning rather than signs of failure. Pressure, fear of judgement or repeated setbacks can make mistakes feel threatening instead of useful. This reflection supports awareness of how students currently relate to mistakes, effort and improvement.",
  hi: "विकास-उन्मुख मानसिकता में गलतियों और चुनौतियों को असफलता नहीं, बल्कि सीखने की प्रक्रिया का हिस्सा माना जाता है। दबाव, आलोचना का डर या बार-बार की असफलताएँ गलतियों को उपयोगी के बजाय डरावना बना सकती हैं। यह आत्म-चिंतन छात्रों को यह समझने में मदद करता है कि वे वर्तमान में गलतियों, प्रयास और सुधार को कैसे देखते हैं।"
},

homeAdjustmentWhyDesc: {
  en: "A student's learning experience is shaped not only by effort, but also by the home environment. Family expectations, space, noise, routines and communication can support or unintentionally strain learning. This reflection helps students notice how home-related factors influence their studies, without placing blame.",
  hi: "छात्र का सीखने का अनुभव केवल उसके प्रयास से नहीं, बल्कि घर के वातावरण से भी प्रभावित होता है। पारिवारिक अपेक्षाएँ, स्थान, शोर, दिनचर्या और संवाद पढ़ाई को सहारा भी दे सकते हैं और अनजाने में दबाव भी बना सकते हैं। यह आत्म-चिंतन बिना किसी दोष के यह समझने में मदद करता है कि घर से जुड़े कारक पढ़ाई को कैसे प्रभावित कर रहे हैं।"
},

schoolAdjustmentWhyDesc: {
  en: "Learning is influenced by the academic environment-teaching pace, expectations, interaction style and perceived support. Even motivated students may struggle when the learning environment does not fully align with their needs. This reflection helps students understand how well they are adjusting to school environments, without blame or judgement.",
  hi: "सीखना शैक्षणिक वातावरण से प्रभावित होता है - जैसे पढ़ाने की गति, अपेक्षाएँ, संवाद की शैली और मिलने वाला सहयोग। प्रेरित छात्र भी तब कठिनाई महसूस कर सकते हैं जब वातावरण उनकी ज़रूरतों के अनुरूप न हो। यह आत्म-चिंतन छात्रों को बिना किसी दोष या निर्णय के यह समझने में मदद करता है कि वे स्कूल के वातावरण के साथ कितना तालमेल बना पा रहे हैं।"
},

socialSupportWhyDesc: {
  en: "Support from friends, teachers and trusted adults can reduce academic stress and emotional burden. When students feel alone with pressure, learning can feel heavier, even when they are capable. This reflection supports awareness of how supported a student currently feels, without judgement.",
  hi: "दोस्तों, शिक्षकों और भरोसेमंद बड़ों से मिलने वाला सहयोग शैक्षणिक तनाव और भावनात्मक बोझ को हल्का कर सकता है। जब छात्र दबाव के साथ अकेला महसूस करते हैं, तो सीखना कठिन लग सकता है, भले ही वे सक्षम हों। यह आत्म-चिंतन बिना किसी निर्णय के यह समझने में मदद करता है कि छात्र खुद को कितना समर्थित महसूस कर रहा है।"
},

selfDisciplineWhyDesc: {
  en: "Self-discipline supports consistency, but it is influenced by motivation, emotional state and structure, not just willpower. Academic pressure can disrupt routines, making consistency difficult. This reflection helps students notice patterns in discipline and routine, without labelling or judgement.",
  hi: "आत्म-अनुशासन निरंतरता में मदद करता है, लेकिन यह केवल इच्छाशक्ति पर निर्भर नहीं होता, प्रेरणा, भावनात्मक स्थिति और संरचना भी इसमें भूमिका निभाती हैं। शैक्षणिक दबाव दिनचर्या को बिगाड़ सकता है। यह आत्म-चिंतन छात्रों को बिना किसी लेबल के अपने अनुशासन और दिनचर्या के पैटर्न समझने में मदद करता है।"
},

emotionalRegulationWhyDesc: {
  en: "Emotions are a natural part of learning. Stress, frustration, disappointment or pressure can affect how students think, react and continue their efforts. Emotional regulation does not mean suppressing feelings-it means understanding and managing them in healthy ways. This reflection supports awareness of how emotions are currently handled during academic experiences, without judgement or labels.",
  hi: "भावनाएँ सीखने का एक स्वाभाविक हिस्सा हैं। तनाव, निराशा, असफलता या दबाव यह तय कर सकते हैं कि छात्र कैसे सोचते हैं, प्रतिक्रिया देते हैं और प्रयास जारी रखते हैं। भावनात्मक नियंत्रण का अर्थ भावनाओं को दबाना नहीं, बल्कि उन्हें समझकर स्वस्थ तरीक़े से संभालना है। यह आत्म-चिंतन बिना किसी निर्णय के यह समझने में मदद करता है कि पढ़ाई के दौरान भावनाओं को कैसे संभाला जा रहा है।"
},

purposeDirectionWhyDesc: {
  en: "Having a sense of purpose helps students stay motivated during effort and difficulty. When learning feels directionless or driven only by pressure, motivation can weaken even when ability is present. This reflection supports awareness of how connected a student feels to purpose and direction in learning, without judgment or expectation.",
  hi: "उद्देश्य की भावना छात्रों को प्रयास और कठिनाइयों के समय प्रेरित बनाए रखती है। जब पढ़ाई दिशाहीन लगे या केवल दबाव के कारण हो, तो क्षमता होते हुए भी प्रेरणा कमज़ोर पड़ सकती है। यह आत्म-चिंतन बिना किसी अपेक्षा या निर्णय के यह समझने में मदद करता है कि छात्र अपनी पढ़ाई में उद्देश्य और दिशा से कितना जुड़ा हुआ महसूस करता है।"
},
  // Careers Page


  careerUnderstandYourself: { en: "Understanding Yourself Before Choosing Anything", hi: "कुछ भी चुनने से पहले अपने आप को समझना" },
   careerLearningStyles: { en: "Some students enjoy reading and understanding concepts deeply. Others prefer applying ideas practically. Some feel comfortable with structure and routine, while others learn better with flexibility. These preferences are not right or wrong. They simply show how a student engages with learning.", hi: "कुछ छात्र पढ़ना और अवधारणाओं को गहराई से समझना पसंद करते हैं। अन्य विचारों को व्यावहारिक रूप से लागू करना पसंद करते हैं। कुछ संरचना और दिनचर्या के साथ सहज महसूस करते हैं, जबकि अन्य लचीलेपन के साथ बेहतर सीखते हैं। ये वरीयताएं सही या गलत नहीं हैं। वे बस दिखाते हैं कि एक छात्र सीखने में कैसे शामिल होता है।" },
careerInterestDevelops: { en: "Interest usually develops after exposure, not before it. As understanding increases, confidence grows and curiosity often follows. It is common for a subject to feel boring or difficult at first and meaningful later. It is also common to like something only after spending time with it.", hi: "रुचि आमतौर पर जोखिम के बाद विकसित होती है, पहले नहीं। समझ बढ़ने के साथ, आत्मविश्वास बढ़ता है और जिज्ञासा अक्सर अनुसरण करती है। किसी विषय को शुरुआत में बोरिंग या मुश्किल और बाद में सार्थक लगना आम है। किसी चीज़ को केवल इसके साथ समय बिताने के बाद पसंद करना भी आम है।" },
  // careerAwareness: { en: "Career Awareness", hi: "करियर जागरूकता" },
  // careerThinkingClearly: { en: "Thinking Clearly About the Future", hi: "भविष्य के बारे में स्पष्ट रूप से सोचना" },
  // careerNotCertainty: { en: "Career thinking does not begin with certainty. It begins with awareness. This page is designed to support thoughtful reflection about interests, learning styles and future possibilities-without pressure, labels or expectations of premature clarity.", hi: "करियर की सोच निश्चितता से शुरू नहीं होती है। यह जागरूकता से शुरू होती है। यह पृष्ठ रुचियों, सीखने की शैलियों और भविष्य की संभावनाओं के बारे में सोच-विचार को समर्थन देने के लिए डिज़ाइन किया गया है।" },
  // careerSupportiveProcess: { en: "For students in classes 6 to 12, career awareness is a supportive process-not a test or evaluation. Reflection on interests, observation of learning patterns and thoughtful decision-making matter more than finding perfect answers.", hi: "कक्षा 6 से 12 तक के छात्रों के लिए, करियर जागरूकता एक सहायक प्रक्रिया है - न कि कोई परीक्षा या मूल्यांकन। रुचियों पर आत्म-चिंतन, सीखने के पैटर्न का अवलोकन और विचारशील निर्णय लेना सही उत्तर खोजने से अधिक महत्वपूर्ण है।" },
  // whyCareerDifficult: { en: "Why is Career Thinking Often Difficult?", hi: "करियर की सोच अक्सर मुश्किल क्यों है?" },
  // careerAnxiety: { en: "For many students, thinking about career creates anxiety. There are several reasons for this. External pressure to have clear answers, comparison with peers who seem certain and fear of making 'wrong' choices often add stress without increasing clarity.", hi: "कई छात्रों के लिए, करियर के बारे में सोचना चिंता पैदा करता है। इसके कई कारण हैं। स्पष्ट उत्तर देने का बाहरी दबाव, साथियों के साथ तुलना जो निश्चित लगते हैं और 'गलत' विकल्प बनाने का डर अक्सर सटीकता बढ़ाए बिना तनाव जोड़ते हैं।" },
careerEarlyPressure: {
  en: "Very early in school life, students begin to hear that they must be clear, confident and sure. Marks, rankings and comparisons slowly start defining self-worth. When clarity does not come immediately, uncertainty begins to feel like failure. Over time even capable students start doubting themselves.",
  hi: "स्कूल जीवन के बहुत शुरुआती दौर से ही छात्रों को यह सुनने को मिलता है कि उन्हें स्पष्ट, आत्मविश्वासी और पूरी तरह निश्चित होना चाहिए। धीरे-धीरे अंक, रैंक और तुलना आत्म-मूल्य का पैमाना बनने लगते हैं। जब तुरंत स्पष्टता नहीं मिलती, तो अनिश्चितता असफलता जैसी लगने लगती है। समय के साथ, यहाँ तक कि सक्षम छात्र भी खुद पर संदेह करने लगते हैं।"
},
careerPathNotFixed: { en: "A career path is not a job title chosen once. It is a direction that keeps changing as learning and experience increase.", hi: "करियर पथ एक बार चुना गया नौकरी का शीर्षक नहीं है। यह एक दिशा है जो सीखने और अनुभव के साथ बदलती रहती है।" },
   careerPathChanges: { en: "Some paths begin academically and later become practical. Others start with skills and later include formal education. Many change completely as people discover new interests. Very few careers remain fixed forever.", hi: "कुछ पथ शैक्षणिक रूप से शुरू होते हैं और बाद में व्यावहारिक हो जाते हैं। अन्य कौशल के साथ शुरू होते हैं और बाद में औपचारिक शिक्षा शामिल करते हैं। कई बिल्कुल बदल जाते हैं जब लोग नई रुचियां खोजते हैं। बहुत कम करियर हमेशा के लिए निर्धारित रहते हैं।" },
  careerTiming: { en: "About Timing and Readiness", hi: "समय और तत्परता के बारे में" },
 careerNoPassion: { en: "Students are not expected to feel passion immediately.", hi: "छात्रों से तुरंत जुनून महसूस करने की अपेक्षा नहीं की जाती है।" },
  
  careerMarksImportant: { en: "Marks are important, but they do not tell the full story of a student's future. They reflect performance within a specific system at a specific time.", hi: "अंक महत्वपूर्ण हैं, लेकिन वे एक छात्र के भविष्य की पूरी कहानी नहीं बताते हैं। वे एक विशिष्ट समय पर एक विशिष्ट प्रणाली के भीतर प्रदर्शन को प्रतिबिंबित करते हैं।" },
 careerPathMeans: { en: "What a Career Path Really Means", hi: "करियर पथ का वास्तव में क्या मतलब है" },
careerInterruptPressure: {
  en: "This page exists to interrupt that pressure and remind students that uncertainty during school years is common and normal.",
  hi: "यह पृष्ठ उसी दबाव को थोड़ा रोकने और छात्रों को यह याद दिलाने के लिए है कि स्कूल के वर्षों में अनिश्चितता होना सामान्य और स्वाभाविक है।"
},

careerDevelopingProcess: {
  en: "Career as a Developing Process",
  hi: "करियर: एक विकसित होती प्रक्रिया"
},
careerExposure: { en: "Some students need more exposure, some need reassurance and some need space to think without pressure. Growth into clarity happens gradually.", hi: "कुछ छात्रों को अधिक जोखिम की आवश्यकता है, कुछ को आश्वासन की आवश्यकता है और कुछ को दबाव के बिना सोचने के लिए स्थान की आवश्यकता है। स्पष्टता में विकास धीरे-धीरे होता है।" },
   careerVoices: { en: "Voices of Guidance", hi: "मार्गदर्शन की आवाजें" },
  careerNoteStudents: { en: "A Note for Students", hi: "छात्रों के लिए एक नोट" },
careerNoteTeachers: { en: "A Note for Teachers", hi: "शिक्षकों के लिए एक नोट" },
 careerNoteParents: { en: "A Note for Parents", hi: "माता-पिता के लिए एक नोट" },
   careerBoundary: { en: "Important Boundary", hi: "महत्वपूर्ण सीमा" },
  careerPsychologyPerspective: { en: "A Psychology-Informed Perspective", hi: "मनोविज्ञान से सूचित दृष्टिकोण" },
careerRarelyFixed: {
  en: "Careers rarely follow a straight or fixed path. For most people, interests change, skills develop and opportunities appear only after time and exposure.",
  hi: "करियर शायद ही कभी सीधे या तय रास्ते पर चलते हैं। अधिकतर लोगों के लिए रुचियाँ बदलती हैं, कौशल धीरे-धीरे विकसित होते हैं और अवसर समय व अनुभव के बाद सामने आते हैं।"
},

careerTryingDifferent: {
  en: "Many individuals understand what they enjoy only after trying different subjects, roles or environments. Some change directions completely, while others combine skills in unexpected ways. Early uncertainty does not indicate poor planning. In many cases, it reflects growth that is still unfolding.",
  hi: "कई लोग अलग-अलग विषयों, भूमिकाओं या वातावरण को आज़माने के बाद ही समझ पाते हैं कि उन्हें क्या पसंद है। कुछ लोग दिशा बदलते हैं, तो कुछ अलग-अलग कौशलों को नए तरीकों से जोड़ते हैं। शुरुआती अनिश्चितता खराब योजना का संकेत नहीं होती, कई बार यह उस विकास को दर्शाती है जो अभी चल ही रहा होता है।"
},

careerAcceptUncertainty: {
  en: "Career awareness begins with accepting that not knowing everything yet is part of the process.",
  hi: "करियर के प्रति समझ तब शुरू होती है जब हम यह स्वीकार कर लेते हैं कि हर चीज़ अभी जानना ज़रूरी नहीं है।"
},

careerAfterClass10: {
  en: "After Class 10: Direction, Not Definition",
  hi: "कक्षा 10 के बाद: दिशा, न कि परिभाषा"
},

careerClass10Explanation: {
  en: "After Class 10, students usually move into broader academic directions such as science, commerce, humanities or skill-based pathways. These choices provide structure for learning, but they do not define an entire future.",
  hi: "कक्षा 10 के बाद छात्र आमतौर पर विज्ञान, वाणिज्य, मानविकी या कौशल-आधारित जैसे व्यापक शैक्षणिक क्षेत्रों में जाते हैं। ये विकल्प सीखने को दिशा देते हैं, लेकिन पूरे भविष्य को तय नहीं करते।"
},

careerClass10Focus: {
  en: "At this stage, the focus should remain on understanding subjects, developing learning habits and observing interests as they form. Decisions made here are starting directions, not permanent commitments.",
  hi: "इस चरण पर ध्यान विषयों को समझने, सीखने की आदतें बनाने और धीरे-धीरे बनती रुचियों को देखने पर होना चाहिए। यहाँ लिए गए निर्णय शुरुआती दिशा होते हैं, आजीवन प्रतिबद्धता नहीं।"
},

careerAfterClass12: {
  en: "After Class 12: Paths That Continue to Evolve",
  hi: "कक्षा 12 के बाद: ऐसे रास्ते जो आगे भी बदलते रहते हैं"
},

careerClass12Explanation: {
  en: "After Class 12, career possibilities often widen into academic, professional, creative or skill-based fields. These paths are not final destinations. They are entry points that can continue to change as students gain experience and exposure.",
  hi: "कक्षा 12 के बाद करियर के विकल्प शैक्षणिक, व्यावसायिक, रचनात्मक या कौशल-आधारित क्षेत्रों में फैल जाते हैं। ये अंतिम मंज़िल नहीं, बल्कि ऐसे शुरुआती बिंदु होते हैं जो अनुभव के साथ बदलते रहते हैं।"
},

careerClass12Pressure: {
  en: "Expecting complete certainty at this stage often adds pressure without improving clarity. Growth continues beyond formal education and career understanding keeps evolving with time.",
  hi: "इस चरण पर पूरी निश्चितता की अपेक्षा अक्सर स्पष्टता बढ़ाने के बजाय दबाव ही बढ़ाती है। सीखना और समझना औपचारिक शिक्षा के बाद भी चलता रहता है।"
},

careerClarityBegins: {
  en: "Career clarity does not begin with options. It begins with understanding how you function as a learner and as a person.",
  hi: "करियर की स्पष्टता विकल्पों से नहीं, बल्कि खुद को समझने से शुरू होती है, एक विद्यार्थी और एक व्यक्ति के रूप में।"
},

careerNotPerfect: {
  en: "Perfect answers are not required. Noticing patterns in how you study, think and feel is enough at this stage.",
  hi: "इस समय पर सही जवाब होना ज़रूरी नहीं है। यह समझना काफ़ी है कि आप कैसे पढ़ते हैं, सोचते हैं और महसूस करते हैं।"
},

careerBelieveInterest: {
  en: "Many students believe that interest should be clear from the beginning. Psychology suggests that this is rarely true.",
  hi: "कई छात्र मानते हैं कि रुचि शुरू से ही स्पष्ट होनी चाहिए, जबकि मनोविज्ञान बताता है कि ऐसा शायद ही कभी होता है।"
},

careerHowInterestsDevelop: { en: "How Interests Actually Develop", hi: "रुचियां वास्तव में कैसे विकसित होती हैं" },

careerPressureMarks: {
  en: "Pressure, Marks and Reality",
  hi: "दबाव, अंक और वास्तविकता"
},

careerClarityPanic: {
  en: "Pressure, comparison and fear tend to narrow thinking. When the mind feels rushed, it tries to escape uncertainty rather than understand it. If career thoughts feel confusing or anxiety-provoking, pausing is often more helpful than forcing clarity. Clarity does not come from panic.",
  hi: "दबाव, तुलना और डर सोच को संकीर्ण बना देते हैं। जब मन जल्दबाज़ी में होता है, तो वह अनिश्चितता को समझने के बजाय उससे भागने लगता है। ऐसे समय पर रुकना, खुद को समय देना, स्पष्टता को ज़बरदस्ती ढूँढने से ज़्यादा मददगार होता है। स्पष्टता घबराहट से नहीं आती।"
},

careerNotLocked: {
  en: "Nothing is as locked as it feels in the early years.",
  hi: "शुरुआती वर्षों में चीज़ें जितनी तय लगी होती हैं, वास्तव में उतनी तय नहीं होतीं।"
},

careerClarityDifferent: {
  en: "Career clarity develops at different speeds for different people. Being clear early is not an achievement. Taking time is not a failure.",
  hi: "करियर की स्पष्टता हर व्यक्ति में अलग गति से विकसित होती है। जल्दी स्पष्ट होना कोई उपलब्धि नहीं है और समय लेना कोई विफलता नहीं।"
},

careerAllowedTime: {
  en: "Students are allowed to take time.",
  hi: "छात्रों को समय लेने की अनुमति है।"
},

careerNoteStudentsText: {
  en: "Feeling unsure about your career does not mean  you are behind or incapable. It often means you are thinking seriously about your future. You do not need to compare your journey with anyone else's. Understanding yourself step by step matters more than finding a perfect answer. Career thinking is not about deciding everything at once, but about making thoughtful choices over time.",
  hi: "अपने करियर को लेकर अनिश्चित महसूस करना यह नहीं दिखाता कि आप पीछे हैं या अक्षम हैं। अक्सर इसका मतलब होता है कि आप अपने भविष्य को लेकर गंभीरता से सोच रहे हैं। अपनी यात्रा की तुलना किसी और से करने की ज़रूरत नहीं है। खुद को धीरे-धीरे समझना किसी एक ‘परफेक्ट’ उत्तर से ज़्यादा महत्वपूर्ण है।"
},

careerNoteParentsText: {
  en: "Career development is deeply influenced by the environment students grow up in. Support works best when it reduces fear rather than increases urgency. When students are given space to think, allowed to grow at their own pace and valued for effort as well as results, confidence develops more naturally. Comparison and constant pressure often increase anxiety without improving clarity.",
  hi: "करियर का विकास उस माहौल से गहराई से जुड़ा होता है जिसमें छात्र बढ़ते हैं। समर्थन तब सबसे प्रभावी होता है जब वह डर कम करे, न कि जल्दबाज़ी बढ़ाए। जब छात्रों को अपनी गति से सोचने और बढ़ने का अवसर मिलता है, तो आत्मविश्वास स्वाभाविक रूप से विकसित होता है।"
},

careerNoteTeachersText: {
  en: "Teachers play an important role in shaping how students view their abilities and future possibilities. Classroom experiences often influence confidence, interest and self-belief. When expectations are realistic and guidance is patient, students feel safer exploring options. Learning environments that reduce fear and judgement support healthier career thinking.",
  hi: "शिक्षक इस बात को आकार देने में महत्वपूर्ण भूमिका निभाते हैं कि छात्र अपनी क्षमताओं और भविष्य को कैसे देखते हैं। जब अपेक्षाएँ यथार्थवादी और मार्गदर्शन धैर्यपूर्ण होता है, तो छात्र विकल्पों को सुरक्षित महसूस करते हुए तलाश पाते हैं।"
},

careerPsychologyText: {
  en: "Psychology shows that anxiety narrows thinking, while emotional safety allows reflection. Interest develops through exposure, not urgency. Clarity grows when pressure reduces. Career awareness focuses on creating conditions where students can think calmly and realistically about their future.",
  hi: "मनोविज्ञान बताता है कि चिंता सोच को सीमित कर देती है, जबकि भावनात्मक सुरक्षा आत्म-चिंतन की जगह देती है। रुचि दबाव से नहीं, अनुभव से विकसित होती है। जब दबाव कम होता है, तब स्पष्टता बढ़ती है। करियर जागरूकता का उद्देश्य ऐसे माहौल को बनाना है, जहाँ छात्र अपने भविष्य के बारे में शांति और यथार्थ रूप से सोच सकें।"
},

careerBoundaryText: {
  en: "Ishan Learning does not provide career prediction, aptitude testing, counselling or placement guidance. This page exists only for awareness and reflection. Its purpose is to support thoughtful thinking, not to define outcomes.",
  hi: "ईशान लर्निंग करियर भविष्यवाणी, योग्यता परीक्षण, परामर्श या प्लेसमेंट मार्गदर्शन प्रदान नहीं करता। यह पृष्ठ केवल जागरूकता और आत्म-चिंतन के लिए है, किसी परिणाम को तय करने के लिए नहीं।"
},

careerClosingEmphasis: {
  en: "Career development is not a race.",
  hi: "करियर विकास कोई दौड़ नहीं है।"
},

// for fix panding translations
careerClosing: { en: "A Gentle Closing", hi: "एक सौम्य समापन" },
  careerClosingText1: { en: "Most clarity comes with time, learning and experience.", hi: "अधिकांश स्पष्टता समय, सीखने और अनुभव के साथ आती है।" },
  careerClosingText2: { en: "Exploring options, asking questions and allowing uncertainty are part of responsible planning-not signs of delay or failure.", hi: "विकल्पों की खोज, सवाल पूछना और अनिश्चितता की अनुमति देना जिम्मेदार योजना का हिस्सा है - देरी या विफलता के संकेत नहीं।" },
  careerCTA: { en: "Ready to Explore?", hi: "खोज के लिए तैयार?" },
  careerCTAText: { en: "Take your time. Think about your interests. Ask questions. Grow at your own pace.", hi: "अपना समय लें। अपनी रुचियों के बारे में सोचें। सवाल पूछें। अपनी गति से बढ़ें।" },
  careerCTAButton: { en: "Explore Classes & Subjects", hi: "कक्षाओं और विषयों का अन्वेषण करें" },

// Footer
footerTagline: { en: "A learning support platform for clear and stress-free learning.", hi: "स्पष्ट और तनाव-मुक्त सीखने के लिए एक शिक्षण सहायता मंच।" },
footerExplore: { en: "EXPLORE", hi: "EXPLORE" },
footerClass6to8: { en: "Upper Primary Classes 6 - 8", hi: "उच्च प्राथमिक कक्षा 6 - 8" },
footerClass9to10: { en: "High School Classes 9 - 10", hi: "हाई स्कूल कक्षा 9 - 10" },
footerClass11to12: { en: "Intermediate Classes 11 - 12", hi: "इंटरमीडिएट कक्षा 11 - 12" },
footerSupport: { en: "SUPPORT", hi: "SUPPORT" },
footerHelpCenter: { en: "Help Center", hi: "सहायता केंद्र" },
footerFAQ: { en: "Frequently Asked Questions", hi: "अक्सर पूछे जाने वाले प्रश्न" },
footerContactUs: { en: "Contact Us", hi: "संपर्क करें" },
footerLegal: { en: "LEGAL", hi: "LEGAL" },
footerPrivacy: { en: "Privacy Policy", hi: "गोपनीयता नीति" },
footerTerms: { en: "Terms of Service", hi: "सेवा की शर्तें" },
footerCopyright: { en: "© 2026 Ishan Learning. All rights reserved.", hi: "© 2026 ईशान लर्निंग। सर्वाधिकार सुरक्षित।" },
// Footer translations
footerTagline1: {
  en: "A learning support platform for clear and stress-free learning.",
  hi: "स्पष्ट और तनाव-मुक्त सीखने के लिए एक शिक्षण सहायता मंच।"
},

Explore: {
  en: "EXPLORE",
  hi: "अन्वेषण करें",
},

Support: {
  en: "SUPPORT",
  hi: "सहायता",
},

Legal: {
  en: "LEGAL",
  hi: "कानूनी",
},



footerUpperPrimary: {
  en: "Upper Primary Class 6 to 8",
  hi: "उच्च प्राथमिक कक्षा 6 से 8"
},

footerHighSchool: {
  en: "High School Class 9 to 10",
  hi: "हाई स्कूल कक्षा 9 से 10"
},

footerIntermediate: {
  en: "Intermediate Class 11 to 12",
  hi: "इंटरमीडिएट कक्षा 11 से 12"
},



footerHelpCenter1: {
  en: "Help Center",
  hi: "सहायता केंद्र"
},

footerFAQ1: {
  en: "Frequently Asked Questions",
  hi: "अक्सर पूछे जाने वाले प्रश्न"
},

footerContact: {
  en: "Contact Us",
  hi: "संपर्क करें"
},

footerLega2: {
  en: "Legal",
  hi: "कानूनी"
},

footerPrivacy1: {
  en: "Privacy Policy",
  hi: "गोपनीयता नीति"
},

footerTerms1: {
  en: "Terms of Service",
  hi: "सेवा की शर्तें"
},

footerCopyright1: {
  en: "© 2026 Ishan Learning. All rights reserved.",
  hi: "© 2026 ईशान लर्निंग। सर्वाधिकार सुरक्षित।"
}

}

interface LanguageContextType {
  language: Language
  theme: Theme
  setLanguage: (lang: Language) => void
  setTheme: (theme: Theme) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [theme, setTheme] = useState<Theme>("light")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const savedLanguage = (localStorage.getItem("language") as Language) || "en"
    const savedTheme = (localStorage.getItem("theme") as Theme) || "light"

    setLanguage(savedLanguage)
    setTheme(savedTheme)

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark-mode")
    }
    setIsMounted(true)
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark-mode")
    } else {
      document.documentElement.classList.remove("dark-mode")
    }
  }

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return (
    <LanguageContext.Provider value={{ language, theme, setLanguage: handleSetLanguage, setTheme: handleSetTheme, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}

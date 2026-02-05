"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Backtotest from "@/components/back-to-test"
import HomeButton from "@/components/home-button"
import { useLanguage } from "@/components/language-context"
import "@/styles/wellbeing.css"

interface Test {
  id: string
  title: string
  category: string
  why: string
  statements: string[]
  results: {
    rarely: {
      title: string
      description: string
      note: string
    }
    sometimes: {
      title: string
      description: string
      note: string
    }
    often: {
      title: string
      description: string
      note: string
    }
  }
}

const tests: Test[] = [
  {
    id: "exam-stress",
    title: "Exam Stress Reflection",
    category: "Academic Load & Learning Energy Reflections",
    why: "Examinations are meant to assess learning, but for many students they also become a major source of pressure. Fear of results, expectations from others and self-doubt can silently affect focus, confidence and emotional balance even when preparation is sincere. This reflection helps students notice how exam-related stress is experienced internally, without judgement or labels.",
    statements: [
      "I feel tense or uneasy when exams or tests are approaching",
      "Thoughts about results distract me while studying",
      "I worry about disappointing parents, teachers or myself",
      "My body feels restless or uncomfortable before or during exams",
      "Even after preparing, I feel unsure about my performance",
      "I replay exam mistakes in my mind repeatedly",
      "I feel pressure to perform beyond what feels manageable",
      "I struggle to relax when exams are near",
      "My confidence drops around exam periods",
      "Exam expectations affect my mood or motivation"
    ],
    results: {
      rarely: {
        title: "✨ You appear to be handling exam-related pressure reasonably well",
        description: "You appear to be handling exam-related pressure reasonably well at present. Feeling some stress before exams is normal, but your current patterns suggest that pressure is not overwhelming your emotional balance.",
        note: "Keep maintaining what's working for you and remember to take care of yourself."
      },
      sometimes: {
        title: "🌤️ Exam stress affects you at certain times",
        description: "Exam stress affects you at certain times, which is very common-especially during busy or high-expectation phases. Awareness, rest and supportive guidance can help prevent stress from becoming heavier.",
        note: "Notice when it increases and reach out early if needed."
      },
      often: {
        title: "🌧️ Exam-related pressure may be affecting you more consistently",
        description: "Exam-related pressure may be affecting you more consistently. When worry or tension feels frequent, it is important not to manage it alone. Support can help restore confidence and balance.",
        note: "Seeking support reflects responsibility and self-awareness-not weakness."
      }
    }
  },
  {
    id: "learning-energy",
    title: "Learning Energy & Mental Fatigue Reflection",
    category: "Academic Load & Learning Energy Reflections",
    why: "Learning requires mental energy. When students continue studying despite feeling mentally exhausted, overloaded or drained, learning can slowly feel heavier even without obvious reasons. This reflection focuses on learning energy and mental fatigue, not medical burnout or diagnosis.",
    statements: [
      "I feel mentally tired after study sessions",
      "Starting study feels harder than it used to",
      "My mind feels exhausted even with moderate workload",
      "I continue studying despite feeling drained",
      "Breaks do not always help me feel refreshed",
      "I feel overloaded by academic demands",
      "My motivation drops when I feel mentally tired",
      "I struggle to maintain energy throughout the day",
      "Learning feels more tiring than interesting at times",
      "Mental fatigue affects how much I understand or remember"
    ],
    results: {
      rarely: {
        title: "✨ Your learning energy appears fairly balanced",
        description: "Your learning energy appears fairly balanced. Occasional tiredness is normal, but overall your mind seems able to recover and engage.",
        note: "Keep maintaining healthy study rhythms and recovery patterns."
      },
      sometimes: {
        title: "🌤️ Mental fatigue affects you during certain periods",
        description: "Mental fatigue affects you during certain periods. This is common during heavy academic phases. Paying attention to rest and pacing may help maintain balance.",
        note: "Notice patterns in when fatigue increases and adjust your routine accordingly."
      },
      often: {
        title: "🌧️ Learning energy may be consistently low at present",
        description: "Learning energy may be consistently low at present. When mental exhaustion feels frequent, additional support and adjustment can help prevent overload.",
        note: "Reaching out for guidance about study habits and recovery can make a real difference."
      }
    }
  },
  {
    id: "focus-distraction",
    title: "Focus & Distraction Awareness Reflection",
    category: "Academic Load & Learning Energy Reflections",
    why: "Many students want to study sincerely, yet find their attention drifting repeatedly. Distraction is not always about lack of effort-it is often linked to mental load, fatigue, stress or overstimulation. This reflection helps students notice how focus and distraction are showing up in their learning, without blame or judgement.",
    statements: [
      "My mind wanders even when I try to concentrate",
      "I get distracted by my phone or other thoughts while studying",
      "I reread the same content multiple times to understand it",
      "Small noises or interruptions disturb my focus",
      "I struggle to stay focused for long periods",
      "I start thinking about unrelated things during study time",
      "I feel mentally present only for short durations",
      "Distraction makes studying feel frustrating",
      "I lose track of what I am studying easily",
      "Difficulty focusing affects my confidence"
    ],
    results: {
      rarely: {
        title: "✨ Your focus appears reasonably steady",
        description: "Your focus appears reasonably steady. Occasional distraction is normal, but overall attention does not seem to interfere significantly with learning.",
        note: "Continue practicing the habits that keep you focused and present."
      },
      sometimes: {
        title: "🌤️ Distraction affects you at times",
        description: "Distraction affects you at times, especially during mentally demanding periods. With small adjustments, focus can improve.",
        note: "Notice when distraction increases and explore what helps you refocus."
      },
      often: {
        title: "🌧️ Difficulty maintaining focus may be affecting learning consistently",
        description: "Difficulty maintaining focus may be affecting learning consistently. When distraction feels frequent, additional support and structure can help restore clarity.",
        note: "Talking to a teacher or counselor about focus strategies can help significantly."
      }
    }
  },
  {
    id: "study-rest",
    title: "Study-Rest Balance Reflection",
    category: "Academic Load & Learning Energy Reflections",
    why: "Consistent learning requires both effort and recovery. When rest is ignored or associated with guilt, the mind may remain stressed even during breaks-reducing learning effectiveness over time. This reflection helps students become aware of how well study and rest are balanced.",
    statements: [
      "My sleep is affected because of academic demands",
      "I study for long hours without sufficient breaks",
      "I feel guilty when I take rest",
      "I continue studying even when my body feels exhausted",
      "I struggle to relax fully during breaks",
      "Rest feels unproductive to me",
      "I push myself even when mentally tired",
      "My schedule leaves little time to recover",
      "I feel physically or mentally worn out",
      "Lack of rest affects my concentration or mood"
    ],
    results: {
      rarely: {
        title: "✨ Your study-rest balance appears relatively healthy",
        description: "Your study-rest balance appears relatively healthy. You seem able to study while also allowing recovery.",
        note: "Keep honoring your need for rest-it's essential for effective learning."
      },
      sometimes: {
        title: "🌤️ Balance may be inconsistent",
        description: "Balance may be inconsistent. During demanding phases, rest may need more attention to prevent overload.",
        note: "During busy periods, make rest a priority, not an afterthought."
      },
      often: {
        title: "🌧️ Rest may be getting overlooked",
        description: "Rest may be getting overlooked. When recovery is limited, learning can feel heavier and less effective. Supportive adjustments may help restore balance.",
        note: "Reaching out about balancing study and rest can help you feel better."
      }
    }
  },
  {
    id: "emotional-balance",
    title: "Emotional Balance Reflection",
    category: "Emotional Experience in Learning",
    why: "Academic life can influence emotions in subtle ways. Even capable students may feel emotionally overloaded, irritable or unsettled without fully understanding why. This reflection supports awareness of emotional balance related to learning experiences, without labels or diagnosis.",
    statements: [
      "My emotions feel mostly stable during academic routines",
      "Small academic issues affect my mood strongly",
      "I feel emotionally overwhelmed at times",
      "I can calm myself after feeling stressed",
      "My mood changes with academic pressure",
      "I feel emotionally drained after study sessions",
      "I recover emotionally after setbacks",
      "Stress affects how I feel about learning",
      "I feel emotionally balanced most days",
      "Emotional strain affects my motivation"
    ],
    results: {
      rarely: {
        title: "✨ Your emotional balance appears relatively stable",
        description: "Your emotional balance appears relatively stable. Challenges may arise, but emotions do not seem to overwhelm your learning experience.",
        note: "Keep maintaining practices that keep you emotionally steady."
      },
      sometimes: {
        title: "🌤️ Emotional ups and downs are present",
        description: "Emotional ups and downs are present, which is common during academic pressure. Awareness and support can help maintain balance.",
        note: "Notice patterns in your emotions and what helps you feel steadier."
      },
      often: {
        title: "🌧️ Emotional load may be affecting learning more consistently",
        description: "Emotional load may be affecting learning more consistently. When emotions feel heavy or persistent, reaching out for support can help restore steadiness.",
        note: "You deserve support-sharing how you feel is an important first step."
      }
    }
  },
  {
    id: "mood-motivation",
    title: "Mood & Motivation Reflection",
    category: "Emotional Experience in Learning",
    why: "Motivation does not remain constant. Academic pressure, repeated effort and emotional load can slowly affect interest, energy and enthusiasm for learning even when students want to do well. This reflection helps students notice patterns in mood and motivation related to learning, without judgement or labels.",
    statements: [
      "I feel interested in what I am studying",
      "I struggle to feel motivated even when work is important",
      "My mood affects how willing I feel to study",
      "I feel mentally dull or uninterested at times",
      "I enjoy learning moments occasionally",
      "Starting study feels harder than continuing it",
      "My motivation drops when pressure increases",
      "I feel emotionally disconnected from studies sometimes",
      "Encouragement helps improve my motivation",
      "Low mood affects my effort or consistency"
    ],
    results: {
      rarely: {
        title: "✨ Your motivation and mood appear generally positive",
        description: "Your motivation and mood appear generally positive. Interest in studying seems steady and low mood does not seem to consistently interfere.",
        note: "Keep connecting with what makes learning meaningful to you."
      },
      sometimes: {
        title: "🌤️ Motivation and mood fluctuate at times",
        description: "Motivation and mood fluctuate at times, especially during high-pressure periods. This is completely normal and very common.",
        note: "Notice what activities or support help restore your motivation."
      },
      often: {
        title: "🌧️ Low motivation or mood may be affecting learning",
        description: "Low motivation or mood may be affecting learning more consistently. When disengagement feels frequent, exploring what's behind it or reaching out for support can help.",
        note: "Talking about what drains your motivation can help find practical solutions."
      }
    }
  },
  {
    id: "academic-anxiety",
    title: "Academic Anxiety Awareness Reflection",
    category: "Emotional Experience in Learning",
    why: "Academic anxiety can appear as constant worry, physical uneasiness or fear of outcomes. This reflection focuses only on anxiety related to academic experiences, not clinical anxiety or diagnosis. The purpose is to support awareness-not to label or define.",
    statements: [
      "Academic thoughts make me feel uneasy or tense",
      "I experience physical signs of nervousness while studying",
      "I worry excessively about academic outcomes",
      "I imagine negative results even after preparing",
      "Academic pressure stays on my mind",
      "I feel relief only after tasks or exams are over",
      "Anxiety affects how clearly I think",
      "I feel restless when expectations are high",
      "Fear of failure affects my confidence",
      "Academic worry interferes with my focus"
    ],
    results: {
      rarely: {
        title: "✨ Academic anxiety does not seem to be strongly present",
        description: "Academic anxiety does not seem to be strongly present. While some nervousness before exams is normal, it does not appear to affect you heavily.",
        note: "You appear to have a healthy and realistic attitude toward academic challenges."
      },
      sometimes: {
        title: "🌤️ Academic anxiety appears during certain situations",
        description: "Academic anxiety appears during certain situations, particularly during exams or high-stakes periods. This is extremely common among students.",
        note: "Notice what specific situations trigger anxiety and what helps you feel calmer."
      },
      often: {
        title: "🌧️ Anxiety around academics may be affecting your wellbeing consistently",
        description: "Anxiety around academics may be affecting your wellbeing consistently. When worry feels frequent or intense, reaching out for support can help build confidence.",
        note: "Many students experience this-you are not alone. Support can make a real difference."
      }
    }
  },
  {
    id: "grit-persistence",
    title: "Grit & Persistence Reflection",
    category: "Learning Strengths & Inner Skills",
    why: "Learning involves effort, mistakes and setbacks. Grit and persistence influence how students respond to difficulty-not how 'smart' they are. This reflection supports awareness of how consistently effort is maintained when challenges arise.",
    statements: [
      "I continue studying even after facing difficulties",
      "I feel discouraged easily when learning feels hard",
      "I try again after making academic mistakes",
      "Setbacks reduce my willingness to continue",
      "Long-term goals motivate my effort",
      "I give up faster than I would like",
      "I believe effort can improve outcomes",
      "Challenges make me feel emotionally drained",
      "I feel proud of persistence after difficulty",
      "I stay committed even when progress feels slow"
    ],
    results: {
      rarely: {
        title: "✨ Your persistence appears reasonably strong",
        description: "Your persistence appears reasonably strong. Setbacks do not easily defeat you and you seem able to return to effort after difficulty.",
        note: "Keep nurturing the resilience and determination you clearly possess."
      },
      sometimes: {
        title: "🌤️ Persistence fluctuates during challenges",
        description: "Persistence fluctuates during challenges, especially when difficulty feels heavy. This is very normal-effort naturally feels harder during tough phases.",
        note: "Remembering past successes can help you persist through current struggles."
      },
      often: {
        title: "🌧️ Difficulty sustaining effort may be affecting learning",
        description: "Difficulty sustaining effort may be affecting learning, especially when setbacks accumulate. Support in building confidence and breaking goals into smaller steps can help restore resilience.",
        note: "Exploring what feels most draining and what kinds of support help can make a real difference."
      }
    }
  },
  {
    id: "learning-confidence",
    title: "Learning Self-Confidence Reflection",
    category: "Learning Strengths & Inner Skills",
    why: "Confidence in learning is not about being perfect-it is about trusting one's ability to understand, improve and cope with challenges. Academic pressure, comparison and repeated difficulty can quietly reduce self-confidence over time. This reflection helps students notice how confident they currently feel in their learning abilities, without judgement or labels.",
    statements: [
      "I believe I can understand difficult topics with effort",
      "I doubt my abilities while studying",
      "I feel capable when I put in consistent effort",
      "I compare my performance negatively with others",
      "I trust my learning process",
      "Making mistakes reduces my confidence",
      "I feel confident asking questions or seeking help",
      "I feel unsure about my academic abilities lately",
      "Encouragement improves my confidence",
      "Self-doubt affects how I approach learning"
    ],
    results: {
      rarely: {
        title: "✨ Your learning confidence appears reasonably strong",
        description: "Your learning confidence appears reasonably strong. Setbacks do not seem to shake your belief that you can understand and improve.",
        note: "Keep trusting your ability to learn and grow through effort."
      },
      sometimes: {
        title: "🌤️ Confidence fluctuates, especially during challenges",
        description: "Confidence fluctuates, especially during challenging periods or after setbacks. This is very common-confidence naturally dips when learning feels hard.",
        note: "Notice what builds your confidence back up and lean on that."
      },
      often: {
        title: "🌧️ Self-doubt may be affecting your learning approach",
        description: "Self-doubt may be affecting your learning approach more consistently. When confidence feels persistently low, support in recognizing your strengths and reframing setbacks can help significantly.",
        note: "You are capable-sharing doubts with someone supportive can help restore belief in yourself."
      }
    }
  },
  {
    id: "growth-mindset",
    title: "Growth Mindset Reflection",
    category: "Learning Strengths & Inner Skills",
    why: "A growth mindset involves viewing mistakes and challenges as part of learning rather than signs of failure. Pressure, fear of judgement or repeated setbacks can make mistakes feel threatening instead of useful. This reflection supports awareness of how students currently relate to mistakes, effort and improvement.",
    statements: [
      "I see mistakes as opportunities to learn",
      "I fear making mistakes in academic settings",
      "Feedback helps me improve",
      "I avoid challenges to prevent failure",
      "Effort matters more than immediate success",
      "I feel discouraged when I struggle",
      "I believe abilities can improve with practice",
      "I feel judged when I make mistakes",
      "Challenges help me grow",
      "Fear of mistakes affects my participation"
    ],
    results: {
      rarely: {
        title: "✨ Your approach to learning appears growth-oriented",
        description: "Your approach to learning appears growth-oriented. You seem comfortable with mistakes and view challenges as opportunities rather than threats.",
        note: "Keep valuing effort and learning over immediate perfection."
      },
      sometimes: {
        title: "🌤️ You sometimes view mistakes as learning opportunities",
        description: "You sometimes view mistakes as learning opportunities, but fear of failure does emerge at times. This is a normal balance.",
        note: "Notice when fear shows up and remind yourself that mistakes are how we grow."
      },
      often: {
        title: "🌧️ Fear of mistakes may be affecting your learning engagement",
        description: "Fear of mistakes may be affecting your learning engagement more consistently. When failure feels too risky, support in reframing mistakes can help restore confidence.",
        note: "Learning to see mistakes as valuable feedback (not judgment) can be transformative."
      }
    }
  },
  {
    id: "home-adjustment",
    title: "Home-Study Adjustment Reflection",
    category: "Adjustment & Support Environment",
    why: "A student's learning experience is shaped not only by effort, but also by the home environment. Family expectations, space, noise, routines and communication can support or unintentionally strain learning. This reflection helps students notice how home-related factors influence their studies, without placing blame.",
    statements: [
      "My home environment supports my studies",
      "Family expectations feel manageable",
      "Noise or space at home affects my concentration",
      "I feel pressure to meet others' academic expectations",
      "I can communicate my study needs at home",
      "Home responsibilities interfere with study time",
      "I feel emotionally supported at home",
      "Family discussions increase my academic stress",
      "I feel comfortable studying at home",
      "Home-related pressure affects my motivation"
    ],
    results: {
      rarely: {
        title: "✨ Your home environment seems supportive of learning",
        description: "Your home environment seems supportive of learning. You appear to have space and support to study effectively.",
        note: "Keep fostering open communication about your academic needs at home."
      },
      sometimes: {
        title: "🌤️ Home factors affect your studies at times",
        description: "Home factors affect your studies at times. Finding ways to communicate your needs or create study space can help.",
        note: "Even small adjustments at home can improve focus and reduce stress."
      },
      often: {
        title: "🌧️ Home-related challenges may be affecting learning",
        description: "Home-related challenges may be affecting learning more consistently. When home factors feel draining, talking to someone supportive about solutions can help.",
        note: "Your struggles are valid-exploring practical adjustments or support can make a difference."
      }
    }
  },
  {
    id: "school-adjustment",
    title: "School Adjustment Reflection",
    category: "Adjustment & Support Environment",
    why: "Learning is influenced by the academic environment-teaching pace, expectations, interaction style and perceived support. Even motivated students may struggle when the learning environment does not fully align with their needs. This reflection helps students understand how well they are adjusting to school environments, without blame or judgement.",
    statements: [
      "The teaching pace suits my learning ability",
      "I feel comfortable asking questions or doubts",
      "Academic expectations feel very high",
      "I feel supported by teachers or instructors",
      "I struggle to keep up with lessons at times",
      "The learning environment motivates me",
      "I feel anxious in class settings",
      "Feedback from teachers helps me improve",
      "I feel pressure to perform in front of others",
      "The academic environment affects my confidence"
    ],
    results: {
      rarely: {
        title: "✨ You appear well-adjusted to the academic environment",
        description: "You appear well-adjusted to the academic environment. Pace and expectations seem manageable and you feel reasonably supported.",
        note: "Keep appreciating the environment that's working for you."
      },
      sometimes: {
        title: "🌤️ Adjustment challenges appear at times",
        description: "Adjustment challenges appear at times, particularly around pace or performance pressure. Finding ways to communicate needs can help.",
        note: "Reaching out to teachers about concerns can often lead to helpful adjustments."
      },
      often: {
        title: "🌧️ Adjustment to the academic environment may be affecting learning",
        description: "Adjustment to the academic environment may be affecting learning consistently. When the environment feels misaligned, support in problem-solving or finding alternatives can help.",
        note: "Speaking with teachers, counselors or parents about adjustments is an important step."
      }
    }
  },
  {
    id: "social-support",
    title: "Social Support Awareness Reflection",
    category: "Adjustment & Support Environment",
    why: "Support from friends, teachers and trusted adults can reduce academic stress and emotional burden. When students feel alone with pressure, learning can feel heavier, even when they are capable. This reflection supports awareness of how supported a student currently feels, without judgement.",
    statements: [
      "I have someone I can talk to about academic stress",
      "I feel alone when dealing with study pressure",
      "Friends understand my academic challenges",
      "Teachers or mentors feel approachable",
      "Emotional support helps me feel lighter",
      "I hesitate to share academic struggles",
      "I feel understood when I talk about learning stress",
      "Support reduces my anxiety or worry",
      "I know where to seek help if needed",
      "Feeling supported affects my confidence in learning"
    ],
    results: {
      rarely: {
        title: "✨ You appear to have good social support",
        description: "You appear to have good social support. People around you seem approachable and helpful when you face academic challenges.",
        note: "Keep nurturing these supportive relationships-they are valuable."
      },
      sometimes: {
        title: "🌤️ Support is available, but you sometimes feel alone",
        description: "Support is available, but you sometimes feel alone with pressure. Finding even one trusted person to talk to can help significantly.",
        note: "Reaching out, even when it feels hard, often leads to helpful conversations."
      },
      often: {
        title: "🌧️ Feeling unsupported may be affecting your wellbeing",
        description: "Feeling unsupported may be affecting your wellbeing. When academic stress feels isolating, reaching out to someone a teacher, counselor or trusted adult can help restore connection.",
        note: "Support exists-sometimes the hardest step is asking for it."
      }
    }
  },
  {
    id: "self-discipline",
    title: "Self-Discipline & Routine Reflection",
    category: "Self-Management & Direction",
    why: "Self-discipline supports consistency, but it is influenced by motivation, emotional state and structure, not just willpower. Academic pressure can disrupt routines, making consistency difficult. This reflection helps students notice patterns in discipline and routine, without labelling or judgement.",
    statements: [
      "I follow a regular study routine",
      "I delay tasks even when time is available",
      "I can manage distractions effectively",
      "I struggle to stay consistent",
      "Planning helps me study better",
      "I feel overwhelmed by schedules",
      "I complete tasks I set out to do",
      "I find it hard to maintain routines",
      "Structure improves my focus",
      "Lack of routine affects my learning"
    ],
    results: {
      rarely: {
        title: "✨ Your discipline and routine appear well-established",
        description: "Your discipline and routine appear well-established. Consistency comes naturally to you and structure seems to support your learning.",
        note: "Keep valuing the routines that help you stay focused and productive."
      },
      sometimes: {
        title: "🌤️ Discipline fluctuates, especially under pressure",
        description: "Discipline fluctuates, especially under pressure or during demanding periods. This is very normal-maintaining routine becomes harder when stress increases.",
        note: "Notice when routines slip and gently rebuild them without self-judgment."
      },
      often: {
        title: "🌧️ Maintaining discipline and routine may be challenging",
        description: "Maintaining discipline and routine may be challenging more consistently. When consistency feels hard, exploring what gets in the way and creating simpler routines can help.",
        note: "Small, achievable routines often work better than complicated schedules."
      }
    }
  },
  {
    id: "emotional-regulation",
    title: "Emotional Regulation Reflection",
    category: "Self-Management & Direction",
    why: "Emotions are a natural part of learning. Stress, frustration, disappointment or pressure can affect how students think, react and continue their efforts. Emotional regulation does not mean suppressing feelings-it means understanding and managing them in healthy ways. This reflection supports awareness of how emotions are currently handled during academic experiences, without judgement or labels.",
    statements: [
      "I am able to calm myself when I feel stressed",
      "I feel stuck in frustration during academic challenges",
      "My emotions affect how well I study",
      "I recover emotionally after setbacks",
      "I feel overwhelmed by academic pressure",
      "I can manage anger or irritation related to studies",
      "Stress affects my reactions toward others",
      "I feel emotionally balanced most days",
      "I struggle to control emotions during pressure",
      "Emotional strain affects my concentration"
    ],
    results: {
      rarely: {
        title: "✨ You appear to manage emotions well",
        description: "You appear to manage emotions well during academic challenges. You can calm yourself when stressed and recover after setbacks.",
        note: "Keep practicing the emotional skills that help you stay steady."
      },
      sometimes: {
        title: "🌤️ Emotions affect you during pressure",
        description: "Emotions affect you during pressure, but you generally recover. Learning healthy ways to calm yourself can help even more.",
        note: "Notice what helps you feel calmer and use those strategies when intensity rises."
      },
      often: {
        title: "🌧️ Emotional overwhelm may be affecting your learning",
        description: "Emotional overwhelm may be affecting your learning more consistently. When emotions feel hard to manage, learning coping strategies or reaching out for support can help significantly.",
        note: "Emotional regulation is a skill-practice and support can help you build it."
      }
    }
  },
  {
    id: "purpose-direction",
    title: "Purpose & Learning Direction Reflection",
    category: "Self-Management & Direction",
    why: "Having a sense of purpose helps students stay motivated during effort and difficulty. When learning feels directionless or driven only by pressure, motivation can weaken even when ability is present. This reflection supports awareness of how connected a student feels to purpose and direction in learning, without judgment or expectation.",
    statements: [
      "I understand why I am studying",
      "My studies feel meaningful to me",
      "I study mainly due to external pressure",
      "I feel connected to my future goals",
      "I feel lost about my academic direction",
      "Purpose motivates my effort",
      "I question the value of what I am studying",
      "Long-term goals guide my decisions",
      "Lack of clarity affects my motivation",
      "I feel directionless at times"
    ],
    results: {
      rarely: {
        title: "✨ Your sense of purpose appears clear",
        description: "Your sense of purpose appears clear. You understand why you are learning and feel connected to your direction.",
        note: "Keep nurturing this sense of meaning-it's a powerful motivator."
      },
      sometimes: {
        title: "🌤️ Purpose wavers at times",
        description: "Purpose wavers at times, especially when pressure or difficulty increases. Reconnecting with your longer-term goals can help restore clarity.",
        note: "It's normal to question direction sometimes-exploring your values can help."
      },
      often: {
        title: "🌧️ Lack of clear purpose may be affecting motivation",
        description: "Lack of clear purpose may be affecting motivation more consistently. When learning feels driven only by pressure, exploring what matters to you can help restore meaning.",
        note: "Taking time to think about your goals and values can help reignite motivation."
      }
    }
  }
]

export default function WellBeing() {
  const { t } = useLanguage()
  const [selectedTestId, setSelectedTestId] = useState<string | null>(null)
  const [responses, setResponses] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  // Create translated tests array using translation function
  const getTests = (): Test[] => [
    {
      id: "exam-stress",
      title: t("examStressTitle"),
      category: t("academicLoadCategory"),
      why: t("examStressDesc"),
      statements: [
        t("examStress1"),
        t("examStress2"),
        t("examStress3"),
        t("examStress4"),
        t("examStress5"),
        t("examStress6"),
        t("examStress7"),
        t("examStress8"),
        t("examStress9"),
        t("examStress10"),
      ],
      results: {
        rarely: {
          title: "✨ " + t("examStressRarelyTitle"),
          description: t("examStressRarelyDesc"),
          note: t("examStressRarelyNote"),
        },
        sometimes: {
          title: "🌤️ " + t("examStressSometimesTitle"),
          description: t("examStressSometimesDesc"),
          note: t("examStressSometimesNote"),
        },
        often: {
          title: "🌧️ " + t("examStressOftenTitle"),
          description: t("examStressOftenDesc"),
          note: t("examStressOftenNote"),
        }
      }
    },
    {
      id: "learning-energy",
      title: t("learningEnergyTitle"),
      category: t("academicLoadCategory"),
      why: t("learningEnergyWhyDesc"),
      statements: [
        t("learningEnergy1"),
        t("learningEnergy2"),
        t("learningEnergy3"),
        t("learningEnergy4"),
        t("learningEnergy5"),
        t("learningEnergy6"),
        t("learningEnergy7"),
        t("learningEnergy8"),
        t("learningEnergy9"),
        t("learningEnergy10"),
      ],
      results: {
        rarely: {
          title: "✨ " + t("learningEnergyRarelyTitle"),
          description: t("learningEnergyRarelyDesc"),
          note: t("learningEnergyRarelyNote"),
        },
        sometimes: {
          title: "🌤️ " + t("learningEnergySometimesTitle"),
          description: t("learningEnergySometimesDesc"),
          note: t("learningEnergySometimesNote"),
        },
        often: {
          title: "🌧️ " + t("learningEnergyOftenTitle"),
          description: t("learningEnergyOftenDesc"),
          note: t("learningEnergyOftenNote"),
        }
      }
    },
    {
      id: "focus-distraction",
      title: t("focusDistractionTitle"),
      category: t("academicLoadCategory"),
      why: t("focusDistractionWhyDesc"),
      statements: [
        t("focusDistraction1"),
        t("focusDistraction2"),
        t("focusDistraction3"),
        t("focusDistraction4"),
        t("focusDistraction5"),
        t("focusDistraction6"),
        t("focusDistraction7"),
        t("focusDistraction8"),
        t("focusDistraction9"),
        t("focusDistraction10"),
      ],
      results: {
        rarely: {
          title: "✨ " + t("focusDistractionRarelyTitle"),
          description: t("focusDistractionRarelyDesc"),
          note: t("focusDistractionRarelyNote"),
        },
        sometimes: {
          title: "🌤️ " + t("focusDistractionSometimesTitle"),
          description: t("focusDistractionSometimesDesc"),
          note: t("focusDistractionSometimesNote"),
        },
        often: {
          title: "🌧️ " + t("focusDistractionOftenTitle"),
          description: t("focusDistractionOftenDesc"),
          note: t("focusDistractionOftenNote"),
        }
      }
    },
    {
      id: "study-rest",
      title: t("studyRestTitle"),
      category: t("academicLoadCategory"),
      why: t("studyRestWhyDesc"),
      statements: [
        t("studyRest1"),
        t("studyRest2"),
        t("studyRest3"),
        t("studyRest4"),
        t("studyRest5"),
        t("studyRest6"),
        t("studyRest7"),
        t("studyRest8"),
        t("studyRest9"),
        t("studyRest10"),
      ],
      results: {
        rarely: {
          title: "✨ " + t("studyRestRarelyTitle"),
          description: t("studyRestRarelyDesc"),
          note: t("studyRestRarelyNote"),
        },
        sometimes: {
          title: "🌤️ " + t("studyRestSometimesTitle"),
          description: t("studyRestSometimesDesc"),
          note: t("studyRestSometimesNote"),
        },
        often: {
          title: "🌧️ " + t("studyRestOftenTitle"),
          description: t("studyRestOftenDesc"),
          note: t("studyRestOftenNote"),
        }
      }
    },
    {
      id: "emotional-balance",
      title: t("emotionalBalanceTitle"),
      category: t("emotionalExperienceCategory"),
      why: t("emotionalBalanceWhyDesc"),
      statements: [
        t("emotionalBalance1"),
        t("emotionalBalance2"),
        t("emotionalBalance3"),
        t("emotionalBalance4"),
        t("emotionalBalance5"),
        t("emotionalBalance6"),
        t("emotionalBalance7"),
        t("emotionalBalance8"),
        t("emotionalBalance9"),
        t("emotionalBalance10"),
      ],
      results: {
        rarely: {
          title: "✨ " + t("emotionalBalanceRarelyTitle"),
          description: t("emotionalBalanceRarelyDesc"),
          note: t("emotionalBalanceRarelyNote"),
        },
        sometimes: {
          title: "🌤️ " + t("emotionalBalanceSometimesTitle"),
          description: t("emotionalBalanceSometimesDesc"),
          note: t("emotionalBalanceSometimesNote"),
        },
        often: {
          title: "🌧️ " + t("emotionalBalanceOftenTitle"),
          description: t("emotionalBalanceOftenDesc"),
          note: t("emotionalBalanceOftenNote"),
        }
      }
    },
    {
      id: "mood-motivation",
      title: t("moodMotivationTitle"),
      category: t("emotionalExperienceCategory"),
      why: t("moodMotivationWhyDesc"),
      statements: [
        t("moodMotivation1"),
        t("moodMotivation2"),
        t("moodMotivation3"),
        t("moodMotivation4"),
        t("moodMotivation5"),
        t("moodMotivation6"),
        t("moodMotivation7"),
        t("moodMotivation8"),
        t("moodMotivation9"),
        t("moodMotivation10"),
      ],
      results: {
        rarely: {
          title: "✨ " + t("moodMotivationRarelyTitle"),
          description: t("moodMotivationRarelyDesc"),
          note: t("moodMotivationRarelyNote"),
        },
        sometimes: {
          title: "🌤️ " + t("moodMotivationSometimesTitle"),
          description: t("moodMotivationSometimesDesc"),
          note: t("moodMotivationSometimesNote"),
        },
        often: {
          title: "🌧️ " + t("moodMotivationOftenTitle"),
          description: t("moodMotivationOftenDesc"),
          note: t("moodMotivationOftenNote"),
        }
      }
    },
    {
      id: "academic-anxiety",
      title: t("academicAnxietyTitle"),
      category: t("emotionalExperienceCategory"),
      why: t("academicAnxietyWhyDesc"),
      statements: [
        t("academicAnxiety1"),
        t("academicAnxiety2"),
        t("academicAnxiety3"),
        t("academicAnxiety4"),
        t("academicAnxiety5"),
        t("academicAnxiety6"),
        t("academicAnxiety7"),
        t("academicAnxiety8"),
        t("academicAnxiety9"),
        t("academicAnxiety10"),
      ],
      results: {
        rarely: {
          title: "✨ " + t("academicAnxietyRarelyTitle"),
          description: t("academicAnxietyRarelyDesc"),
          note: t("academicAnxietyRarelyNote"),
        },
        sometimes: {
          title: "🌤️ " + t("academicAnxietySometimesTitle"),
          description: t("academicAnxietySometimesDesc"),
          note: t("academicAnxietySometimesNote"),
        },
        often: {
          title: "🌧️ " + t("academicAnxietyOftenTitle"),
          description: t("academicAnxietyOftenDesc"),
          note: t("academicAnxietyOftenNote"),
        }
      }
    },
    {
      id: "grit-persistence",
      title: t("gritPersistenceTitle"),
      category: t("learningStrengthsCategory"),
      why: t("gritPersistenceWhyDesc"),
      statements: [
        t("gritPersistence1"),
        t("gritPersistence2"),
        t("gritPersistence3"),
        t("gritPersistence4"),
        t("gritPersistence5"),
        t("gritPersistence6"),
        t("gritPersistence7"),
        t("gritPersistence8"),
        t("gritPersistence9"),
        t("gritPersistence10"),
      ],
      results: {
        rarely: {
          title: "✨ " + t("gritPersistenceRarelyTitle"),
          description: t("gritPersistenceRarelyDesc"),
          note: t("gritPersistenceRarelyNote"),
        },
        sometimes: {
          title: "🌤️ " + t("gritPersistenceSometimesTitle"),
          description: t("gritPersistenceSometimesDesc"),
          note: t("gritPersistenceSometimesNote"),
        },
        often: {
          title: "🌧️ " + t("gritPersistenceOftenTitle"),
          description: t("gritPersistenceOftenDesc"),
          note: t("gritPersistenceOftenNote"),
        }
      }
    },
    {
      id: "learning-confidence",
      title: t("learningConfidenceTitle"),
      category: t("learningStrengthsCategory"),
      why: t("learningConfidenceWhyDesc"),
      statements: [
        t("learningConfidence1"),
        t("learningConfidence2"),
        t("learningConfidence3"),
        t("learningConfidence4"),
        t("learningConfidence5"),
        t("learningConfidence6"),
        t("learningConfidence7"),
        t("learningConfidence8"),
        t("learningConfidence9"),
        t("learningConfidence10"),
      ],
      results: {
        rarely: {
          title: "✨ " + t("learningConfidenceRarelyTitle"),
          description: t("learningConfidenceRarelyDesc"),
          note: t("learningConfidenceRarelyNote"),
        },
        sometimes: {
          title: "🌤️ " + t("learningConfidenceSometimesTitle"),
          description: t("learningConfidenceSometimesDesc"),
          note: t("learningConfidenceSometimesNote"),
        },
        often: {
          title: "🌧️ " + t("learningConfidenceOftenTitle"),
          description: t("learningConfidenceOftenDesc"),
          note: t("learningConfidenceOftenNote"),
        }
      }
    },
    {
      id: "growth-mindset",
      title: t("growthMindsetTitle"),
      category: t("learningStrengthsCategory"),
      why: t("growthMindsetWhyDesc"),
      statements: [
        t("growthMindset1"),
        t("growthMindset2"),
        t("growthMindset3"),
        t("growthMindset4"),
        t("growthMindset5"),
        t("growthMindset6"),
        t("growthMindset7"),
        t("growthMindset8"),
        t("growthMindset9"),
        t("growthMindset10"),
      ],
      results: {
        rarely: {
          title: "✨ " + t("growthMindsetRarelyTitle"),
          description: t("growthMindsetRarelyDesc"),
          note: t("growthMindsetRarelyNote"),
        },
        sometimes: {
          title: "🌤️ " + t("growthMindsetSometimesTitle"),
          description: t("growthMindsetSometimesDesc"),
          note: t("growthMindsetSometimesNote"),
        },
        often: {
          title: "🌧️ " + t("growthMindsetOftenTitle"),
          description: t("growthMindsetOftenDesc"),
          note: t("growthMindsetOftenNote"),
        }
      }
    },
    {
      id: "home-adjustment",
      title: t("homeAdjustmentTitle"),
      category: t("adjustmentSupportCategory"),
      why: t("homeAdjustmentWhyDesc"),
      statements: [
        t("homeAdjustment1"),
        t("homeAdjustment2"),
        t("homeAdjustment3"),
        t("homeAdjustment4"),
        t("homeAdjustment5"),
        t("homeAdjustment6"),
        t("homeAdjustment7"),
        t("homeAdjustment8"),
        t("homeAdjustment9"),
        t("homeAdjustment10"),
      ],
      results: {
        rarely: {
          title: "✨ " + t("homeAdjustmentRarelyTitle"),
          description: t("homeAdjustmentRarelyDesc"),
          note: t("homeAdjustmentRarelyNote"),
        },
        sometimes: {
          title: "🌤️ " + t("homeAdjustmentSometimesTitle"),
          description: t("homeAdjustmentSometimesDesc"),
          note: t("homeAdjustmentSometimesNote"),
        },
        often: {
          title: "🌧️ " + t("homeAdjustmentOftenTitle"),
          description: t("homeAdjustmentOftenDesc"),
          note: t("homeAdjustmentOftenNote"),
        }
      }
    },
    {
      id: "school-adjustment",
      title: t("schoolAdjustmentTitle"),
      category: t("adjustmentSupportCategory"),
      why: t("schoolAdjustmentWhyDesc"),
      statements: [
        t("schoolAdjustment1"),
        t("schoolAdjustment2"),
        t("schoolAdjustment3"),
        t("schoolAdjustment4"),
        t("schoolAdjustment5"),
        t("schoolAdjustment6"),
        t("schoolAdjustment7"),
        t("schoolAdjustment8"),
        t("schoolAdjustment9"),
        t("schoolAdjustment10"),
      ],
      results: {
        rarely: {
          title: "✨ " + t("schoolAdjustmentRarelyTitle"),
          description: t("schoolAdjustmentRarelyDesc"),
          note: t("schoolAdjustmentRarelyNote"),
        },
        sometimes: {
          title: "🌤️ " + t("schoolAdjustmentSometimesTitle"),
          description: t("schoolAdjustmentSometimesDesc"),
          note: t("schoolAdjustmentSometimesNote"),
        },
        often: {
          title: "🌧️ " + t("schoolAdjustmentOftenTitle"),
          description: t("schoolAdjustmentOftenDesc"),
          note: t("schoolAdjustmentOftenNote"),
        }
      }
    },
    {
      id: "social-support",
      title: t("socialSupportTitle"),
      category: t("adjustmentSupportCategory"),
      why: t("socialSupportWhyDesc"),
      statements: [
        t("socialSupport1"),
        t("socialSupport2"),
        t("socialSupport3"),
        t("socialSupport4"),
        t("socialSupport5"),
        t("socialSupport6"),
        t("socialSupport7"),
        t("socialSupport8"),
        t("socialSupport9"),
        t("socialSupport10"),
      ],
      results: {
        rarely: {
          title: "✨ " + t("socialSupportRarelyTitle"),
          description: t("socialSupportRarelyDesc"),
          note: t("socialSupportRarelyNote"),
        },
        sometimes: {
          title: "🌤️ " + t("socialSupportSometimesTitle"),
          description: t("socialSupportSometimesDesc"),
          note: t("socialSupportSometimesNote"),
        },
        often: {
          title: "🌧️ " + t("socialSupportOftenTitle"),
          description: t("socialSupportOftenDesc"),
          note: t("socialSupportOftenNote"),
        }
      }
    },
    {
      id: "self-discipline",
      title: t("selfDisciplineTitle"),
      category: t("selfManagementCategory"),
      why: t("selfDisciplineWhyDesc"),
      statements: [
        t("selfDiscipline1"),
        t("selfDiscipline2"),
        t("selfDiscipline3"),
        t("selfDiscipline4"),
        t("selfDiscipline5"),
        t("selfDiscipline6"),
        t("selfDiscipline7"),
        t("selfDiscipline8"),
        t("selfDiscipline9"),
        t("selfDiscipline10"),
      ],
      results: {
        rarely: {
          title: "✨ " + t("selfDisciplineRarelyTitle"),
          description: t("selfDisciplineRarelyDesc"),
          note: t("selfDisciplineRarelyNote"),
        },
        sometimes: {
          title: "🌤️ " + t("selfDisciplineSometimesTitle"),
          description: t("selfDisciplineSometimesDesc"),
          note: t("selfDisciplineSometimesNote"),
        },
        often: {
          title: "🌧️ " + t("selfDisciplineOftenTitle"),
          description: t("selfDisciplineOftenDesc"),
          note: t("selfDisciplineOftenNote"),
        }
      }
    },
    {
      id: "emotional-regulation",
      title: t("emotionalRegulationTitle"),
      category: t("selfManagementCategory"),
      why: t("emotionalRegulationWhyDesc"),
      statements: [
        t("emotionalRegulation1"),
        t("emotionalRegulation2"),
        t("emotionalRegulation3"),
        t("emotionalRegulation4"),
        t("emotionalRegulation5"),
        t("emotionalRegulation6"),
        t("emotionalRegulation7"),
        t("emotionalRegulation8"),
        t("emotionalRegulation9"),
        t("emotionalRegulation10"),
      ],
      results: {
        rarely: {
          title: "✨ " + t("emotionalRegulationRarelyTitle"),
          description: t("emotionalRegulationRarelyDesc"),
          note: t("emotionalRegulationRarelyNote"),
        },
        sometimes: {
          title: "🌤️ " + t("emotionalRegulationSometimesTitle"),
          description: t("emotionalRegulationSometimesDesc"),
          note: t("emotionalRegulationSometimesNote"),
        },
        often: {
          title: "🌧️ " + t("emotionalRegulationOftenTitle"),
          description: t("emotionalRegulationOftenDesc"),
          note: t("emotionalRegulationOftenNote"),
        }
      }
    },
    {
      id: "purpose-direction",
      title: t("purposeDirectionTitle"),
      category: t("selfManagementCategory"),
      why: t("purposeDirectionWhyDesc"),
      statements: [
        t("purposeDirection1"),
        t("purposeDirection2"),
        t("purposeDirection3"),
        t("purposeDirection4"),
        t("purposeDirection5"),
        t("purposeDirection6"),
        t("purposeDirection7"),
        t("purposeDirection8"),
        t("purposeDirection9"),
        t("purposeDirection10"),
      ],
      results: {
        rarely: {
          title: "✨ " + t("purposeDirectionRarelyTitle"),
          description: t("purposeDirectionRarelyDesc"),
          note: t("purposeDirectionRarelyNote"),
        },
        sometimes: {
          title: "🌤️ " + t("purposeDirectionSometimesTitle"),
          description: t("purposeDirectionSometimesDesc"),
          note: t("purposeDirectionSometimesNote"),
        },
        often: {
          title: "🌧️ " + t("purposeDirectionOftenTitle"),
          description: t("purposeDirectionOftenDesc"),
          note: t("purposeDirectionOftenNote"),
        }
      }
    }
  ]

  const allTests = getTests()
  const currentTest = selectedTestId ? allTests.find(t => t.id === selectedTestId) : null
  const statements = currentTest?.statements || []

  const handleResponse = (index: number, response: string) => {
    setResponses({
      ...responses,
      [index]: response
    })
  }

  const handleSubmit = () => {
    if (Object.keys(responses).length === statements.length) {
      setShowResults(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const getResponseSummary = () => {
    const counts = {
      often: 0,
      sometimes: 0,
      rarely: 0
    }
    
    Object.values(responses).forEach(response => {
      if (response === "often") counts.often++
      else if (response === "sometimes") counts.sometimes++
      else if (response === "rarely") counts.rarely++
    })
    
    return counts
  }

  const getRecommendation = () => {
    const summary = getResponseSummary()
    
    if (summary.often > summary.rarely && summary.often > summary.sometimes) {
      return "often"
    } else if (summary.sometimes > summary.rarely && summary.sometimes >= summary.often) {
      return "sometimes"
    } else {
      return "rarely"
    }
  }

  const startTest = (testId: string) => {
    setSelectedTestId(testId)
    setResponses({})
    setShowResults(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const resetToSelection = () => {
    setSelectedTestId(null)
    setResponses({})
    setShowResults(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Test Selection View
  if (!selectedTestId) {
    return (
      <div className="app" title="Mental Wellbeing - Student Reflection and Support">
        <Header />
        <main className="wellbeing-container" title="Mental wellbeing reflection tool with multiple assessment categories">
          <section className="wellbeing-hero" title="Mental wellbeing page hero section">
            <h1 title="Student mental wellbeing and emotional awareness">{t("mentalWellbeingTitle")}</h1>
            <p className="subtitle" title="Reflection subtitle">{t("reflectionSubtitle")}</p>
            <p className="tagline" title="Support message">{t("supportedNotPressured")}</p>
          </section>

          <section className="wellbeing-intro" title="Introduction to wellbeing reflections">
            <div className="intro-content" title="Intro content container">
              <p className="intro-text" title="Purpose of wellbeing reflections">
                {t("reflectionDesigned")}
              </p>
              <div className="disclaimer-box" title="Important disclaimer about reflections">
                <h3 title="Disclaimer header">{t("important")}</h3>
                <p title="Not a medical diagnosis">{t("notDiagnosis")}</p>
              </div>
            </div>
          </section>

          <section className="tests-selection" title="Test selection section">
            <h2 title="Choose a wellbeing reflection">{t("chooseReflection")}</h2>
            <p className="selection-intro" title="Instructions for selecting a test">{t("selectionIntro")}</p>
            
            <div className="categories-grid" title="Grid of wellbeing reflection categories">
              {Array.from(new Set(allTests.map(test => test.category))).map(category => (
                <div key={category} className="category-group" title={`${category} reflection tests`}>
                  <h3 className="category-title" title={`Category: ${category}`}>{category}</h3>
                  <div className="tests-list" title={`List of tests in ${category} category`}>
                    {allTests.filter(test => test.category === category).map(test => (
                      <button
                        key={test.id}
                        className="test-card"
                        title={`Start ${test.title} reflection test`}
                        onClick={() => startTest(test.id)}
                      >
                        <h4 title={`Test name: ${test.title}`}>{test.title}</h4>
                        <p className="test-description" title="Test description preview">{test.why.substring(0, 100)}...</p>
                        <span className="test-cta" title="Call to action to start reflection">{t("startReflection")}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        <HomeButton />
        <Footer />
      </div>
    )
  }

  // Test View
  return (
    <div className="app" title="Wellbeing Reflection Test - Student Assessment">
      <Header />
      <main className="wellbeing-container" title="Wellbeing reflection assessment container">
        {!showResults ? (
          <>
            <section className="wellbeing-hero" title="Test header with back button">
              <div className="test-header-content" title="Test header content">
                <button className="BTT" title="Return to test selection" onClick={resetToSelection}>{t("back")}</button>
                <h1 title={`Test: ${currentTest?.title}`}>{currentTest?.title}</h1>
                <p className="subtitle" title={`Category: ${currentTest?.category}`}>{currentTest?.category}</p>
              </div>
            </section>

            <section className="wellbeing-intro" title="Test information and guidelines">
              <div className="intro-content" title="Test context and disclaimer">
                <div className="test-why-box" title="Explanation of reflection">
                  <h3 title="Why this reflection">{t("whyThisReflection")}</h3>
                  <p title="Test context and purpose">{currentTest?.why}</p>
                </div>
                <div className="disclaimer-box" title="Important disclaimer">
                  <h3 title="Disclaimer header">{t("important")}</h3>
                  <p title="This is not a medical diagnosis">{t("notDiagnosis")}</p>
                </div>
              </div>
            </section>

            <section className="wellbeing-reflection" title="Self-reflection statements">
              <div className="reflection-header" title="Reflection instructions">
                <h2 title="Rate the statements">{t("selfReflectionStatements")}</h2>
                <p className="instruction" title="How to respond to statements">
                  {t("instruction")}
                </p>
              </div>

              <div className="statements-container" title="Container for all reflection statements">
                {statements.map((statement, index) => (
                  <div key={index} className="statement-card" title={`Statement ${index + 1}`}>
                    <div className="statement-number" title="Statement number">{index + 1}</div>
                    <div className="statement-content" title="Statement content and response options">
                      <p className="statement-text" title="Reflection statement">{statement}</p>
                      <div className="response-options" title="Response option buttons">
                        <button
                          className={`response-btn ${responses[index] === "often" ? "active often" : ""}`}
                          title="This statement applies often to me"
                          onClick={() => handleResponse(index, "often")}
                        >
                          {t("often")}
                        </button>
                        <button
                          className={`response-btn ${responses[index] === "sometimes" ? "active sometimes" : ""}`}
                          title="This statement applies sometimes to me"
                          onClick={() => handleResponse(index, "sometimes")}
                        >
                          {t("sometimes")}
                        </button>
                        <button
                          className={`response-btn ${responses[index] === "rarely" ? "active rarely" : ""}`}
                          title="This statement applies rarely to me"
                          onClick={() => handleResponse(index, "rarely")}
                        >
                          {t("rarely")}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="submit-section" title="Submit responses section">
                <button 
                  className="submit-btn" 
                  title={Object.keys(responses).length === statements.length ? "View reflection results" : "Complete all statements to proceed"}
                  onClick={handleSubmit}
                  disabled={Object.keys(responses).length !== statements.length}
                >
                  {Object.keys(responses).length === statements.length 
                    ? t("seeReflection") 
                    : `${t("completeStatements")} (${Object.keys(responses).length}/${statements.length})`}
                </button>
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="wellbeing-results" title="Test results and interpretation">
              <h2 title="Understanding your responses">{t("understandingResponses")}</h2>
              
              {getRecommendation() === "rarely" && (
                <div className="result-card rarely" title="Result: Rarely - positive indicator">
                  <h3 title="Result title">{currentTest?.results.rarely.title}</h3>
                  <p title="Detailed result description">{currentTest?.results.rarely.description}</p>
                  <div className="result-note" title="Recommendation note">{currentTest?.results.rarely.note}</div>
                </div>
              )}

              {getRecommendation() === "sometimes" && (
                <div className="result-card sometimes" title="Result: Sometimes - moderate indicator">
                  <h3 title="Result title">{currentTest?.results.sometimes.title}</h3>
                  <p title="Detailed result description">{currentTest?.results.sometimes.description}</p>
                  <div className="result-note" title="Recommendation note">{currentTest?.results.sometimes.note}</div>
                </div>
              )}

              {getRecommendation() === "often" && (
                <div className="result-card often" title="Result: Often - seek support indicator">
                  <h3 title="Result title">{currentTest?.results.often.title}</h3>
                  <p title="Detailed result description">{currentTest?.results.often.description}</p>
                  <div className="result-note" title="Recommendation note">{currentTest?.results.often.note}</div>
                </div>
              )}
            </section>

            <section className="wellbeing-support" title="When to seek additional support">
              <h2 title="Indicators for seeking support">{t("whenSeeking")}</h2>
              <p className="support-intro" title="Information about seeking help">{t("supportIntro")}</p>
              <div className="support-indicators" title="List of support indicators">
                <div className="indicator" title="Indicator 1: Feelings are constant">
                  <span className="indicator-icon" title="Checkmark icon">✓</span>
                  <p title="Constant feelings indicator">{t("feelingsConstant")}</p>
                </div>
                <div className="indicator" title="Indicator 2: Stress affects daily life">
                  <span className="indicator-icon" title="Checkmark icon">✓</span>
                  <p title="Stress affects life indicator">{t("stressAffects")}</p>
                </div>
                <div className="indicator" title="Indicator 3: Emotionally exhausted">
                  <span className="indicator-icon" title="Checkmark icon">✓</span>
                  <p title="Emotional exhaustion indicator">{t("emotionallyExhausted")}</p>
                </div>
                <div className="indicator" title="Indicator 4: Feel stuck">
                  <span className="indicator-icon" title="Checkmark icon">✓</span>
                  <p title="Feeling stuck indicator">{t("feelStuck")}</p>
                </div>
              </div>
              <p className="support-note" title="Additional support note">{t("supportNote")}</p>
            </section>

            <section className="wellbeing-boundaries" title="Important boundaries and resources">
              <h2 title="Important boundaries">{t("importantBoundaries")}</h2>
              <div className="boundaries-content" title="Boundaries content and resources">
                <p title="What Ishan does not provide">
                  <strong>{t("ishanDoesNotProvide")}</strong> {t("reflectionOnlyForAwareness")}
                </p>
                <p title="When to seek professional help">{t("ifEmotional")}</p>
                <div className="support-resources" title="Available support resources">
                  <div className="resource" title="Parents and family support">
                    <span className="resource-icon" title="Family icon">👨‍👩‍👧</span>
                    <p title="Parents resource">{t("parents")}</p>
                  </div>
                  <div className="resource" title="School counselors and teachers">
                    <span className="resource-icon" title="School icon">🏫</span>
                    <p title="School support resource">{t("teachersSchoolCounselors")}</p>
                  </div>
                  <div className="resource" title="Mental health professionals">
                    <span className="resource-icon" title="Hospital icon">🏥</span>
                    <p title="Professional mental health resource">{t("qualifiedMental")}</p>
                  </div>
                  <div className="resource" title="Crisis support helplines">
                    <span className="resource-icon" title="Phone icon">📞</span>
                    <p title="Crisis support resource">{t("appropriateSupport")}</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="wellbeing-closing" title="Closing message">
              <h2 title="Closing thought">{t("closingThought")}</h2>
              <p className="closing-main" title="Main closing message">
                {t("yourMental")}
              </p>
              <p className="closing-sub" title="Secondary closing message">
                {t("takingTime")}
              </p>
            </section>

            <div className="results-actions" title="Action buttons after results">
              <button 
                className="retake-btn"
                title="Retake the same reflection test"
                onClick={() => {
                  setResponses({})
                  setShowResults(false)
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
              >
                {t("retakeReflection")}
              </button>
              <button 
                className="explore-btn"
                title="Explore other wellbeing reflections"
                onClick={resetToSelection}
              >
                {t("exploreOther")}
              </button>
            </div>
          </>
        )}
      </main>
      {/* <Backtotest/> */}
      <HomeButton />
      <Footer />
    </div>
  )
}

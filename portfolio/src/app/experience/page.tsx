'use client'

import PageLayout from '../components/PageLayout'
import ExperienceCard from '../components/ExperienceCard'

export default function ExperiencePage() {
  return (
    <PageLayout title="Experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 font-roboto-flex">
        {/* Work Experience */}
        <div className="text-left w-full backdrop-blur-md flex flex-col gap-7">
          <ExperienceCard
            company="FEDCON"
            timeline="Jan 2026 - Present"
            position="AI Engineer Intern"
            location="Tampa, FL"
            descriptionPoints={[
              "Built an internal sales website and a complete Kanban board in under 30 hours.",
            ]}
          />
          <ExperienceCard
            company="CacheAi"
            timeline="July 2025 - Sep 2025"
            position="Software Engineer Intern"
            location="Remote"
            descriptionPoints={[
              "Designed and implemented an LLM-powered candidate scoring system using Gemini, integrating user profiles with a scraped dataset of 3,000+ colleges.",
              "Engineered a normalized PostgreSQL schema to store and query enriched college data, enabling seamless integration with user profiles and scoring logic.",
              "Helped automate candidate ranking workflows, reducing manual screening efforts by an estimated 30%, based on 100+ active users.",
            ]}
          />
          <ExperienceCard
            company="Rare Lab (USF College of Engineering)"
            timeline="May 2025 - July 2025"
            position="ML Researcher and Software Developer"
            location="Tampa, FL"
            descriptionPoints={[
              "Fine-tuned Gemini 2.5 Flash and LLaMA2 models for multimodal elderly-assistive robot, enabling end-to-end audio-to-text interaction with a custom pipeline and achieving a 35% increase in task success rate in user trials.",
              "Led speech-to-text integration and inference optimization on Raspberry Pi, reducing end-to-end response time to <150ms and achieving 95%+ speech synthesis accuracy, enabling real-time conversational interaction on edge hardware.",
              "Engineered custom hardware station using AutoCAD 3D modeling to seamlessly integrate tablet and Misty robot systems, improving system stability and reducing setup time by 70% for user interactions."
            ]}
          />
          <ExperienceCard
            company="University of Turku"
            timeline="March 2023 - Aug 2023"
            position="Research Assistant"
            location="Turku, Finland"
            descriptionPoints={[
              "Researched on intersection between Information Overload and Hyperchondriac, drafting documents based on the findings.",
            ]}
          />
        </div>

        {/* Club Involvement */}
        <div>
          <h2 className="font-bold font-mono mt-16 mb-8 text-2xl text-center text-black dark:text-white">
            Club Involvement
          </h2>
          
          <div className="flex flex-col gap-7">
            <ExperienceCard
              company="Google Developer Group"
              timeline="April 2025 - Present"
              position="Technical Lead"
              location="University of South Florida"
              descriptionPoints={[
                "Built the principal website for GDSC featuring member registration portal, project showcase gallery, event calendar integration, and sponsor dashboard, using CSS and JavaScript.",
                "Developed backend infrastructure for hackathon website using JavaScript and Firebase, implementing participant check-in system with categorization, real-time registration management.",
                "Led workshops on Data Scraping and Git tutorials as part of the Data Science and Cybersecurity team."
              ]}
            />
            <ExperienceCard
              company="HackUSF"
              timeline="March 2025 - April 2025"
              position="Hackathon Organizer"
              location="University of South Florida"
              descriptionPoints={[
                "Managed logistics for 300+ participant hackathon, managing venue setup, transportation coordination, and equipment distribution while ensuring seamless event execution and participant satisfaction.",
                "Led and coordinated a team of 10 volunteers across multiple operational areas including participant registration, wayfinding, and technical session support to maintain smooth hackathon flow.",
                "Facilitated partnerships with sponsors, mentors, and university departments, ensuring stakeholder alignment and comprehensive support for participant needs throughout the event."
              ]}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

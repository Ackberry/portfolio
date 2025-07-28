'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Github, Linkedin } from "lucide-react";
import { Sun, Moon, FileText } from 'lucide-react'
import Skills from "./components/skills"
import ThemeToggle from './components/themetoggle'
import ProjectCard from './components/ProjectCard'
import ExperienceCard from './components/ExperienceCard'

export default function Home() {
  return (
    <div>
        <header className="fixed top-0 left-0 w-full bg-lightbg/30 dark:bg-black/20 backdrop-blur-md  z-50 shadow-sm">
          <nav className="flex flex-wrap justify-between gap-6 sm:gap-12 p-4 font-medium text-sm sm:text-base text-black dark:text-white">
          
            {/*Left Spacing */}
            <div className="flex-1">
              <ThemeToggle/>
            </div>
            
            {/*Mid Spacing */}
            <div className="flex gap-6 sm:gap-12">
                <a href="#home" className="hover:text-rose-600 dark:hover:text-green-200 transition-colors font-mono">Home</a>
                <a href="#experience" className="hover:text-blue-600 dark:hover:text-amber-700 transition-colors font-mono">Experience</a>
                <a href="#projects" className="hover:text-orange-600 dark:hover:text-indigo-700 transition-colors font-mono">Projects</a>
                <a href="#skills" className="hover:text-red-600 dark:hover:text-slate-350 transition-colors font-mono">Skills</a>
            </div>
            
            {/*Far right */}
            <div className="flex gap-4 flex-1 justify-end">
            <a
            href="https://drive.google.com/file/d/1SuDcvyeogC_O4cbKGdj6gbP6WBmV2jWk/view"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="FileText"
            className="hover:text-green-600 dark:hover:text-pink-400 transition"
              >
            <FileText size={20} />
                </a>
            
              <a
            href="https://github.com/ackberry"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-pink-600 dark:hover:text-green-400 transition"
              >
            <Github size={20} />
              </a>
              <a
            href="https://linkedin.com/in/deep-akbari"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-green-600 dark:hover:text-pink-400 transition"
              >
            <Linkedin size={20} />
                </a>

            </div>
            
          </nav>
          <div className="flex items-center gap-4">

        </div>

        </header>

    <main className="font-sans">
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center bg-white dark:bg-black text-black dark:text-white px-4 sm:px-8"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I’m <span className="text-blue-600 dark:text-blue-400">Deep Akbari.</span>
        </h1>

        <h2 className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6">
          Aspiring Software Engineer
        </h2>

        <p className="max-w-2xl text-md sm:text-lg text-gray-600 dark:text-gray-400 mb-8 font-mono">
          I’m passionate about building cool projects with AI, or any new technology that interests
          me. Currently, I am building <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-blue-600">[**HIDDEN**]</a>
        </p>

        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
        >
          View My Work
        </a>
      </section>


      <div className="h-16 w-full bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900" />
      
      <section id="experience" className="min-h-screen p-8 flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        <h2 className="text 3x1 font-oxygen mb4"></h2>
          <div className='text-left w-full px-4 backdrop-blur-md flex flex-col gap-7'>
          <ExperienceCard
          company="CacheAi"
          timeline="July 2025 - Present"
          position="Software Engineer Intern"
          location="Remote"
          descriptionPoints={[
            "Building a scoring system to rank candidates based on their profile using LLM. Just began!",
          ]}
        />
          <ExperienceCard
          company="Rare Lab (USF College of Engineering)"
          timeline="May 2025 - Present"
          position="ML Researcher and Software Developer"
          location="Tampa, FL"
          descriptionPoints={[
            "Fine-tuned Llama2 model for context-aware storytelling on Misty robot, achieving 30% increase in user engagement and 50% reduction in response latency through optimized speech-to-text integration and algorithm improvements.",
            "Developed a pipeline integrating a local Text-to-Speech (TTS) API with Gemini and a downstream Speech-to-Text (STT) API, enabling audio-text-audio conversion with ~5s latency",
            "Deployed neural text-to-speech system on Raspberry Pi, achieving 90% synthesis accuracy and 150ms average response time for edge computing applications."
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
        {/*From here its club experience and all */}
          <h2 className='text-bold flex-center font-mono mt-10 mb-2 text-xl'>Club Involvement</h2>
          <ExperienceCard
          company="Google Developer Student Club"
          timeline="April 2025 - Present"
          position="Techincal Lead"
          location="University of South Florida"
          descriptionPoints={[
            "Built the principal website for GDSC featuring member registration portal, project showcase gallery, event calendar integration, and sponsor dashboard, using CSS and JavaScript.",
            "Developed backend infrastructure for hackathon website using JavaScript and Firebase, implementing participant check-in system with categorization, real-time registration management.",
            "Led workshops on Data Scraping and Git tutorials as part of the Data Science and Cybersecurity team."
             ]}
          />
          <div className='mb-5'></div>
          <ExperienceCard
          company="HackUSF "
          timeline="March 2025 - April 2025"
          position="Hackathon Organizer"
          location="University of South Florida"
          descriptionPoints={[
            "Managed logistics for 300+ participant hackathon, managing venue setup, transportation coordination, and equipment distribution while ensuring seamless event execution and participant satisfaction.",
            "Led and coordinated a team of 10 volunteers across multiple operational areas including participant registration, wayfinding, and technical session support to maintain smooth hackathon flow.",
            "Facilitated partnerships with sponsors, mentors, and university departments, ensuring stakeholder alignment and comprehensive support for participant needs throughout the event."
             ]}
        />

      </section>

      <div className="h-16 w-full bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black" />
      
        <section id="projects" className="min-h-screen flex flex-col justify-center items-center text-center bg-white dark:bg-black text-black dark:text-white px-4 sm:px-8">
        <h2 className="text 3x1 font-oxygen mb4"></h2>
          <div className="text-left w-full px-4 backdrop-blur-md flex flex-col gap-7">
            <ProjectCard
              title="Portfolio Website"
              description="clean and minimal portfolio website designed in React and Nextjs to showcase my portfolio"
              githubLink="https://github.com/ackberry/portfolio"
              liveLink="https://ackberry.club"
              skills={['React', 'Tailwind', 'Typescript', 'Vercel']}
              features={['built a minimal portfolio website to showcase whatever i do.', 'react + tailwind frontend', 'next.js backend']}
            />
            <ProjectCard
              title="full stack RAG chatbot"
              description="a bot that uses r/usf's reddit data to answer your queries"
              githubLink="https://github.com/ackberry/askabull"
              liveLink='https://askabull.onrender.com/'
              skills={['Python', 'Typescript', 'Node', 'React', 'Supabase', 'Gemini API']}
              features={["Architected and deployed an AI-powered chatbot system that processes 1,000+ Reddit posts daily, achieving 95% query accuracy through ChromaDB vector embeddings and reducing response time by 70%.", 'Built a full-stack web application using a React/TypeScript frontend and Node.js backend, serving 50+ concurrent users with 96% uptime and sub-200ms API response times.', 'Integrated Google Cloud AI Platform with a Python-based data pipeline to automate content scraping and embedding generation, improving data processing efficiency by 85% and scaling to handle 50K+ posts.']}
            />
                        <ProjectCard
              title="backtest stock price prediciton engine"
              description="a program that uses existing trading algorithms and stock data to predict prices"
              githubLink="https://github.com/ackberry/backtestengine"
              skills={['Python', 'Jupyter', 'AlphaVantage', 'YahooAPI']}
              features={['Automated data preprocessing pipeline reduced analysis time by 65%, handling normalization, missing value treatment, andvisualizations.', 'Developed a modular backtesting engine in Python using Pandas and NumPy to simulate trading strategies on over 10,000 rows of historical stock data, enabling reproducible performance testing.', 'Designed an extensible architecture leveraging NumPy and modular functions, allowing future integration of live market APIs for real-time strategy validation.']}
            />
                        <ProjectCard
              title="smart calorie tracker"
              description="a hackathon project targeting the post apocalyptic track where users can estimate calorie intake based on location and food availability."
              githubLink="https://github.com/ackberry/"
              skills={['Python', 'React', 'Node', 'Tailwind', 'Express', 'Gemini API', 'Mapbox API']}
              features={['Developed a custom data scraper that processed over 450,000 FDA food entries, filtering and condensing the dataset to 3,000 key survival foods, improving database performance by over 99%.', 'Implemented React and Node.js, integrating Google Gemini API for dynamic AI responses and Mapbox for location-based user visualization on a post-apocalyptic Earth model', 'Rapidly prototyped and iterated a production-ready calorie tracker in a 24 hour hackathon, emphasizing scalability, data efficiency, and UX.']}/>

                        <ProjectCard
              title="crypto news bot"
              description="a telegram bot that delivers real time crypto prices and news"
              githubLink="https://github.com/Ackberry/Co1nCraze"
              skills={['Python', 'Linode', 'Firebase', 'CoinMarketCap API', 'Telegram API']}
              features={['Developed an automatic bot using Python, Coinmarketcap and Telegram API to deliver information about the current Crypto market to its users.', 'Features modular design, with separate handlers for commands like /start, /news, and /price, making it easy to maintain and improve', 'having 20+ concurrent users monthly' ]}
            />
          </div>

        </section>

      
       <div className="h-16 w-full bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900" />


        <section id="skills" className="min-h-screen p-8 flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        
        <div className="max-w-xl text-center">
        <Skills/> { /*To change the text, go to skills.tsx */}
        </div>
      </section>


    </main>
    </div>
  )
}
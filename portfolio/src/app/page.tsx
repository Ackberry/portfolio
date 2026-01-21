'use client'

import { Github, Linkedin, FileText, Home as HomeIcon, Briefcase, FolderKanban, Code, User, SunMoon } from "lucide-react";
import SkillsCarousels from "./components/SkillsCarousel"
import ProjectCard from './components/ProjectCard'
import ExperienceCard from './components/ExperienceCard'
import InfiniteGrid from './components/InfiniteGrid'
import { Highlighter } from './components/Highlighter'
import { Dock, DockIcon } from './components/Dock'
import { useTheme } from 'next-themes'
import { useEffect, useState, useRef, useMemo } from 'react'
import { AISummaryFooter } from 'ai-summary-footer'
import 'ai-summary-footer/styles.css'
import { gsap } from 'gsap'

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
  const [clickedPhotoRect, setClickedPhotoRect] = useState<DOMRect | null>(null)
  const photoContainerRef = useRef<HTMLDivElement>(null)
  const modalBackdropRef = useRef<HTMLDivElement>(null)
  const modalImageRef = useRef<HTMLImageElement>(null)
  const photoRefs = useRef<(HTMLDivElement | null)[]>([])

  const photos = useMemo(() => [
    '/photos/1.jpeg',
    '/photos/2.jpeg',
    '/photos/3.jpeg',
    '/photos/4.jpeg'
  ], [])

  // Fixed overlap with spacing - cards fan out diagonally
  const photoStyles = useMemo(() => [
    { rotation: -6, x: -50, y: -50, zIndex: 1 },
    { rotation: 4, x: -15, y: -15, zIndex: 2 },
    { rotation: -5, x: 15, y: 15, zIndex: 3 },
    { rotation: 7, x: 50, y: 50, zIndex: 4 }
  ], [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (photoContainerRef.current && mounted) {
      const photoElements = photoContainerRef.current.children
      gsap.fromTo(
        photoElements,
        {
          opacity: 0,
          scale: 0.5,
          rotation: 0
        },
        {
          opacity: 1,
          scale: 1,
          rotation: (index) => photoStyles[index].rotation,
          x: (index) => photoStyles[index].x,
          y: (index) => photoStyles[index].y,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)"
        }
      )
    }
  }, [mounted, photoStyles])

  const handlePhotoClick = (photo: string, index: number, event: React.MouseEvent<HTMLDivElement>) => {
    const clickedElement = event.currentTarget
    const rect = clickedElement.getBoundingClientRect()
    setClickedPhotoRect(rect)
    setSelectedPhoto(photo)
  }

  const closePhotoModal = () => {
    if (modalBackdropRef.current && modalImageRef.current && clickedPhotoRect) {
      const photoIndex = photos.indexOf(selectedPhoto!)
      const originalPhoto = photoRefs.current[photoIndex]
      
      if (originalPhoto) {
        const rect = originalPhoto.getBoundingClientRect()
        const finalRect = modalImageRef.current.getBoundingClientRect()
        
        // Calculate center positions
        const startX = rect.left + rect.width / 2
        const startY = rect.top + rect.height / 2
        const endX = finalRect.left + finalRect.width / 2
        const endY = finalRect.top + finalRect.height / 2
        
        // Calculate scale difference
        const scaleX = rect.width / finalRect.width
        const scaleY = rect.height / finalRect.height
        
        // Animate back to original position
        gsap.to(modalImageRef.current, {
          x: startX - endX,
          y: startY - endY,
          scaleX: scaleX,
          scaleY: scaleY,
          rotation: photoStyles[photoIndex].rotation,
          duration: 0.4,
          ease: "power2.inOut"
        })
      }
      
      // Animate out
      gsap.to([modalBackdropRef.current, modalImageRef.current], {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          if (modalImageRef.current) {
            gsap.set(modalImageRef.current, { x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0 })
          }
          setSelectedPhoto(null)
          setClickedPhotoRect(null)
        }
      })
    } else {
      setSelectedPhoto(null)
      setClickedPhotoRect(null)
    }
  }

  // Animate modal when photo is selected
  useEffect(() => {
    if (selectedPhoto && clickedPhotoRect && modalBackdropRef.current && modalImageRef.current) {
      const photoIndex = photos.indexOf(selectedPhoto)
      
      // Get final position (center of screen)
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const finalX = windowWidth / 2
      const finalY = windowHeight / 2
      
      // Get initial position (clicked photo's center)
      const startX = clickedPhotoRect.left + clickedPhotoRect.width / 2
      const startY = clickedPhotoRect.top + clickedPhotoRect.height / 2
      
      // Calculate transform needed
      const deltaX = finalX - startX
      const deltaY = finalY - startY
      
      // Calculate scale difference
      const finalRect = modalImageRef.current.getBoundingClientRect()
      const scaleX = clickedPhotoRect.width / finalRect.width
      const scaleY = clickedPhotoRect.height / finalRect.height
      
      // Set initial state - position at clicked photo location
      gsap.set(modalBackdropRef.current, { opacity: 0 })
      gsap.set(modalImageRef.current, {
        opacity: 0,
        x: -deltaX,
        y: -deltaY,
        scaleX: scaleX,
        scaleY: scaleY,
        rotation: photoStyles[photoIndex].rotation,
        transformOrigin: "center center"
      })

      // Animate backdrop first
      gsap.to(modalBackdropRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      })
      
      // Animate image from original position to center
      gsap.to(modalImageRef.current, {
        opacity: 1,
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        duration: 0.6,
        ease: "power3.out"
      })
    }
  }, [selectedPhoto, clickedPhotoRect, photos, photoStyles])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const resumeUrl = "https://drive.google.com/file/d/1JlWgw0K2ogXIki7z_fLEYhldYxI4d1wj/view?usp=drive_link"

  return (
    <div className="relative min-h-screen">
        <InfiniteGrid />

    <main className="font-sans relative z-10 pb-24">
      <section
        id="home"
        className="min-h-screen flex flex-row justify-center items-center px-4 sm:px-8 relative gap-12"
      >
        {/* Photos Section - Left Side - Overlapping Cards */}
        <div 
          ref={photoContainerRef}
          className="hidden lg:flex relative items-center justify-center"
          style={{ width: '420px', height: '420px' }}
        >
          {photos.map((src, index) => (
            <div
              key={src}
              ref={(el) => {
                photoRefs.current[index] = el
              }}
              onClick={(e) => handlePhotoClick(src, index, e)}
              className="absolute cursor-pointer rounded-lg overflow-hidden shadow-2xl transition-transform hover:scale-110 hover:z-50"
              style={{
                width: '200px',
                height: '250px',
                transform: `rotate(${photoStyles[index].rotation}deg) translate(${photoStyles[index].x}px, ${photoStyles[index].y}px)`,
                zIndex: photoStyles[index].zIndex,
              }}
            >
              <img
                src={src}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Text Content - Right Side */}
        <div className="flex flex-col justify-center items-center text-center bg-transparent text-black dark:text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Deep Akbari.</span>
          </h1>

          <h2 className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6">
            Aspiring Software Engineer
          </h2>

          <p className="max-w-2xl text-md sm:text-lg text-gray-600 dark:text-gray-400 mb-8 font-mono">
            I&apos;m passionate about building cool projects with AI, or any new technology that interests
            me. Currently, I am working on <a className="text-blue-600">this website</a>
          </p>

          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
          >
            View My Work
          </a>
        </div>
      </section>


      <div className="h-16 w-full bg-transparent" />
      
      <section id="experience" className="min-h-screen p-8 flex flex-col justify-center items-center bg-transparent text-black dark:text-white">
        <h2 className="text-4xl font-bold font-mono mb-12 text-center">Experience</h2>
          <div className='text-left w-full px-4 backdrop-blur-md flex flex-col gap-7'>
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
            "Led speech-to-text integration and inference optimization on Raspberry Pi, reducing end-to-end response time to ¡150ms and achieving 95%+ speech synthesis accuracy, enabling real-time conversational interaction on edge hardware.",
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
        {/*From here its club experience and all */}
          <h2 className='font-bold flex-center font-mono mt-10 mb-2 text-2xl'>Club Involvement</h2>
          <ExperienceCard
          company="Google Developer Group"
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

      <div className="h-16 w-full bg-transparent" />
      
        <section id="projects" className="min-h-screen flex flex-col justify-center items-center text-center bg-transparent text-black dark:text-white px-4 sm:px-8">
        <h2 className="text-4xl font-bold font-mono mb-12 text-center w-full">Projects</h2>
          <div className="text-left w-full px-4 backdrop-blur-md flex flex-col gap-7">
            <ProjectCard
              title="Spotify + Letterboxd clone"
              description="a fullstack app that combines letterboxd and spotify (the apps i cannot live without)"
              githubLink="https://github.com/ackberry/cinetune"
              liveLink="https://ackberry.club"
              skills={['Javascript', 'Express.js', 'Node.js', 'Firebase', 'SQL']}
              features={[' Built a full-stack movie and music logging platform with Node.js, Express, and PostgreSQL, integrating Spotify Web API and TMDb API for metadata sync. Added indexing and query optimization for fast search/filter across 500+ titles.', ' Built Express.js backend with REST APIs and PostgreSQL integration, ensuring scalable data persistence and eliminating 100% of duplicate entries with FK constraints.', 'Developed a responsive JavaScript frontend, optimized API calls for sub-200ms load times, and achieved 95%+ browser/device compatibility across 5 tested environments.']}
            />
            
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

      
       <div className="h-16 w-full bg-transparent" />


        <section id="skills" className="min-h-screen py-8 px-0 flex flex-col justify-center items-center bg-transparent text-black dark:text-white">
        
        <div className="w-full">
          <SkillsCarousels />
        </div>
      </section>

      <div className="h-16 w-full bg-transparent" />

      <section id="about" className="pt-8 pb-8 px-4 sm:px-8 flex flex-col items-center bg-transparent text-black dark:text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-mono mb-8">About Me</h2>
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="font-mono">
              19 yo, computer science sophomore, going to university of south florida (on a <Highlighter action="highlight">presidential scholarship</Highlighter> yay). i&apos;ve been getting more into programming recently and i do so by creating side projects to solve my daily problems :) here&apos;s a bit more about me - 
            </p>
          </div>
        </div>
      </section>

      <div className="h-20 w-full bg-transparent" />


      <section id="ai-summary" className="pt-8 pb-8 px-4 sm:px-8 flex flex-col justify-center items-center bg-transparent text-black dark:text-white">
        <div className="max-w-lg mx-auto w-full backdrop-blur-md rounded-2xl p-8 bg-transparent border border-white/20 dark:border-white/10">
          <AISummaryFooter
            companyName="Ackberry"
            companyUrl="https://ackberry.club"
            prompt="Tell me about {companyName} at {companyUrl}. What are their skills and projects?"
          />
        </div>
      </section>

    </main>

    {/* Dock Navigation */}
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-4 pointer-events-none">
      <Dock className="pointer-events-auto">
        <DockIcon onClick={() => scrollToSection('home')} title="home">
          <HomeIcon size={24} className="text-foreground" />
        </DockIcon>
        <DockIcon onClick={() => scrollToSection('experience')} title="experience">
          <Briefcase size={24} className="text-foreground" />
        </DockIcon>
        <DockIcon onClick={() => scrollToSection('projects')} title="projects">
          <FolderKanban size={24} className="text-foreground" />
        </DockIcon>
        <DockIcon onClick={() => scrollToSection('skills')} title="skills">
          <Code size={24} className="text-foreground" />
        </DockIcon>
        <DockIcon onClick={() => scrollToSection('about')} title="about">
          <User size={24} className="text-foreground" />
        </DockIcon>
        <div className="h-10 w-[1px] bg-gray-400 dark:bg-gray-600 flex-shrink-0 mx-1" />
        <DockIcon title="resume">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="flex items-center justify-center"
          >
            <FileText size={24} className="text-foreground" />
          </a>
        </DockIcon>
        <DockIcon title="github">
          <a
            href="https://github.com/ackberry"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center"
          >
            <Github size={24} className="text-foreground" />
          </a>
        </DockIcon>
        <DockIcon title="linkedIn">
          <a
            href="https://linkedin.com/in/deep-akbari"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center"
          >
            <Linkedin size={24} className="text-foreground" />
          </a>
        </DockIcon>
        <div className="h-10 w-[1px] bg-gray-400 dark:bg-gray-600 flex-shrink-0 mx-1" />
        {mounted && (
          <DockIcon onClick={toggleTheme} title="theme">
            <SunMoon size={24} className="text-foreground" />
          </DockIcon>
        )}
      </Dock>
    </div>

    {/* Photo Modal */}
    {selectedPhoto && (
      <div
        ref={modalBackdropRef}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={closePhotoModal}
      >
        <div className="relative max-w-5xl max-h-[90vh] p-4">
          <button
            onClick={closePhotoModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl font-bold z-10 transition-opacity hover:opacity-70"
            aria-label="Close"
          >
            ×
          </button>
          <img
            ref={modalImageRef}
            src={selectedPhoto}
            alt="Full size photo"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    )}
    </div>
  )
}
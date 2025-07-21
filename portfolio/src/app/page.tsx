'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Github, Linkedin } from "lucide-react";
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  )
}

export default function Home() {
  return (
    <div>
        <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 shadow-sm">
          <nav className="flex justify-between gap-6 sm:gap-12 p-4 font-medium text-sm sm:text-base text-black dark:text-white">
          
            {/*Left Spacing */}
            <div className="flex-1">
              <ThemeToggle/>
            </div>
            
            {/*Mid Spacing */}
            <div className="flex gap-6 sm:gap-12">
                <a href="#home" className="hover:text-rose-600 dark:hover:text-green-200 transition-colors">Home</a>
                <a href="#experience" className="hover:text-blue-600 dark:hover:text-amber-700 transition-colors">Experience</a>
                <a href="#projects" className="hover:text-orange-600 dark:hover:text-indigo-700 transition-colors">Projects</a>
                <a href="#skills" className="hover:text-red-600 dark:hover:text-slate-350 transition-colors">Skills</a>
            </div>
            
            {/*Far right */}
            <div className="flex gap-4 flex-1 justify-end">
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
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Deep Akbari.</span>
        </h1>

        <h2 className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6">
          Aspiring Software Engineer
        </h2>

        <p className="max-w-2xl text-md sm:text-lg text-gray-600 dark:text-gray-400 mb-8">
          I'm passionate about building cool projects with AI, or any new technology that interests
          me. Currently, I am building <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-blue-600">[**HIDDEN**]</a>
        </p>

        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
        >
          View My Work
        </a>
      </section>


      <div className="h-16 w-full bg-gradient-to-b from-white to-gray-900 dark:from-black dark:to-gray-900" />
      
      <section id="experience" className="min-h-screen p-8 flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        <h2 className="text 3x1 font-semibold mb4">Experience</h2>
        <p className="max-w-xl text-center">
          Professional background, internships type shit
        </p>
      </section>

      <div className="h-16 w-full bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black" />
      
        <section id="projects" className="min-h-screen flex flex-col justify-center items-center text-center bg-white dark:bg-black text-black dark:text-white px-4 sm:px-8">
        <h2 className="text 3x1 font-semibold mb4">Projects</h2>
        <p className="max-w-xl text-center">
          List and link to projects you've worked on, with short descriptions.
        </p>
        </section>

      
       <div className="h-16 w-full bg-gradient-to-b from-white to-gray-900 dark:from-black dark:to-gray-900" />


        <section id="skills" className="min-h-screen p-8 flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        <h2 className="text 3x1 font-semibold mb4">Skills</h2>
        <p className="max-w-xl text-center">
          Js, ts, type shit
        </p>
      </section>


    </main>
    </div>
  )
}
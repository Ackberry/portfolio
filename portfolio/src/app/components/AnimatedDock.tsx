'use client'

import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { Github, Linkedin, FileText, Home as HomeIcon, Briefcase, FolderKanban, Code } from "lucide-react"
import { Dock, DockIcon } from "./Dock"
import ThemeToggle from "./themetoggle"

interface AnimatedDockProps {
  isLandingPage?: boolean
}

const resumeUrl = "https://drive.google.com/file/d/17wCBTWvhbFf48EGL6qAMcwvdgDcLgCJa/view?usp=sharing"

const navItems = [
  { icon: HomeIcon, path: '/home', title: 'home' },
  { icon: Briefcase, path: '/experience', title: 'experience' },
  { icon: FolderKanban, path: '/projects', title: 'projects' },
  { icon: Code, path: '/skills', title: 'skills' },
]

export default function AnimatedDock({ isLandingPage = false }: AnimatedDockProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  
  // Internal state to control dock position independently of pathname
  // This allows animation to complete smoothly before/during navigation
  const [dockPosition, setDockPosition] = useState<'center' | 'bottom'>(
    pathname === '/' ? 'center' : 'bottom'
  )
  
  const pendingNavigationRef = useRef<string | null>(null)
  const isAnimatingRef = useRef(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Sync dock position with pathname when navigating between non-landing pages
  // or when returning to landing page
  useEffect(() => {
    if (pathname === '/') {
      setDockPosition('center')
    } else if (!isAnimatingRef.current) {
      setDockPosition('bottom')
    }
  }, [pathname])

  const handleLandingNavClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault()
    
    // Animate first then navigate
    isAnimatingRef.current = true
    pendingNavigationRef.current = path
    setDockPosition('bottom')
    
    // Navigate after animation starts (slightly delayed for smooth transition)
    setTimeout(() => {
      router.push(path)
      isAnimatingRef.current = false
    }, 100)
  }

  const isCenter = dockPosition === 'center'
  const isOnLandingPage = pathname === '/'

  if (!mounted) return null

  return (
    <motion.div
      className="fixed z-50 flex justify-center pointer-events-none"
      initial={false}
      animate={{
        bottom: isCenter ? 'auto' : '16px',
        top: isCenter ? '50%' : 'auto',
        left: 0,
        right: 0,
        y: isCenter ? '-50%' : 0,
      }}
      transition={{
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      <motion.div
        className="pointer-events-auto"
        initial={false}
        animate={{
          scale: isCenter ? 1.15 : 1,
        }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        <Dock 
          iconSize={isCenter ? 44 : 40} 
          iconMagnification={isCenter ? 68 : 60} 
          iconDistance={isCenter ? 150 : 140}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.path
            
            // Use Link for instant navigation between pages, custom handler only for landing page
            if (isOnLandingPage) {
              return (
                <a 
                  key={item.path} 
                  href={item.path}
                  onClick={(e) => handleLandingNavClick(item.path, e)}
                >
                  <DockIcon
                    title={item.title}
                    className={isActive ? 'bg-blue-500/20 dark:bg-blue-400/20 rounded-full' : ''}
                  >
                    <item.icon 
                      size={isCenter ? 26 : 24} 
                      className={isActive ? 'text-blue-600 dark:text-blue-400' : 'text-foreground'} 
                    />
                  </DockIcon>
                </a>
              )
            }
            
            return (
              <Link key={item.path} href={item.path} prefetch={true}>
                <DockIcon
                  title={item.title}
                  className={isActive ? 'bg-blue-500/20 dark:bg-blue-400/20 rounded-full' : ''}
                >
                  <item.icon 
                    size={isCenter ? 26 : 24} 
                    className={isActive ? 'text-blue-600 dark:text-blue-400' : 'text-foreground'} 
                  />
                </DockIcon>
              </Link>
            )
          })}
          <div className={`${isCenter ? 'h-12' : 'h-10'} w-[1px] bg-gray-400 dark:bg-gray-600 flex-shrink-0 mx-1`} />
          <DockIcon title="resume">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="flex items-center justify-center"
            >
              <FileText size={isCenter ? 26 : 24} className="text-foreground" />
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
              <Github size={isCenter ? 26 : 24} className="text-foreground" />
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
              <Linkedin size={isCenter ? 26 : 24} className="text-foreground" />
            </a>
          </DockIcon>
          <div className={`${isCenter ? 'h-12' : 'h-10'} w-[1px] bg-gray-400 dark:bg-gray-600 flex-shrink-0 mx-1`} />
          <DockIcon title="theme">
            <ThemeToggle />
          </DockIcon>
        </Dock>
      </motion.div>
    </motion.div>
  )
}

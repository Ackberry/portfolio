'use client'

import React from 'react'
import { FileText, Github, Linkedin } from 'lucide-react'
import AnimatedDock from './AnimatedDock'
import { NavigationProvider } from './NavigationContext'

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <NavigationProvider>
      <div className="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-lg border border-white/10 bg-[#10151d]/85 p-2 backdrop-blur-md">
        <a
          href="https://drive.google.com/file/d/1vLOzzkUB3n7dGiUWVQCaS5sG_S5kKcMt/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-300 transition hover:bg-white/10 hover:text-white"
        >
          <FileText className="size-4" />
        </a>
        <a
          href="https://github.com/ackberry"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-300 transition hover:bg-white/10 hover:text-white"
        >
          <Github className="size-4" />
        </a>
        <a
          href="https://linkedin.com/in/deep-akbari"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-300 transition hover:bg-white/10 hover:text-white"
        >
          <Linkedin className="size-4" />
        </a>
      </div>
      {children}
      <AnimatedDock />
    </NavigationProvider>
  )
}

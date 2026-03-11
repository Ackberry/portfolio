'use client'

import React from 'react'
import { FileText, Github, Linkedin } from 'lucide-react'
import { PiFileText, PiGithubLogo, PiLinkedinLogo } from 'react-icons/pi'
import { usePathname } from 'next/navigation'
import { NavigationProvider } from './NavigationContext'

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname()
  const isHomepage = pathname === '/' || pathname === '/home'

  const ResumeIcon = isHomepage ? PiFileText : FileText
  const GithubIcon = isHomepage ? PiGithubLogo : Github
  const LinkedinIcon = isHomepage ? PiLinkedinLogo : Linkedin

  return (
    <NavigationProvider>
      <div className="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-lg border border-[#D6CFC4] bg-[#EDE7DC] p-2 shadow-sm">
        <a
          href="https://drive.google.com/file/d/1P19PRSh25ezrUMm2Xt-IuSucoQjaGj6K/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[#6B6560] transition hover:bg-[#D6CFC4] hover:text-[#1A1A1A]"
        >
          <ResumeIcon className="size-4" />
        </a>
        <a
          href="https://github.com/ackberry"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[#6B6560] transition hover:bg-[#D6CFC4] hover:text-[#1A1A1A]"
        >
          <GithubIcon className="size-4" />
        </a>
        <a
          href="https://linkedin.com/in/deep-akbari"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[#6B6560] transition hover:bg-[#D6CFC4] hover:text-[#1A1A1A]"
        >
          <LinkedinIcon className="size-4" />
        </a>
      </div>
      {children}
    </NavigationProvider>
  )
}

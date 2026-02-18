'use client'

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home as HomeIcon, FolderKanban, Code, Terminal } from "lucide-react"
import { Dock, DockIcon } from "./Dock"

const navItems = [
  { icon: HomeIcon, path: '/', title: 'home' },
  { icon: FolderKanban, path: '/projects', title: 'projects' },
  { icon: Code, path: '/skills', title: 'skills' },
  { icon: Terminal, path: 'https://terminal-portfolio-seven-green.vercel.app/', title: 'terminal', external: true },
]

export default function AnimatedDock() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto">
        <Dock 
          iconSize={40} 
          iconMagnification={60} 
          iconDistance={140}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.path
            
            if (item.external) {
              return (
                <a
                  key={item.title}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DockIcon
                    title={item.title}
                    className={isActive ? 'bg-blue-500/20 dark:bg-blue-400/20 rounded-full' : ''}
                  >
                    <item.icon 
                      size={24} 
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
                    size={24} 
                    className={isActive ? 'text-blue-600 dark:text-blue-400' : 'text-foreground'} 
                  />
                </DockIcon>
              </Link>
            )
          })}
        </Dock>
      </div>
    </div>
  )
}

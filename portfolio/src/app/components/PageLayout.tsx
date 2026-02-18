'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { FlickeringGrid } from './FlickeringGrid'
import { motion } from 'framer-motion'
import { useNavigationDirection } from './NavigationContext'

interface PageLayoutProps {
  children: React.ReactNode
  title?: string
}

export default function PageLayout({ children, title }: PageLayoutProps) {
  const { direction } = useNavigationDirection()
  const pathname = usePathname()
  
  // Determine initial X position based on direction
  // If going right (higher index), content comes from right (+)
  // If going left (lower index), content comes from left (-)
  const initialX = direction === 'right' ? 40 : direction === 'left' ? -40 : 0

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FlickeringGrid
        className="absolute inset-0 z-0 pointer-events-none"
        squareSize={4}
        gridGap={6}
        flickerChance={0.2}
        maxOpacity={0.2}
      />
      
      <motion.main 
        key={pathname}
        className="font-sans relative z-10 pb-24 pt-8"
        initial={{ opacity: 0, x: initialX }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        {title && (
          <motion.h1 
            className="text-4xl font-bold font-mono mb-12 text-center text-black dark:text-white pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            {title}
          </motion.h1>
        )}
        {children}
      </motion.main>
    </div>
  )
}

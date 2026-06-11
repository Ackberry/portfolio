'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useNavigationDirection } from './NavigationContext'

interface PageLayoutProps {
  children: React.ReactNode
  title?: string
}

export default function PageLayout({ children, title }: PageLayoutProps) {
  const { direction } = useNavigationDirection()
  const pathname = usePathname()

  const initialX = direction === 'right' ? 40 : direction === 'left' ? -40 : 0

  return (
    <div className="min-h-screen">
      <motion.main
        key={pathname}
        className="font-sans pb-24 pt-8"
        initial={{ opacity: 0, x: initialX }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        {title && (
          <motion.h1
            className="text-4xl font-bold font-mono mb-12 text-center text-[#1A1A1A] pt-8"
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

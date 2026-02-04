'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import AnimatedDock from './AnimatedDock'
import { NavigationProvider } from './NavigationContext'

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname()
  const isLandingPage = pathname === '/'

  return (
    <NavigationProvider>
      {children}
      <AnimatedDock isLandingPage={isLandingPage} />
    </NavigationProvider>
  )
}

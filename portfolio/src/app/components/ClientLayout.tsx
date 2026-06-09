'use client'

import React from 'react'
import { NavigationProvider } from './NavigationContext'

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <NavigationProvider>
      {children}
    </NavigationProvider>
  )
}

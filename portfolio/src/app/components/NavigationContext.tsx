'use client'

import React, { createContext, useContext, useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

// Define page order for determining direction
const pageOrder = ['/', '/home', '/projects', '/skills']

type Direction = 'left' | 'right' | 'none'

interface NavigationContextType {
  direction: Direction
}

const NavigationContext = createContext<NavigationContextType>({ direction: 'none' })

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const prevPathRef = useRef<string | null>(null)
  const [direction, setDirection] = useState<Direction>('none')

  useEffect(() => {
    if (prevPathRef.current !== null && prevPathRef.current !== pathname) {
      const prevIndex = pageOrder.indexOf(prevPathRef.current)
      const currentIndex = pageOrder.indexOf(pathname)
      
      if (prevIndex !== -1 && currentIndex !== -1) {
        // If moving to a higher index, we're going right
        // If moving to a lower index, we're going left
        setDirection(currentIndex > prevIndex ? 'right' : 'left')
      } else {
        setDirection('none')
      }
    }
    
    prevPathRef.current = pathname
  }, [pathname])

  return (
    <NavigationContext.Provider value={{ direction }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigationDirection() {
  return useContext(NavigationContext)
}

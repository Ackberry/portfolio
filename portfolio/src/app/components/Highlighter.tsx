"use client"

import { useEffect, useRef, useState } from "react"
import type React from "react"
import { useInView } from "framer-motion"
import { annotate } from "rough-notation"
import { type RoughAnnotation } from "rough-notation/lib/model"
import { useTheme } from "next-themes"

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket"

interface HighlighterProps {
  children: React.ReactNode
  action?: AnnotationAction
  strokeWidth?: number
  animationDuration?: number
  iterations?: number
  padding?: number
  multiline?: boolean
  isView?: boolean
}

export function Highlighter({
  children,
  action = "highlight",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null)
  const annotationRef = useRef<RoughAnnotation | null>(null)
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%",
  })

  // If isView is false, always show. If isView is true, wait for inView
  const shouldShow = !isView || isInView

  // Determine highlight color based on theme only - no color prop allowed
  const highlightColor = mounted && (resolvedTheme === 'dark' || (resolvedTheme === 'system' && theme === 'dark'))
    ? "#fee9be" // Lighter yellow for dark mode
    : "#bfdbfe" // Light blue for light mode

  useEffect(() => {
    if (!shouldShow || !mounted) return

    const element = elementRef.current
    if (!element) return

    // Remove any existing annotation first
    if (annotationRef.current) {
      annotationRef.current.hide()
      annotationRef.current.remove()
      annotationRef.current = null
    }

    const annotationConfig = {
      type: action,
      color: highlightColor,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline,
    }

    const annotation = annotate(element, annotationConfig)

    annotationRef.current = annotation
    annotationRef.current.show()

    const resizeObserver = new ResizeObserver(() => {
      if (annotationRef.current) {
        annotationRef.current.hide()
        annotationRef.current.show()
      }
    })

    resizeObserver.observe(element)
    resizeObserver.observe(document.body)

    return () => {
      if (annotationRef.current) {
        annotationRef.current.hide()
        annotationRef.current.remove()
        annotationRef.current = null
      }
      resizeObserver.disconnect()
    }
  }, [
    shouldShow,
    action,
    highlightColor,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
    theme,
    resolvedTheme,
    mounted,
  ])

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  )
}

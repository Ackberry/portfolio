'use client'

import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import React, {
  type CSSProperties,
  type FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

interface FlickeringGridProps {
  squareSize?: number
  gridGap?: number
  flickerChance?: number
  color?: string
  maxOpacity?: number
  width?: number
  height?: number
  className?: string
}

const toRGBA = (color: string) => {
  if (color.startsWith('rgb')) return color
  if (color.startsWith('#')) {
    let hex = color.slice(1)
    if (hex.length === 3) {
      hex = hex
        .split('')
        .map((char) => char + char)
        .join('')
    }
    const bigint = parseInt(hex, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `rgb(${r}, ${g}, ${b})`
  }
  return color
}

const FlickeringGrid: FC<FlickeringGridProps> = memo(
  ({
    squareSize = 4,
    gridGap = 6,
    flickerChance = 0.3,
    color,
    maxOpacity = 0.3,
    className,
    width,
    height,
  }) => {
    const { theme } = useTheme()
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [isInView, setIsInView] = useState(false)

    const finalColor = useMemo(
      () => color || (theme === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'),
      [color, theme],
    )

    const setupCanvas = useCallback(() => {
      const canvas = canvasRef.current
      const container = containerRef.current
      if (!canvas || !container) return

      const dpr = window.devicePixelRatio || 1
      const rect = container.getBoundingClientRect()

      canvas.width = (width || rect.width) * dpr
      canvas.height = (height || rect.height) * dpr
      canvas.style.width = `${width || rect.width}px`
      canvas.style.height = `${height || rect.height}px`
      canvas.getContext('2d')?.scale(dpr, dpr)
    }, [width, height])

    useEffect(() => {
      setupCanvas()

      let animationFrameId: number
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const drawnSquares = new Set<string>()
      const resizeTimeout: ReturnType<typeof setTimeout> = setTimeout(() => {
        drawnSquares.clear()
      }, 100)

      const flicker = () => {
        if (!isInView) {
          animationFrameId = requestAnimationFrame(flicker)
          return
        }

        const effectiveWidth = width || canvas.clientWidth
        const effectiveHeight = height || canvas.clientHeight
        const totalSize = squareSize + gridGap
        const cols = Math.floor(effectiveWidth / totalSize)
        const rows = Math.floor(effectiveHeight / totalSize)

        ctx.clearRect(0, 0, effectiveWidth, effectiveHeight)

        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            const squareKey = `${i},${j}`
            if (Math.random() < flickerChance) {
              const opacity = Math.random() * maxOpacity
              ctx.fillStyle = `${toRGBA(finalColor).replace('rgb', 'rgba').replace(')', `, ${opacity})`)}`
              ctx.fillRect(i * totalSize, j * totalSize, squareSize, squareSize)
              drawnSquares.add(squareKey)
            } else if (drawnSquares.has(squareKey)) {
              const opacity = Math.random() * maxOpacity
              ctx.fillStyle = `${toRGBA(finalColor).replace('rgb', 'rgba').replace(')', `, ${opacity})`)}`
              ctx.fillRect(i * totalSize, j * totalSize, squareSize, squareSize)
            }
          }
        }

        animationFrameId = requestAnimationFrame(flicker)
      }

      flicker()

      const resizeObserver = new ResizeObserver(() => {
        setupCanvas()
        drawnSquares.clear()
      })

      if (containerRef.current) {
        resizeObserver.observe(containerRef.current)
      }

      return () => {
        cancelAnimationFrame(animationFrameId)
        clearTimeout(resizeTimeout)
        resizeObserver.disconnect()
      }
    }, [
      setupCanvas,
      squareSize,
      gridGap,
      flickerChance,
      maxOpacity,
      finalColor,
      width,
      height,
      isInView,
    ])

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting)
        },
        { threshold: 0 },
      )

      if (containerRef.current) {
        observer.observe(containerRef.current)
      }

      return () => {
        observer.disconnect()
      }
    }, [])

    return (
      <div
        ref={containerRef}
        className={cn(
          'h-full w-full overflow-hidden [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]',
          className,
        )}
      >
        <canvas
          ref={canvasRef}
          className="h-full w-full"
          style={
            {
              width: width || '100%',
              height: height || '100%',
            } as CSSProperties
          }
        />
      </div>
    )
  },
)

FlickeringGrid.displayName = 'FlickeringGrid'

export { FlickeringGrid }

'use client'

import { useLayoutEffect, useRef, useState } from 'react'

const INTRO_DURATION = 4800
const MAX_TARGETS = 24
const TRAVEL_EASING = 'cubic-bezier(.45,0,.2,1)'
const REVEAL_EASING = 'cubic-bezier(.22,1,.36,1)'
const SESSION_KEY = 'portfolio-swarm-seen-v1'
const ELIGIBLE = '(min-width: 900px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
const CREW = [
  ['layout', '#f5f5f5'], ['type', '#d4d4d4'], ['links', '#e5e5e5'],
  ['details', '#bdbdbd'], ['work', '#ededed'], ['open source', '#cccccc'],
  ['spacing', '#b5b5b5'], ['finish', '#dedede'],
]

/** A choreographed reveal of the real DOM; no snapshots or cloned links. */
export default function SwarmIntro() {
  const layer = useRef<HTMLDivElement>(null)
  const finish = useRef<() => void>(() => {})
  const shouldAutoplay = useRef<boolean | null>(null)
  const [run, setRun] = useState(0)
  const [active, setActive] = useState(false)

  useLayoutEffect(() => {
    const media = window.matchMedia(ELIGIBLE)
    if (!media.matches) return
    try {
      if (shouldAutoplay.current === null) shouldAutoplay.current = !sessionStorage.getItem(SESSION_KEY)
      if (!run && !shouldAutoplay.current) return
    } catch { /* Storage may be unavailable; the intro can still run. */ }

    const root = layer.current?.closest('main')
    if (!root || !layer.current) return
    const animations: Animation[] = []
    const listeners = new AbortController()
    const cancelAnimations = () => animations.splice(0).forEach(animation => animation.cancel())
    let stopped = false
    let timeout: ReturnType<typeof setTimeout>
    const stop = () => {
      if (stopped) return
      stopped = true
      clearTimeout(timeout)
      listeners.abort()
      cancelAnimations()
      setActive(false)
    }
    finish.current = stop
    setActive(true)
    try { sessionStorage.setItem(SESSION_KEY, '1') } catch { /* Optional. */ }

    // Only animate visible elements, and never select both a parent and its child.
    const targets = Array.from(root.querySelectorAll<HTMLElement>(
      '.mini-nav-inner, h1, .mini-line, .mini-actions > *, .mini-block > h2, .mini-block > p, .mini-block > div > .mini-list > li, .mini-block > .mini-list > li, .mini-text-link'
    )).filter(el => {
      const rect = el.getBoundingClientRect()
      return rect.width > 0 && rect.top < innerHeight - 30 && rect.bottom > 0
    }).slice(0, MAX_TARGETS)
    const animate = (el: Element, frames: Keyframe[], options: KeyframeAnimationOptions) => {
      const animation = el.animate(frames, options)
      animations.push(animation)
      return animation
    }
    // Hold content before paint while fonts settle. Cancelled on every exit path.
    try {
      targets.forEach(el => animate(el, [{ opacity: 0 }, { opacity: 0 }], { duration: 6000, fill: 'both' }))
    } catch {
      stop()
      return
    }
    timeout = setTimeout(stop, 5800)

    const start = async () => {
      await Promise.race([document.fonts.ready, new Promise(resolve => setTimeout(resolve, 450))])
      if (stopped) return
      cancelAnimations()
      const cursors = layer.current!.querySelectorAll<HTMLElement>('.swarm-cursor')
      const frames = layer.current!.querySelectorAll<HTMLElement>('.swarm-frame')
      const endTimes = Array(CREW.length).fill(330) as number[]
      // Each cursor arrives beside its first assignment, without a central pile-up.
      const positions = CREW.map((_, i) => {
        const rect = targets[i]?.getBoundingClientRect()
        return { x: Math.max(24, (rect?.left ?? 40) - 24), y: Math.max(12, (rect?.top ?? 80) - 12) }
      })
      const paths: Keyframe[][] = positions.map(p => [
        { transform: `translate(${p.x - 18}px, ${p.y + 8}px)`, opacity: 0, offset: 0, easing: TRAVEL_EASING },
        { transform: `translate(${p.x}px, ${p.y}px)`, opacity: 1, offset: 0.05 },
      ])
      targets.forEach((el, index) => {
        const crew = index % CREW.length
        const r = el.getBoundingClientRect()
        const heading = el.tagName === 'H1' || el.classList.contains('mini-line')
        const duration = heading ? 1000 : 620
        const revealEasing = heading ? 'steps(18, end)' : REVEAL_EASING
        const endY = heading ? r.top + r.height * .7 : r.bottom
        const delay = Math.max(650 + index * 105, endTimes[crew] + 320)
        const end = delay + duration
        endTimes[crew] = end
        animate(el, [
          { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
          { clipPath: 'inset(0 100% 0 0)', opacity: 1, offset: 0.02 },
          { clipPath: 'inset(0 0% 0 0)', opacity: 1 },
        ], { duration, delay, fill: 'both', easing: revealEasing })
        const path = paths[crew]
        const prev = positions[crew]
        path.push(
          { transform: `translate(${prev.x}px, ${prev.y}px)`, opacity: 1, offset: (delay - 280) / INTRO_DURATION, easing: TRAVEL_EASING },
          { transform: `translate(${r.left}px, ${r.top}px)`, opacity: 1, offset: delay / INTRO_DURATION, easing: revealEasing },
          { transform: `translate(${r.right}px, ${endY}px)`, opacity: 1, offset: end / INTRO_DURATION },
        )
        positions[crew] = { x: r.right, y: endY }
        // One outline per task, positioned independently of the page layout.
        const frame = frames[index]
        if (frame) {
          Object.assign(frame.style, { left: `${r.left}px`, top: `${r.top}px`, width: `${r.width}px`, height: `${r.height}px`, color: CREW[crew][1] })
          animate(frame, [
            { opacity: 0, clipPath: 'inset(0 100% 100% 0)' },
            { opacity: .28, clipPath: 'inset(0 0 0 0)', offset: .65 },
            { opacity: 0, clipPath: 'inset(0 0 0 0)' },
          ], { duration: duration + 200, delay, fill: 'both' })
        }
      })
      paths.forEach((path, i) => {
        const p = positions[i]
        path.push(
          { transform: `translate(${p.x}px, ${p.y}px)`, opacity: 1, offset: .88, easing: TRAVEL_EASING },
          { transform: `translate(${p.x + 12}px, ${p.y - 6}px)`, opacity: 0, offset: 1 },
        )
        animate(cursors[i], path, { duration: INTRO_DURATION, fill: 'both', easing: 'linear' })
      })
      const bg = root.querySelector('.mini-bg')
      if (bg) animate(bg, [{ opacity: 0 }, { opacity: 1 }], { duration: 1800, fill: 'both' })
      clearTimeout(timeout)
      timeout = setTimeout(stop, INTRO_DURATION)
    }
    void start().catch(stop)
    const keydown = (event: KeyboardEvent) => { if (event.key === 'Escape' || event.key === 'Tab') stop() }
    const visibility = () => { if (document.hidden) stop() }
    const options = { signal: listeners.signal }
    window.addEventListener('keydown', keydown, options)
    window.addEventListener('resize', stop, options)
    window.addEventListener('scroll', stop, { ...options, passive: true })
    document.addEventListener('visibilitychange', visibility, options)
    media.addEventListener('change', stop, options)
    return stop
  }, [run])

  return (
    <>
      <div ref={layer} className="swarm-layer" aria-hidden="true" style={{ visibility: active ? 'visible' : 'hidden' }}>
        {Array.from({ length: MAX_TARGETS }, (_, i) => <i className="swarm-frame" key={i} />)}
        {CREW.map(([name, color]) => (
          <div key={name} className="swarm-cursor" style={{ color }}>
            <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
              <path d="M1 1L1 18L5.5 14L9 22L12 20.5L8.5 13L15 13L1 1Z" fill="#111" stroke="currentColor" strokeWidth="1.15" strokeLinejoin="round" />
            </svg>
            <span>{name}</span>
          </div>
        ))}
      </div>
      <div className={`swarm-controls${active ? ' is-active' : ''}`}>
        {active && <span className="swarm-status"><i />assembling the details</span>}
        <button type="button" onClick={() => active ? finish.current() : setRun(value => value + 1)}>
          {active ? 'Skip intro ↗' : 'Replay intro ↻'}
        </button>
      </div>
    </>
  )
}

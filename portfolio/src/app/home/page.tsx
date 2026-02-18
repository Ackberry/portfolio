'use client'

import { cn } from '@/lib/utils'
import { PanelLeft, Terminal } from 'lucide-react'
import { useState } from 'react'
import PortfolioFileTree from '../components/PortfolioFileTree'
import PageLayout from '../components/PageLayout'

export default function HomePage() {
  const [showExplorer, setShowExplorer] = useState(true)
  const [showTerminal, setShowTerminal] = useState(false)

  return (
    <PageLayout>
      {showExplorer && (
        <aside className="fixed inset-y-0 left-0 z-30 hidden w-[320px] lg:block">
          <PortfolioFileTree
            initialSelectedId="readme-markdown"
            variant="sidebar"
            className="h-full rounded-none border-y-0 border-l-0 border-r border-white/10 shadow-none"
          />
        </aside>
      )}

      <section
        className={cn(
          'mx-auto w-full px-4 sm:px-6 lg:pr-10',
          showExplorer ? 'lg:pl-[360px]' : 'lg:pl-8',
          showTerminal ? 'pb-72 lg:pb-80' : '',
        )}
      >
        <div className="fixed right-4 top-4 z-40 flex items-center gap-2 rounded-lg border border-white/10 bg-[#10151d]/85 p-2 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setShowExplorer((prev) => !prev)}
            aria-label="Toggle file tree"
            title="Toggle file tree"
            className={cn(
              'inline-flex h-8 w-8 items-center justify-center rounded-md transition',
              showExplorer
                ? 'bg-blue-500/20 text-blue-300'
                : 'bg-white/5 text-gray-300 hover:bg-white/10',
            )}
          >
            <PanelLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => setShowTerminal((prev) => !prev)}
            aria-label="Toggle terminal"
            title="Toggle terminal"
            className={cn(
              'inline-flex h-8 w-8 items-center justify-center rounded-md transition',
              showTerminal
                ? 'bg-emerald-500/20 text-emerald-300'
                : 'bg-white/5 text-gray-300 hover:bg-white/10',
            )}
          >
            <Terminal className="size-4" />
          </button>
        </div>

        {showExplorer && (
          <div className="h-[300px] lg:hidden">
            <PortfolioFileTree
              initialSelectedId="readme-markdown"
              variant="sidebar"
              className="h-full"
            />
          </div>
        )}

        <div className="mx-auto max-w-5xl py-4 lg:py-8">
          <article>
            <div className="space-y-8 px-6 py-8 sm:px-10 sm:py-10">
              <section className="space-y-4">
                <h1 className="text-4xl font-bold text-white sm:text-5xl">
                  Deep Akbari
                </h1>
                <p className="text-lg font-mono text-gray-300 sm:text-xl">
                  Software Engineer
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-blue-300">Introduction</h2>
                <p className="max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
                  Hi, I&apos;m Deep Akbari, an aspiring software engineer. I&apos;m
                  passionate about building cool projects with AI, or any new technology that
                  interests me. Currently, I am working on a reddit query api.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-blue-300">About Me</h2>
                <p className="max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
                  19 yo, computer science sophomore, going to university of south florida (on a
                  presidential scholarship yay). i&apos;ve been getting more into programming
                  recently and i do so by creating side projects to solve my daily problems :)
                </p>
              </section>
            </div>
          </article>
        </div>
      </section>

      <div
        className={cn(
          'fixed bottom-24 right-4 z-40 h-56 rounded-xl border border-white/10 bg-[#0b1017]/95 shadow-[0_16px_50px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-300',
          showExplorer ? 'lg:left-[336px]' : 'lg:left-4',
          showTerminal
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-6 opacity-0',
          'left-4',
        )}
      >
        <div className="flex h-9 items-center justify-between border-b border-white/10 px-3">
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.08em] text-gray-300">
            <Terminal className="size-3.5 text-emerald-300/90" />
            TERMINAL
          </div>
          <a
            href="https://terminal-portfolio-seven-green.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-300 hover:text-blue-200"
          >
            open full
          </a>
        </div>
        <div className="space-y-1 px-3 py-2 font-mono text-xs text-gray-300">
          <p>
            <span className="text-emerald-300">$</span> cat readme.markdown
          </p>
          <p className="text-gray-400">Deep Akbari · Software Engineer</p>
          <p>
            <span className="text-emerald-300">$</span> ls src/app
          </p>
          <p className="text-gray-400">home projects skills experience</p>
          <p>
            <span className="text-emerald-300">$</span> npm run dev
          </p>
          <p className="text-gray-400">ready - started server on http://localhost:3000</p>
        </div>
      </div>
    </PageLayout>
  )
}

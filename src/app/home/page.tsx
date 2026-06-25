'use client'

import type { ReactNode } from 'react'
import { ArrowUpRight, FileText, Github, Linkedin, Mail } from 'lucide-react'
import Dither from '../components/Dither'

const RESUME_URL = 'https://drive.google.com/file/d/1WtMNZXYFlkrV2QE2-d37_CSmXZcTJn_T/view?usp=sharing'
const GITHUB_URL = 'https://github.com/ackberry'
const LINKEDIN_URL = 'https://linkedin.com/in/deep-akbari'
const EMAIL = 'ackberrie@gmail.com'

const PROJECTS = [
  ['Alleaf', 'wearable ai for stress support', 'https://github.com/Gustavo-Galvao-e-Silva/Alleaf'],
  ['Aegis', 'space weather + edge telemetry dashboard', 'https://github.com/Ackberry/Aegis'],
  ['Talkio', 'sales conversation intelligence', 'https://github.com/Talkio2026/swamp-hacks'],
  ['Haraesume', 'resume tailoring agent', 'https://github.com/ackberry/haraesume'],
  ['Spotify MCP', 'natural-language spotify control', 'https://github.com/ackberry/spotify_mcp'],
] as const

function ExternalLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <a className="mini-link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <ArrowUpRight aria-hidden="true" />
    </a>
  )
}

export default function HomePage() {
  return (
    <main className="mini-site">
      <div className="mini-bg" aria-hidden="true">
        <Dither enableMouseInteraction waveColor={[0.4, 0.4, 0.4]} mouseRadius={0.8} colorNum={4} pixelSize={2} />
      </div>

      <section className="mini-shell" aria-labelledby="intro">
        <p className="mini-kicker">{'// deep akbari'}</p>
        <h1 id="intro">deep akbari</h1>
        <p className="mini-line">ai engineer intern @ fedcon. cs @ usf.</p>

        <nav className="mini-actions" aria-label="Links">
          <ExternalLink href={GITHUB_URL}><Github aria-hidden="true" />github</ExternalLink>
          <ExternalLink href={LINKEDIN_URL}><Linkedin aria-hidden="true" />linkedin</ExternalLink>
          <ExternalLink href={RESUME_URL}><FileText aria-hidden="true" />resume</ExternalLink>
          <a className="mini-link" href={`mailto:${EMAIL}`}>
            <Mail aria-hidden="true" />
            email
          </a>
        </nav>

        <div className="mini-grid">
          <section className="mini-block" aria-labelledby="now">
            <h2 id="now">now</h2>
            <p>building retrieval systems, backend tools, workflow agents, and full-stack apps.</p>
          </section>

          <section className="mini-block" aria-labelledby="work">
            <h2 id="work">work</h2>
            <ul className="mini-list">
              {PROJECTS.map(([name, description, link]) => (
                <li key={name}>
                  <ExternalLink href={link}>{name}</ExternalLink>
                  <span>{description}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </main>
  )
}

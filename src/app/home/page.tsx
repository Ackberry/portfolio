'use client'

import Link from 'next/link'
import { ArrowRight, FileText, Github, Linkedin, Mail } from 'lucide-react'
import Nav, { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '../components/Nav'
import Dither from '../components/Dither'
import ExternalLink from '../components/ExternalLink'
import ProjectList from '../components/ProjectList'
import { featuredProjects } from '../data/projects'

export default function HomePage() {
  return (
    <main className="mini-site">
      <div className="mini-bg" aria-hidden="true">
        <Dither enableMouseInteraction waveColor={[0.4, 0.4, 0.4]} mouseRadius={0.8} colorNum={4} pixelSize={2} />
      </div>

      <Nav />

      <section className="mini-shell" aria-labelledby="intro">
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
            <div>
              <ProjectList items={featuredProjects} />
              <Link className="mini-text-link" href="/projects">
                view all projects
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

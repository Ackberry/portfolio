'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Dither from '../components/Dither'
import Nav from '../components/Nav'
import ProjectList from '../components/ProjectList'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  return (
    <main className="mini-site mini-site-top">
      <div className="mini-bg" aria-hidden="true">
        <Dither enableMouseInteraction waveColor={[0.4, 0.4, 0.4]} mouseRadius={0.8} colorNum={4} pixelSize={2} />
      </div>

      <Nav />

      <section className="mini-shell" aria-labelledby="projects-title">
        <Link className="mini-back" href="/">
          <ArrowLeft aria-hidden="true" />
          back
        </Link>

        <div className="mini-page-head">
          <h1 id="projects-title">projects</h1>
        </div>

        <div className="mini-grid">
          <section className="mini-block" aria-label="All projects">
            <h2>all</h2>
            <ProjectList items={projects} />
          </section>
        </div>
      </section>
    </main>
  )
}

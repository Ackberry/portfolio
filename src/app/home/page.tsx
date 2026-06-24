'use client'

import type { ReactNode } from 'react'
import { useMemo, useState } from 'react'
import { ArrowUpRight, FileText, Github, Linkedin, Mail } from 'lucide-react'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import Dither from '../components/Dither'

const RESUME_URL = 'https://drive.google.com/file/d/1WtMNZXYFlkrV2QE2-d37_CSmXZcTJn_T/view?usp=sharing'
const GITHUB_URL = 'https://github.com/ackberry'
const LINKEDIN_URL = 'https://linkedin.com/in/deep-akbari'
const EMAIL = 'ackberrie@gmail.com'

const ABOUT = [
  <>I&apos;m a junior at the <strong>University of South Florida</strong> studying Computer Science.</>,
  <>Apart from comp sci, I&apos;ve started journaling, which gives a lot of clarity and perspective on what I see every day. I&apos;ll probably start a substack soon.</>,
  <>There&apos;s a lot I want to say, do, and learn &mdash; and the list only gets longer the more I grow.</>,
]

const ASIDE = [
  { k: 'based in', v: 'Tampa, Florida' },
  { k: 'studying', v: 'Computer Science', small: 'USF, class of 2028' },
  { k: 'currently', v: 'AI Engineer Intern', small: 'FEDCON' },
]

const STATS = [
  { n: '3x', lab: 'hackathon wins' },
  { n: '11', lab: 'projects shipped' },
  { n: '1', lab: 'paper - ACM HRI 2026' },
]

const EXPERIENCES = [
  {
    company: 'FEDCON',
    link: 'https://federalgovernment.info',
    timeline: 'now',
    current: true,
    role: 'AI Engineer Intern',
    description:
      'Building a voice intelligence agent to train and onboard new advisors fast, plus a client-management API and DB. Shipped a full-stack internal platform that generates custom federal-contracting packages and quotes, with Redis-backed auth, an admin panel, and HubSpot integration through n8n workflows. Also built a campaign builder, drag-and-drop phase selection, and an internal Kanban sales system, shipping the core product in under 30 hours.',
  },
  {
    company: 'CacheAI',
    link: 'https://cacheai.us',
    timeline: "Jul '25 - Sep '25",
    role: 'Software Engineer Intern',
    description:
      'Built an LLM-based ranking and scoring system for a job-board platform. Deployed a Gemini API scoring pipeline to automatically rank 200+ users, and a Python pipeline that cleaned and processed data from 2,000+ U.S. engineering schools. Designed a weighted 60/40 scoring framework and validated it against real profiles.',
  },
  {
    company: 'RARE Lab',
    link: 'https://therarelab.com/people/deep-akbari/',
    timeline: "May '25 - Jul '25",
    role: 'ML Researcher & Software Developer - USF College of Engineering',
    description:
      'Worked on a low-cost, LLM-powered social robot later accepted to the ACM HRI 2026 Companion. Built a conversational robotics system on a Raspberry Pi running Linux, integrating Vosk for speech-to-text, Gemini for reasoning, and Piper for text-to-speech. Helped fine-tune Gemini 2.5 Flash and LLaMA2 for multimodal assistive tasks, improving task success rates by 35%.',
  },
]

const LEADERSHIP = [
  {
    organization: 'Google Developer Group',
    timeline: 'Apr 2025 - Dec 2025',
    role: 'Technical Lead - Tampa, FL',
    points: [
      'Built the backend for a hackathon website in JavaScript and Firebase, powering check-ins and registrations.',
      'Led data-scraping and Git workshops for the Data Science and Cybersecurity team.',
    ],
  },
  {
    organization: 'HackUSF',
    timeline: "Mar '25 - Apr '25",
    role: 'Hackathon Organizer',
    points: [
      'Coordinated logistics for a 300+ participant hackathon across venue ops, transport, and technical sessions.',
      'Managed a volunteer team and aligned sponsor, mentor, and university stakeholders for end-to-end execution.',
    ],
  },
]

const PROJECTS = [
  {
    name: 'Alleaf',
    award: 'Hacklytics 2026 - GaTech',
    cats: ['ai', 'hardware'],
    what: 'A wearable + AI platform for real-time mental-health support.',
    github: 'https://github.com/Gustavo-Galvao-e-Silva/Alleaf',
    highlights: [
      "Won best overall hack at Georgia Tech's Hacklytics for a haptic wearable that triggers bilateral stimulation.",
      'Built an end-to-end ML pipeline analyzing heart-rate variability to set personalized baselines, detect acute stress, and trigger custom hardware.',
      'Built a scalable AI memory and personalization layer with vector databases, ElevenLabs voice synthesis, and backend orchestration.',
    ],
    tech: ['Javascript', 'Python', 'Firestore', 'Actian VectorDB', 'ElevenLabs'],
  },
  {
    name: 'Aegis',
    award: 'Space Coast Hackathon 2026',
    cats: ['ai', 'fullstack', 'hardware'],
    what: 'Real-time space-weather intelligence for radiation-resilient edge compute.',
    github: 'https://github.com/Ackberry/Aegis',
    highlights: [
      'Won Best Overall in the Hardware Track for turning live space weather and device telemetry into actionable radiation risk for edge compute.',
      'Trained a LightGBM forecaster on GOES-18 and ACE/DSCOVR history across 120+ time steps for minute-resolved multi-horizon predictions.',
      'Built a Next.js 15 fleet dashboard polling an ESP32 gateway for live Geiger counts and chip wear, persisting snapshots into Postgres.',
    ],
    tech: ['Next.js', 'Python', 'Flask', 'LightGBM', 'Databricks', 'PostgreSQL', 'ESP32', 'tRPC'],
  },
  {
    name: 'Talkio',
    award: 'Swamphacks 2026 - UF',
    cats: ['ai', 'fullstack'],
    what: 'AI-powered sales conversation-intelligence platform.',
    github: 'https://github.com/Talkio2026/swamp-hacks',
    highlights: [
      'Won Best Use of DigitalOcean at UF for an AI sales conversation-intelligence platform.',
      'Built an LLM-driven transcript-analysis pipeline with MongoDB semantic search across client conversations.',
      'Created a multi-agent system with Gemini and ElevenLabs, self-hosting GPT-OSS-120B on DigitalOcean.',
    ],
    tech: ['React', 'Radix', 'Node', 'MongoDB', 'Openrouter'],
  },
  {
    name: 'Haraesume',
    cats: ['ai', 'tools'],
    what: 'Drop a resume (.tex) plus a job description, get a clean, tailored resume and CV.',
    github: 'https://github.com/ackberry/haraesume',
    highlights: [
      'Built a resume-optimizing platform in Go that generates ATS-ready resumes and CVs with built-in validation.',
      'Designed an AI agent system with LangChain and PostgreSQL + pgvector for optimization and retrieval.',
    ],
    tech: ['Go', 'LangChain', 'AuroraDB', 'Auth0'],
  },
  {
    name: 'Spotify MCP',
    cats: ['ai', 'tools'],
    what: 'An MCP server that lets LLM agents control Spotify through natural language.',
    github: 'https://github.com/ackberry/spotify_mcp',
    highlights: [
      'Built an MCP server exposing 5+ Spotify capabilities as structured tools for LLM agents via the Spotify Web API.',
      'Implemented OAuth 2.0 and token-refresh flows for secure, user-authorized access to real-time Spotify data.',
    ],
    tech: ['Typescript', 'Spotify API', 'MCP', 'OAuth'],
  },
  {
    name: 'Askabull',
    cats: ['ai', 'fullstack'],
    what: 'A full-stack RAG chatbot that answers questions from r/usf Reddit data.',
    github: 'https://github.com/ackberry/askabull',
    highlights: [
      "A bot that uses r/usf's Reddit data to answer your questions.",
      'Deployed an AI chatbot processing 1,000+ Reddit posts daily with ChromaDB embeddings and faster responses.',
      'Built a React/TypeScript and Node app serving concurrent users with sub-200ms API response times.',
    ],
    tech: ['Python', 'Typescript', 'Node', 'React', 'Supabase', 'Gemini API'],
  },
  {
    name: 'Cinetune',
    cats: ['fullstack'],
    what: 'A Spotify + Letterboxd mashup - log the movies and music you love.',
    github: 'https://github.com/ackberry/cinetune',
    highlights: [
      'A full-stack app combining Letterboxd and Spotify, the two apps I cannot live without.',
      'Built movie and music logging on Node.js, Express, and PostgreSQL with Spotify Web API and TMDb metadata sync.',
      'Added indexing and query optimization for fast search and filtering across 500+ titles.',
    ],
    tech: ['Javascript', 'Express.js', 'Node.js', 'Supabase'],
  },
  {
    name: 'Backtest Engine',
    cats: ['ai', 'tools'],
    what: 'A modular engine that runs trading algorithms over historical data to predict prices.',
    github: 'https://github.com/ackberry/backtestengine',
    highlights: [
      'Automated preprocessing reduced analysis time with normalization, missing-value treatment, and visualizations.',
      'Developed a modular backtesting engine in Python using Pandas and NumPy over 10,000+ historical rows.',
      'Designed an extensible architecture ready for live market APIs and real-time strategy validation.',
    ],
    tech: ['Python', 'Jupyter', 'AlphaVantage', 'YahooAPI'],
  },
  {
    name: 'Apocalorie',
    cats: ['fullstack', 'ai'],
    what: 'A smart calorie tracker that estimates intake by location and food availability.',
    highlights: [
      'Built a post-apocalyptic hackathon project for estimating calorie intake based on location and food availability.',
      'Processed 450,000+ FDA food entries and condensed the dataset to 3,000 key survival foods.',
      'Implemented React and Node.js with Google Gemini API and Mapbox for location-based visualization.',
    ],
    tech: ['Python', 'React', 'Node', 'Tailwind', 'Express', 'Gemini API'],
  },
  {
    name: 'Crypto News Bot',
    cats: ['tools'],
    what: 'A Telegram bot delivering real-time crypto prices and news.',
    github: 'https://github.com/ackberry/co1ncraze',
    highlights: [
      'Built an automatic bot using Python, CoinMarketCap, and Telegram API to deliver crypto market information.',
      'Created a modular command-handler design for start, news, and price flows.',
      'Served 20+ concurrent monthly users.',
    ],
    tech: ['Python', 'Linode', 'Firebase', 'CoinMarketCap API', 'Telegram API'],
  },
  {
    name: 'This Website',
    cats: ['fullstack'],
    what: 'A minimal pixel portfolio to showcase whatever I am building.',
    github: 'https://github.com/ackberry/portfolio',
    highlights: [
      'Built a portfolio to showcase work, experience, and personality in one place.',
      'React and Tailwind on the frontend.',
      'Next.js under the hood, with a cursor-reactive dithered background.',
    ],
    tech: ['React', 'Tailwind', 'Next.js'],
  },
]

const FILTERS = [
  { id: 'all', label: 'all' },
  { id: 'win', label: 'winners', win: true },
  { id: 'ai', label: 'ai / ml' },
  { id: 'fullstack', label: 'full-stack' },
  { id: 'tools', label: 'tools' },
  { id: 'hardware', label: 'hardware' },
]

type Project = (typeof PROJECTS)[number]

function TopBar() {
  return (
    <header className="px-nav">
      <div className="px-wrap px-nav-inner">
        <a className="px-brand" href="#top" aria-label="Home">deep<b>_</b></a>
        <nav className="px-nav-actions" aria-label="Primary navigation">
          <a className="px-icon" href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <SiGithub aria-hidden="true" />
          </a>
          <a className="px-icon" href={RESUME_URL} target="_blank" rel="noopener noreferrer" aria-label="Resume">
            <FileText aria-hidden="true" />
          </a>
          <a className="px-icon" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <SiLinkedin aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}

function SectionHead({ num, title, note }: { num: string; title: string; note: ReactNode }) {
  return (
    <div className="px-sec-head">
      <h2 className="px-sec-title"><span>{num}</span>{title}</h2>
      <p className="px-sec-note">{note}</p>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)
  return (
    <article className={`px-card ${open ? 'open' : ''}`}>
      <button className="px-card-head" type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <div className="px-card-title">
          <h3>{project.name}</h3>
          {project.award && <span className="px-badge">★ {project.award}</span>}
        </div>
        <p>{project.what}</p>
        <span className="px-card-toggle">{open ? '[ - ]' : '[ + ]'}</span>
      </button>
      {open && (
        <ul className="px-card-body">
          {project.highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>
      )}
      <div className="px-card-foot">
        <div className="px-tags">
          {project.tech.map((t) => <span key={t}>{t}</span>)}
        </div>
        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer">code <ArrowUpRight aria-hidden="true" /></a>
        ) : (
          <span className="px-muted">hackathon build</span>
        )}
      </div>
    </article>
  )
}

export default function HomePage() {
  const [filter, setFilter] = useState('all')
  const filteredProjects = useMemo(() => {
    if (filter === 'all') return PROJECTS
    if (filter === 'win') return PROJECTS.filter((p) => p.award)
    return PROJECTS.filter((p) => p.cats.includes(filter))
  }, [filter])

  return (
    <main className="px-site" id="top">
      <div className="px-bg" aria-hidden="true">
        <Dither enableMouseInteraction waveColor={[0.4, 0.4, 0.4]} mouseRadius={0.8} colorNum={4} pixelSize={2} />
      </div>

      <TopBar />

      <section className="px-hero">
        <div className="px-wrap">
          <p className="px-hero-kicker">{'// hello world'}</p>
          <h1 className="px-hero-name">DEEP<br />AKBARI<b>_</b></h1>
          <p className="px-hero-sub">
            incoming junior at usf and an ai engineer intern at fedcon. apart from work and school, i love
            making random projects to learn new tech and solve my own problems. i also love running, the nfl,
            gym, and billiards.
          </p>
          <div className="px-hero-actions">
            <a className="px-chip solid" href="#work">see the work</a>
            <a className="px-chip" href={`mailto:${EMAIL}`}><Mail aria-hidden="true" />say hi</a>
            <a className="px-chip" href={GITHUB_URL} target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" />github</a>
          </div>
          <ul className="px-stats">
            {STATS.map((s) => (
              <li key={s.lab}><strong>{s.n}</strong> {s.lab}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-band" id="about">
        <div className="px-wrap">
          <SectionHead num="01" title="about" note={<>the person behind the commits</>} />
          <div className="px-about">
            <div className="px-about-body">
              {ABOUT.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <aside className="px-id">
              {ASIDE.map((row) => (
                <div className="px-id-row" key={row.k}>
                  <span>{row.k}</span>
                  <p>{row.v}{row.small && <small>{row.small}</small>}</p>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      <section className="px-band" id="work">
        <div className="px-wrap">
          <SectionHead num="02" title="work" note={<>tap a card to crack it open</>} />
          <div className="px-filters">
            {FILTERS.map((item) => {
              const count = item.id === 'all'
                ? PROJECTS.length
                : item.win
                  ? PROJECTS.filter((p) => p.award).length
                  : PROJECTS.filter((p) => p.cats.includes(item.id)).length
              return (
                <button
                  key={item.id}
                  className={filter === item.id ? 'active' : ''}
                  type="button"
                  onClick={() => setFilter(item.id)}
                >
                  {item.label} [{count}]
                </button>
              )
            })}
          </div>
          <p className="px-meta">{'>'} showing {filteredProjects.length} of {PROJECTS.length} projects</p>
          <div className="px-grid">
            {filteredProjects.map((project) => <ProjectCard project={project} key={project.name} />)}
          </div>
        </div>
      </section>

      <section className="px-band" id="experience">
        <div className="px-wrap">
          <SectionHead num="03" title="experience" note={<>where I&apos;ve been putting in the reps</>} />
          <div className="px-timeline">
            {EXPERIENCES.map((exp) => (
              <details className={exp.current ? 'current' : undefined} open={exp.current} key={exp.company}>
                <summary>
                  <div className="px-tl-top">
                    <h3>{exp.company}</h3>
                    <span>{exp.timeline}</span>
                  </div>
                  <p className="px-tl-role">{exp.role}</p>
                </summary>
                <div className="px-tl-body">
                  <p>{exp.description}</p>
                  <a href={exp.link} target="_blank" rel="noopener noreferrer">visit <ArrowUpRight aria-hidden="true" /></a>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-band" id="leadership">
        <div className="px-wrap">
          <SectionHead num="04" title="off the keyboard" note={<>leading rooms, not just repos</>} />
          <div className="px-lead">
            {LEADERSHIP.map((item) => (
              <article key={item.organization}>
                <div className="px-tl-top">
                  <h3>{item.organization}</h3>
                  <span>{item.timeline}</span>
                </div>
                <p className="px-tl-role">{item.role}</p>
                <ul>
                  {item.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-footer" id="contact">
        <div className="px-wrap">
          <p className="px-hero-kicker">{'// say hello'}</p>
          <h2 className="px-foot-h">LET&apos;S BUILD<br />SOMETHING<b>_</b></h2>
          <a className="px-foot-mail" href={`mailto:${EMAIL}`}>{EMAIL} <ArrowUpRight aria-hidden="true" /></a>
          <div className="px-foot-socials">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" />github</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><Linkedin aria-hidden="true" />linkedin</a>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer"><FileText aria-hidden="true" />resume</a>
          </div>
          <div className="px-foot-bottom">
            <span>2026 deep akbari - built in tampa, fl</span>
            <span>go bills and pet the dog</span>
          </div>
        </div>
      </footer>
    </main>
  )
}

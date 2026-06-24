'use client'

import Image from 'next/image'
import type { ReactNode } from 'react'
import { useCallback, useMemo, useState } from 'react'
import {
  ArrowUpRight,
  ChevronDown,
  FileText,
  Github,
  Linkedin,
  Mail,
  Plus,
  Trophy,
} from 'lucide-react'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import Dither from '../components/Dither'

const RESUME_URL = 'https://drive.google.com/file/d/1WtMNZXYFlkrV2QE2-d37_CSmXZcTJn_T/view?usp=sharing'
const GITHUB_URL = 'https://github.com/ackberry'
const LINKEDIN_URL = 'https://linkedin.com/in/deep-akbari'
const EMAIL = 'ackberrie@gmail.com'

const PHOTOS = [
  { src: '/imgs/6.png', cap: <>aegis - <b>1st overall</b></>, w: 214, h: 158, x: 1, y: 8, rot: -5, z: 4 },
  { src: '/imgs/4.jpg', cap: <>the goat <b>- 11/10</b></>, w: 224, h: 156, x: 39, y: 38, rot: -2, z: 6 },
  { src: '/imgs/1.jpeg', cap: <>the florida crew</>, w: 198, h: 130, x: 77, y: 12, rot: -3, z: 3 },
  { src: '/imgs/5.jpeg', cap: <>alleaf - <b>1st overall</b></>, w: 202, h: 134, x: 20, y: 156, rot: 4, z: 5 },
  { src: '/imgs/3.jpg', cap: <>hard rock - go bills</>, w: 168, h: 200, x: 62, y: 118, rot: 5, z: 2 },
]

const MARQUEE = [
  'Python',
  'Next.js',
  'LLMs',
  'RAG',
  'PyTorch',
  'TypeScript',
  'Go',
  'ESP32',
  'Postgres',
  'LangChain',
  'MCP',
  'Flask',
  'React',
  'Robotics',
  'Hackathons',
  'Vector DBs',
  'n8n',
  'OAuth',
]

const ABOUT = [
  {
    lead: true,
    text: (
      <>
        I&apos;m a Junior at the <strong>University of South Florida</strong> studying Computer Science.
        
      </>
    ),
  },
  {
    text: (
      <>
        I want to start writing and sharing my thoughts. Apart from comp sci, I&apos;ve started journaling, which
        gives a lot of clarity and perspectives of what i see everyday. i&apos;ll probably start a substack soon.
        not only that i regularly come across random stuff that somehow is cool. Current rabbit hole:{' '}
        <a
          className="hl"
          href="https://youtu.be/3MU_6BPKmBg?si=vWfIDXbECljOZ5Gi"
          target="_blank"
          rel="noopener noreferrer"
        >
          mozart 2x and chinese bible
        </a>
        .
      </>
    ),
  },
  {
    text: <>There&apos;s a lot I want to say, do, and learn - and the list only gets longer the more I grow.</>,
  },
  { text: <hr style={{ width: '200px', border: 0, borderTop: '1px solid #19150f' }} /> },
{
  text: <><a className="hl">update june 10</a>: i had a lot of crap on my portfolio. cleaned it out</>
}
]

const ASIDE = [
  { k: 'based in', v: 'Tampa, Florida' },
  { k: 'studying', v: 'Computer Science', small: 'USF, class of 2028' },
  { k: 'currently at', v: 'AI Engineer Intern', small: 'FEDCON' },
]

const STATS = [
  { kind: 'feature', n: '3x', lab: 'hackathon wins' },
  { kind: 'stat', n: '11', lab: 'projects shipped' },
  { kind: 'stat', n: '1', lab: 'paper - ACM HRI 2026' },
  { kind: 'dog', n: '11/10', lab: 'the dog.', sub: 'objectively underrated' },
]

const EXPERIENCES = [
  {
    company: 'FEDCON',
    link: 'https://federalgovernment.info',
    timeline: 'current',
    current: true,
    role: 'AI Engineer Intern',
    description:
      'I am building a voice intelligence agent to train and onboard new advisors fast, plus a client-management API and DB so advisors can manage clients and access. I shipped a full-stack internal platform that generates custom federal-contracting packages and quotes, with Redis-backed auth, an admin panel, and HubSpot integration through n8n workflows. I also built a campaign builder, drag-and-drop phase selection, and an internal Kanban sales system, shipping the core product in under 30 hours.',
  },
  {
    company: 'CacheAI',
    link: 'https://cacheai.us',
    timeline: "Jul '25 - Sep '25",
    role: 'Software Engineer Intern',
    description:
      'Built an LLM-based ranking and scoring system for a job-board platform. Deployed a Gemini API scoring pipeline to automatically rank 200+ users, and a Python pipeline that cleaned and processed data from 2,000+ U.S. engineering schools. Designed a weighted 60/40 scoring framework and validated it against real profiles so the rankings reflected candidate quality.',
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
      'Managed a volunteer team and aligned sponsor, mentor, and university stakeholders for smooth end-to-end execution.',
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
    image: '/alleaf.png',
    highlights: [
      "Won best overall hack at Georgia Tech's Hacklytics for a haptic wearable that triggers bilateral stimulation.",
      'Implemented an end-to-end ML pipeline analyzing heart-rate variability to set personalized baselines, detect acute stress, and trigger custom hardware.',
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
    image: '/aegis.png',
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
    image: '/talkio.jpeg',
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
    image: '/haraesume.png',
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
    image: '/spotifymcp.png',
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
    image: '/askabull.png',
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
    what: 'A smart calorie tracker from HackUSF 2025 that estimates intake by location and food availability.',
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
    what: 'A warm portfolio to showcase whatever I am building.',
    github: 'https://github.com/ackberry/portfolio',
    highlights: [
      'Built a portfolio to showcase work, experience, and personality in one place.',
      'React and Tailwind on the frontend.',
      'Next.js under the hood.',
    ],
    tech: ['React', 'Tailwind', 'Next.js'],
  },
]

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'win', label: 'Winners', win: true },
  { id: 'ai', label: 'AI / ML' },
  { id: 'fullstack', label: 'Full-stack' },
  { id: 'tools', label: 'Tools' },
  { id: 'hardware', label: 'Hardware' },
]

type Project = (typeof PROJECTS)[number]
type DragState = { index: number; startX: number; startY: number; originX: number; originY: number } | null

function SectionHead({ num, title, note }: { num: string; title: string; note: ReactNode }) {
  return (
    <div className="portfolio-sec-head">
      <h2 className="portfolio-sec-title"><span>{num}</span>{title}</h2>
      <p className="portfolio-sec-note">{note}</p>
    </div>
  )
}

function TopBar() {
  return (
    <header className="portfolio-topbar">
      <div className="portfolio-wrap portfolio-topbar-inner">
        <a className="portfolio-brand" href="#top" aria-label="Home">deep<b>.</b></a>
        <nav className="portfolio-nav-actions" aria-label="Primary navigation">
          <a className="portfolio-icon-btn" href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <SiGithub aria-hidden="true" />
          </a>
          <a className="portfolio-icon-btn" href={RESUME_URL} target="_blank" rel="noopener noreferrer" aria-label="Resume">
            <FileText aria-hidden="true" />
          </a>
          <a className="portfolio-icon-btn" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <SiLinkedin aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}

function PhotoDesk() {
  const [positions, setPositions] = useState(() => PHOTOS.map((photo) => ({ x: photo.x, y: photo.y })))
  const [drag, setDrag] = useState<DragState>(null)
  const [topZ, setTopZ] = useState(10)

  const onPointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (!drag) return
    const desk = event.currentTarget
    const width = desk.clientWidth || 1
    const nextX = ((drag.originX / 100) * width + event.clientX - drag.startX) / width * 100
    const nextY = Math.max(-20, drag.originY + event.clientY - drag.startY)
    setPositions((current) => current.map((position, index) => (index === drag.index ? { x: nextX, y: nextY } : position)))
  }, [drag])

  return (
    <div
      className="portfolio-desk"
      onPointerMove={onPointerMove}
      onPointerUp={() => setDrag(null)}
      onPointerCancel={() => setDrag(null)}
    >
      <span className="portfolio-desk-hint">drag me around</span>
      {PHOTOS.map((photo, index) => (
        <div
          key={photo.src}
          className="portfolio-pola"
          style={{
            width: photo.w,
            left: `${positions[index].x}%`,
            top: positions[index].y,
            transform: `rotate(${photo.rot}deg)`,
            zIndex: drag?.index === index ? topZ : photo.z,
          }}
          onPointerDown={(event) => {
            if (window.matchMedia('(max-width: 720px)').matches) return
            const target = event.currentTarget
            target.setPointerCapture(event.pointerId)
            setTopZ((z) => z + 1)
            setDrag({
              index,
              startX: event.clientX,
              startY: event.clientY,
              originX: positions[index].x,
              originY: positions[index].y,
            })
          }}
        >
          <Image src={photo.src} alt="" width={photo.w * 2} height={photo.h * 2} draggable={false} style={{ height: photo.h }} />
          <div className="portfolio-pola-cap">{photo.cap}</div>
        </div>
      ))}
    </div>
  )
}

function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const [open, setOpen] = useState(false)
  const fallbackColors = ['portfolio-ph-dark', 'portfolio-ph-ember', 'portfolio-ph-green', 'portfolio-ph-paper']

  return (
    <article className={`portfolio-pcard ${project.award ? 'portfolio-win' : ''} ${open ? 'open' : ''}`}>
      <div className="portfolio-pc-media">
        {project.image ? (
          <Image src={project.image} alt={project.name} width={980} height={552} />
        ) : (
          <div className={`portfolio-pc-ph ${fallbackColors[index % fallbackColors.length]}`}>
            <span>no screenshot - peek the code</span>
            <strong>{project.name.charAt(0)}</strong>
          </div>
        )}
        {project.award && (
          <span className="portfolio-win-badge">
            <Trophy aria-hidden="true" />
            {project.award}
          </span>
        )}
      </div>
      <button className="portfolio-pc-top" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span className="portfolio-pc-idx">{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        <h3>{project.name}</h3>
        <p>{project.what}</p>
      </button>
      <div className="portfolio-pc-tags">
        {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
      </div>
      <div className="portfolio-pc-detail">
        <div>
          <ul>
            {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        </div>
      </div>
      <div className="portfolio-pc-foot">
        <button className="portfolio-pc-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
          <span><Plus aria-hidden="true" /></span>
          {open ? 'less' : 'the story'}
        </button>
        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github aria-hidden="true" />
            code
          </a>
        ) : (
          <span>hackathon build</span>
        )}
      </div>
    </article>
  )
}

export default function HomePage() {
  const [filter, setFilter] = useState('all')
  const filteredProjects = useMemo(() => {
    if (filter === 'all') return PROJECTS
    if (filter === 'win') return PROJECTS.filter((project) => project.award)
    return PROJECTS.filter((project) => project.cats.includes(filter))
  }, [filter])

  return (
    <main className="portfolio-site" id="top">
      <div className="portfolio-bg" aria-hidden="true">
        <Dither enableMouseInteraction={false} waveColor={[0.45, 0.45, 0.45]} />
      </div>
      <TopBar />

      <section className="portfolio-hero">
        <div className="portfolio-wrap">
          <h1 className="portfolio-hero-name">Hi, I&apos;m<br /><span>Deep<b>.</b></span></h1>
          <p className="portfolio-hero-sub">
            im currently an incoming junior at usf. i am also interning as an ai engineer at fedcon. apart from work 
            and school, i love making random projects to learn new technologies and solve my problems. i also love running, 
            the nfl, gym, billiards, and something else i can&apos;t remember rn
          </p>
          <div className="portfolio-hero-actions">
            <a className="portfolio-chip solid" href="#work"><ChevronDown aria-hidden="true" />see what I&apos;ve made</a>
            <a className="portfolio-chip" href={`mailto:${EMAIL}`}><Mail aria-hidden="true" />say hello</a>
            <a className="portfolio-chip" href={GITHUB_URL} target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" />github</a>
          </div>
          <PhotoDesk />
        </div>
      </section>

      <div className="portfolio-marquee" aria-hidden="true">
        <div>
          {[...MARQUEE, ...MARQUEE].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
        </div>
      </div>

      <section className="portfolio-band" id="about">
        <div className="portfolio-wrap">
          <SectionHead num="01" title="hi lol" note={<>a little about the person<br />behind the commits</>} />
          <div className="portfolio-about-grid">
            <div className="portfolio-about-body">
              {ABOUT.map((paragraph, index) => <p key={index} className={paragraph.lead ? 'lead' : undefined}>{paragraph.text}</p>)}
            </div>
            <aside className="portfolio-idcard">
              {ASIDE.map((row) => (
                <div className="portfolio-id-row" key={row.k}>
                  <div>{row.k}</div>
                  <p>{row.v}{row.small && <small>{row.small}</small>}</p>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      <section className="portfolio-stats" id="wins">
        <div className="portfolio-wrap">
          <div className="portfolio-tally">
            {STATS.map((stat) => (
              <div className={`portfolio-tally-${stat.kind}`} key={stat.lab}>
                <strong>{stat.n}</strong>
                <p><b>{stat.lab}</b>{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-band alt" id="work">
        <div className="portfolio-wrap">
          <SectionHead num="02" title="the work" note={<>filter it - tap a card<br />to crack it open</>} />
          <div className="portfolio-filters" aria-label="Project filters">
            {FILTERS.map((item) => {
              const count = item.id === 'all'
                ? PROJECTS.length
                : item.win
                  ? PROJECTS.filter((project) => project.award).length
                  : PROJECTS.filter((project) => project.cats.includes(item.id)).length
              return (
                <button
                  key={item.id}
                  className={`${filter === item.id ? 'active' : ''} ${item.win && filter === item.id ? 'win' : ''}`}
                  type="button"
                  onClick={() => setFilter(item.id)}
                >
                  {item.win && <Trophy aria-hidden="true" />}
                  {item.label} <span>{count}</span>
                </button>
              )
            })}
          </div>
          <p className="portfolio-work-meta">{'//'} showing {filteredProjects.length} of {PROJECTS.length} projects</p>
          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
              <ProjectCard project={project} index={PROJECTS.indexOf(project)} total={PROJECTS.length} key={project.name} />
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-band" id="experience">
        <div className="portfolio-wrap">
          <SectionHead num="03" title="the path" note={<>where I&apos;ve been<br />putting in the reps</>} />
          <div className="portfolio-reading">
            <div className="portfolio-timeline">
              {EXPERIENCES.map((experience, index) => (
                <details className={experience.current ? 'current' : undefined} open={index === 0} key={experience.company}>
                  <summary>
                    <span />
                    <div>
                      <div className="portfolio-tl-top">
                        <h3>{experience.company}</h3>
                        <p>{experience.current ? 'now' : experience.timeline}</p>
                      </div>
                      <p className="portfolio-tl-role">{experience.role}</p>
                    </div>
                  </summary>
                  <div className="portfolio-tl-body">
                    <p>{experience.description}</p>
                    <a href={experience.link} target="_blank" rel="noopener noreferrer">visit <ArrowUpRight aria-hidden="true" /></a>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-band leadership" id="leadership">
        <div className="portfolio-wrap">
          <SectionHead num="04" title="off the keyboard" note={<>leading rooms,<br />not just repos</>} />
          <div className="portfolio-lead-grid">
            {LEADERSHIP.map((item) => (
              <article key={item.organization}>
                <div>
                  <h3>{item.organization}</h3>
                  <p>{item.timeline}</p>
                </div>
                <p>{item.role}</p>
                <ul>
                  {item.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="portfolio-footer" id="contact">
        <div className="portfolio-wrap">
          <div className="portfolio-eyebrow"><span />still baffled by how far we&apos;ve come</div>
          <h2>Let&apos;s build<br />something<b>.</b></h2>
          <a className="portfolio-foot-mail" href={`mailto:${EMAIL}`}>
            {EMAIL}
            <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="portfolio-foot-socials">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" />github</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><Linkedin aria-hidden="true" />linkedin</a>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer"><FileText aria-hidden="true" />resume</a>
          </div>
          <div className="portfolio-foot-bottom">
            <span>2026 Deep Akbari - built in Tampa, FL</span>
            <span>go bills and pet the dog</span>
          </div>
        </div>
      </footer>
    </main>
  )
}

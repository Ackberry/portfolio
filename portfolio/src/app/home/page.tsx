'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import PageLayout from '../components/PageLayout'

const EXPERIENCES = [
  {
    company: 'FEDCON',
    link: 'https://federalgovernment.info',
    timeline: 'current',
    role: 'AI Engineer Intern',
    description:
      "Currently, I've been working on building a full-stack internal platform that helps consultants and clients generate custom federal contracting packages and quotes. I set up auth and UM using Redis, built an admin panel, and integrated everything with HubSpot through automated workflows (n8n) so that selected line items turn directly into draft quotes. I also developed a campaign builder interface, drag-and-drop phase selection, and an internal Kanban-style sales system, and managed to ship the core product in under 30 hours. A big focus was security and automation - hashing passwords, hiding credentials, and making sure submissions flow cleanly into CRM tools without manual work.",
  },
  {
    company: 'CacheAi',
    link: 'https://cacheai.us',
    timeline: "july '25 - sep '25",
    role: 'Software Engineer Intern',
    description:
      'At CacheAI, I worked on building an LLM-based ranking and scoring system for a job board platform. I deployed a user-scoring pipeline using the Gemini API to automatically rank 200+ users instead of doing it manually, and built a Python pipeline that cleaned and processed data from over 2,000 U.S. engineering schools. I designed a weighted 60/40 scoring framework and validated it against real profiles to make sure the rankings actually reflected candidate quality. It was a mix of data engineering and applied LLM work, where I focused on making the system deterministic, testable, and scalable.',
  },
  {
    company: 'Rare Lab (USF College of Engineering)',
    link: 'https://therarelab.com/people/deep-akbari/',
    timeline: "may '25 - july '25",
    role: 'ML Researcher & Software Developer',
    description:
      "At USF's RARE Lab, I worked on a low-cost LLM-powered social robot that was later accepted to the ACM HRI 2026 Companion. I built a conversational robotics system on a Raspberry Pi running Linux, integrating Vosk for speech-to-text, Gemini for reasoning, and Piper for text-to-speech. I also helped fine-tune Gemini 2.5 Flash and LLaMA2 for multimodal assistive tasks, which improved task success rates by 35%. It was hands-on research - wiring hardware, optimizing latency on constrained devices, and making LLMs actually usable in a real-world robotics setup.",
  },
]

const PROJECTS = [
  {
    name: '🏆 Talkio (Swamphacks 2026 Winner)',
    subtitle: 'AI-powered sales conversation intelligence platform',
    github: 'https://github.com/Talkio2026/swamp-hacks',
    image: '/talkio.jpeg',
    highlights: [
      'Won Best Use of DigitalOcean at UF for building an AI-powered sales conversation intelligence platform.',
      'Built an LLM-driven transcript analysis pipeline with MongoDB semantic search across client conversations.',
      'Created a multi-agent AI system with Gemini and ElevenLabs, hosted GPT-OSS-120B model on DigitalOcean.',
    ],
    tech: ['React', 'Radix', 'Node', 'MongoDB', 'Openrouter'],
  },
  {
    name: 'Haraesume',
    subtitle: 'Go, Langchain, AuroraDB, Auth0',
    github: 'https://github.com/ackberry/haraesume',
    image: '/haraesume.png',
    highlights: [
      'Created resume optimisng platform in Go to generate ATS-ready resumes and CVs with inner validation.',
      'Designed AI agent system using LangChain and PostgreSQL + pgvector for optimizing resumes and retrieval.',
    ],
    tech: ['Go', 'Langchain', 'AuroraDB', 'Auth0'],
  },
  {
    name: 'Spotify MCP',
    subtitle: 'MCP server enabling LLM agents to control Spotify through natural language',
    github: 'https://github.com/ackberry/spotify_mcp',
    image: '/spotifymcp.png',
    highlights: [
      'Built an MCP server exposing 5+ Spotify capabilities as structured tools for LLM agents via Spotify Web API.',
      'Implemented OAuth 2.0 and token refresh flows for secure, user-authorized access to real-time Spotify data.',
    ],
    tech: ['Typescript', 'Spotify API', 'MCP', 'OAuth'],
  },
  {
    name: 'Cinetune',
    subtitle: 'Spotify + Letterboxd clone',
    github: 'https://github.com/ackberry/cinetune',
    compact: true,
    highlights: [
      'A fullstack app that combines letterboxd and spotify (the apps i cannot live without).',
      'Built a full-stack movie and music logging platform with Node.js, Express, and PostgreSQL, integrating Spotify Web API and TMDb API for metadata sync. Added indexing and query optimization for fast search/filter across 500+ titles.',
      'Built Express.js backend with REST APIs and PostgreSQL integration, ensuring scalable data persistence and eliminating 100% of duplicate entries with FK constraints.',
      'Developed a responsive JavaScript frontend, optimized API calls for sub-200ms load times, and achieved 95%+ browser/device compatibility across 5 tested environments.',
    ],
    tech: ['Javascript', 'Express.js', 'Node.js', 'supabase'],
  },
  {
    name: 'Portfolio Website',
    subtitle: 'Clean and minimal portfolio website designed in React and Nextjs to showcase my portfolio',
    github: 'https://github.com/ackberry/portfolio',
    compact: true,
    highlights: [
      'Built a minimal portfolio website to showcase whatever I do.',
      'React + Tailwind frontend.',
      'Next.js backend.',
    ],
    tech: ['React', 'Tailwind'],
  },
  {
    name: 'Askabull',
    subtitle: 'Full stack RAG chatbot',
    github: 'https://github.com/ackberry/askabull',
    image: '/askabull.png',
    highlights: [
      "A bot that uses r/usf's reddit data to answer your queries.",
      'Architected and deployed an AI-powered chatbot system that processes 1,000+ Reddit posts daily, achieving 95% query accuracy through ChromaDB vector embeddings and reducing response time by 70%.',
      'Built a full-stack web application using a React/TypeScript frontend and Node.js backend, serving 50+ concurrent users with 96% uptime and sub-200ms API response times.',
      'Integrated Google Cloud AI Platform with a Python-based data pipeline to automate content scraping and embedding generation, improving data processing efficiency by 85% and scaling to handle 50K+ posts.',
    ],
    tech: ['Python', 'Typescript', 'Node', 'React', 'Supabase', 'Gemini API'],
  },
  {
    name: 'Backtest Stock Price Prediction Engine',
    subtitle: 'A program that uses existing trading algorithms and stock data to predict prices',
    github: 'https://github.com/ackberry/backtestengine',
    highlights: [
      'Automated data preprocessing pipeline reduced analysis time by 65%, handling normalization, missing value treatment, and visualizations.',
      'Developed a modular backtesting engine in Python using Pandas and NumPy to simulate trading strategies on over 10,000 rows of historical stock data, enabling reproducible performance testing.',
      'Designed an extensible architecture leveraging NumPy and modular functions, allowing future integration of live market APIs for real-time strategy validation.',
    ],
    tech: ['Python', 'Jupyter', 'AlphaVantage', 'YahooAPI'],
  },
  {
    name: 'Apocalorie (HackUSF 2025)',
    subtitle: 'Smart calorie tracker',
    highlights: [
      'A hackathon project targeting the post apocalyptic track where users can estimate calorie intake based on location and food availability.',
      'Developed a custom data scraper that processed over 450,000 FDA food entries, filtering and condensing the dataset to 3,000 key survival foods, improving database performance by over 99%.',
      'Implemented React and Node.js, integrating Google Gemini API for dynamic AI responses and Mapbox for location-based user visualization on a post-apocalyptic Earth model.',
      'Rapidly prototyped and iterated a production-ready calorie tracker in a 24 hour hackathon, emphasizing scalability, data efficiency, and UX.',
    ],
    tech: ['Python', 'React', 'Node', 'Tailwind', 'Express', 'Gemini API'],
  },
  {
    name: 'Crypto News Bot',
    subtitle: 'A telegram bot that delivers real time crypto prices and news',
    github: 'https://github.com/ackberry/co1ncraze',
    column: 1,
    highlights: [
      'Developed an automatic bot using Python, Coinmarketcap and Telegram API to deliver information about the current Crypto market to its users.',
      'Features modular design, with separate handlers for commands like /start, /news, and /price, making it easy to maintain and improve.',
      'Having 20+ concurrent users monthly.',
    ],
    tech: ['Python', 'Linode', 'Firebase', 'CoinMarketCap API', 'Telegram API'],
  },
]

export default function HomePage() {
  const projectColumns = [0, 1, 2].map((columnIndex) =>
    PROJECTS.filter((project, projectIndex) => (project.column ?? projectIndex % 3) === columnIndex)
  )

  return (
    <PageLayout>
      <section className={cn('w-full px-4 sm:px-6 lg:px-12')}>
        <div className="py-8 lg:py-12">
          <div className="relative lg:min-h-[420px]">
            <article className="max-w-3xl lg:ml-16 xl:ml-20">
              <div className="space-y-8 py-6 sm:py-8">
                <section className="space-y-4">
                  <h1 className="text-3xl font-bold text-white sm:text-4xl">
                    Deep Akbari
                  </h1>
                  <p className="text-base font-mono text-gray-300 sm:text-lg">
                    Software Engineer
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-blue-300">Introduction</h2>
                  <p className="max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base">
                    Hi, I&apos;m Deep Akbari, an aspiring software engineer. I&apos;m
                    passionate about building cool projects with AI, or any new technology that
                    interests me. Currently, I am working on a reddit query api.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-blue-300">About Me</h2>
                  <p className="max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base">
                    19 yo, computer science sophomore, going to university of south florida (on a
                    presidential scholarship yay). i&apos;ve been getting more into programming
                    recently and i do so by creating side projects to solve my daily problems :)
                  </p>
                </section>

              </div>
            </article>

            <aside className="mt-8 space-y-4 lg:absolute lg:right-0 lg:top-[5.9rem] lg:mt-0 lg:w-[620px]">
              <h2 className="font-mono text-xl font-bold text-white">experience</h2>
              <div className="space-y-4">
                {EXPERIENCES.map((experience) => (
                  <details
                    key={experience.company}
                    className="group rounded-md border border-white/10 px-3 py-2"
                  >
                    <summary className="cursor-pointer list-none">
                      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                        <div className="flex min-w-0 items-center gap-2 whitespace-nowrap">
                          <p className="font-mono text-sm text-white">{experience.company}</p>
                          <a
                            href={experience.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center gap-1 text-blue-300 hover:text-blue-200"
                          >
                            <span className="font-mono text-[11px]">open link</span>
                            <span className="font-mono text-[11px]">↗</span>
                          </a>
                        </div>
                        <p className="shrink-0 whitespace-nowrap font-mono text-[13px] tracking-wide text-gray-400">
                          {experience.timeline}
                        </p>
                      </div>
                      <p className="text-xs text-gray-400">{experience.role}</p>
                    </summary>
                    <p className="pt-3 text-xs leading-relaxed text-gray-300">
                      {experience.description}
                    </p>
                  </details>
                ))}
              </div>
            </aside>
          </div>

          <section className="mt-10 space-y-4 lg:mt-12 lg:px-16 xl:px-20">
            <h2 className="font-mono text-xl font-bold text-white">projects</h2>
            <div className="space-y-4 md:hidden">
              {PROJECTS.map((project) => (
                <div key={project.name} className="w-full rounded-md border border-white/10 px-3 py-2">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                    <p className="font-mono text-sm text-white">{project.name}</p>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-1 text-blue-300 hover:text-blue-200"
                      >
                        <span className="font-mono text-[11px]">github</span>
                        <span className="font-mono text-[11px]">↗</span>
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-gray-400">{project.subtitle}</p>
                  {project.image && (
                    <div className="pt-3">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={980}
                        height={560}
                        className="h-auto w-full rounded-md border border-white/10 object-cover"
                      />
                    </div>
                  )}
                  <ul className="ml-4 list-disc space-y-1 pt-3 text-xs leading-relaxed text-gray-300">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <p className="pt-3 font-mono text-xs text-gray-400">{project.tech.join(' · ')}</p>
                </div>
              ))}
            </div>
            <div className="hidden gap-4 md:grid md:grid-cols-3">
              {projectColumns.map((columnProjects, columnIndex) => (
                <div key={columnIndex} className="space-y-4">
                  {columnProjects.map((project) => (
                    <div key={project.name} className="w-full rounded-md border border-white/10 px-3 py-2">
                      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                        <p className="font-mono text-sm text-white">{project.name}</p>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center gap-1 text-blue-300 hover:text-blue-200"
                          >
                            <span className="font-mono text-[11px]">github</span>
                            <span className="font-mono text-[11px]">↗</span>
                          </a>
                        )}
                      </div>
                      <p className="text-xs text-gray-400">{project.subtitle}</p>
                      {project.image && (
                        <div className="pt-3">
                          <Image
                            src={project.image}
                            alt={project.name}
                            width={980}
                            height={560}
                            className="h-auto w-full rounded-md border border-white/10 object-cover"
                          />
                        </div>
                      )}
                      <ul className="ml-4 list-disc space-y-1 pt-3 text-xs leading-relaxed text-gray-300">
                        {project.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                      <p className="pt-3 font-mono text-xs text-gray-400">{project.tech.join(' · ')}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </PageLayout>
  )
}

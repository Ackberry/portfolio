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
      "I am working on creating a voice intelligence agent to train and onboard new advisors quickly. I also created a client management API + DB to help advisors manage their clients give rights. I've also built a full-stack internal platform that helps consultants and clients generate custom federal contracting packages and quotes. I set up auth and UM using Redis, built an admin panel, and integrated everything with HubSpot through automated workflows (n8n) so that selected line items turn directly into draft quotes. I also developed a campaign builder interface, drag-and-drop phase selection, and an internal Kanban-style sales system, and managed to ship the core product in under 30 hours. A big focus was security and automation - hashing passwords, hiding credentials, and making sure submissions flow cleanly into CRM tools without manual work.",
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

const LEADERSHIP = [
  {
    organization: 'Google Developer Group',
    timeline: 'Apr 2025 - Dec 2025',
    role: 'Technical Lead, Tampa, FL',
    descriptionPoints: [
      'Built backend for a hackathon website using JavaScript and Firebase, enabling check-ins and registrations.',
      'Led data scraping and Git workshops for the Data Science and Cybersecurity team.',
    ],
  },
  {
    organization: 'HackUSF',
    timeline: "march '25 - april '25",
    role: 'Hackathon Organizer',
    description:
      'Coordinated logistics for a 300+ participant hackathon across venue operations, transport, and technical sessions. Managed a volunteer team and aligned sponsor, mentor, and university stakeholders to ensure smooth execution end-to-end.',
  },
]

const PROJECTS = [
  {
    name: '🏆 Alleaf (Hacklytics 2026 at GaTech Winner',
    subtitle: 'A Wearable + AI Platform for Real-Time Mental Health Support',
    github: 'https://github.com/Gustavo-Galvao-e-Silva/Alleaf',
    image: '/alleaf.png',
    highlights: [
      "Won best overall hack (4x Macbook M4) at Georgia Tech's Hacklytics for building a haptic wearable that triggers bilateral stimulations.",
      "Implemented an end-to-end ML pipeline analyzing heart rate variability (RR intervals) to establish personalized baselines, detect acute stress events, and automatically trigger bilateral stimulation via custom hardware.",
      "Built a scalable AI memory and personalization layer using vector databases for long-term context retrieval, integrated with ElevenLabs voice synthesis and backend orchestration to enable natural, continuous, and adaptive therapy sessions."
    ],
    tech: ['Javascript', 'Python', 'Firestore', 'Actian VectorDB', 'Elevenlabs' ]
  },
  {
    name: '🏆 Talkio (Swamphacks 2026 at UF Winner)',
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
    subtitle: 'Drop resume(.tex) and job desc, get a clean, tailored resume + CV',
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

const INTRO_PHOTOS = [
  { src: '/imgs/1.jpeg', alt: 'Deep portrait 1' },
  { src: '/imgs/2.jpg', alt: 'Deep portrait 2' },
  { src: '/imgs/3.jpg', alt: 'Deep portrait 3' },
  { src: '/imgs/4.jpg', alt: 'Deep portrait 4' },
  { src: '/imgs/5.jpeg', alt: 'Deep portrait 5' },
]

export default function HomePage() {
  const projectColumns = [0, 1, 2].map((columnIndex) =>
    PROJECTS.filter((project, projectIndex) => (project.column ?? projectIndex % 3) === columnIndex)
  )

  return (
    <PageLayout>
      <section className={cn('w-full px-4 sm:px-6 lg:px-12')}>
        <div className="py-8 lg:py-12">
          {/* Photo gallery */}
          <div className="mx-auto mb-10 flex max-w-4xl items-end justify-center gap-3 px-4 sm:gap-4 lg:mb-14 lg:gap-5">
            {INTRO_PHOTOS.map((photo, index) => {
              const styles = [
                'h-[120px] w-[90px] sm:h-[160px] sm:w-[120px] lg:h-[220px] lg:w-[170px] -rotate-6 translate-y-2',
                'h-[130px] w-[100px] sm:h-[180px] sm:w-[135px] lg:h-[250px] lg:w-[190px] rotate-3 -translate-y-1',
                'h-[140px] w-[105px] sm:h-[190px] sm:w-[145px] lg:h-[270px] lg:w-[205px] -rotate-1 -translate-y-3',
                'h-[130px] w-[100px] sm:h-[180px] sm:w-[135px] lg:h-[250px] lg:w-[190px] rotate-4 translate-y-1',
                'h-[120px] w-[90px] sm:h-[160px] sm:w-[120px] lg:h-[220px] lg:w-[170px] -rotate-5 translate-y-3',
              ]
              return (
                <div
                  key={photo.src}
                  className={cn(
                    'overflow-hidden rounded-md shadow-md transition-transform duration-300 hover:rotate-0 hover:scale-105',
                    styles[index]
                  )}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={520}
                    height={680}
                    className="h-full w-full rounded object-cover"
                  />
                </div>
              )
            })}
          </div>

          {/* Centered intro text */}
          <article className="mx-auto max-w-3xl py-6 text-center sm:py-8">
            <div className="space-y-8">
              <section className="space-y-4">
                <div className="flex flex-wrap items-end justify-center gap-2">
                  <p className="font-serif text-[22px] font-bold leading-tight text-[#1A1A1A] sm:text-[28px] lg:text-[40px]">
                    I&apos;m Deep
                  </p>
                  <a
                    href="mailto:ackberrie@gmail.com"
                    className="pb-1 font-mono text-[10px] underline underline-offset-2 text-[#1A1A1A]"
                  >
                    email
                  </a>
                </div>
                <p className="mx-auto max-w-2xl font-serif text-[22px] font-normal leading-[1.28] text-[#1A1A1A] sm:text-[28px] lg:text-[40px]">
                  A sophomore at the University of South Florida studying Computer Science. You&apos;ll find everything you need at the bottom, but hear me out <br />
                  <br />
                  I&apos;ve recently started loving programming more, and instead of MrBeast or Twitch, I now enjoy watching works on AI and Engineering while eating (current interest: geopolicics)<br />
                  <br />
                 On a scale of 1-10, I love my family 10, my friends 10. But my dog? 11 (0 -&gt; 1 reference) She is the best thing in the world and will always be. I still am baffled to how far we&apos;ve come, and how much more I got to go. That makes me happy (and sad)
                  <br />
                  <br />
                  Apart from work and study, I enjoy billiards, football (American, Go Bills!), running and gym.
                  <br />
                  <br />
                  If I had absurd money, I would start a company to create robots for cooking (i don&apos;t like cooking :) Post retirement I am going to open a dog shelter where people can bring dogs (or cats maybe) but nobody can adopt them (unless they pass Palantir HRT Jane Street Interview w/ 27 rounds)
                 <br />
                 <br />
                 There&apos;s a lot I want to say, do, and learn — and the list only gets longer the more I grow. **
                </p>
              </section>
            </div>
          </article>

          <section className="mx-auto mt-10 max-w-4xl space-y-5 font-red-hat lg:mt-14">
            <h2 className="text-center font-red-hat text-xl font-bold text-[#1A1A1A]">Experience</h2>
            <div className="space-y-4">
              {EXPERIENCES.map((experience) => (
                <details
                  key={experience.company}
                  className="group rounded-lg border border-[#D6CFC4] bg-[#EDE7DC] px-5 py-4 transition-shadow duration-200 hover:shadow-md"
                >
                  <summary className="cursor-pointer list-none">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                      <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
                        <p className="break-words font-red-hat text-[15px] font-semibold text-[#1A1A1A]">{experience.company}</p>
                        <a
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex shrink-0 items-center gap-1 text-[#6B6560] underline underline-offset-2 hover:text-[#1A1A1A]"
                        >
                          <span className="font-red-hat text-[11px]">open link</span>
                          <span className="font-red-hat text-[11px]">↗</span>
                        </a>
                      </div>
                      <p className="shrink-0 font-red-hat text-[12px] tracking-wide text-[#6B6560] sm:text-[13px]">
                        {experience.timeline}
                      </p>
                    </div>
                    <p className="mt-1 text-[13px] text-[#6B6560]">{experience.role}</p>
                  </summary>
                  <p className="mt-3 border-t border-[#D6CFC4] pt-3 text-[13px] leading-relaxed text-[#1A1A1A]">
                    {experience.description}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="mx-auto mt-10 max-w-7xl space-y-5 font-red-hat lg:mt-14">
            <h2 className="text-center font-red-hat text-xl font-bold text-[#1A1A1A]">Projects</h2>
            <div className="space-y-4 md:hidden">
              {PROJECTS.map((project) => (
                <div key={project.name} className="w-full rounded-md border border-[#D6CFC4] bg-[#EDE7DC] px-3 py-2">
                  <div className="grid grid-cols-1 items-start gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-3">
                    <p className="break-words font-red-hat text-sm text-[#1A1A1A]">{project.name}</p>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-1 text-[#6B6560] underline underline-offset-2 hover:text-[#1A1A1A] sm:justify-self-end"
                      >
                        <span className="font-red-hat text-[11px]">github</span>
                        <span className="font-red-hat text-[11px]">↗</span>
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-[#6B6560]">{project.subtitle}</p>
                  {project.image && (
                    <div className="pt-3">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={980}
                        height={560}
                        className="h-auto w-full rounded-md border border-[#D6CFC4] object-cover"
                      />
                    </div>
                  )}
                  <ul className="ml-4 list-disc space-y-1 pt-3 text-xs leading-relaxed text-[#1A1A1A]">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <p className="pt-3 font-red-hat text-xs text-[#6B6560]">{project.tech.join(' · ')}</p>
                </div>
              ))}
            </div>
            <div className="hidden gap-4 md:grid md:grid-cols-2 xl:grid-cols-3">
              {projectColumns.map((columnProjects, columnIndex) => (
                <div key={columnIndex} className="space-y-4">
                  {columnProjects.map((project) => (
                    <div key={project.name} className="w-full rounded-md border border-[#D6CFC4] bg-[#EDE7DC] px-3 py-2">
                      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                        <p className="font-red-hat text-sm text-[#1A1A1A]">{project.name}</p>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center gap-1 text-[#6B6560] underline underline-offset-2 hover:text-[#1A1A1A]"
                          >
                            <span className="font-red-hat text-[11px]">github</span>
                            <span className="font-red-hat text-[11px]">↗</span>
                          </a>
                        )}
                      </div>
                      <p className="text-xs text-[#6B6560]">{project.subtitle}</p>
                      {project.image && (
                        <div className="pt-3">
                          <Image
                            src={project.image}
                            alt={project.name}
                            width={980}
                            height={560}
                            className="h-auto w-full rounded-md border border-[#D6CFC4] object-cover"
                          />
                        </div>
                      )}
                      <ul className="ml-4 list-disc space-y-1 pt-3 text-xs leading-relaxed text-[#1A1A1A]">
                        {project.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                      <p className="pt-3 font-red-hat text-xs text-[#6B6560]">{project.tech.join(' · ')}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto mt-10 max-w-4xl space-y-5 font-red-hat lg:mt-14">
            <h2 className="text-center font-red-hat text-xl font-bold text-[#1A1A1A]">Leadership</h2>
            <div className="space-y-4">
              {LEADERSHIP.map((item) => (
                <details key={item.organization} className="group rounded-lg border border-[#D6CFC4] bg-[#EDE7DC] px-5 py-4 transition-shadow duration-200 hover:shadow-md">
                  <summary className="cursor-pointer list-none">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                      <p className="break-words font-red-hat text-[15px] font-semibold text-[#1A1A1A]">{item.organization}</p>
                      <p className="shrink-0 font-red-hat text-[12px] tracking-wide text-[#6B6560] sm:text-[13px]">
                        {item.timeline}
                      </p>
                    </div>
                    <p className="mt-1 text-[13px] text-[#6B6560]">{item.role}</p>
                  </summary>
                  {item.descriptionPoints ? (
                    <ul className="ml-4 list-disc space-y-1 mt-3 border-t border-[#D6CFC4] pt-3 text-[13px] leading-relaxed text-[#1A1A1A]">
                      {item.descriptionPoints.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 border-t border-[#D6CFC4] pt-3 text-[13px] leading-relaxed text-[#1A1A1A]">{item.description}</p>
                  )}
                </details>
              ))}
            </div>
          </section>
        </div>
      </section>
    </PageLayout>
  )
}
